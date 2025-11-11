import { Canvas } from "@react-three/fiber";
import { Particles } from "./particles";
import { useState, useEffect } from "react";

export const GL = ({ hovering }: { hovering: boolean }) => {
  // Device detection for performance optimization
  const [particleSize, setParticleSize] = useState(256);
  const [pixelRatio, setPixelRatio] = useState(1);
  const [frameloop, setFrameloop] = useState<"always" | "never">("always");

  useEffect(() => {
    // Detect device performance level
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    
    if (isMobile) {
      setParticleSize(96); // 9,216 particles (mobile) - further reduced
      setPixelRatio(1); // Force 1x on mobile for performance
    } else if (isTablet) {
      setParticleSize(128); // 16,384 particles (tablet)
      setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    } else if (isLowEnd) {
      setParticleSize(160); // 25,600 particles (low-end desktop)
      setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    } else {
      setParticleSize(192); // 36,864 particles (desktop) - reduced from 256
      setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap at 1.5x
    }

    // Pause animation when tab is not visible
    const handleVisibilityChange = () => {
      setFrameloop(document.hidden ? "never" : "always");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Optimized values for production
  const speed = 1.0;
  const noiseScale = 0.6;
  const noiseIntensity = 0.52;
  const timeScale = 1;
  const focus = 3.8;
  const aperture = 1.79;
  const pointSize = 10.0;
  const opacity = 0.8;
  const planeScale = 10.0;

  return (
    <div id="webgl">
      <Canvas
        dpr={pixelRatio}
        performance={{ min: 0.5 }}
        frameloop={frameloop}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
          alpha: false,
        }}
        camera={{
          position: [
            1.2629783123314589, 2.664606471394044, -1.8178993743288914,
          ],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
      >
        <color attach="background" args={["#0a1628"]} />
        <Particles
          speed={speed}
          aperture={aperture}
          focus={focus}
          size={particleSize}
          noiseScale={noiseScale}
          noiseIntensity={noiseIntensity}
          timeScale={timeScale}
          pointSize={pointSize}
          opacity={opacity}
          planeScale={planeScale}
          useManualTime={false}
          manualTime={0}
          introspect={hovering}
        />
      </Canvas>
    </div>
  );
};
