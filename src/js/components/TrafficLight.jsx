import React, {useState} from 'react';
import '../../styles/TrafficLight.css';

const TrafficLight = () => {
  const [color, setColor] = useState('red');

  const cycleColor = () => {
    if (color === 'red') setColor('green');
    else if (color === 'green') setColor('yellow');
    else setColor('red');
  };

   return (
     <>
       <div className ="traffic-light">
         <div className= "traffic-light-stick"></div>
         <div className= "traffic-light-face">
           <div 
             onClick={() => setColor('red')}
             className= {"red light" +(color === 'red' ? " selected": "")}>
           </div>
           <div onClick={() => setColor('yellow')}
             className= {"yellow light" +(color === 'yellow' ? " selected": "")}>
           </div>
           <div onClick={() => setColor('green')}
             className= {"green light" +(color === 'green' ? " selected": "")}>
           </div>
         </div>
        
         <button onClick={cycleColor} className ="cycle-button">Cycle Light</button>
         
         
       </div>
     </>
   )
 }
    


export default TrafficLight;