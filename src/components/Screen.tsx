import styles from "./Screen.module.css";

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
}: {
  tone?: number;
  label?: string;
  src?: string;
  poster?: string;
  className?: string;
  bars?: boolean;
}) {
  return (
    <div
      className={`${styles.screen} ${className ?? ""}`}
      style={{ ["--tone" as string]: `${tone}deg` }}
    >
      {src ? (
        <video
          className={styles.video}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
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
