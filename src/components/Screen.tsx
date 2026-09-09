import styles from "./Screen.module.css";

const thumb = (url?: string) =>
  url && url.includes("cdn.sanity.io/images/") && !url.includes("?")
    ? url + "?w=800&q=70&auto=format"
    : url;

/**
 * A cinematic "screen" surface. If a real video `src` is provided it plays it
 * (muted, looping, inline); otherwise it renders an animated monochrome
 * placeholder so the layout is complete before any footage exists. Drop files
 * into /public/reels and pass `src` to go live.
 */
export default function Screen({
  tone = 0,
  label,
  src,
  poster,
  className,
  bars = true,
  vertical = false,
  fit = "cover",
  transparent = false,
}: {
  tone?: number;
  label?: string;
  src?: string;
  poster?: string;
  className?: string;
  bars?: boolean;
  /** Vertical 9:16 surface — orients the light sweep top-to-bottom. */
  vertical?: boolean;
  fit?: "cover" | "contain";
  transparent?: boolean;
}) {
  const fitClass = `${styles.video} ${fit === "contain" ? styles.contain : ""}`;
  return (
    <div
      className={`${styles.screen} ${vertical ? styles.vertical : ""} ${
        transparent ? styles.transparent : ""
      } ${className ?? ""}`}
      style={{ ["--tone" as string]: `${tone}deg` }}
    >
      {src ? (
        <video
          className={fitClass}
          src={src}
          poster={thumb(poster)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={fitClass} src={thumb(poster)} alt="" />
      ) : (
        <div className={styles.placeholder} aria-hidden="true">
          <span className={styles.sweep} />
          <span className={styles.scan} />
        </div>
      )}

      {bars && (
        <>
          <span className={`${styles.matte} ${styles.top}`} aria-hidden="true" />
          <span
            className={`${styles.matte} ${styles.bottom}`}
            aria-hidden="true"
          />
        </>
      )}

      {label && (
        <span className={styles.label} aria-hidden="true">
          {label}
        </span>
      )}
    </div>
  );
}
