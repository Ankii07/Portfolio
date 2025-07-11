import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Model = (props) => {
  const { nodes, materials } = useGLTF('/models/logo_3d.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-4.397, -2.573, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.FACEBOOK_BLUE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.FACEBOOK_WHITE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-2.616, -2.573, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.FACEBOOK_WHITE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.INSTAGRAM}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-0.867, -2.573, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.YOUTUBE_VERMELHO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.YOUTUBE_BRANCO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[4.441, 2.927, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials['3DSMAX']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[2.554, -0.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.JAVA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[0.864, -0.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.JAVASCRIPT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-2.003, 1.264, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.PROCESSING}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[1.565, 1.264, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.SPARKAR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[4.279, -0.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.SWIFT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[0.647, 2.927, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.TINKERCAD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_35.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-2.369, -0.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_37.geometry}
          material={materials.PYTHON_AMARELO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.PYTHON_AZUL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_39.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-0.136, 1.264, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.UNITY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[5.827, -0.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.ARKIT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_45.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[3.296, 1.264, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials.ANDROIDSTUDIO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[5.234, 1.264, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.XCODE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-0.705, -0.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.CSHARP}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-1.665, 2.754, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.SCRATCH}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_57.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[2.583, 2.927, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_59.geometry}
          material={materials.BLEND_LARANJA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.BLEND_BRANCO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_61.geometry}
          material={materials.BLEND_AZUL}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-4.67, 0.703, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials.plataformaApoiase}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_65.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-4.67, -0.226, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_67.geometry}
          material={materials.plataformaEduzz}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-4.67, 1.578, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials.plataformaHotmart}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_71.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-4.67, 2.42, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_73.geometry}
          material={materials.plataformaKiwify}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_74.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-4.67, -1.073, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_76.geometry}
          material={materials.plataformaMonetize}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_77.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[3.517, -2.5, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_79.geometry}
          material={materials.HOTMART_BRANCO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_80.geometry}
          material={materials.HOTMQART_LARANJA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_81.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[-4.67, 3.137, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_83.geometry}
          material={materials.APRENDA_PROGRAMAR}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_84.geometry}
          material={materials.BORDAS_CROMADO}
        />
      </group>
      <group position={[1.736, -2.573, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_86.geometry}
          material={materials.MOEDA_OLHO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_87.geometry}
          material={materials.MOEDA_PALPEBRA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_88.geometry}
          material={materials.MOEDA_SOBRA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_89.geometry}
          material={materials.MOEDA_VERDE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_90.geometry}
          material={materials.MOEDA_FUNDO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_91.geometry}
          material={materials.MOEDA_BRANCO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_92.geometry}
          material={materials.MOEDA_BICO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_93.geometry}
          material={materials.MOEDA_CIFRAO}
        />
      </group>
      <group position={[5.265, -2.487, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_95.geometry}
          material={materials.BORDAS_CROMADO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_96.geometry}
          material={materials.MAPA_CUSTOM}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/logo.glb')

export default Model