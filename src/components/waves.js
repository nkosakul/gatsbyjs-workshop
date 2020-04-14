import React, { useState } from 'react';

const Waves = () => {
  const [waves, setWaves] = useState(0);

  return (
    <button className="button" onClick={() => setWaves(waves +1)}>
      <span role="img" aria-label="wave icon">👋</span> {waves} Waves
    </button>
  );
};

export default Waves;
