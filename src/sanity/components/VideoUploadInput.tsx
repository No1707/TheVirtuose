"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { set, unset, useClient, type ObjectInputProps } from "sanity";
import { Button, Card, Flex, Stack, Text } from "@sanity/ui";
import { apiVersion } from "../env";

interface VideoValue {
  _type?: string;
  url?: string;
  posterUrl?: string;
  width?: number;
  height?: number;
  duration?: number;
  originalFilename?: string;
}

/** Reads real dimensions + duration straight from the file. */
function probe(file: File): Promise<{
  width: number;
  height: number;
  duration: number;
  el: HTMLVideoElement;
  objectUrl: string;
}> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const el = document.createElement("video");
    el.preload = "metadata";
    el.muted = true;
    el.src = objectUrl;
    el.onloadedmetadata = () =>
      resolve({
        width: el.videoWidth,
        height: el.videoHeight,
        duration: el.duration,
        el,
        objectUrl,
      });
    el.onerror = () => reject(new Error("Could not read that video file."));
  });
}

/** Grabs a frame to use as the poster image, so nothing shows black. */
function grabPoster(
  el: HTMLVideoElement,
  duration: number
): Promise<Blob | null> {
  return new Promise((resolve) => {
    el.currentTime = Math.min(1, Math.max(0.1, duration / 2));
    el.onseeked = () => {
      const canvas = document.createElement("canvas");
      canvas.width = el.videoWidth;
      canvas.height = el.videoHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return resolve(null);
      ctx.drawImage(el, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((b) => resolve(b), "image/jpeg", 0.82);
    };
    el.onerror = () => resolve(null);
  });
}

function waitForValue(
  ref: { current: VideoValue | undefined },
  url: string,
  timeout = 4000
): Promise<boolean> {
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const tick = () => {
      if (ref.current?.url === url) return resolve(true);
      if (Date.now() - startedAt > timeout) return resolve(false);
      setTimeout(tick, 120);
    };
    tick();
  });
}

/**
 * Drag a video in and everything else is worked out automatically: the file is
 * stored on Sanity's CDN, its real orientation and runtime are read from the
 * file, and a poster frame is captured and uploaded alongside it.
 *
 * Uploads use the editor's own authenticated Sanity session, so there is no
 * separate upload key and no public upload endpoint to protect.
 */
export function VideoUploadInput(props: ObjectInputProps) {
  const { value, onChange, readOnly } = props;
  const v = value as VideoValue | undefined;
  const client = useClient({ apiVersion });
  const fileRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const valueRef = useRef<VideoValue | undefined>(v);
  useEffect(() => {
    valueRef.current = v;
  }, [v]);

  const handleFile = useCallback(
    async (file: File) => {
      setError("");
      try {
        setStatus("Reading the file…");
        const { width, height, duration, el, objectUrl } = await probe(file);

        setStatus("Making a poster frame…");
        const poster = await grabPoster(el, duration);

        setStatus("Uploading the video…");
        const videoAsset = await client.assets.upload("file", file, {
          filename: file.name,
        });

        let posterUrl: string | undefined;
        if (poster) {
          setStatus("Uploading the poster…");
          const posterAsset = await client.assets.upload("image", poster, {
            filename: file.name.replace(/\.[^.]+$/, "") + ".jpg",
          });
          posterUrl = posterAsset.url;
        }

        URL.revokeObjectURL(objectUrl);

        setStatus("Saving…");
        onChange(
          set({
            _type: "videoAsset",
            url: videoAsset.url,
            posterUrl,
            width,
            height,
            duration: Math.round(duration * 100) / 100,
            originalFilename: file.name,
          })
        );

        if (!(await waitForValue(valueRef, videoAsset.url))) {
          setError(
            "The file uploaded, but the document refused the change and nothing was saved. " +
              "This normally means the document is open read-only — check that the perspective " +
              "selector at the top says “Drafts” rather than “Published”, and that you are not " +
              "viewing an older revision, then add the video again."
          );
        }
        setStatus("");
      } catch (e) {
        setError(e instanceof Error ? e.message : "Upload failed.");
        setStatus("");
      }
    },
    [client, onChange]
  );

  const isVertical = !!(v?.width && v?.height && v.height > v.width);

  return (
    <Stack space={3}>
      {v?.url ? (
        <Card padding={3} border radius={2}>
          <Flex gap={3} align="center">
            {v.posterUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={v.posterUrl}
                alt=""
                style={{
                  width: isVertical ? 54 : 96,
                  height: 72,
                  objectFit: "cover",
                  borderRadius: 3,
                }}
              />
            )}
            <Stack space={2} flex={1}>
              <Text size={1} weight="semibold">
                {v.originalFilename || "Video"}
              </Text>
              <Text size={1} muted>
                {v.width}×{v.height} ·{" "}
                {isVertical ? "Vertical 9:16" : "Landscape"}
                {v.duration ? ` · ${Math.round(v.duration)}s` : ""}
              </Text>
            </Stack>
            <Button
              mode="ghost"
              tone="critical"
              text="Remove"
              disabled={!!readOnly}
              onClick={() => onChange(unset())}
            />
          </Flex>
        </Card>
      ) : (
        <Button
          mode="ghost"
          text={status || "Choose a video file"}
          disabled={!!status || !!readOnly}
          onClick={() => fileRef.current?.click()}
        />
      )}

      {readOnly && (
        <Card padding={3} radius={2} tone="caution">
          <Text size={1}>
            This document is read-only, so a video cannot be added. Set the
            perspective selector at the top to “Drafts” — “Published” is a
            view-only mode.
          </Text>
        </Card>
      )}

      <input
        ref={fileRef}
        type="file"
        accept="video/*"
        hidden
        onChange={(e) => {
          const f = e.currentTarget.files?.[0];
          if (f) handleFile(f);
          e.currentTarget.value = "";
        }}
      />

      {status && (
        <Text size={1} muted>
          {status}
        </Text>
      )}
      {error && (
        <Card padding={3} radius={2} tone="critical">
          <Text size={1}>{error}</Text>
        </Card>
      )}
    </Stack>
  );
}
