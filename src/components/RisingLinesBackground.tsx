import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

export default function RisingLinesBackground() {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!containerRef.current) return;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;

    gl.clearColor(0, 0, 0, 0);

    containerRef.current.appendChild(gl.canvas);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: `
        attribute vec2 uv;
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 0, 1);
        }
      `,
      fragment: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;

        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        void main() {

          float y = fract(vUv.y + uTime * 0.2);

          float line = smoothstep(0.0, 0.02, y) * smoothstep(0.05, 0.02, y);

          float glow = line * 0.6;

          vec3 color = vec3(0.15, 0.45, 0.85) * glow;

          gl_FragColor = vec4(color, glow);
        }
      `,
      uniforms: {
        uTime: { value: 0 }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {

      if (!containerRef.current) return;

      renderer.setSize(
        containerRef.current.offsetWidth,
        containerRef.current.offsetHeight
      );
    }

    window.addEventListener("resize", resize);

    resize();

    let time = 0;

    function update() {

      time += 0.01;

      program.uniforms.uTime.value = time;

      renderer.render({ scene: mesh });

      requestAnimationFrame(update);
    }

    update();

    return () => {
      window.removeEventListener("resize", resize);
    };

  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10"
    />
  );
}