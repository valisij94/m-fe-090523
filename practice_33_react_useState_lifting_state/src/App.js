import logo from './logo.svg';
import React, {useState} from 'react';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph.jsx';
import './App.css';
import LoginForm from './components/loginForm/LoginForm.jsx';
import SimpleInput from './components/input/SimpleInput.jsx';
import Greeting from './components/greeting/Greeting.jsx';


function App() {

  // local state UserName
  const [userName, setUserName] = useState('');
  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>

      <LoginForm successLoginHandler={setUserName}/>
      <Greeting name={userName}/>
    </div>
  );
}

export default App;
