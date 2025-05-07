import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';
import * as THREE from 'three'; // <-- Add this line

const Model = () => {
  const groupRef = useRef();
  const [model, setModel] = useState(null);
  const [index, setIndex] = useState(0);
  const mixerRef = useRef();
  const { camera } = useThree();

  // Initialize camera position
  useEffect(() => {
    camera.position.z = 33;
    camera.fov = 10;
    camera.updateProjectionMatrix();
  }, [camera]);

  // Load the model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/models/animations/walking_astronaut.glb',
      (gltf) => {
        setModel(gltf.scene);
        mixerRef.current = new THREE.AnimationMixer(gltf.scene);
        console.log(gltf.animations[2]);
        mixerRef.current.clipAction(gltf.animations[index]).play();
      },
      undefined,
      (error) => console.error('Error loading model:', error)
    );
  }, [index]);

  // Animation loop
  useFrame((state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  // Handle scroll and resize events
  useEffect(() => {
    const arrPositionModel = [
      { id: 'home', position: [3, -2, 0], rotation: [0.1, 0.5, 0]  },
      { id: 'about', position: [-6, -3, -5], rotation: [0.5, -0.5, 0] },
      { id: 'projects', position: [-1, -1, 2], rotation: [0, 0.5, 0] },
      { id: 'learning', position: [4, -2, 5], rotation: [0.3, -0.15, 0] },
      { id: 'work', position: [-4, -1, 5], rotation: [0.3, -0.15, 0] },
      { id: 'contact', position: [-4, -1, 5], rotation: [0.3, -0.15, 0] },
    ];

    const handleScroll = () => {
      if (!groupRef.current) return;
      
      const sections = document.querySelectorAll('.section');
      let currentSection;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });
      
      const position_active = arrPositionModel.findIndex(
        (val) => val.id === currentSection
      );
      
      if (position_active >= 0) {
        const new_coordinates = arrPositionModel[position_active];
        gsap.to(groupRef.current.position, {
         
          x: new_coordinates.position[0],
          y: new_coordinates.position[1],
          z: new_coordinates.position[2],
          opacity:0,
          duration: 3,
          ease: "power1.out"
        });
        gsap.to(groupRef.current.rotation, {
          x: new_coordinates.rotation[0],
          y: new_coordinates.rotation[1],
          z: new_coordinates.rotation[2],
          duration: 3,
          ease: "power1.out"
        });
        if(position_active == 5) {
          setIndex(2);
          console.log(index);
        }
        else{
          setIndex(0);
        }
      }
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [camera]);

  return model ? <primitive ref={groupRef} object={model} scale={[0.85, 0.75, 0.75]} position={[1, -1, 0]} rotation={[0.1, 0.5, 0]} /> : null;
};

const Lights = () => {
  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
      <directionalLight position={[-5, 3, 2]} intensity={3} color="#00aaff" />
      <directionalLight position={[0, -5, -5]} intensity={3} color="#ffaa00" />
    </>
  );
};

const ThreeScene = () => {
  return (
    <div id="container3D" style={{ position: 'fixed', pointerEvents: 'none', inset:'0', zIndex: 100, maxWidth: 'auto' ,height: 'auto' }}>
      <Canvas>
        <Lights />
        <Model />
      </Canvas>
    </div>
  );
};

export default ThreeScene;