import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => (
  <RotatingLines
    strokeColor="violet"
    strokeWidth="2"
    animationDuration="0.75"
    width="24"
    visible={true}
  />
);
