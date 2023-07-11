
import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import ListPicker from './ListPicker'
import Die from './Die'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'

function App() {
  return (
  <div>
    <Heading color="magenta" text="welcome!" fontSize="20px"/>
    <Heading color="teal" text="aaaaaaaa!" fontSize="48px"/>

    <DoubleDice/>
    <DoubleDice/>
    <DoubleDice/>

    <ColorList colors={["red", "pink", "purple", "teal"]}/>
    <ColorList colors={["olive", "orange", "slategrey"]}/>

    {/* <ListPicker values={[1,2,3]} />
    <ListPicker values={["a","b","c"]} /> */}
    {/* <ListPicker values={{a,b,c}} /> */}
    {/* <Greeter person="Bill" from="Colt" />
    <Greeter person="Ted" from="Colt" />
    <Greeter person="Kazinsky" from="Elton" />
    <Die numSides={20} />
    <Die numSides={6} />
    <Die numSides={15} /> */}
  </div>
  )
}

export default App
