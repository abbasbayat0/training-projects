const useSlide = (current, length) => {
  const next = () => {
    const newOne = (current + 1) % length;
    return newOne;
  };
  const prev = () => {
    const newOne = (current + length - 1) % length;
    return newOne;
  };
  return { next, prev };
};
export default useSlide;
