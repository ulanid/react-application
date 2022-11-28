import './App.css';
import Navigation from './components/navigation';
import Content from './components/content';
import About from './components/about';
import PageNotFound from './components/404';

function App() {
  return (
    <div className="App">
    <Navigation />
    <Content />
    <About />
    <PageNotFound />
    </div>
  );
}

export default App;
