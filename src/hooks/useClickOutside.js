import { useRef, useEffect } from "react";

function useClickOutside(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);

    // remove event listener as the component unmount
    // listen to these events in the capture phase
    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}

export default useClickOutside;