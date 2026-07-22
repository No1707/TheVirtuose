import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "var(--gutter)",
      }}
    >
      <div style={{ display: "grid", gap: "1.5rem", justifyItems: "center" }}>
        <span className="label">Error · 404</span>
        <h1
          className="display"
          style={{ fontSize: "var(--display)", color: "var(--bone)" }}
        >
          Dead frame.
        </h1>
        <p style={{ color: "var(--ash)", maxWidth: "32ch" }}>
          This cut doesn&rsquo;t exist — or it never made the final edit.
        </p>
        <Link
          href="/"
          className="mono"
          style={{
            marginTop: "0.5rem",
            padding: "0.9rem 1.6rem",
            border: "1px solid var(--hair-strong)",
            borderRadius: "100px",
            fontSize: "var(--step--1)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
          data-cursor="link"
        >
          ← Back to top
        </Link>
      </div>
    </main>
  );
}
