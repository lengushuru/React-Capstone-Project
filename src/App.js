import {
  BrowserRouter, Routes, Route,
  //  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:criptoId" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
