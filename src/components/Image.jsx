import { useEffect, useState } from 'react';

function Image({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoaded(false);
    setError(false);

    const img = new Image();
    img.src = src;

    img.onload = () => {
      setLoaded(true);
    };

    img.onerror = () => {
      setError(true);
      setLoaded(true);
    };
  }, [src]);

  return (
    <img src={loaded && !error ? src : ''} alt={alt} className={className} />
  );
}

export default Image;
