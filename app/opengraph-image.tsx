import { ImageResponse } from "next/og";

export const alt = "Ravi Mariani — Desenvolvedor de Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", flexDirection: "column", justifyContent: "space-between", overflow: "hidden", background: "#09090B", color: "#FAFAFA", padding: "68px 76px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", opacity: 0.35, backgroundImage: "linear-gradient(#27272A 1px, transparent 1px), linear-gradient(90deg, #27272A 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "linear-gradient(to bottom right, black, transparent 75%)" }} />
      <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 700, letterSpacing: "-2px" }}>RM<span style={{ color: "#3B82F6" }}>.</span></div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
        <span style={{ color: "#60A5FA", fontSize: 18, letterSpacing: "4px", marginBottom: 24 }}>DESENVOLVEDOR DE SOFTWARE</span>
        <span style={{ fontSize: 78, lineHeight: 1.02, letterSpacing: "-4px", fontWeight: 600 }}>Ravi Mariani<span style={{ color: "#3B82F6" }}>.</span></span>
        <span style={{ marginTop: 20, color: "#A1A1AA", fontSize: 35, lineHeight: 1.1, letterSpacing: "-1.5px" }}>Transformo ideias e problemas em soluções digitais.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#A1A1AA", fontSize: 18 }}><span>Ravi Mariani</span><span>Salvador, Bahia — Brasil</span></div>
    </div>,
    size,
  );
}
