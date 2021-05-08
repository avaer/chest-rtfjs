import {React, Fragment, Suspense, GLTFLoader, useLoader} from 'react-all';
import {Box} from "./box.js"

const Chest = () => (
  <Gltf src="http://127.0.0.1:10000/chest-rtfjs/chest.glb"/>
);
function Gltf({src}) {
  const gltf = useLoader(GLTFLoader, src);
  return <primitive object={gltf.scene} position={[0, 0, 0]} />
}

const render = () => {
  return (
    <Fragment>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Suspense fallback={<Box position={[0, 0, 0]} />}>
        <Chest />
      </Suspense>
    </Fragment>
  );
};
export default render;
