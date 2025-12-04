import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SideBot() {
  return (
    <div className='w-full h-full fixed top-0 left-0 -z-10'>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline 
        scene="https://prod.spline.design/vBgLi6nn2KM3ZYhc/scene.splinecode"
      />
      </Suspense>
    </div>
  );
}
