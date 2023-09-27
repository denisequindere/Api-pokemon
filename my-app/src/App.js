import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Posts from './pages/Posts';
import Menu from './components/Menu';
import NotFound from './pages/NotFound';
import Todos from './pages/Todos';
function App() {
  return (
    <>
    <BrowserRouter>
      <Menu/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/pokemon' element={<Pokemon/>}></Route>
            <Route path='/pokemon/:id' element={<Pokemon/>}></Route>
            <Route path='/todos' element={<Todos/>}></Route>
            <Route path='/posts' element={<Posts/>}></Route>
            <Route path='/posts/:id' element={<Posts/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>

    </BrowserRouter>
    
    </>
  );
}

export default App;
