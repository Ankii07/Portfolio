import { Suspense, useState, useEffect } from 'react';
import Developer from '../components/Developer2.jsx';
import Logo from '../components/Logo.jsx';
import Codestar from '../components/Codestar.jsx';
import Button from '../components/Button.jsx';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import CanvasLoader from '../components/Loading.jsx';
import Earth from '../sections/Earth.jsx';
import { PerspectiveCamera } from '@react-three/drei';
import { Float } from '@react-three/drei';
import Astronaut from './Astronaut.jsx';
import { useMediaQuery } from 'react-responsive';
const About = () => {
    const isDesktop = useMediaQuery({ minWidth: 1024});
  const [hasCopied, setHasCopied] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.1);

  const handleCopy = () => {
    navigator.clipboard.writeText('ankitue0007@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.01);
    }, 16); // ~60 FPS
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="c-space my-20 section" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className='absolute top-0 left-50 w-full h-full -z-10'>
              <Canvas >
                <Sparkles
                  count={5000}
                  size={10}
                  speed={0.1}
                  color="white"
                  scale={[20, 20, 20]}
                  position={[0, 0, 0]}
                  depthTest={false}
                  noise={0.5} // Adds natural randomness
                />
              </Canvas>
              {isDesktop && <Astronaut/>}
            </div>

        <div className="col-span-1 xl:row-span-3 shadow-xl shadow-sky-400/25 z-10">
          <div className="grid-container">
            {/* <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" /> */}
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center work-canvas">
              <Canvas>
                {/* Lights - no whitespace between them */}
                <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
                <directionalLight position={[-5, 3, 2]} intensity={3} color="#00aaff" />
                <directionalLight position={[0, -5, -5]} intensity={3} color="#ffaa00" />

                {/* Controls - directly after lights */}
                <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  makeDefault // Add this to ensure proper initialization
                  autoRotate
                  autoRotateSpeed={2.5}
                />

                {/* 3D Content wrapped in Suspense */}
                {/* <Suspense fallback={<CanvasLoader />}> */}
                <Float
                  speed={5} // Animation speed
                  rotationIntensity={5} // XYZ rotation intensity
                  floatIntensity={1} // Up/down float intensity
                >
                  <Developer
                    position={[0, -3, 0]} // Use full position array
                    scale={3.5}
                    animationName="idle"
                    rotation-y={Math.PI / 2}
                  />
                </Float>

                <Sparkles
                  count={300}
                  size={4}
                  speed={0.3}
                  color="white"
                  scale={[20, 20, 20]}
                  position={[0, 0, 0]}
                  depthTest={false}
                  noise={0.5} // Adds natural randomness
                />
                {/* </Suspense> */}
              </Canvas>
            </div>

            <div>
              <p className="grid-headtext">Hi, I am Ankit</p>
              <p className="grid-subtext">
                Skilled in frontend development, I’ve built responsive websites using modern frameworks.
                Through hands-on projects and continuous learning, I deliver clean, user-friendly web applications.
                Excited to grow my expertise in a professional environment.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 shadow-xl shadow-sky-400/25 z-10">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center work-canvas">
              <Canvas>
                {/* Lights - no whitespace between them */}
                <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                <directionalLight position={[-5, 3, 2]} intensity={1} color="#00aaff" />
                <directionalLight position={[0, -5, -5]} intensity={1} color="#ffaa00" />

                {/* Controls - directly after lights */}
                <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  makeDefault // Add this to ensure proper initialization
                  // autoRotate
                  // autoRotateSpeed={2.5}
                />

                {/* 3D Content wrapped in Suspense */}
                <Suspense fallback={<CanvasLoader />}>
              
                  <Float
                    speed={2} // Animation speed
                    rotationIntensity={1} // XYZ rotation intensity
                    floatIntensity={1} // Up/down float intensity
                  >
                    <Logo
                      position={[0, 0, 0]} // Use full position array
                      scale={0.5}

                      // rotation-y={Math.PI / 2}
                    />
                  </Float>

                  <Sparkles
                    count={300}
                    size={4}
                    speed={0.3}
                    color="violet"
                    scale={[20, 20, 20]}
                    position={[0, 0, 0]}
                    depthTest={false}
                    noise={0.5} // Adds natural randomness
                  />
                </Suspense>
              </Canvas>
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Skilled in C++, JavaScript, SQL, HTML, and CSS. Experienced in front-end development with React,
                Material-UI, Framer Motion, GSAP, and Email.js. Strong in Data Structures & Algorithms with 200+
                LeetCode problems solved.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4 shadow-xl shadow-sky-400/25 z-10">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center work-canvas">
              {/* <div className="w-[420] h-[420] flex justify-center items-center"> */}
              <Suspense fallback={null}>
                <Canvas>
                  {/* Camera Setup */}
                  <PerspectiveCamera
                    makeDefault
                    position={[0, 0, 15]} // Adjusted for better view
                    fov={45} // Natural field of view
                    near={0.1} // Close clipping plane
                    far={100} // Far clipping plane
                  />
                  {/* Lighting Setup */}
                  <directionalLight
                    position={[5, 10, 7]}
                    intensity={1.2}
                    color="#ffffff"
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                  />
                  <directionalLight position={[5, 5, 5]} intensity={3} castShadow />

                  <directionalLight position={[-3, 3, 2]} intensity={3} color="#00aaff" />
                  <pointLight
                    position={[2, 3, 0]}
                    intensity={0.8}
                    color="#ff6600"
                    distance={10} // Range
                    decay={2} // Falloff rate
                  />
                  <directionalLight position={[0, -5, -5]} intensity={3} color="#ffaa00" />
                  {/* Controls */}
                  <OrbitControls
                    enableZoom={false} // Allow zoom for better inspection
                    maxPolarAngle={Math.PI / 2}
                    autoRotate
                    autoRotateSpeed={2.5}
                  />
                  {/* Earth Model */}
                  <Earth
                    scale={1} // Adjusted scale
                    position={[0, 0, 0]}
                    rotation={[0.1, 0, 0]} // Slight tilt for better lighting
                  />
                  {/* Sparkles - Now properly visible */}
                  <Sparkles
                    count={300}
                    size={10}
                    speed={0.3}
                    color="#ffff00"
                    scale={[20, 20, 20]}
                    position={[0, 0, 0]}
                    depthTest={false}
                    noise={0.5} // Adds natural randomness
                  />
                </Canvas>
              </Suspense>
              {/* </div> */}
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Chandigarh, India and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 shadow-xl shadow-sky-400/25 z-10">
          <div className="grid-container ">
            <div className="rounded-3xl w-[199] sm:h-[326px] h-fit flex justify-center items-center work-canvas">
              <Canvas>
                {/* Lights - no whitespace between them */}
                <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
                <directionalLight position={[-5, 3, 2]} intensity={3} color="#00aaff" />
                <directionalLight position={[0, -5, -5]} intensity={3} color="#ffaa00" />

                {/* Controls - directly after lights */}
                <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  makeDefault // Add this to ensure proper initialization
                  // autoRotate
                  // autoRotateSpeed={1}
                />

                {/* 3D Content wrapped in Suspense */}
                <Suspense fallback={<CanvasLoader />}>
                  <Float
                    speed={2} // Animation speed
                    rotationIntensity={1} // XYZ rotation intensity
                    floatIntensity={1} // Up/down float intensity
                  >
                    <Codestar
                      position={[-1, 5, 0]} // Use full position array
                      scale={0.4}

                      // rotation-y={Math.PI / 2}
                    />
                  </Float>

                  <Sparkles
                    count={300}
                    size={4}
                    speed={0.3}
                    color="violet"
                    scale={[20, 20, 20]}
                    position={[0, 0, 0]}
                    depthTest={false}
                    noise={0.5} // Adds natural randomness
                  />
                </Suspense>
              </Canvas>
            </div>
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I am deeply passionate about problem-solving and software development, where I channel my creativity
                into building efficient and innovative solutions. Programming is not just a career for me—it's a
                continuous journey of learning, exploring cutting-edge technologies, and refining my technical expertise
                to tackle complex challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2 shadow-xl shadow-sky-400/25 z-10">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  ankitue0007@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
