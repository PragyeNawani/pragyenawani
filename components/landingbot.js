import React, { Suspense } from 'react';

// const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function LandingBot() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Spline 
        scene="https://prod.spline.design/89on1TgZoyoWAU6L/scene.splinecode" 
      />
      </Suspense> */}
      <img src="/landingimg.png" alt="" />

    </div>
  );
}