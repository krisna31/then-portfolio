import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const MyBox = ({ position, args, rotate }) => {
  const boxRef = useRef();
  const state = useThree();
  useEffect(() => {
    const executeWhileScroll = (e) => {
      const scrollY = document.body.getBoundingClientRect().top;
      state.camera.rotation.x = scrollY * -0.0015;
      state.camera.position.z = 10 + scrollY * -0.05;
    };
    window.addEventListener("scroll", executeWhileScroll);
    return () => window.removeEventListener("click", executeWhileScroll);
  }, [state.camera.position, state.camera.rotation]);
  useFrame(({ camera }) => {
    boxRef.current.rotation.x = boxRef.current.rotation.y += rotate;
  });
  return (
    <mesh ref={boxRef} position={position}>
      <boxGeometry args={args} />
      <meshNormalMaterial vertexColors />
    </mesh>
  );
};

export default MyBox;
