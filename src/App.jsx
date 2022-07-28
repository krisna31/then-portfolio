import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import MyBox from "./atoms/MyBox";
import MyDodecahedron from "./atoms/MyDodecahedron";
import MyTorusKnot from "./atoms/MyTorusKnot";

const App = () => {
  return (
    <>
      {/* 
      HTML START HERE FEEL FREE TO EDIT
      
      DALAM REACT SEBENARNYA BISA DIPECAH2 JADI KOMPONEN (KAYAK MYBOX, YANG ADA DI DALAM ATOMS/ FOLDER) CUMAN AGAR MEMPERMUDAH ANDA BIAR PAHAM MENGEDITNYA SERTA COPY AND PASTE NYA JADI KUBUAT SEMUANYA DI SATU FILE INI HTML NYA
      */}

      <section className="container absolute z-10 transition-all min-w-full">
        <main className="flex flex-col justify-between items-center text-center min-w-full min-h-screen mb-44">
          <div className="bg-white p-4 backdrop-blur-sm w-1/2 mt-20 rounded-md bg-opacity-40 text-xl md:text-2xl md:p-8 md:mt-14">
            <h1 className="animate-bounce">Christian Then</h1>
            <br />
            <h1 className="animate-bounce">Student</h1>
          </div>
          <div className="bg-white p-4 backdrop-blur-sm w-3/4 mb-20 rounded-md bg-opacity-40">
            <h1 className="text-lg mb-2 md:text-2xl">About Me</h1>
            <p className="text-sm text-justify md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nam, magni laboriosam maiores nemo id possimus beatae dolorem incidunt itaque doloribus recusandae perferendis corporis ut eos quaerat rerum nesciunt delectus
              repudiandae quia atque?
            </p>
          </div>
        </main>
        <section className="flex flex-col justify-between items-center text-center w-full min-h-screen">
          <div className="bg-white p-4 backdrop-blur-sm w-3/4 rounded-md bg-opacity-40 md:p-8">
            <h1 className="text-2xl mb-5 md:text-2xl md:mb-9">Skills</h1>
            <ul className="flex gap-7 flex-wrap justify-evenly md:gap-10">
              <svg className="md:h-12 w-12" width="32px" height="32px" viewBox="-16 0 288 288" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
                <path
                  d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395 12.39 32.59 51.237 12.385 62.94 4.064 67.757.015 75.129.013 84.711 0 124.166.013 163.62 0 203.076c.002 4.724.991 8.909 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
                  fill="#5C8DBC"
                />
                <path
                  d="M128.182 143.509L2.988 215.593c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.269 34.015-19.64 68.075-39.198 102.105-58.817 4.217-2.44 7.333-5.544 9.386-9.252l-124.413-72.074"
                  fill="#1A4674"
                />
                <path d="M91.101 164.861c7.285 12.718 20.98 21.296 36.69 21.296 15.807 0 29.58-8.687 36.828-21.541l-36.437-21.107-37.081 21.352" fill="#1A4674" />
                <path d="M255.569 84.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263 71.55 124.413 72.074c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#1B598E" />
                <path d="M248.728 148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253 148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721" fill="#FFF" />
                <path
                  d="M164.619 164.616c-7.248 12.854-21.021 21.541-36.828 21.541-15.71 0-29.405-8.578-36.69-21.296a42.062 42.062 0 0 1-5.574-20.968c0-23.341 18.923-42.263 42.264-42.263 15.609 0 29.232 8.471 36.553 21.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876 0-84.875 38-84.875 84.874 0 15.378 4.091 29.799 11.241 42.238 14.646 25.48 42.137 42.637 73.634 42.637 31.555 0 59.089-17.226 73.714-42.781l-36.886-21.371"
                  fill="#FFF"
                />
              </svg>
              <svg className="md:h-12 w-12" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <title>file_type_c</title>
                <path
                  d="M10.676,15.973a10.052,10.052,0,0,0,1.175,5.151,5.446,5.446,0,0,0,6.306,2.408,4.284,4.284,0,0,0,3.09-3.6c.107-.6.109-.61.109-.61,1.737.251,4.537.658,6.274.906l-.11.44a11.256,11.256,0,0,1-2.7,5.39,9.439,9.439,0,0,1-5.366,2.688,14.61,14.61,0,0,1-8.277-.819A10.151,10.151,0,0,1,5.4,21.687a16.225,16.225,0,0,1,.019-11.45,10.538,10.538,0,0,1,8.963-7.054,13.353,13.353,0,0,1,6.666.555,9.571,9.571,0,0,1,6.167,6.9c.094.352.114.417.114.417-1.932.351-4.319.8-6.238,1.215-.362-1.915-1.265-3.428-3.2-3.9a5.263,5.263,0,0,0-6.616,3.57,10.49,10.49,0,0,0-.385,1.439A12.31,12.31,0,0,0,10.676,15.973Z"
                  style={{ fill: "#005f91" }}
                />
              </svg>
              <svg className="md:h-12 w-12" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <title>file_type_html</title>
                <polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style={{ fill: "#e44f26" }} />
                <polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style={{ fill: "#f1662a" }} />
                <polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" style={{ fill: "#ebebeb" }} />
                <polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" style={{ fill: "#ebebeb" }} />
                <polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" style={{ fill: "#ffffff" }} />
                <polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" style={{ fill: "#fff" }} />
              </svg>
              <svg className="md:h-12 w-12" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <title>file_type_css</title>
                <polygon points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201" style={{ fill: "#1572b6" }} />
                <polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style={{ fill: "#33a9dc" }} />
                <polygon points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191" style={{ fill: "#fff" }} />
                <polygon points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218" style={{ fill: "#ebebeb" }} />
                <polygon points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151" style={{ fill: "#fff" }} />
                <polygon points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935" style={{ fill: "#ebebeb" }} />
                <polygon points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191" style={{ fill: "#ebebeb" }} />
              </svg>
              <svg className="md:h-12 w-12" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect width="24" height="24" fill="#F1DC50" />
                  <path
                    stroke="#333"
                    strokeWidth="2"
                    d="M12,11 C12,15.749205 12,18.4158717 12,19 C12,19.8761925 11.4771235,21 10,21 C7.61461794,21 7.5,19 7.5,19 M20.7899648,13.51604 C20.1898831,12.5053467 19.3944074,12 18.4035378,12 C16.8563489,12 16,13 16,14 C16,15 16.5,16 18.5084196,16.5 C19.7864643,16.8181718 21,17.5 21,19 C21,20.5 19.6845401,21 18.5,21 C16.9861609,21 15.9861609,20.3333333 15.5,19"
                  />
                </g>
              </svg>
            </ul>
          </div>
        </section>
        <section className="flex flex-col justify-between items-center text-center w-full mb-48">
          <div className="bg-white p-4 backdrop-blur-sm w-3/4 mb-20 rounded-md bg-opacity-40 md:p-8">
            <h1 className="text-xl mb-5 md:text-2xl md:mb-9">Social Media</h1>
            <ul className="flex gap-7 flex-wrap justify-evenly md:gap-11 md:justify-center">
              <a href="#" target="_blank" rel="noreferrer">
                <img className="w-9 h-9 md:w-12 md:h-12" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/codepen.svg" alt="Link Codepen" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img className="w-9 h-9 md:w-12 md:h-12" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg" alt="Link discord" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img className="w-9 h-9 md:w-12 md:h-12" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/facebook.svg" alt="Link Facebook" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img className="w-9 h-9 md:w-12 md:h-12" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" alt="Link github" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img className="w-9 h-9 md:w-12 md:h-12" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg" alt="Link Instagram" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img className="w-9 h-9 md:w-12 md:h-12" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" alt="Link Linkedin" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img className="w-9 h-9 md:w-12 md:h-12" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/stackoverflow.svg" alt="Link Stackoverflow" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img className="w-9 h-9 md:w-12 md:h-12" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg" alt="Link twitter" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img className="w-9 h-9 md:w-12 md:h-12" src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/youtube.svg" alt="Link Youtube" />
              </a>
            </ul>
          </div>
        </section>
        <footer className="bg-slate-200 text-center">
          <p className="text-sm md:text-base lg:text-xl">Created With Hand, Then-ler</p>
        </footer>
      </section>

      {/* HTML END HERE FEEL FREE TO EDIT */}

      {/* AREA THREE JS  */}
      {ReactDOM.createPortal(
        <main className="fixed min-w-full h-full bg-gradient-to-r from-red-400 via-gray-300 to-blue-500">
          <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight args={[0xffffff, 1]} />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
              {/* <planeBufferGeometry args={[100, 100]} /> */}
              <meshBasicMaterial />
            </mesh>
            <MyBox position={[0, 0, 0]} args={[3, 3, 7]} rotate={0.01} />
            <MyBox position={[0, 8, 0]} args={[1, 1, 3]} rotate={0.008} />
            <MyBox position={[4, 4, 0]} args={[1, 1, 3]} rotate={0.003} />
            <MyBox position={[0, -8, 0]} args={[1, 1, 3]} rotate={0.004} />
            <MyBox position={[4, -4, 0]} args={[1, 1, 3]} rotate={0.005} />
            <MyBox position={[-4, -4, 0]} args={[1, 1, 3]} rotate={0.006} />
            <MyTorusKnot args={[2, 0.5, 100, 16, 2, 3]} speed={1} position={[4, 0, 25]} />
            <MyBox position={[-4, 0, 26]} args={[2, 2, 5]} rotate={0.006} />
            <MyDodecahedron speed={2} position={[-3, 0, 44]} args={[3, 5]} />
            <MyBox position={[8, -5, 50]} args={[10, 10, 10]} rotate={0.01} />
            <MyBox position={[-8, -12, 55]} args={[6, 6, 6]} rotate={0.01} />
            <OrbitControls />
          </Canvas>
        </main>,
        document.getElementById("my-canvas")
      )}
      {/* END OF AREA THREE JS */}
    </>
  );
};

export default App;
