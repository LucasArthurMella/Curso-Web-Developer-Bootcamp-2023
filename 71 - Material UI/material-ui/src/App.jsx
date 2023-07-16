import './App.css'
import RatingDemo from './RatingDemo';
import FormDemo from "./FormDemo";
import Navbar from "./Navbar";

function App() {

  return (
    <>
      {/* <Button variant="contained" onClick={() => {alert("aaa")}}>Contained</Button>
      <Button variant="text">Contained</Button>
      <Button variant="outlined">Contained</Button>
      <Button color="success" variant="contained" size="small">Contained</Button>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon/>
      </IconButton> */}
      {/* <RatingDemo/> */}
      <Navbar/>
      <FormDemo/>
    </>
  )
}

export default App
