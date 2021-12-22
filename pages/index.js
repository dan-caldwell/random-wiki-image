import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [img, setImg] = useState({
    src: null,
    title: null
  });

  const handleClick = async () => {
    const res = await fetch('/api/hello');
    const parsed = await res.json();
    setImg(parsed);
  }

  return (
    <div className={styles.container}>
      <div>
        <button onClick={handleClick}>Get image</button>
      </div>
      {img.src &&
        <>
          <h2>{img.title}</h2>
          <img src={img.src} />
        </>
      }
    </div>
  )
}
