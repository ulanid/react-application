import React from "react";
import './style.css';
import MenuItem from "./menu-item";

const menuData = [
    {title:'HOMEPAGE'},
    {title:'PAGES',
    items:[
        {title:'Full width content'},
        {title:'content + left sidebar'},
        {title:'content + right sidebar'},
        {title:'content + both sidebars'},
        {title:'contact'},
        {title:'404'},
        {title:'testimonials'},
        {title:'about us'},
        {title:'team member'},
        {title:'FAQ'},

    ]
    }
];
function Menu(){
    return(
        <header>
            {
                menuData.map(item => <MenuItem title={item.title} items={item.items}/>)
            }
        </header>
    );
}

export default Menu;