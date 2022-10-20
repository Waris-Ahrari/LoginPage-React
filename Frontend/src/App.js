import Homepage from "./Homepage"
import Login from "./Login"
import Register from "./Register"
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({

  })
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/Register" element = {<Register />}/>
        <Route path="/Login" element = {<Login setLoginUser={setLoginUser}/>}/>
        <Route path="/" element = {<Homepage />}/>
          {/* <Route exact path="/">
            {
              user && user._id ? <Homepage /> : <Login />
            }<Homepage /></Route>
          <Route path="/Login"><Login setLoginUser={setLoginUser} /></Route>
          <Route path="/Register"><Register /></Route> */}
        </Routes>

      </Router>

    </div>
  );
}

export default App;