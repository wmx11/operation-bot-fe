import React from 'react';

const Backdrop = () => {
  return (
    <>
      <div className="absolute bg-secondaryGreen rounded-full w-[400px] h-[400px] blur-[400px] top-[-150px] left-[-60px]"></div>
      <div className="absolute bg-secondaryGreen rounded-full w-[400px] h-[400px] blur-[400px] top-[-150px] right-[-150px]"></div>
      <div className="absolute bg-secondaryOrange rounded-full w-[400px] h-[400px] blur-[400px] bottom-[-150px] right-[-150px]"></div>
      <div className="absolute bg-primaryRed rounded-full w-[400px] h-[400px] blur-[400px] bottom-[-150px] left-[-150px]"></div>
    </>
  );
};

export default Backdrop;
