// components/ChestModel.js
import React from "react";
import { useGLTF } from "@react-three/drei";

const ChestModel = () => {
  const { scene } = useGLTF("/models/chest.glb"); // Adjust the path to your model
  return <primitive object={scene} scale={1.5} />;
};

export default ChestModel;
