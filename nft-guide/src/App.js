import {useState} from 'react';
import TitleBar from './components/TitleBar';
import { createGlobalStyle } from 'styled-components';
import Canvas from './components/Canvas';
import Btn from './components/Btn';
import ColorBtn from './components/ColorBtn';

const GlobalStyle = createGlobalStyle`
body{
  background-color: #f6f9fc;
  display:flex;
  flex-direction: column;
  align-items:center;
}
`;

function App() {
  const [color, setColor] = useState();
  const colorChange = (e) => {
    setColor(e.target.style.backgroundColor);

    console.log("ㅇㅇ 이거임 ");
    console.log(e);
  };

  return (
    <>
      <GlobalStyle/>
      <TitleBar imgSrc={'img/sthwy.png'}>Paint</TitleBar>
      <Canvas color={color} lineWidth={2.5}/>
      <div className='controls'>
          
          <div className='controls__colors'>
            <ColorBtn color="#2c2c2c" onClick={colorChange}/>
            <ColorBtn color="#ffffff" onClick={colorChange}/>
            <ColorBtn color="#FF3B30" onClick={colorChange}/>
            <ColorBtn color="#FF9500" onClick={colorChange}/>
            <ColorBtn color="#FFCC00" onClick={colorChange}/>
            <ColorBtn color="#4CD963" onClick={colorChange}/>
            <ColorBtn color="#5AC8FA" onClick={colorChange}/>
            <ColorBtn color="#0579FF" onClick={colorChange}/>
            <ColorBtn color="#5856D6" onClick={colorChange}/>
          </div>
          <div className='controls__btns'>
          <Btn>Clean</Btn>
          <Btn>Save</Btn>
          </div>
      </div> 
    </>
  );
}



export default App;
