import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { BufferAttribute, Color } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

type Props = {}

const FloatingIsland = (props: Props) => {
   const gltf = useLoader(GLTFLoader, '/models/floating_island.glb');

   useEffect(()=>{
      if(!gltf) return;
      let mesh = gltf.scene.children[0];

      var uvs = mesh.geometry.attributes.uv.array;
      mesh.geometry.setAttributes('uv2', new BufferAttribute(uvs, 2));
      mesh.material.lightMap = mesh.material.map;
      mesh.material.lightMap = mesh.material.map;
      mesh.material.color = new Color(0.04, 0.06, 0.1);
   },[gltf])
  return (
    <primitive object={gltf.scene} />
  )
}

export default FloatingIsland