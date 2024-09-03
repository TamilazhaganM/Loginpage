import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "../src/component/Logincompo/Login"
import Signin from './component/Logincompo/signincompo/signin';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
