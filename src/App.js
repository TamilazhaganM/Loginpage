import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "../src/component/Logincompo/Login"
import Signin from './component/Logincompo/signincompo/signin';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from './component/Logincompo/contactcomponent/Contact';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
