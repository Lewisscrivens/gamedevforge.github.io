import React, { startTransition, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ModelRender = ({ modelPath }) => {
    const model = useGLTF(modelPath);

    return (
        <Suspense fallback={<div>loading...</div>}> >
            <Canvas className="cursor-pointer" frameloop="demand" camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}>
                <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} />
                <primitive object={model.scene} scale={2.5} />
            </Canvas>
        </Suspense>
        );
};

export default ModelRender;

/*

Usage:

In MD files use the following:

import ModelRender from '@site/src/components/misc/modelRender';

<ModelRender
    modelPath='models/planet/scene.gltf'
/>

*/