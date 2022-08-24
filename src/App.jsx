import { color, textAlign } from '@mui/system';
import ListButtonsComponent from './components/ListButtonsComponent';
function App() {
  return (
    <div className="App">
      <ListButtonsComponent />
      <p style={{ fontFamily: "Poppins", textAlign: "center", paddingTop: "10px", color: "#A9A9A9" }}>created by Patrick Navarro - devChallenges.io</p>
    </div>
  )
}
export default App
