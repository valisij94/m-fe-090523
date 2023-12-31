import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import LoginForm from './components/loginForm/LoginForm.jsx';
import SimpleComponent from './components/simpleComponent/SimpleComponent.jsx';

import { Routes, Route, Link } from 'react-router-dom';
import Greeting from './components/greeting/Greeting.jsx';
import ProductList from './components/productList/ProductList.jsx';


function App() {

  // local state UserName
  const [userName, setUserName] = useState('');
  const [greet, setGreet] = useState(false);

  /*
  1. Интегрируем роутер в наше приложение. Проект уже содержит добавленную зависимость, можно использовать библиотеку `react-router-dom`. Задача - в компоненте `App` обеспечить, чтобы на странице с адресом `/login` рендерился компонент `LoginForm`, а по умолчанию (адрес `/`) рендерился компонент `Greeting`. Компонент `SinpleComponent` и параграф с текстом Hello World From React рендерим всегда, вне зависимости от маршрута (рекомендуется вынести их за роуты).
  */

  return (
    <div className="App">
      <p>Hello World from React! {new Date().toLocaleString()} </p>

        {/*
        6. Теперь создаем линки на эти маршруты. В компоненте `App`, добавить ссылки с текстами "Авторизация", "Наши товары", которые ведут на страницу авторизации и страницу со списком товаров соответственно.
         */}
        <div>
          <Link to='/login'>Login Page</Link>
          <Link to='/products'>Products Page</Link>
        </div>

        <Routes>
          <Route path='/' element={<Greeting /> }/>
          <Route path='/login' element={<LoginForm successLoginHandler={setUserName}/>} />
          <Route path='/products' element={<ProductList /> } />
          <Route path='*' element={<h3>Sorry, invalid page name!</h3>}/>
        </Routes>

      <SimpleComponent />
    </div>
  );
}

export default App;
