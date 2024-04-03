import React from 'react';
import Image from 'next/image';

const SkillBox = ({ backgroundColor, textColor, logo, name }) => {
  return (
    <div className={`p-1 flex items-center rounded-lg ${backgroundColor}`}>
      <div className="mr-4 ps-1 my-1" >
        <Image src={logo} alt="Logo" width={24} height={24} />
      </div>
      <div>
        <p className='pe-1' style={{ color: textColor }}>{name}</p>
      </div>
    </div>
  );
};

export default SkillBox;
