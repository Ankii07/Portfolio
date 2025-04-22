import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer =  ({ animationName = 'idle', ...props }) => {
    const group = useRef();
    const { scene, nodes, materials } = useGLTF('/models/animations/Avata.glb');

    
      const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
      const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
      const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
      const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');
    
      idleAnimation[0].name = 'idle';
      saluteAnimation[0].name = 'salute';
      clappingAnimation[0].name = 'clapping';
      victoryAnimation[0].name = 'victory';
    
      const { actions } = useAnimations(
        [idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]],
        group,
      );
    
      useEffect(() => {
        actions[animationName].reset().fadeIn(0.5).play();
        return () => actions[animationName].fadeOut(0.5);
      }, [animationName]);
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="Wolf3D_Avatar"
        geometry={nodes.Wolf3D_Avatar.geometry}
        material={materials.Wolf3D_Avatar}
        skeleton={nodes.Wolf3D_Avatar.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
      />
    </group>
  )
};

useGLTF.preload('/models/animations/Avata.glb')

export default Developer