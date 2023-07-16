
import './App.css'
import Box from './Box';
import BoxGrid from './BoxGrid';

import Dice from './Dice'
import LuckyN from './LuckyN'
import { sum } from './utils';
import { lessThan4, allSameValue } from './winConditions';

function App() {

  return (
    <>
      {/* <Lucky7/> */}
      {/* <Dice dice={[2,3,4]}/> */}
      {/* <LuckyN/> */}
      {/* <LuckyN numDice={2} winCheck={lessThan4}/> */}
      {/* <LuckyN title="Dice Gameeeeexx" numDice={2} winCheck={allSameValue}/> */}
      {/* <Box/>
      <Box/>
      <Box/> */}
      <BoxGrid/>

    </>
  )
}

export default App
