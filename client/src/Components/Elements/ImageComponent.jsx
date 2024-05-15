import {useState, useEffect} from 'react'

const ImageComponent = ({src, className, alt}) => {

    const [imageStatus, setImageStatus] = useState(false);

    useEffect(() => {
        const img = new Image();        
        img.src = src;
        img.onload = () => {setImageStatus(true)};
    }, [src]);

  return (
    <>
        {
            !imageStatus ? <div className={className + ` bg-softGray`}></div> : <img src={src} loading='lazy' className={className} alt={alt} />
        }
        
    </>
  )
}

export default ImageComponent