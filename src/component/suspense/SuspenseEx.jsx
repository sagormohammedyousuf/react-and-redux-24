import React, { Suspense } from "react";

const lazyWithDelay = (importFunc, delay) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(importFunc()), delay);
  });

const LazyComponent = React.lazy(() =>
  lazyWithDelay(() => import("../post/Post"), 4000)
);

const SuspenseEx = () => {
  return (
    <div>
      <h1 className="h4 text-white">React Suspense Example</h1>

      <Suspense fallback={<div class="loader"></div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default SuspenseEx;
