class Card {
    constructor({ title, icon, text }) {
        this.title = title;
        this.icon = icon;
        this.text = text;
        this.selected = false;
    }
}

class Deck {
    constructor(category) {
        this.category = category;
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
        this.tip = document.createElement('p');
        this.tip.setAttribute('class', 'tip');
        this.element.appendChild(this.title);
        this.element.appendChild(this.icon);
        this.element.appendChild(this.text);
        this.element.appendChild(this.tip);
        this.tip.innerHTML=this.category;
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
Pack.Biology = new Deck('Биология');
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
    text: '100 лет... От меня сбежал колобок'
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
    text: 'Ай вонт ту билив'
}));
Pack.Biology.Cards.push(new Card({
    title: 'Гей 20 лет',
    icon: '💋',
    text: 'Парень гей 20 лет'
}));
Pack.Biology.Cards.push(new Card({
    title: 'Лесбиянка 20 лет',
    icon: '💋',
    text: 'Девушка гей 20 лет'
}));
Pack.Biology.Cards.push(new Card({
    title: 'Ребёнок',
    icon: '👼',
    text: 'Кроха, где твои родители?'
}));
Pack.Biology.Cards.push(new Card({
    title: 'Метаморф',
    icon: '🧞‍♂️',
    text: 'Можешь принять любой облик'
}));
//Здоровье
Pack.Health = new Deck('Здоровье');
Pack.Health.Cards.push(new Card({
    title: 'Слепой',
    icon: '🧑‍🦯',
    text: 'С рождения слепой'
}));
Pack.Health.Cards.push(new Card({
    title: 'Глухонемой',
    icon: '🧏',
    text: 'С рождения не слышит'
}));
Pack.Health.Cards.push(new Card({
    title: 'Здоров',
    icon: '💪',
    text: 'Ты здоров, как Дуэйн'
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
    text: 'Опять не могу найти свой ингалятор'
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
Pack.Health.Cards.push(new Card({
    title: 'Забывчивость',
    icon: '❔',
    text: 'А о чём шла речь вообще?'
}));
Pack.Health.Cards.push(new Card({
    title: 'Шизофрения',
    icon: '🗯',
    text: 'Ребята, я видел, что к нам в бункер зашёл чёрный кот!'
}));
Pack.Health.Cards.push(new Card({
    title: 'Бесплодие',
    icon: '❌',
    text: 'Нет, я чайлдфри'
}));
Pack.Health.Cards.push(new Card({
    title: 'Гемофилия',
    icon: '🩸',
    text: 'Я представляю что это кетчуп'
}));
Pack.Health.Cards.push(new Card({
    title: 'Биполярное расстройство',
    icon: '👥',
    text: 'Ты меня с кем-то путаешь...'
}));
Pack.Health.Cards.push(new Card({
    title: 'Раздвоение личности',
    icon: '🫂',
    text: 'Ты меня точно с кем-то путаешь...'
}));
Pack.Health.Cards.push(new Card({
    title: 'Депрессия',
    icon: '🪴',
    text: 'Мы отсюда никогда не выберемся'
}));
Pack.Health.Cards.push(new Card({
    title: 'Даун',
    icon: '🙇',
    text: 'Хочу быть красоткой'
}));
Pack.Health.Cards.push(new Card({
    title: 'Паралич',
    icon: '🧑‍🦼',
    text: 'Зато мысли гоняют быстро'
}));
Pack.Health.Cards.push(new Card({
    title: 'Аллергик',
    icon: '⛈',
    text: 'У кого есть таблетки от аллергии?'
}));
Pack.Health.Cards.push(new Card({
    title: 'Бессонница',
    icon: '💥',
    text: 'Я насчитал уже 100000000 барашкев'
}));
Pack.Health.Cards.push(new Card({
    title: 'Нарколепсия',
    icon: '💤',
    text: 'Сейчас, ещё чуть-чуть'
}));
Pack.Health.Cards.push(new Card({
    title: 'Кожа бабочки',
    icon: '♨️',
    text: 'До меня лучше не докасаться'
}));
Pack.Health.Cards.push(new Card({
    title: 'Общая алопеция',
    icon: '🚫',
    text: 'У меня гладкая кожа ВЕЗДЕ'
}));
Pack.Health.Cards.push(new Card({
    title: 'Ожирение',
    icon: '💯',
    text: 'Это не проблема'
}));
Pack.Health.Cards.push(new Card({
    title: 'Дистрофия',
    icon: '❌',
    text: 'Что такое еда?'
}));
Pack.Health.Cards.push(new Card({
    title: 'Булимия',
    icon: '📛',
    text: 'У меня есть три часа'
}));

Pack.Health.Cards.push(new Card({
    title: 'Какается',
    icon: '💩',
    text: 'Потом объясню'
}));
Pack.Health.Cards.push(new Card({
    title: 'Горбатый',
    icon: '🤠',
    text: 'Видели мультик "Карлик нос"?'
}));
Pack.Health.Cards.push(new Card({
    title: 'Сильный иммунитет',
    icon: '💪',
    text: 'В детстве я стоооолько болел'
}));
Pack.Health.Cards.push(new Card({
    title: 'Сильный кишечник',
    icon: '🍽',
    text: 'Мои родители не понимают, как я ем эту дрянь'
}));
Pack.Health.Cards.push(new Card({
    title: 'Видит в темноте',
    icon: '🐈‍⬛',
    text: 'Походка кошки, нос картошкой'
}));
Pack.Health.Cards.push(new Card({
    title: 'Импотент',
    icon: '💔',
    text: 'Я тоже чайлдфри'
}));
//Профессия
Pack.Profession = new Deck('Профессия');
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
Pack.Profession.Cards.push(new Card({
    title: 'Архитектор',
    icon: '🏆',
    text: 'Себе я памятник воздвиг'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Патолаганатом',
    icon: '👨‍⚕️',
    text: 'У каждого свои скелеты'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Психолог',
    icon: '👨‍⚕️',
    text: 'Это всё из дества'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Садовник',
    icon: '🧑‍🌾',
    text: 'Выйграем на конкурсе кабачков'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Археолог',
    icon: '👷',
    text: ''
}));
Pack.Profession.Cards.push(new Card({
    title: 'Библиотекарь',
    icon: '🧑‍💼',
    text: 'Я видел тысячи миров...'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Фотограф',
    icon: '📸',
    text: 'Скажи сыыыыр'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Полицейский',
    icon: '👮',
    text: 'Руки за голову'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Пожарный',
    icon: '🧑‍🚒',
    text: 'Спички детям не игрушка'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Акушер',
    icon: '🧑‍⚕️',
    text: 'Головка виднеется'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Переводчик',
    icon: '👨‍💼',
    text: 'Нуу, этот язык на не преподавали'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Швея',
    icon: '🧑‍🎤',
    text: 'Раз стежок, два стежок'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Вирусолог',
    icon: '🦠',
    text: ''
}));
Pack.Profession.Cards.push(new Card({
    title: 'Столяр',
    icon: '⚒',
    text: 'Починяю примуса'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Электротехник',
    icon: '⚡️',
    text: 'Бзик-бзик и электричество есть'
}));
Pack.Profession.Cards.push(new Card({
    title: 'Сварщик',
    icon: '💥',
    text: 'Сварю (не суп)'
}));
//Факты
Pack.Facts = new Deck('Факт');
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
    icon: '🛸',
    text: 'Там был Малдер'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Покусан зомби',
    icon: '🧟',
    text: 'Ой, даже не болит'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Был облит химикатами',
    icon: '🧪',
    text: 'И его звали Джокер'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Сражался с растениями',
    icon: '🌳',
    text: 'На самом деле я просто упал в крапиву'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Победил телевизор',
    icon: '📺',
    text: 'Иногда пульт не хотел чтобы я им пользовался'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Клептоман',
    icon: '🤏',
    text: 'Администрация не несёт ответственности за оставленные вещи'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Зарабатывал проституцией',
    icon: '💋',
    text: 'Ева я любила тебя'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Не может дышать во сне',
    icon: '🫁',
    text: ''
}));
Pack.Facts.Cards.push(new Card({
    title: 'Избежал смертной казни',
    icon: '🪓',
    text: 'После этого я поверил в бога'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Пережил пожар',
    icon: '🔥',
    text: 'Теперь я боюсь воды'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Дислексия',
    icon: '💱',
    text: 'Я не ленивый, я правда не умею читать'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Пережил 10 ударов молнией',
    icon: '💓',
    text: 'Однажды молния попала в меня, когда я ехал на машине'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Понимает животных',
    icon: '🐿',
    text: 'Кто сказал мяу?'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Пробежал марафон',
    icon: '🏃',
    text: 'И это только начало'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Жадина',
    icon: '🤷',
    text: 'Никому не отдам'
}));
Pack.Facts.Cards.push(new Card({
    title: 'Задерживает дыхание на 10 минут',
    icon: '🫁',
    text: 'Правда с рыбами не умею общаться'
}));
//Хобби
Pack.Hobby = new Deck('Хобби');
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
Pack.Hobby.Cards.push(new Card({
    title: 'Диггер',
    icon: '🤸',
    text: 'Однажды я чуть не умер'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Строил бункер',
    icon: '🛠',
    text: 'Иногда я водил туда своих друзей'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Фильмы про зомби',
    icon: '🎥',
    text: 'Один выстрел в голову и труп станет трупом'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Вязание',
    icon: '🧶',
    text: 'Вяжут не только бабушки'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Настольные игры',
    icon: '🧩',
    text: 'А во что мы играем'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Коктейли',
    icon: '🍸',
    text: 'Со мной не соскучишься'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Разводил животных',
    icon: '🐕',
    text: 'Не на деньги'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Художник',
    icon: '🧑‍🎨',
    text: 'Я так вижу'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Мошенник',
    icon: '🥷',
    text: 'Я им сказал, что я не мошенник, они поверили...'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Парикмахер',
    icon: '🧑‍🎤',
    text: 'Вам только кончики подстричь'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'КМС по боксу',
    icon: '🥊',
    text: 'Тыщ-тыщ'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Холодное оружие',
    icon: '🔪',
    text: 'Я умею не только резать колбаску'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Огнестрельное оружие',
    icon: '🔫',
    text: 'Прямо в яблочко'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Рукопашный бой',
    icon: '🤛',
    text: 'Это не карате'
}));
Pack.Hobby.Cards.push(new Card({
    title: 'Выживание в экстремальных условиях',
    icon: '🏕',
    text: 'Бэар Гриллс— фейк'
}));
//Особые условия
Pack.Conditions = new Deck('Особое условие');
Pack.Conditions.Cards.push(new Card({
    title: 'Один за всех и все против одного',
    icon: '⭐️',
    text: 'Твой голос решает кого выгнать в этом раунде!'
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
    text: 'Все голоса удваиваются в этом раунде'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Заложи предателя',
    icon: '👣',
    text: 'Если тебя изгнали, то оставшиеся выжившие получают +1 угрозу'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Мы все равны',
    icon: '👆',
    text: 'У всех выживших становится такое же хобби, как у тебя'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Старикам тут не место',
    icon: '🤐',
    text: 'Все кто старше тебя не могут голосовать в этом раунде'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Филофобия',
    icon: '💔',
    text: 'Ты должен голосовать против игрока, который проголосовал против человека слева или справа от тебя'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Нарцисс',
    icon: '❣️',
    text: 'Ты должен голосовать против игрока слева или справа от себя, если против него проголосовал хотя бы один человек'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Стокгольмский синдром',
    icon: '💘',
    text: 'Ты должен голосовать против игрока, которому не хватает одного голоса до изгнания'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Гелотофобия',
    icon: '💢',
    text: 'Ты должен голосовать против игрока, который первым проголосовал против тебя'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Гомофобия',
    icon: '💢',
    text: 'Ты должен голосовать против игроков с нетрадиционной ориентацией'
}));
Pack.Conditions.Cards.push(new Card({
    title: 'Геронтофобия',
    icon: '💢',
    text: 'Ты должен голосовать против игроков, которые старше тебя'
}));
//Багаж
Pack.Bagage = new Deck('Багаж');
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
    title: 'Набор инструментов',
    icon: '🛠',
    text: 'Туалет ими можно починить...'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Защитный костюм',
    icon: '🥋',
    text: 'Очень полезная вещь, если будем выбираться наружу'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Бензопила на солнечной батарее',
    icon: '🪚',
    text: 'Теперь они нам не враги'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Костюм для подводного плавания',
    icon: '🏊‍♂️',
    text: 'Если через 5 минут я не вернусь, то забудьте про меня'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Пособие по растениям',
    icon: '📖',
    text: 'Выращу кабачки и точка!'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Коктейль молотова',
    icon: '🍾',
    text: 'Гореть в аду буду я, а они сейчас'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Эликсир долголетия',
    icon: '☕️',
    text: 'Я их всех переживу'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Скафандр',
    icon: '🧑‍🚀',
    text: ''
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Противогаз',
    icon: '🤿',
    text: ''
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Палатка',
    icon: '⛺️',
    text: ''
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Годовой запас сухпайка',
    icon: '🥫',
    text: 'Ребята, меня впустили, заносите!'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Очиститель воды',
    icon: '🥂',
    text: 'Райское наслаждение'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Мышьяк',
    icon: '☠️',
    text: 'Наполеону не давать'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Грелка',
    icon: '♨️',
    text: ''
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Виагра',
    icon: '🌶',
    text: 'А зачем она тебе?'
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Рация',
    icon: '📞',
    text: ''
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Кислородный баллон',
    icon: '⚗️',
    text: ''
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Генератор энергии',
    icon: '📩',
    text: ''
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Инкубатор с яйцами',
    icon: '🥚',
    text: ''
}));
Pack.Bagage.Cards.push(new Card({
    title: 'Сигнальная ракетница',
    icon: '🔫',
    text: ''
}));

