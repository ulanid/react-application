import './style.css';
import BigArticle from './BigArticle';

export default function BigArticleGrid() {
    return (
        <div class="big-article-grid">
            <BigArticle />
            <BigArticle reverse={true}/>
        </div>
    );
}