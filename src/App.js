import { Routes, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/contacts" exact element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
