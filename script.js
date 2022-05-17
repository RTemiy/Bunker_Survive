class Card {
    constructor({ title, icon, text }) {
        this.title = title;
        this.icon = icon;
        this.text = text;
        this.selected=false;
    }
}

class Deck {
    constructor(id) {
        this.id = id;
        this.Cards = [];
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'deckback');
        this.l1 = document.createElement('hr');
        this.element.onclick = () => { this.Flip() };
        this.Flip = () => {
            if (this.element.getAttribute('class') == 'deckfront') {
                this.element.setAttribute('class', 'deckback');
            }
            else if (this.element.getAttribute('class') == 'deckback') {
                this.element.setAttribute('class', 'deckfront');
            }
        }
        this.title = document.createElement('p');
        this.title.setAttribute('class', 'title');
        this.icon = document.createElement('p');
        this.icon.setAttribute('class', 'icon');
        this.text = document.createElement('p');
        this.text.setAttribute('class', 'text');
        this.element.appendChild(this.title);
        this.element.appendChild(this.l1);
        this.element.appendChild(this.icon);
        this.element.appendChild(this.text);
        document.body.appendChild(this.element);
        this.SetRnd = () => {
            let r = Math.floor(Math.random() * this.Cards.length);
            if(this.Cards[r].selected==true){
                this.SetRnd();
            }
            else{
            this.title.innerHTML = this.Cards[r].title;
            this.icon.innerHTML = this.Cards[r].icon;
            this.text.innerHTML = this.Cards[r].text;
            this.Cards[r].selected=true;
            }
        }
    }
}



var Pack = {};
//Биология
Pack.Biology = new Deck('Biology');
Pack.Biology.Cards.push(new Card({
    title: 'Мужчина',
    icon: 'Человек',
    text: 'Мужчина 30 лет'
}));
//Здоровье
Pack.Health = new Deck('Health');
Pack.Health.Cards.push(new Card({
    title: 'Слепой',
    icon: 'Болезнь',
    text: 'С рождения слепой'
}));
Pack.Health.Cards.push(new Card({
    title: 'Глухонемой',
    icon: 'Болезнь',
    text: 'С рождения не слышит'
}));
Pack.Health.Cards.push(new Card({
    title: 'Здоров',
    icon: 'Здоровье',
    text: 'Представь что этой карты нет'
}));
//Профессия
Pack.Profession = new Deck('Profession');
Pack.Profession.Cards.push(new Card({
    title: 'Шахтер',
    icon: 'Специальность',
    text: 'Угледобывание — твоё всё'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Военный',
    icon: 'Специальность',
    text: 'Огнестрельное и холодное оружие — твой конёк'
}));
//Факты
Pack.Facts = new Deck('Facts');
Pack.Facts.Cards.push(new Card({
    title: 'Знает президента',
    icon: 'Факт',
    text: 'Если под рукой будет телефон, то срочно нужно набрать...'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Не закончил школу',
    icon: 'Образование',
    text: 'Вроде и ничего такого, но стыдно'
}));
//Хобби
Pack.Hobby = new Deck('Hobby');
Pack.Hobby.Cards.push(new Card({
    title: 'Мыловарение',
    icon: 'Образование',
    text: 'Кто уронил мыло?'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Лесник',
    icon: 'Хобби',
    text: 'Может выжить в лесу'
}));
//Особые условия
Pack.Conditions = new Deck('Conditions');
Pack.Conditions.Cards.push(new Card({
    title: 'Один за всех и все против одного',
    icon: 'Убеждение',
    text: 'Твой голос решает кого выгнать!'
}));
//Багаж
Pack.Bagage = new Deck('Bagage');
Pack.Bagage.Cards.push(new Card({
    title: 'Снайперская винтовка',
    icon: 'Оружие',
    text: 'При помощи винтовки можно выслеживать врагов и отстреливать их с дальнего расстояния'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Аптечка',
    icon: 'Медикаменты',
    text: 'Аптечкой из автомобиля мало что вылечишь, но это лучше, чем ничего'
}));

document.write('<hr>');

//Бункер
Pack.Bunker = new Deck('Bunker');
Pack.Bunker.Cards.push(new Card({
    title: 'Хим Лаборатория',
    icon: 'Помещение',
    text: 'В этом помещении можно приготовить медикаменты, если имеется навык'
}));
//Катаклизм
Pack.Cataclysm = new Deck('Cataclysm');
Pack.Cataclysm.Cards.push(new Card({
    title: 'Атомная зима',
    icon: 'Катастрофа',
    text: 'Ещё чуть-чуть и по вам запустят атомные бомбы!'
}));
//Угроза
Pack.Threat = new Deck('Threat');
Pack.Threat.Cards.push(new Card({
    title: 'Крысы',
    icon: 'Угроза',
    text: 'Крысы пробрались в бункер через вентилляцию'
}));

function Main() {
    Pack.Bagage.SetRnd();
    Pack.Conditions.SetRnd();
    Pack.Biology.SetRnd();
    Pack.Facts.SetRnd();
    Pack.Health.SetRnd();
    Pack.Hobby.SetRnd();
    Pack.Profession.SetRnd();
    Pack.Bunker.SetRnd();
    Pack.Cataclysm.SetRnd();
    Pack.Threat.SetRnd();
}