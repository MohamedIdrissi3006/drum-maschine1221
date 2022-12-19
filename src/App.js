import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [activeKey, setActiveKey] = useState('');
useEffect(() => {
document.addEventListener('keydown', (event) =>{
playSound(event.key.toUpperCase());
})
}, [])


  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      song: "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      song: "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      song: "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      song: "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      song: "Heater-6",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      song: "Dsc_Oh",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      song: "Kick_n_Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      song: "RP4_KICK_1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      song: "Cev_H2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];
  let song = "";
  function playSound(selector){
    
const audio = document.getElementById(selector);
console.log(audio);
audio.play();
setActiveKey(selector);
  }
  return (
    <div className="App">
       <div className="display-container"  id="drum-machine">
          <div id="display">
           <div >
            {activeKey}
            </div>
            <div className="drum-pads">
           {drumPads.map((drumPad) => (<div onClick={() => {playSound(drumPad.text)}} className="drum-pad" id={drumPad.src}>{drumPad.text}
           <audio className="clip" id={drumPad.text} src={drumPad.src}>{drumPad.text}</audio>
           </div>))}
            </div>
         </div>
       </div>
    </div>
  );
}
export default App;
