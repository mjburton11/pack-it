import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './header';
import { Items } from './items';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<h1>Welcome to Pack-it!</h1>} />
          <Route path='/items' element={<Items />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
