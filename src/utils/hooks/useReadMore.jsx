import { useState } from "react";

const useReadMore = (initialState = false) => {
  const [readMore, setReadMore] = useState(initialState);

  const toggleReadMore = () => {
    setReadMore(r => !r);
  };

  return { readMore, toggleReadMore };
};

export default useReadMore;
