import { newsItems } from '../data/news';

const phone = '+78572931614';
const phoneView = '+7 (8572) 93-16-14';
const maxChannel = 'https://max.ru/id9403014108_gos';

const patientGroups = [
  'Боли в спине и суставах',
  'Восстановление после травм и операций',
  'Неврологические нарушения',
  'Заболевания ЛОР-профиля',
  'Кожные заболевания',
  'Необходимость медицинской реабилитации'
];

const doctors = ['Травматолог', 'ЛОР', 'Дерматолог', 'Невролог', 'Физиотерапевт'];

const procedures = [
  { title: 'Лечебные ванны', text: 'Могут применяться различные виды ванн, включая жемчужные, хвойные и минеральные — по показаниям.' },
  { title: 'Лечебные души', text: 'Могут назначаться душ Шарко, циркулярный, восходящий и другие виды лечебного душа.' },
  { title: 'Подводный душ-массаж и гидромассаж', text: 'Водные методы воздействия для восстановительного лечения при наличии медицинских показаний.' },
  { title: 'Физиотерапевтические процедуры', text: 'Могут использоваться электролечение, светолечение, магнитотерапия, ультразвуковая терапия и другие методы.' },
  { title: 'Ингаляции и сопутствующие методики', text: 'Применяются как часть комплексного лечения, если метод рекомендован врачом.' },
  { title: 'Массаж, ЛФК и реабилитация', text: 'Курс восстановительных мероприятий подбирается индивидуально после консультации специалиста.' }
];

export default function HomePage() { return <main>{/* content unchanged */}
<section className="hero container"><p className="badge">Государственное медицинское учреждение • Бесплатно по ОМС</p><h1>Водолечение, физиотерапия и реабилитация по ОМС в Луганске</h1><p>ГБУЗ «Луганская республиканская физиотерапевтическая поликлиника имени профессора А. Е. Щербака» ЛНР оказывает медицинскую помощь бесплатно по полису ОМС. Приём ведут профильные специалисты, процедуры назначаются врачом при наличии показаний.</p><div className="actions"><a className="btn primary" href={`tel:${phone}`}>Позвонить</a><a className="btn secondary" href={maxChannel} target="_blank" rel="noreferrer">Канал в MAX</a></div></section>
<section className="container"><h2>Что мы делаем</h2><p>Поликлиника помогает пациентам пройти водолечебные и физиотерапевтические процедуры, а также медицинскую реабилитацию по ОМС. Конкретный план лечения определяет врач после осмотра.</p></section>
<section className="container"><h2>Кому может быть полезно</h2><div className="grid cards">{patientGroups.map((item) => (<article className="card" key={item}><h3>{item}</h3></article>))}</div><p className="notice">Окончательное решение о назначении процедур принимает врач.</p></section>
<section className="container"><h2>Как попасть на процедуры по ОМС</h2><ol className="steps"><li>Обратитесь в поликлинику по телефону или лично.</li><li>Запишитесь или попадите на приём к врачу.</li><li>Пройдите консультацию у травматолога, ЛОР-врача, дерматолога, невролога или физиотерапевта.</li><li>Получите назначение на процедуры при наличии показаний.</li><li>Пройдите курс лечения бесплатно по ОМС.</li></ol></section>
<section className="container"><h2>Врачи, которые могут назначить лечение</h2><div className="grid cards small">{doctors.map((doctor) => (<article className="card" key={doctor}><h3>{doctor}</h3></article>))}</div></section>
<section className="container"><h2>Процедуры</h2><p className="notice">В поликлинике могут применяться методы водолечения, физиотерапии и медицинской реабилитации. Конкретный набор процедур определяет врач после осмотра.</p><div className="grid cards">{procedures.map((item) => (<article className="card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>))}</div></section>
<section className="container"><h2>Почему выбирают нас</h2><ul className="benefits"><li>Бесплатно по ОМС.</li><li>Государственное учреждение.</li><li>Профильные специалисты.</li><li>Комплексное восстановление.</li><li>Удобный график 07:00–19:00.</li><li>Понятный маршрут пациента.</li></ul></section>
<section className="container"><h2>Новости</h2><div className="grid cards">{newsItems.map((news) => (<article className="card" key={news.id}><p className="date">{news.date}</p><h3>{news.title}</h3><p>{news.excerpt}</p><a className="link" href={news.maxUrl} target="_blank" rel="noreferrer">Читать в MAX</a></article>))}</div></section>
<section className="container contacts"><h2>Контакты</h2><p><strong>ГБУЗ «Луганская республиканская физиотерапевтическая поликлиника имени профессора А. Е. Щербака» ЛНР</strong></p><p>Адрес: 291001, Луганская Народная Республика, г. Луганск, ул. Даля, д. 7.</p><p>График: Пн–Пт: 07:00–19:00.</p><p>Телефон: <a href={`tel:${phone}`}>{phoneView}</a></p><div className="actions"><a className="btn primary" href={`tel:${phone}`}>Позвонить</a><a className="btn secondary" href={maxChannel} target="_blank" rel="noreferrer">Открыть канал MAX</a></div><div className="mapPlaceholder" aria-label="Место под карту">Здесь может быть размещена карта проезда</div></section>
<footer className="container footer">Имеются противопоказания. Необходима консультация специалиста. Процедуры назначаются врачом при наличии медицинских показаний.</footer></main>; }
