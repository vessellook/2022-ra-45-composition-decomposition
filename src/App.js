import banner from './banner.png';
import board from './board.png';
import './App.css';
import Advertisement from './components/Advertisement';
import Banner from './components/Banner';
import ExchangeRates from './components/ExchangeRates';
import News from './components/News';
import Search from './components/Search';
import Widget from './components/Widget';
import { weekDays, monthsDeclined } from './utils';

const links = [
  { url: 'https://yandex.ru/video/', text: 'Видео' },
  { url: 'https://yandex.ru/images/', text: 'Картинки' },
  { url: 'https://dzen.ru/news/', text: 'Новости' },
  { url: 'https://yandex.ru/maps/', text: 'Карты' },
  { url: 'https://market.yandex.ru/', text: 'Маркет' },
  { url: 'https://translate.yandex.ru/', text: 'Переводчик' },
  { url: 'https://yandex.ru/efir', text: 'Эфир' },
  { url: 'https://www.kinopoisk.ru/', text: 'Кинопоиск' },
  { url: 'https://yandex.ru/pogoda/', text: 'Погода' },
  { url: 'https://mail.yandex.ru/', text: 'Почта' },
  { url: 'https://music.yandex.ru/', text: 'Музыка' },
];

const lists = [
  {
    title: 'Сейчас в СМИ',
    items: [
      {
        text: 'Путин упростил получение автомобильных номеров',
        url: 'https://ria.ru/20190730/1557023734.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
      {
        text: 'В команде Зеленского раскрыли план реформ на Украине',
        url: 'https://ria.ru/20190730/1557023732.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
      {
        text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
        url: 'https://ria.ru/20190730/1557023730.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
      {
        text: 'Суд закрыл дело Демпартии США против России',
        url: 'https://ria.ru/20190730/1557023729.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
      {
        text: 'На Украине призвали создать ракеты для удара по Москве',
        url: 'https://ria.ru/20190730/1557023744.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
    ],
  },
  {
    title: 'в Германии',
    items: [
      {
        text: 'Текст1',
        url: 'https://ria.ru/20190730/1557023733.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
      {
        text: 'Текст2',
        url: 'https://ria.ru/20190730/1557023732.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
      {
        text: 'Текст3',
        url: 'https://ria.ru/20190730/1557023731.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
      {
        text: 'Текст4',
        url: 'https://ria.ru/20190730/1557023730.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
      {
        text: 'Текст5',
        url: 'https://ria.ru/20190730/1557023729.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
    ],
  },
  {
    title: 'Рекомендуем',
    items: [
      {
        text: 'Текст1',
        url: 'https://ria.ru/20190730/1557023733.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
      {
        text: 'Текст2',
        url: 'https://ria.ru/20190730/1557023732.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
      {
        text: 'Текст3',
        url: 'https://ria.ru/20190730/1557023731.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
      {
        text: 'Текст4',
        url: 'https://ria.ru/20190730/1557023730.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
      {
        text: 'Текст5',
        url: 'https://ria.ru/20190730/1557023729.html',
        icon: 'https://cdnn21.img.ria.ru/i/favicons/favicon.ico',
      },
    ],
  },
];

const rates = [
  { title: 'USD MOEX', value: '63,52', delta: '+0,09' },
  { title: 'EUR MOEX', value: '70,86', delta: '+0,14' },
  { title: 'НЕФТЬ', value: '64,90', delta: '+1,63%' },
];

const tv = [
  { time: '02:00', show: 'ТНТ. Best', channel: 'ТНТ international', id: 1 },
  { time: '02:15', show: 'Джинглики', channel: 'Карусель INT', id: 2 },
  { time: '02:25', show: 'Наедине со всеми', channel: 'Первый', id: 3 },
];

const audio = [
  { track: 'Управление как искусство', channel: 'Успех', id: 1 },
  { track: 'Ночь. Мир в это время', channel: 'earthTV', id: 2 },
  {
    track: 'Андрей Возн...',
    channel: 'Совершенно секретно',
    id: 3,
  },
];

const mostVisitedTopics = [
  { category: 'Недвижимость', topic: 'о сталинках' },
  { category: 'Маркет', topic: 'люстры и светильники' },
  { category: 'Авто.ру', topic: 'привод 4x4 до 500 000' },
];

function App() {
  const now = new Date();
  const date = `${now.getDate()} ${monthsDeclined[now.getMonth()]}, ${
    weekDays[now.getDay()]
  }`;
  const hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
  const minutes =
    now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
  const time = `${date} ${hours}:${minutes}`;

  const mostVisited = mostVisitedTopics.map(({ category, topic }) => (
    <li key={category} className="most-visited__item">
      <span className="most-visited__category">{category}</span>
      <span className="most-visited__topic">{topic}</span>
    </li>
  ));

  const ether = <button className="btn ether">Эфир</button>;

  const shows = tv.map(({ time, show, channel, id }) => (
    <li key={id} className="tv__item">
      <span className="tv__time">{time}</span>
      <span className="tv__show">{show}</span>
      <span className="tv__channel">{channel}</span>
    </li>
  ));

  const audioShows = audio.map(({ track, channel, id }) => (
    <li key={id} className="audio__item">
      <span className="audio__show">{track}</span>
      <span className="audio__channel">{channel}</span>
    </li>
  ));

  const widgets = [
    <Widget key="Посещаемое" title="Посещаемое" >
      <ul className="most-visited">{mostVisited}</ul>
    </Widget>,
    <Widget key="Карта Германии" title="Карта Германии">
      Расписания
    </Widget>,
    <Widget key="Телепрограмма" title="Телепрограмма" icon={ether}>
      <ul className="tv">{shows}</ul>
    </Widget>,
    <Widget key="Эфир" title="Эфир">
      <ul className="audio">{audioShows}</ul>
    </Widget>,
  ];

  return (
    <div className="container">
      <div className="header">
        <div className="left">
          <News lists={lists} time={time} />
          <ExchangeRates rates={rates} />
        </div>
        <div className="right">
          <Advertisement
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
            imgSrc={board}
          />
        </div>
      </div>
      <Search links={links} randomQuery="фаза луны сегодня" />
      <Banner src={banner} url="https://www.kinopoisk.ru/film/666/" />
      <div className="widgets">{widgets}</div>
    </div>
  );
}

export default App;
