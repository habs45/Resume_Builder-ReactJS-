import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Editor from './components/Editor';
import Resume from './components/Resume';

function App() {
  return (
    // <React.forwardRef>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mainpage' element={<MainPage/>}/>
      <Route path='/resume' element={<Resume/>}/>
    
    </Routes>
    // </React.forwardRef>
  );
}

export default App;
