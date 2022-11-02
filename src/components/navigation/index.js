import React from "react";
import './style.css';

function Navigation(){
    return(
        <nav>

            <div id="text" class="milton">Milton</div>
            <hr/>
            <div id="text" class="denali">Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer</div>
            <hr/>
            <div class="groups">
                <a className="main">home</a>
                <a>about</a>
                <a>contact</a>
            </div>
            <hr/>
            <div className="icons">
                <div><a href="a"><img src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e491addf265a8e_social-03.svg"></img></a></div>
                <div><a href="a"><img src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e491834e265b00_social-07.svg"></img></a></div>
                <div><a href="a"><img src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e491586a265ad4_social-18.svg"></img></a></div>
                <div><a href="a"><img src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e4914f3a265ae5_social-09.svg"></img></a></div>
                <div><a href="a"><img src="https://assets.website-files.com/5e4b1a8c95e491ce78265a6f/5e4b1a8c95e4912fad265ab9_social-30.svg"></img></a></div>
            </div>
            <div id="text" class="built">built by webflow</div>
        </nav>
    );
}

export default Navigation;