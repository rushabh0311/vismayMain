"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
};

export default function ModelViewer({ modelPath = "/model.glb" }) {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} />
        <Suspense fallback={null}>
          <Model modelPath={modelPath} />
          <Environment preset="sunset" />
          <OrbitControls enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}
