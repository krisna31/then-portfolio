import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <>
      <header className="absolute z-10">
        <h1>HI World</h1>
      </header>
      {ReactDOM.createPortal(
        <main className="fixed min-w-full h-full bg-sky-400">
          <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight args={[0xffffff, 1]} />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
              <planeBufferGeometry args={[100, 100]} />
              <meshBasicMaterial />
            </mesh>
            <MyBox />
            {/* <OrbitControls /> */}
          </Canvas>
        </main>,
        document.getElementById("my-canvas")
      )}
    </>
  );
};

export default App;

const MyBox = () => {
  const boxRef = useRef();
  const state = useThree();
  useEffect(() => {
    const executeWhileScroll = (e) => {
      const scrollY = document.body.getBoundingClientRect().top;
      state.camera.rotation.x = scrollY * -0.0015;
      state.camera.position.z = 10 + scrollY * -0.05;
      console.log("🚀 ~ file: App.jsx ~ line 37 ~ executeWhileScroll ~ position", state.camera.position);
    };
    window.addEventListener("scroll", executeWhileScroll);
    return () => window.removeEventListener("click", executeWhileScroll);
  }, [state.camera.position, state.camera.rotation]);

  useFrame(({ camera }) => {
    boxRef.current.rotation.x = boxRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[5, 5, 8]} />
      <meshNormalMaterial />
    </mesh>
  );
};
