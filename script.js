class Card {
    constructor({ title, icon, text }) {
        this.title = title;
        this.icon = icon;
        this.text = text;
        this.selected = false;
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
            if (this.Cards[r].selected == true) {
                console.log("Карта `"+this.Cards[r].title+'` было')
                this.SetRnd();
            }
            else if (this.Cards[r].selected == false) {
                console.log("Карта `"+this.Cards[r].title+'` не было')
                this.title.innerHTML = this.Cards[r].title;
                this.icon.innerHTML = this.Cards[r].icon;
                this.text.innerHTML = this.Cards[r].text;
                this.element.setAttribute('class', 'deckfront');
                this.Cards[r].selected = true;
            }
        }
    }
}



var Pack = {};
//Биология
Pack.Biology = new Deck('Biology');
Pack.Biology.Cards.push(new Card({
    title: 'Мужчина',
    icon: '👨🏻',
    text: 'Мужчина 30 лет'
}));
Pack.Biology.Cards.push(new Card({
    title: 'Женщина',
    icon: '👩',
    text: 'Женщина 30 лет'
}));
Pack.Biology.Cards.push(new Card({
    title: 'Парень',
    icon: '👨🏻',
    text: 'Парень 18 лет'
}));
Pack.Biology.Cards.push(new Card({
    title: 'Девушка',
    icon: '👩',
    text: 'Парень 18 лет'
}));
//Здоровье
Pack.Health = new Deck('Health');
Pack.Health.Cards.push(new Card({
    title: 'Слепой',
    icon: '👁',
    text: 'С рождения слепой'
}));
Pack.Health.Cards.push(new Card({
    title: 'Глухонемой',
    icon: '👂',
    text: 'С рождения не слышит'
}));
Pack.Health.Cards.push(new Card({
    title: 'Здоров',
    icon: '💪',
    text: 'Представь что этой карты нет'
}));
Pack.Health.Cards.push(new Card({
    title: 'Щупальца вместо рук',
    icon: '🐙',
    text: 'Даже не знаю как это может пригодится'
}));
Pack.Health.Cards.push(new Card({
    title: 'Шерсть на лице',
    icon: '🐻',
    text: 'Зато животные принимают за своего!'
}));
//Профессия
Pack.Profession = new Deck('Profession');
Pack.Profession.Cards.push(new Card({
    title: 'Шахтер',
    icon: '⛏',
    text: 'Угледобывание — твоё всё'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Военный',
    icon: '🔫',
    text: 'Огнестрельное и холодное оружие — твой конёк'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Уборщик',
    icon: '🍂',
    text: 'Будет убираться в бункере!'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Физик-ядерщик',
    icon: '🧑‍🏫',
    text: 'Я всё здесь взорву!'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Врач',
    icon: '🧑‍⚕️',
    text: 'Всех вылечу' 
}));
Pack.Profession.Cards.push(new Card({
    title: 'Программист',
    icon: '🧑‍💻',
    text: 'Скажи что-нибудь на программистском'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Повар',
    icon: '🧑‍🍳',
    text: 'Повар спрашивает повара'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Детектив',
    icon: '🕵️',
    text: 'Так, так, так, что тут у нас'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Химик',
    icon: '🧑‍🔬',
    text: 'Похимичим'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Космический инженер',
    icon: '🧑‍🚀',
    text: 'Ещё чуть-чуть и прямо в космос'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Робототехник',
    icon: '🧑‍🔧',
    text: 'Нет, это не очередной робот пылесос'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Зомболог',
    icon: '🧑‍⚕️',
    text: 'Вообще-то они существуют'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Домохозяйка',
    icon: '🧑‍🍳',
    text: 'Отчаянная'
}));
//Факты
Pack.Facts = new Deck('Facts');
Pack.Facts.Cards.push(new Card({
    title: 'Знает президента',
    icon: '🗣',
    text: 'Если под рукой будет телефон, то срочно нужно набрать...'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Не закончил школу',
    icon: '🧑‍🎓',
    text: 'Вроде и ничего такого, но стыдно'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Интроверт',
    icon: '🙆',
    text: 'Я посмотрю'
}));
//Хобби
Pack.Hobby = new Deck('Hobby');
Pack.Hobby.Cards.push(new Card({
    title: 'Мыловарение',
    icon: '💫',
    text: 'Кто уронил мыло?'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Лесник',
    icon: '🌨',
    text: 'Может выжить в лесу'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Коуч',
    icon: '🧑‍🏫',
    text: 'Что ты мне посоветушь, а?'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Древние языки',
    icon: '📖',
    text: 'Я с ними договорюсь'
}));
//Особые условия
Pack.Conditions = new Deck('Conditions');
Pack.Conditions.Cards.push(new Card({
    title: 'Один за всех и все против одного',
    icon: '🥾',
    text: 'Твой голос решает кого выгнать!'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Услышь мои молитвы',
    icon: '🥾',
    text: 'В этом раунде никого не изгоняют'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Вор в законе',
    icon: '🥾',
    text: 'Когда тебя изнали, укради одну любую карту у другого игрока'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Звонок президенту',
    icon: '🥾',
    text: 'Все голоса удваиваются'
}));
//Багаж
Pack.Bagage = new Deck('Bagage');
Pack.Bagage.Cards.push(new Card({
    title: 'Снайперская винтовка',
    icon: '🏹',
    text: 'При помощи винтовки можно выслеживать врагов и отстреливать их с дальнего расстояния'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Аптечка',
    icon: '➕',
    text: 'Аптечкой из автомобиля мало что вылечишь, но это лучше, чем ничего'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Кольцо с алмазом',
    icon: '💍',
    text: 'Когда мы выберемся, мы его продадим!'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Кейс с агрокультурами',
    icon: '💼',
    text: 'В кейсе собраны большинство видов растений пригодных для питания по одному экземпляру'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Зонт',
    icon: '☂️',
    text: 'Зато я не промокну'
}));

