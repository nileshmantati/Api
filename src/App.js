import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/category/:name" element={<Products />} />
        </Routes>
      </header>
    </div >
  );
}

export default App;
