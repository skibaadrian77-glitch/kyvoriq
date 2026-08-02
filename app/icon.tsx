import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          color: "#ffffff",
          border: "1px solid rgba(255,255,255,0.2)",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.08em",
        }}
      >
        K
      </div>
    ),
    {
      ...size,
    },
  );
}