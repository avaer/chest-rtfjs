import {React, Fragment} from 'react-all';
import {Box} from "./box.js"

const render = () => {
  return (
    <Fragment>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Fragment>
  );
};
export default render;
