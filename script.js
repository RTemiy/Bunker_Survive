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
    text: 'Девушка 18 лет'
}));
Pack.Biology.Cards.push(new Card({
    title: 'Древняя бабка',
    icon: '👵',
    text: '100 лет...'
}));
Pack.Biology.Cards.push(new Card({
    title: 'Древний дед',
    icon: '👴',
    text: '100 лет...'
}));
Pack.Biology.Cards.push(new Card({
    title: 'Андроид',
    icon: '🤖',
    text: 'Не умрёшь, но и детей не будет...'
}));
Pack.Biology.Cards.push(new Card({
    title: 'Инопланетянин',
    icon: '👽',
    text: ''
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
Pack.Health.Cards.push(new Card({
    title: 'Астма',
    icon: '👅',
    text: 'Опять не могу найти свою пшикалку'
}));
Pack.Health.Cards.push(new Card({
    title: 'Нет ноги',
    icon: '🦵',
    text: 'Я пират!'
}));
Pack.Health.Cards.push(new Card({
    title: 'Нет рук',
    icon: '🙌',
    text: ':('
}));
Pack.Health.Cards.push(new Card({
    title: 'Последняя стадия рака',
    icon: '☠️',
    text: 'Последнее желание будет?'
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
Pack.Facts.Cards.push(new Card({
    title: 'Амбидекстр',
    icon: '👐',
    text: 'С двух рук сразу'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Отсидел в тюрьме  3 года',
    icon: '🏢',
    text: 'Золотые купола'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Подрабатывал в садике',
    icon: '🏆',
    text: 'Дети— цветы жизни'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Жил в деревне без света',
    icon: '🌙',
    text: 'Бывало и хуже'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Забирали инопланетяне',
    icon: '🪐',
    text: 'Там был Малдер'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Покусан зомби',
    icon: '🧟',
    text: 'Ой, даже не болит'
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
Pack.Hobby.Cards.push(new Card({
    title: 'Садовод',
    icon: '🌻',
    text: 'Ничего запрещённого я не выращивал и не собираюсь'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Компьютерные игры',
    icon: '🎮',
    text: 'Это не зависимость (наверно)'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'ОБЖ',
    icon: '➕',
    text: 'Ну, в теории я знаю, как спасти человека'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Менеджер в ресторане',
    icon: '💲',
    text: 'Почему блюдо ещё не готово?!'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Зарабатывает на ставках',
    icon: '💲',
    text: 'А кто-то говорит, что это пустые траты'
}));
//Особые условия
Pack.Conditions = new Deck('Conditions');
Pack.Conditions.Cards.push(new Card({
    title: 'Один за всех и все против одного',
    icon: '⭐️',
    text: 'Твой голос решает кого выгнать!'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Услышь мои молитвы',
    icon: '🙌',
    text: 'В этом раунде никого не изгоняют'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Вор в законе',
    icon: '👋',
    text: 'Когда тебя изгнали, укради одну любую карту у другого игрока'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Звонок президенту',
    icon: '📞',
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
Pack.Bagage.Cards.push(new Card({
    title: 'Антивирус',
    icon: '💉',
    text: 'Элис была очень любезна'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Деталь космического корабля',
    icon: '⚙️',
    text: 'Без меня никто никуда не отправляется (не получится)'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'КПК',
    icon: '🖥',
    text: 'Сейчас проверю, ловит ли интернет'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Набор интсрументов',
    icon: '🛠',
    text: 'Туалет ими можно починить...'
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
    text: 'Здесь можно найти разнообразные книги, эта библиотека содержит фундаментальные знание по всем наукам'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Разрушения',
    icon: '🔩',
    text: 'Система жизнеобеспечения сломана, еды нет, других ресурсов тоже'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Радио',
    icon: '👥',
    text: 'У вас есть радио, вы можете связаться с другим бункером'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Ракетная шахта',
    icon: '🚀',
    text: 'Здесь есть ракета, в ней есть одно место, чтобы куда-либо улететь'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Захоронения',
    icon: '🧟',
    text: 'При строительстве бункера погибло много людей и в этом помещении находятся захоронения'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Выход на поверхность',
    icon: '☀️',
    text: 'В бункере есть дополнительный шлюз для выхода, он неисправен'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Система безопасности',
    icon: '💔',
    text: 'Сумасшедший робот не пропускает внутрь людей младше 31 года'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Робот-медсестра',
    icon: '❤️',
    text: 'Любой человек может вылечится от любой болезни'
}));
//Катаклизм
Pack.Cataclysm = new Deck('Cataclysm');
Pack.Cataclysm.Cards.push(new Card({
    title: 'Атомная зима',
    icon: '💣',
    text: 'Ещё чуть-чуть и по вам запустят атомные бомбы! Нужно набрать людей способных продолжить поколение и выжить в постядерном мире'
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
Pack.Cataclysm.Cards.push(new Card({
    title: 'Зомби',
    icon: '🧟',
    text: 'Мир захватили зомби! Выжившим нужно разработать вакцину и распространить её по миру'
}));
Pack.Cataclysm.Cards.push(new Card({
    title: 'Нашествие роботов',
    icon: '🤖',
    text: 'Мир захватили роботы/гаджеты! Выжившим нужно побороть машин и рассчитывать на долгосрочную переспективу выживания в бункере'
}));
Pack.Cataclysm.Cards.push(new Card({
    title: 'Растения',
    icon: '🌳',
    text: 'Мир захватили растения гиганты! Выжившим нужно приспособится к новым условиям и связаться с другими бункерами'
}));
Pack.Cataclysm.Cards.push(new Card({
    title: 'Потоп',
    icon: '💦',
    text: 'В мире разразился всемирный потом! Выжившим нужно приспособится к новым условиям и заного построить цивилизацию'
}));
Pack.Cataclysm.Cards.push(new Card({
    title: 'Химическая война',
    icon: '🧪',
    text: 'В мире произошла химическая война! Выжившим нужно приспособится к новым условиям и выживать на поверхности'
}));
//Угроза
Pack.Threat = new Deck('Threat');
Pack.Threat.Cards.push(new Card({
    title: 'Крысы',
    icon: '🐀',
    text: 'Крысы пробрались в бункер через вентиляцию, выжившим нужно отбиться или отвлечь крыс'
}));
Pack.Threat.Cards.push(new Card({
    title: 'Мародёры',
    icon: '💔',
    text: 'В далеке вы замечаете группу людей, очевидно они не настроены дружелюбно'
}));
Pack.Threat.Cards.push(new Card({
    title: 'Заросли',
    icon: '🌳',
    text: 'За бункером давно не следили, его нужно освободить от растений, иначе выжившие не попадут внутрь'
}));
Pack.Threat.Cards.push(new Card({
    title: 'Программный сбой',
    icon: '⚙️',
    text: 'Двери бункера закрываются, выжившие должны взломать систему, чтобы не умереть'
}));
Pack.Threat.Cards.push(new Card({
    title: 'Угроза атомной атаки',
    icon: '💣',
    text: 'На компьютере бункера появляется отметка о нанесении атомного удара прямо по вашему бункеру, выжившим нужно перенастроить компьютер или связаться с администрацией страны'
}));
Pack.Threat.Cards.push(new Card({
    title: 'Система очищения',
    icon: '🚰',
    text: 'Сбой системы очищения воды'
}));
Pack.Threat.Cards.push(new Card({
    title: 'Затопление',
    icon: '💦',
    text: 'Где-то появилась пробоина, бункер затопит, если ничего не предпринять'
}));
Pack.Threat.Cards.push(new Card({
    title: 'Без происшествий',
    icon: '👍',
    text: 'Можно выдохнуть...'
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