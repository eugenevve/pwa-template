import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p style={{ color: "white", fontSize: 28 }}>404</p>
      <p style={{ color: "gray", fontSize: 18 }}>Not Found</p>
    </div>
  );
}
