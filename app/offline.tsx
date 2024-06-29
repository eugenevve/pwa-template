import OfflineAlert from "@/components/OffileAlert";

export default function Offline() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#ffffff2b",
        backdropFilter: "blur(10px)",
      }}
    >
      <OfflineAlert />
    </div>
  );
}
