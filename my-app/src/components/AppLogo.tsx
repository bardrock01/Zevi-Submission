import React from 'react';
import ZeviLogo from '../../src/assets/img/zevi.png';

import './AppLogo.scss';

const AppLogo : React.FunctionComponent = () => {
  return (
    <div className='app-logo-container'>
      <img className = "Zevi-container"src={ZeviLogo} alt='Zevi'/>
    </div>
  );
};

export default AppLogo;