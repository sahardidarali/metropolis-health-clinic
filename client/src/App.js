import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp'
const App=()=> {
  return (
    <div className="App">
   <BrowserRouter>
   <Route path="/" exact component={Dashboard} />
   <Route path="/login" exact component={SignIn} />
   <Route path="/register" exact component={SignUp} />

   </BrowserRouter>
    </div>
  );
}

export default App;
