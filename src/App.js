import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/details">Details</Link>
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