document.write('<hr>');
document.write('<p>||| Терминал событий бункера<p>');
document.write('<hr>');

//Бункер
Pack.Bunker = new Deck('Бункер');
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
Pack.Bunker.Cards.push(new Card({
    title: 'Модуль восстановления памяти',
    icon: '🧠',
    text: 'Раз в месяц можно полностью восстановить одному человеку память. Опасно для нервной системы'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Оранжерея',
    icon: '🪴',
    text: 'Можно выращивать растения'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Сауна',
    icon: '💦',
    text: 'Хорошее место, чтобы расслабиться'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Перерабатыватель мусора',
    icon: '♻️',
    text: 'Ну, в мусоре не потонем'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Криокапсула',
    icon: '❄️',
    text: 'Два человека могут заморозиться на несколько сотен лет, чтобы потом проснуться и возродить жизнь'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Отключение электричества',
    icon: '⚡️',
    text: 'Произошёл сбой, нужен электрик, иначе света вы больше никогда не увидите'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Склад кислородных баллонов',
    icon: '🌟',
    text: 'Здесь хватит на лет 10'
}));
Pack.Bunker.Cards.push(new Card({
    title: 'Лаборатория генной инженерии',
    icon: '🧬',
    text: 'В нужных руках она станет нашим лучшим выходом из этой ситуации'
}));
//Катаклизм
Pack.Cataclysm = new Deck('Катастрофа');
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
    icon: '🛸',
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
Pack.Cataclysm.Cards.push(new Card({
    title: 'Потеря памяти',
    icon: '🧠',
    text: 'Из-за неявных причин у человечества остался один день чтобы собрать в бункер людей, чтобы оставшиеся после полной потери памяти восстановили цивилизацию!'
}));
Pack.Cataclysm.Cards.push(new Card({
    title: 'Опустынивание',
    icon: '🏜',
    text: 'Климатическая катастрофа привела к тому, что скоро вся планета покроется пустынями. Выжившим нужно приспособиться к новым условиям и восстановить цивилизацию!'
}));
Pack.Cataclysm.Cards.push(new Card({
    title: 'Ледниковый период',
    icon: '🗻',
    text: 'Климатическая катастрофа привела к тому, что скоро вся планета покроется ледниками. Выжившим нужно приспособиться к новым условиям и восстановить цивилизацию!'
}));
Pack.Cataclysm.Cards.push(new Card({
    title: 'Катастрофа кислорода',
    icon: '🫁',
    text: 'Климатическая катастрофа привела к тому, что на планете скоро не останется кислодора. Выжившим нужно приспособиться к новым условиям и восстановить цивилизацию!'
}));
Pack.Cataclysm.Cards.push(new Card({
    title: 'Огромные животные',
    icon: '🦂',
    text: 'Последнее десятилетие учёные всех стран упорно экспериментировали над генами животных, что к привело к их утечке, в мире стали появляться огромные виды животных, которые уничтожали всё на своём пути.Выжившим нужно приспособиться к новым условиям и восстановить цивилизацию!'
}));
//Угроза
Pack.Threat = new Deck('Угроза');
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
    icon: '🚿',
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
Pack.Threat.Cards.push(new Card({
    title: 'Яд',
    icon: '🧪',
    text: 'Из-за того, что бункер был долго закрыт в нём накопилось много ядов'
}));
Pack.Threat.Cards.push(new Card({
    title: 'Инопланетяне',
    icon: '🛸',
    text: 'На мониторе бункера вы видите, что у бункера села летающая тарелка и инопланетяне пытаются войти внутрь'
}));
Pack.Threat.Cards.push(new Card({
    title: 'Вирус',
    icon: '🦠',
    text: 'Неизвестный вирус заражает людей, которые подвержены большому стрессу'
}));
Pack.Threat.Cards.push(new Card({
    title: 'Кислород',
    icon: '🩺',
    text: 'В системе произошёл сбой, кислород больше не поступает в бункер'
}));