document.write('<hr>');
document.write('<p>||| Терминал событий бункера<p>');
document.write('<hr>');


//Бункер
Pack.Bunker = new Deck('Bunker');
Pack.Bunker.Cards.push(new Card({
    title: 'Хим Лаборатория',
    icon: '🧪',
    text: 'В этом помещении можно приготовить медикаменты, если имеется навык'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Библиотека',
    icon: '🧩',
    text: 'Здесь можно найти разнообразные книги, библиотека содержит фундаментальные знание по всем наукам'
}));
//Катаклизм
Pack.Cataclysm = new Deck('Cataclysm');
Pack.Cataclysm.Cards.push(new Card({
    title: 'Атомная зима',
    icon: '💣',
    text: 'Ещё чуть-чуть и по вам запустят атомные бомбы!'
}));
Pack.Cataclysm.Cards.push(new Card({
    title: 'Вирус',
    icon: '🦠',
    text: 'Неизвестный вирус уничтожил всё человечество, ваша задача восстановить человечество и побороть вирус'
}));
Pack.Cataclysm.Cards.push(new Card({
    title: 'Инопланетяне',
    icon: '👽',
    text: 'Инопланетная расса захватила мир, нужно построить корабль и улететь восстанавливать человечество на другую планету'
}));
//Угроза
Pack.Threat = new Deck('Threat');
Pack.Threat.Cards.push(new Card({
    title: 'Крысы',
    icon: '🐀',
    text: 'Крысы пробрались в бункер через вентилляцию'
}));
Pack.Threat.Cards.push(new Card({
    title: 'Мародёры',
    icon: '💔',
    text: 'В далеке вы замечаете группу людей, очевидно они не настроены дружелюбно'
}));

Pack.Threat.element.onclick = () => {Pack.Threat.SetRnd()};
Pack.Cataclysm.element.onclick = () => {Pack.Cataclysm.SetRnd()};
Pack.Bunker.element.onclick = () => {Pack.Bunker.SetRnd()};

function Main() {
    Pack.Conditions.SetRnd();
    Pack.Biology.SetRnd();
    Pack.Facts.SetRnd();
    Pack.Health.SetRnd();
    Pack.Hobby.SetRnd();
    Pack.Profession.SetRnd();
    Pack.Bagage.SetRnd();
}