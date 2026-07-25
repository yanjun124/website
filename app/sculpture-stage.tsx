"use client";

import { useRef, useState } from "react";

export function SculptureStage({ form, title, index }: { form: string; title: string; index: number }) {
  const [rotation, setRotation] = useState({ x: -12, y: index * 24 - 18 });
  const [scale, setScale] = useState(1);
  const drag = useRef<{ x: number; y: number; rx: number; ry: number } | null>(null);

  return (
    <div
      className={`stage stage-${form}`}
      role="img"
      aria-label={`${title}，可拖拽旋转的三维作品模型`}
      tabIndex={0}
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        drag.current = { x: e.clientX, y: e.clientY, rx: rotation.x, ry: rotation.y };
      }}
      onPointerMove={(e) => {
        if (!drag.current) return;
        setRotation({
          x: Math.max(-75, Math.min(75, drag.current.rx - (e.clientY - drag.current.y) * 0.45)),
          y: drag.current.ry + (e.clientX - drag.current.x) * 0.55,
        });
      }}
      onPointerUp={() => (drag.current = null)}
      onPointerCancel={() => (drag.current = null)}
      onWheel={(e) => {
        e.preventDefault();
        setScale((s) => Math.max(0.72, Math.min(1.35, s - e.deltaY * 0.001)));
      }}
      onDoubleClick={() => {
        setRotation({ x: -12, y: index * 24 - 18 });
        setScale(1);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setRotation((r) => ({ ...r, y: r.y - 12 }));
        if (e.key === "ArrowRight") setRotation((r) => ({ ...r, y: r.y + 12 }));
        if (e.key === "ArrowUp") setRotation((r) => ({ ...r, x: r.x - 8 }));
        if (e.key === "ArrowDown") setRotation((r) => ({ ...r, x: r.x + 8 }));
      }}
    >
      <div className="stage-grid" />
      <div className="model-shadow" />
      <div
        className="model"
        style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})` }}
      >
        <i className="part p1" /><i className="part p2" /><i className="part p3" />
        <i className="part p4" /><i className="part p5" /><i className="part p6" />
      </div>
      <span className="drag-hint">↔ DRAG TO ROTATE</span>
      <span className="model-count">MODEL / {String(index + 1).padStart(2, "0")}</span>
    </div>
  );
}
