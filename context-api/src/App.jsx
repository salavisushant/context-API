import {Navbar} from "./component/Navbar"
import './App.css';
import { LoginForm } from "./component/LoginForm";
import {Status} from "./component/Status"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <LoginForm/>
      <Status/>
    </div>
  );
}

export default App;
