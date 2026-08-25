import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "The Virtuose — Your Video Production Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The social share card, generated at build time rather than exported by hand,
 * so it always sits at the exact 1200×630 that Open Graph expects and always
 * matches the site's type. Fonts are committed to the repo so the build never
 * depends on the network.
 */
const loadFonts = () => ({
  fraunces: readFileSync(join(process.cwd(), "src/assets/Fraunces-Light.ttf")),
  mono: readFileSync(join(process.cwd(), "src/assets/GeistMono-Regular.ttf")),
});

const VOID = "#0a0a0b";
const BONE = "#f2efea";
const ASH = "#8b8b90";
const HAIR = "rgba(242,239,234,0.14)";

export default function OpengraphImage() {
  const { fraunces, mono } = loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: VOID,
          backgroundImage:
            "radial-gradient(1000px 600px at 22% 18%, #1c1c1f 0%, #0a0a0b 62%)",
          position: "relative",
        }}
      >
        {/* viewfinder frame */}
        <div
          style={{
            position: "absolute",
            top: 36,
            left: 36,
            right: 36,
            bottom: 36,
            border: `1px solid ${HAIR}`,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Mono",
              fontSize: 21,
              letterSpacing: 4,
              color: ASH,
            }}
          >
            FRENCH MADE · ANDORRA
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Mono",
              fontSize: 21,
              letterSpacing: 3,
              color: ASH,
            }}
          >
            00:00:00:00
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Fraunces",
              fontSize: 92,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: BONE,
              maxWidth: 900,
            }}
          >
            Video that makes brands look inevitable.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Fraunces",
                fontSize: 40,
                color: BONE,
              }}
            >
              The Virtuose
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Mono",
                fontSize: 20,
                letterSpacing: 3,
                color: ASH,
                marginTop: 8,
              }}
            >
              YOUR VIDEO PRODUCTION PARTNER
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Mono",
              fontSize: 20,
              letterSpacing: 2,
              color: ASH,
            }}
          >
            the-virtuose.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 300 },
        { name: "Mono", data: mono, style: "normal", weight: 400 },
      ],
    }
  );
}
