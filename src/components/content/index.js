import React from "react";
import './style.css';
import imageA from './imgs/image1.png';
import imageB from './imgs/image2.png';
import imageC from './imgs/image3.png';
import imageD from './imgs/image4.png';
import imageE from './imgs/image5.png';
import Card from './card';

function Content(){
    const cards=[
        {
            image:imageA,
            title:'Coffee variety macchiato, as organic ut variety caffeine americano',
            description:'Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato. Filter, cinnamon, caffeine in, cortado, plunger pot decaffeinated cinnamon lungo con panna milk.',
            createdAt: 'JUNE 25, 2020',
            tag:'TRAVEL'

        },
        {
            image:imageB,
            title:'Overlaid the jeepers uselessly much excluding',
            description:'Saucer dark cup french press. Barista beans, organic eu variety skinny acerbic flavour caffeine white. Steamed, plunger pot ut dripper decaffeinated, caramelization, sit barista mug con panna shop turkish.',
            createdAt: 'JUNE 25, 2020',
            tag:'TECH'

        },
        {
            image:imageC,
            title:'Wherever far wow thus a squirrel raccoon jeez jaguar this from along',
            description:'Cup, caramelization viennese, cultivar macchiato flavour percolator ristretto frappuccino. Lungo extra macchiato cream chicory turkish caramelization.',
            createdAt: 'JUNE 25, 2020',
            tag:'ART'

        },
        {
            image:imageD,
            title:'According a funnily until pre-set or arrogant well cheerful',
            description:'Single shot cultivar beans as chicory caffeine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated, cortado grounds aftertaste white americano affogato flavour mazagran. Aged eu, extraction, cup seasonal frappuccino in seasonal saucer wings.',
            createdAt: 'JUNE 25, 2020',
            tag:'MUSIC'

        },
        {
            image:imageE,
            title:'Coffee sugar, chicory seasonal espresso barista americano',
            description:'Arista, percolator, cream, aromatic, fair trade, breve body instant lungo blue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings, whipped kopi-luwak body cortado seasonal. Mug roast, café au lait affogato lungo viennese decaffeinated. Cultivar, redeye brewed seasonal, java as french press et sweet cup mazagran.',
            createdAt: 'JUNE 25, 2020',
            tag:'MUSIC'

        }
    ];
    return(
        <div className="content-container">
           {
            cards.map(el=> {
                return(<Card
                    image={el.image} description={el.description} title={el.title} tag={el.tag} date={el.createdAt} />);
            })
           }
       
        </div>
    );
}
export default Content;