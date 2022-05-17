class Card {
    constructor({ title, icon, text }) {
        this.title = title;
        this.icon = icon;
        this.text = text;
    }
}

class Deck {
    constructor(id) {
        this.id = id;
        this.selected = [];
        this.Cards = [];
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'deckback');
        this.element.onclick = () => {this.Flip()};
        this.Flip = () =>{
            if(this.element.getAttribute('class')== 'deckfront'){
                this.element.setAttribute('class', 'deckback');
            }
            else if (this.element.getAttribute('class')== 'deckback'){
                this.element.setAttribute('class', 'deckfront');
            }
        }
        this.title = document.createElement('p');
        this.l1 = document.createElement('hr');
        this.icon = document.createElement('a');
        this.icon.setAttribute('class', 'icon');
        this.text = document.createElement('p');
        this.element.appendChild(this.title);
        this.element.appendChild(this.l1);
        this.element.appendChild(this.icon);
        this.element.appendChild(this.text);
        document.body.appendChild(this.element);
    }
}



var Pack = {};
Pack.Bagage = new Deck('Bagage');
Pack.Biology = new Deck('Biology');
Pack.Bunker = new Deck('Bunker');
Pack.Cataclysm = new Deck('Cataclysm');
Pack.Conditions = new Deck('Conditions');
Pack.Facts = new Deck('Facts');
Pack.Health = new Deck('Health');
Pack.Hobby = new Deck('Hobby');
Pack.Profession = new Deck('Profession');
Pack.Threat = new Deck('Threat');

function Main() {

}