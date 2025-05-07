import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';

import Developer from '../components/Developer2.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20 z-10 section" id="work">
      <div className="w-full text-white-600 ">
        <p className="head-text">My Work Experience</p>

        <div className="work-container shadow-xl shadow-sky-400/25 ">
          <div className="work-canvas ">
            <Canvas>
              <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
              <directionalLight position={[-5, 3, 2]} intensity={3} color="#00aaff" />
              <directionalLight position={[0, -5, -5]} intensity={3} color="#ffaa00" />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
              <Sparkles
                count={500}
                size={5}
                speed={0.3}
                color="white"
                scale={[20, 20, 20]}
                position={[0, 0, 0]}
                depthTest={false}
                noise={0.5} // Adds natural randomness
              />
            </Canvas>
          </div>

          <div className="work-content shadow-xl shadow-sky-400/25 z-10 relative">
            

            <div className="sm:py-10 py-5 sm:px-5 px-2.5  z-10">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
