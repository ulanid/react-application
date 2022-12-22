import React from "react";
import './style.css';
import Header from "./header-item";

const menuData = [
 { title: 'HOMEPAGE' },
 {
  title: 'PAGES',
  items: [
   { title: 'Full Width Content' },
   { title: 'Content + Left Sidebar' },
   { title: 'Content + Right Sidebar' },
   { title: 'Content + Both Sidebar' },
   { title: 'Contact' },
   { title: '404' },
   { title: 'Testimonials' },
   { title: 'About Us' },
   { title: 'Team Member' },
   { title: 'FAQ' },
  ]
 },
 {
  title: "ELEMENTS",
  items: [
   { title: 'Buttons' },
   { title: 'Alert Messages' },
   { title: 'Font Icons' },
   { title: 'Call to Action' },
   { title: 'Columns' },
   { title: 'Columns - No Gutter' },
   { title: 'Lists' },
   { title: 'Accordions' },
   { title: 'Tabs' },
   { title: 'Toggles' },
   { title: 'Pricing Tables' },
  ]
 },
 { title: 'PORTFOLIO LAYOUTS' ,
  items: [
   { title: 'Full Width Portfolio' },
   { title: '2 Column Grid' },
   { title: '2 Col. Grid + Left Sidebar' },
   { title: '2 Col. Grid + Right Sidebar' },
   { title: '2 Col. Grid + Both Sidebars' },
   { title: '3 Column Grid' },
   { title: '3 Col. Grid + Left Sidebar' },
   { title: '3 Col. Grid + Right Sidebar' },
   { title: '3 Col. Grid + Both Sidebars' },
   { title: '4 Column Grid' },
  ]
 },
 {title: 'GALLERY LAYOUTS' ,
 items: [
    { title: 'Full Width Gallery'},
    { title: '2 Column Grid' },
    { title: '2 Col. Grid + Left Sidebar' },
    { title: '2 Col. Grid + Right Sidebar' },
    { title: '2 Col. Grid + Both Sidebars' },
    { title: '3 Column Grid' },
    { title: '3 Col. Grid + Left Sidebar' },
    { title: '3 Col. Grid + Right Sidebar' },
    { title: '3 Col. Grid + Both Sidebars' },
    { title: '4 Column Grid' },
    { title: '5 Column Grid' },
 ]
},
{title: 'LINK TEXT' },
{title: 'A VERY LONG LINK TEST' },
];

function Menu () {

 return (
  <header>
   {
    menuData.map(item => <MenuItem title={item.title} items={item.items} />)
   }
  </header>
 );
}

export default Header;