import './App.css';
import Menu from './components/menu';
import MyCarousel from './components/carousel';
import ArticlesGrid from './components/ArticlesGrid';
import BigArticleGrid from './components/BigArticlesGrid';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <MyCarousel />
      <ArticlesGrid />
      <BigArticleGrid />
      <Footer />
    </div>
  );
}

export default App;
