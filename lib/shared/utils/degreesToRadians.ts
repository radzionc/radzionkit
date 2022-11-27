export const degreesInCircle = 360;

export const degreesToRadians = (degrees: number) =>
  degrees * (Math.PI / (degreesInCircle / 2));
