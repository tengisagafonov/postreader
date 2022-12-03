import React from 'react';
import Svg, {Path} from 'react-native-svg';

const AddIcon = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        d="M16.0001 29.3334C23.3334 29.3334 29.3334 23.3334 29.3334 16C29.3334 8.66669 23.3334 2.66669 16.0001 2.66669C8.66675 2.66669 2.66675 8.66669 2.66675 16C2.66675 23.3334 8.66675 29.3334 16.0001 29.3334Z"
        stroke="#8A8C90"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.6667 16H21.3334"
        stroke="#8A8C90"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16 21.3334V10.6667"
        stroke="#8A8C90"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default AddIcon;
