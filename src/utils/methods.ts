export const calculateTotalCost = (
  weight: number,
  packages: number,
  date: string,
  time: string
) => {
  // This can always be modified
  return (weight * 5 + packages * 10).toFixed(2);
};
