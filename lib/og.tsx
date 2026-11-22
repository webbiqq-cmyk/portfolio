import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph / Twitter card renderer. */
export function renderOg({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0d0e0f",
          backgroundImage: "radial-gradient(rgba(236,236,231,0.09) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          color: "#ecece7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 3, textTransform: "uppercase", color: "#9b9ea4" }}>
          <span style={{ color: "#f2a541", marginRight: 14 }}>●</span>
          {eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: title.length > 32 ? 64 : 80, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>{title}</div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#9b9ea4", lineHeight: 1.3, maxWidth: 980 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#9b9ea4" }}>
          <span>{site.name}</span>
          <span>hasanportfolio.com</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
