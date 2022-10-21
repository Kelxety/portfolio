import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../Model'; /* highlight-line */
import SceneComponents from './components/SceneComponents';

type Props = {}

const threeSta = (props: Props) => {
  return (
    <div className='w-screen h-screen bg-black'>
      <Canvas >
        <SceneComponents />
      </Canvas>
    </div>
    
 );
}

export default threeSta