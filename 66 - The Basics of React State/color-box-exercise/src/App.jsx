import './App.css'
import ColorBox from './ColorBox';
import ColorBoxGrid from './ColorBoxGrid';

function App() {
  const colors = [
    "#E53935",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51BF",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FF9800",
    "#FF5722",
];

  return (
    <>

      {/* <ColorBox colors={colors}/> */}
      <ColorBoxGrid colorList={colors}/>

    </>
  )
}

export default App
