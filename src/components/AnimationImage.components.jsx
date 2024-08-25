import React, { useEffect, useRef } from "react";
import useHeaderBtnStore from "../store/useHeaderBtnStore";

const AnimationImageComponents = ({ src, info, setAnimate }) => {
  const { btnInfo } = useHeaderBtnStore();
  const imgRef = useRef();
  const styles = {
    width: info.width + "px",
    height: info.height + "px",
    top: info.top + "px",
    left: info.left + "px",
  };
  useEffect(() => {
    // console.log(styles, btnInfo);
    const keyframe = [
      {
        top: info.top + "px",
        left: info.left + "px",
      },
      {
        top: btnInfo.top + "px",
        left: btnInfo.left + "px",
        height: 10 + "px",
        width: 10 + "px",
        rotate: "2turn",
      },
    ];
    const options = {
      duration: 500,
      iterations: 1,
      fill: "both",
    };
    const animation = imgRef.current.animate(keyframe, options);
    // console.log(keyframe);
    const animationEnd = () => setAnimate(false);
    animation.addEventListener("finish", animationEnd);
    return () => {
      animation.removeEventListener("finish", animationEnd);
    };
  }, []);
  return (
    <img
      src={src}
      ref={imgRef}
      style={styles}
      alt="animationImage"
      className="fixed z-50 "
    />
  );
};

export default AnimationImageComponents;
