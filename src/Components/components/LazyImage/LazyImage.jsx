import React, { useState, useEffect } from "react";
import { BounceLoader } from 'react-spinners';

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setLoaded(true);
    };
  }, [src]);

  return loaded ? <img src={src} alt={alt} className='w-[300px] h-[350px] object-cover' /> : <div className="w-[300px] h-[350px] flex justify-center items-center bg-gray-100">
    <BounceLoader color="gray" size={100}/></div>;
};

export default LazyImage;
