"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setVisible(true);
    setProgress(0);
    const t1 = setTimeout(() => setProgress(60), 50);
    const t2 = setTimeout(() => setProgress(85), 300);
    const t3 = setTimeout(() => setProgress(100), 600);
    const t4 = setTimeout(() => setVisible(false), 900);
    return () => [t1,t2,t3,t4].forEach(clearTimeout);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
      height: "3px", background: "transparent", pointerEvents: "none",
    }}>
      <div style={{
        height: "100%", background: "#F97316",
        width: `${progress}%`,
        transition: progress === 0 ? "none" : "width 0.3s ease",
        boxShadow: "0 0 8px rgba(249,115,22,0.6)",
      }} />
    </div>
  );
}
