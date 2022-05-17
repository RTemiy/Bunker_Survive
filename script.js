class Card {
    constructor({ title, icon, text }) {
        this.title = title;
        this.icon = icon;
        this.text = text;
    }
}

class Deck {
    constructor() {
        this.selected = [];
        this.Cards = [];
        this.Render();
    }

    Render() {
        this.element=document.createElement('div');
        this.element.setAttribute('class','deckback');
        document.body.appendChild(this.element);
    }
}

var Pack={};
Pack.Profession=new Deck();
Pack.Facts=new Deck();

function Main(){

}