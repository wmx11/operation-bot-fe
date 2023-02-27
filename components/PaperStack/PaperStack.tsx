import React, { FC, PropsWithChildren } from 'react';

const beforeStyles =
  "before:z-[-1] before:bg-[url(../public/images/paper.jpg)] before:bg-yellow-100 before:opacity-60 before:shadow-md before:absolute before:h-[98%] before:w-[100%] before:top-0 before:left-6 before:rotate-6 before:content-['']";

const afterStyles =
  "after:z-[-1] after:bg-[url(../public/images/paper.jpg)] after:bg-yellow-100  after:opacity-60 after:shadow-md after:absolute after:h-[98%] after:w-[100%] after:top-4 after:right-6 after:-rotate-6 after:content-['']";

const style = `p-10 bg-gradient-to-b from-amber-100 to-yellow-100 shadow-md relative ${beforeStyles} ${afterStyles}`;

const PaperStack: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style}>
      <div className="bg-[url(../public/images/paper.jpg)] bg-cover absolute inset-0 w-full h-full z-[0] opacity-60"></div>
      {children}
    </div>
  );
};

export default PaperStack;
