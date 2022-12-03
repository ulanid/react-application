import './style.css';

export default function BigArticle(props) {
    return (
      <div class="big-article">
        {props.reverse ? <div class="big-article-img article-margin-bottom"></div> : ""}
        <h3>Headline Text</h3>
        <p>Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.<br/><br/>Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.<br/><br/>Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus.</p>
        {!props.reverse ? <div class="big-article-img article-margin-top"></div> : ""}
      </div>  
    );
}