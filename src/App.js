import {
  BrowserRouter, Routes, Route,
  //  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={
            <Provider store={store}>
              <Home />
            </Provider>
          } />
          <Route path="/details/:criptoId" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
