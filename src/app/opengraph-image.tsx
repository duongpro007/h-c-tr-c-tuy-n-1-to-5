import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #EFF6FF 0%, #FEF3C7 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            borderRadius: 36,
            background: "#EC4899",
            marginBottom: 36,
          }}
        >
          <div style={{ color: "white", fontSize: 80, fontWeight: 800 }}>H</div>
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800, color: "#2563EB" }}>
          Học Mà Chơi,
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800, color: "#EC4899" }}>
          Chơi Mà Học
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#475569", marginTop: 24 }}>
          Nền tảng học trực tuyến Tiểu học lớp 1 - lớp 5
        </div>
      </div>
    ),
    { ...size }
  );
}
