import React from 'react'
import Startpage from './components/startpage.jsx'
import Gameplay from './components/gameplay.jsx'


function App() {
  const[isGameStarted, setIsGameStarted] = React.useState(false);

  const toggleGameStart = () => {
    setIsGameStarted(prevState => !prevState);
  };

  return (
    <>
       {isGameStarted ? <Gameplay /> : <Startpage toggle={toggleGameStart} />}
    </>
  );
}

export default App