Pack.Threat.element.onclick = () => {Pack.Threat.SetRnd()};
Pack.Cataclysm.element.onclick = () => {Pack.Cataclysm.SetRnd()};
Pack.Bunker.element.onclick = () => {Pack.Bunker.SetRnd()};
document.write('<hr>');
document.write('<p onclick="ShowAll()">-> Показать все карты</p>');
document.write('<hr>');


function ShowAll(){
    for(key in Pack){
        let b = Pack[key].Cards;
        for(var x=0;x<b.length;x++){
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'deckfront');
        this.title = document.createElement('p');
        this.title.setAttribute('class', 'title');
        this.icon = document.createElement('p');
        this.icon.setAttribute('class', 'icon');
        this.text = document.createElement('p');
        this.text.setAttribute('class', 'text');
        this.tip = document.createElement('p');
        this.tip.setAttribute('class', 'tip');
        this.title.innerHTML=Pack[key].Cards[x].title;
        this.icon.innerHTML=Pack[key].Cards[x].icon;
        this.text.innerHTML=Pack[key].Cards[x].text;        
        this.tip.innerHTML=Pack[key].category;        
        this.element.appendChild(this.title);
        this.element.appendChild(this.icon);
        this.element.appendChild(this.text);
        this.element.appendChild(this.tip);
        document.body.appendChild(this.element);
        }
    }
}

function Main() {
    Pack.Conditions.SetRnd();
    Pack.Biology.SetRnd();
    Pack.Facts.SetRnd();
    Pack.Health.SetRnd();
    Pack.Hobby.SetRnd();
    Pack.Profession.SetRnd();
    Pack.Bagage.SetRnd();
}