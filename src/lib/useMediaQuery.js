import { useState, useEffect } from "react";

const useMediaQuery = (mediaQuery) => {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(undefined);

  useEffect(() => {
    const list = window.matchMedia(`(${mediaQuery})`);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEffect(() => {
    const handler = (e) => setIsMatch(e.matches);
    mediaQueryList && mediaQueryList.addEventListener("change", handler);
    return () =>
      mediaQueryList && mediaQueryList.removeEventListener("change", handler);
    // console.log(`type of MQ list: ${typeof mediaQueryList} isArray:${Array.isArray(mediaQueryList)}`)
  }, [mediaQueryList]);

  return isMatch;
};

export default useMediaQuery;
