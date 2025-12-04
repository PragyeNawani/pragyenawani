import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function AboutBot() {
  return (
    <div className='w-full h-full fixed top-0 left-0 -z-10'>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline 
        scene="https://prod.spline.design/CQEWlzz2KM9MVso4/scene.splinecode"
      />
      </Suspense>
    </div>
  );
}
