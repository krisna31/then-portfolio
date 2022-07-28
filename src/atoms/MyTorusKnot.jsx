import { useSpring, animated } from "@react-spring/three";
import { MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

function MyTorusKnot({ args, speed, position }) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });
  return (
    <animated.mesh
      position={position}
      ref={mesh}
      onClick={() => {
        setExpand(!expand);
      }}
      scale={props.scale}
      castShadow
    >
      <torusKnotGeometry args={args} />
      <meshNormalMaterial speed={speed} factor={0.6} />
    </animated.mesh>
  );
}

export default MyTorusKnot;
