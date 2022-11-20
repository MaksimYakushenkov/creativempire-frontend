import React, { useEffect } from 'react';
import './Parallax.css';

import { InView } from 'react-intersection-observer';

function Parallax(props) {
  const classElement = props.classElement;
  const [inView, setInView] = React.useState(false);
  let transformSize = 0;
  

  useEffect(() => {
    if(inView ) {
      window.addEventListener('wheel', parallaxEffect);
    } 

    return () => {
      window.removeEventListener('wheel', parallaxEffect);
    }
  }, [inView]);
  
function parallaxEffect(evt) {
  const paralax = document.querySelector('.parallax');
  transformSize += evt.deltaY*0.1;
  if ( transformSize > 120) {
    transformSize = 120;
  } else if (transformSize < -120) {
    transformSize = -120;
  }
  paralax.style.transform = `translateY(${transformSize + 5}px)`;
}

  return(
    <InView onChange={setInView}>
    {({ inView, ref, entry }) => (
      <div ref={ref} className={`parallax ${classElement}`}>
    </div>
    )}
  </InView>
    
  )
}

export default Parallax;