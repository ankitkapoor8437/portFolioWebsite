import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Ankit Kapoor', // Types 'Ankit Kapoor'
        1000, // Waits 1s
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      speed={{ type: 'keyStrokeDelayInMs', value: 150 }}
      style={{ fontSize: '60px', display: 'inline' }}
      repeat={Infinity}
    />
  );
};

export default ExampleComponent;
