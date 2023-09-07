import React, { useEffect, useRef } from "react";
import { CanvasWrapper } from "./style";

export default function Canvas() {
  const canvaseRef = useRef(null);
  const wrapRef = useRef(null);
  let canvasHeight;
  let canvasWidth;
  let ctx;

  useEffect(() => {
    const cavas = initCanvas();
    canvasWidth = cavas.width;
    canvasHeight = cavas.height;
    ctx = cavas.getContext("2d");
  });
  //获取窗口的大小
  const initCanvas = () => {
    const wrap = wrapRef.current;
    const canvas = canvaseRef.current;
    canvas.width = wrap.clientWidth;
    canvas.height = wrap.clientHeight;
    return canvas;
  };
  return (
    <CanvasWrapper>
      <div className="container" ref={wrapRef}>
        <canvas ref={canvaseRef}></canvas>
      </div>
    </CanvasWrapper>
  );
}
