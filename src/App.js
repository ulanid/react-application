import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation';
import Content from './components/content';
import About from './components/about';
import Contact from './components/content/contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation />
      <Routes>
      <Route element={<Content/>} path='/'/>
        <Route path="/" element={<Content type={'all'}/>} >
        <Route path='/card/:cardId' element={<Content />} />
        </Route> 
        <Route element={<About/>} path='/about'/>

        <Route element={<Contact/>} path='/contact'/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
