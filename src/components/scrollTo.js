
export const scrolltoservices = () => {
  const start = window.pageYOffset;
  const end = window.innerHeight -50;
  const duration = 700;

  const animation = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, start, end - start, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const startTime = performance.now();
  requestAnimationFrame(animation);
};

export const scrolltoaboutus = () => {
  const start = window.pageYOffset;
  const end = window.innerHeight* 2 - 94;
  const duration = 700;

  const animation = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, start, end - start, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const startTime = performance.now();
  requestAnimationFrame(animation);
};

export const scrolltocontactus = () => {
  const start = window.pageYOffset;
  const end = window.innerHeight* 3 - 94;
  const duration = 700;

  const animation = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, start, end - start, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const startTime = performance.now();
  requestAnimationFrame(animation);
};