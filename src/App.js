import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/index';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='app__container'>
      <Header />
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
