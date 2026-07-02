/* ============================================================
   DRAMIFY STUDIO — i18n
   Язык определяется по языку системы/браузера (navigator.languages):
     ru → русский · kk → казахский · всё остальное → английский (FALLBACK).
   Перевод текста живёт в словаре dict. В HTML элементы помечены:
     data-i18n="key"        → подставляется в textContent
     data-i18n-html="key"   → подставляется в innerHTML (для <br>, <b>, <span>)
     data-i18n-attr="attr:key[,attr:key]" → подставляется в атрибут (aria-label и т.п.)
   ============================================================ */

export const SUPPORTED = ['ru', 'en', 'kk'];
export const FALLBACK = 'en';

export const dict = {
  ru: {
    'meta.title': 'Dramify Studio — мультфильмы по реальным историям',
    'meta.desc': 'Dramify Studio создаёт анимированные мультфильмы по реальным историям людей — для свадеб, близких, детей и особенных моментов.',

    'wa.msg': 'Здравствуйте, хочу заказать мультфильм',
    'wa.msgPromo': 'Здравствуйте, хочу заказать мультфильм с промокодом FAMILY',

    'nav.main': 'Главное',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.process': 'Процесс',
    'nav.faq': 'FAQ',
    'nav.cta': 'Заказать',

    'hero.l1': 'ВАША',
    'hero.l2': 'ИСТОРИЯ',
    'hero.l3': 'КАК',
    'hero.l4': 'МУЛЬТФИЛЬМ',
    'hero.text': 'Не шаблонное поздравление. Не стоковое видео. А настоящая история — про вас, ваших людей и момент, который хочется помнить.',
    'hero.cta': 'Заказать мультфильм',
    'hero.process': 'Посмотреть процесс',

    'about.eyebrow': 'О нас',
    'about.h2': 'Мы создаем не просто видео.<br /><span class="ink-soft">Мы сохраняем эмоции.</span>',
    'about.p1': 'Мы — Dramify Studio. Мы создаем анимированные мультфильмы по реальным историям людей. Не шаблонные поздравления и не стоковые видео, а ваша история, ваши моменты, ваши люди.',
    'about.p2': 'За каждым нашим мультфильмом стоит что-то настоящее — первый взгляд, долгий путь вместе, момент, который хочется помнить вечно. За год мы сохранили больше 300 таких историй для пар, семей и компаний, которые хотят говорить через эмоцию, а не через баннер.',
    'about.p3': 'Мы верим, что у каждого человека есть история, которая заслуживает быть рассказана красиво.',
    'about.stat1label': 'историй сохранено',
    'about.stat2num': '5 дней',
    'about.stat2label': 'средний срок',
    'about.stat3label': 'индивидуальный сценарий',
    'about.figcaption': 'Каждый кадр с душой',

    'services.eyebrow': 'Услуги',
    'services.h2': 'Выберите историю,<br />которую хочется оживить',
    'services.hint': 'Нажмите на карточку, чтобы узнать больше и заказать',
    'card.more': 'Подробнее',
    'card.wedding.title': 'Для свадьбы',
    'card.wedding.text': 'Короткий мультфильм о вашей любви, знакомстве, предложении или свадьбе.',
    'card.wedding.aria': 'Для свадьбы — подробнее',
    'card.loved.pill': 'Популярное',
    'card.loved.title': 'Для близкого человека',
    'card.loved.text': 'Трогательная история для человека, которому хочется сказать больше, чем словами.',
    'card.loved.aria': 'Для близкого человека — подробнее',
    'card.kids.title': 'Для детей',
    'card.kids.text': 'Добрый мультфильм с ребёнком в главной роли — как маленькое персональное приключение.',
    'card.kids.aria': 'Для детей — подробнее',

    'process.eyebrow': 'Процесс',
    'process.h2': 'От вашей идеи<br />до мультфильма',
    'process.s1': 'Написать нам',
    'process.s2': 'С вами связывается менеджер',
    'process.s3': 'Вы рассказываете историю',
    'process.s4': 'Мы оцениваем сложность',
    'process.s5': 'Оплата',
    'process.s6': 'Вам пишет сценарист',
    'process.s7': 'Создание сценария',
    'process.s8': 'Отправка фото',
    'process.s9': 'Монтажёр приступает к работе',

    'faq.eyebrow': 'FAQ',
    'faq.h2': 'Отвечаем на главное',
    'faq.q1': 'Сколько стоит мультфильм?',
    'faq.a1': 'Цена полностью индивидуальна и формируется относительно вашей истории, длительности и сложности.',
    'faq.q2': 'Как долго делается мультфильм?',
    'faq.a2': 'В среднем создание короткометражного мультфильма занимает 5 рабочих дней.',
    'faq.q3': 'Будем ли мы похожи в мультфильме?',
    'faq.a3': 'Да. Наш креатор согласует с вами образ героя, чтобы персонаж был похож на вас.',
    'faq.q4': 'Что нужно от меня?',
    'faq.a4': 'Идея, несколько фото, важные детали истории и настроение, которое вы хотите передать.',
    'faq.cta.title': 'Заказать<br />мультфильм',
    'faq.cta.sub': 'Напишите нам<br />в WhatsApp',

    'footer.tag': 'команда, которая создаёт мультфильмы по реальным историям',
    'footer.copy': '© 2026 Dramify Studio. Все права защищены.',

    'modal.wedding.title': 'Для свадьбы',
    'modal.wedding.text': 'Короткий мультфильм о вашей любви, знакомстве, предложении или свадьбе. Мы превратим ваш путь вдвоём в тёплую анимационную историю, которую захочется пересматривать.',
    'modal.loved.title': 'Для близкого человека',
    'modal.loved.text': 'Трогательная история для человека, которому хочется сказать больше, чем словами. Идеальный подарок на день рождения, годовщину или просто так, от сердца.',
    'modal.kids.title': 'Для детей',
    'modal.kids.text': 'Добрый мультфильм с ребёнком в главной роли, как маленькое персональное приключение. Ваш малыш станет героем собственной волшебной истории.',
    'modal.wa': 'Написать в WhatsApp',

    'promo.title': 'Скидка 20%',
    'promo.text': 'при использовании промокода <b>FAMILY</b>',
    'promo.cta': 'Перейти в WhatsApp',
    'promo.mini': 'FAMILY <b>−20%</b>',

    'a11y.navMain': 'Основная навигация',
    'a11y.close': 'Закрыть',
    'a11y.waWrite': 'Написать в WhatsApp',
    'a11y.footerNav': 'Навигация в подвале',
    'a11y.promoOpen': 'Открыть промокод FAMILY',
  },

  en: {
    'meta.title': 'Dramify Studio — cartoons based on real stories',
    'meta.desc': "Dramify Studio creates animated cartoons based on people's real stories — for weddings, loved ones, kids and special moments.",

    'wa.msg': "Hello, I'd like to order a cartoon",
    'wa.msgPromo': "Hello, I'd like to order a cartoon with promo code FAMILY",

    'nav.main': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.faq': 'FAQ',
    'nav.cta': 'Order',

    'hero.l1': 'YOUR',
    'hero.l2': 'STORY',
    'hero.l3': 'AS A',
    'hero.l4': 'CARTOON',
    'hero.text': 'Not a template greeting. Not stock footage. A real story — about you, your people and the moment you want to remember.',
    'hero.cta': 'Order a cartoon',
    'hero.process': 'See the process',

    'about.eyebrow': 'About us',
    'about.h2': "We don't just make videos.<br /><span class=\"ink-soft\">We preserve emotions.</span>",
    'about.p1': "We're Dramify Studio. We create animated cartoons based on people's real stories. Not template greetings or stock videos, but your story, your moments, your people.",
    'about.p2': "Behind every cartoon we make there's something real — a first glance, a long road together, a moment worth remembering forever. Over the past year we've preserved more than 300 such stories for couples, families and brands who want to speak through emotion, not a banner.",
    'about.p3': 'We believe every person has a story that deserves to be told beautifully.',
    'about.stat1label': 'stories preserved',
    'about.stat2num': '5 days',
    'about.stat2label': 'average turnaround',
    'about.stat3label': 'custom script',
    'about.figcaption': 'Every frame with soul',

    'services.eyebrow': 'Services',
    'services.h2': 'Choose the story<br />you want to bring to life',
    'services.hint': 'Tap a card to learn more and order',
    'card.more': 'Learn more',
    'card.wedding.title': 'For a wedding',
    'card.wedding.text': 'A short cartoon about your love — how you met, the proposal or the wedding.',
    'card.wedding.aria': 'For a wedding — learn more',
    'card.loved.pill': 'Popular',
    'card.loved.title': 'For a loved one',
    'card.loved.text': 'A touching story for someone you want to tell more than words can say.',
    'card.loved.aria': 'For a loved one — learn more',
    'card.kids.title': 'For kids',
    'card.kids.text': 'A heartwarming cartoon starring your child — like a little personal adventure.',
    'card.kids.aria': 'For kids — learn more',

    'process.eyebrow': 'Process',
    'process.h2': 'From your idea<br />to a cartoon',
    'process.s1': 'Message us',
    'process.s2': 'A manager gets in touch',
    'process.s3': 'You share your story',
    'process.s4': 'We assess the complexity',
    'process.s5': 'Payment',
    'process.s6': 'A scriptwriter reaches out',
    'process.s7': 'Script creation',
    'process.s8': 'You send photos',
    'process.s9': 'The editor gets to work',

    'faq.eyebrow': 'FAQ',
    'faq.h2': 'Answering the essentials',
    'faq.q1': 'How much does a cartoon cost?',
    'faq.a1': 'The price is fully individual and depends on your story, its length and complexity.',
    'faq.q2': 'How long does a cartoon take?',
    'faq.a2': 'On average, creating a short cartoon takes 5 working days.',
    'faq.q3': 'Will we look like ourselves in the cartoon?',
    'faq.a3': "Yes. Our creator agrees the character's look with you so it resembles you.",
    'faq.q4': 'What do you need from me?',
    'faq.a4': 'An idea, a few photos, the key details of the story and the mood you want to convey.',
    'faq.cta.title': 'Order<br />a cartoon',
    'faq.cta.sub': 'Message us<br />on WhatsApp',

    'footer.tag': 'the team creating cartoons based on real stories',
    'footer.copy': '© 2026 Dramify Studio. All rights reserved.',

    'modal.wedding.title': 'For a wedding',
    'modal.wedding.text': "A short cartoon about your love — how you met, the proposal or the wedding. We'll turn your journey together into a warm animated story you'll want to watch again and again.",
    'modal.loved.title': 'For a loved one',
    'modal.loved.text': 'A touching story for someone you want to tell more than words can say. The perfect gift for a birthday, an anniversary, or just because — straight from the heart.',
    'modal.kids.title': 'For kids',
    'modal.kids.text': 'A heartwarming cartoon starring your child, like a little personal adventure. Your little one becomes the hero of their own magical story.',
    'modal.wa': 'Message on WhatsApp',

    'promo.title': '20% off',
    'promo.text': 'with promo code <b>FAMILY</b>',
    'promo.cta': 'Open WhatsApp',
    'promo.mini': 'FAMILY <b>−20%</b>',

    'a11y.navMain': 'Main navigation',
    'a11y.close': 'Close',
    'a11y.waWrite': 'Message on WhatsApp',
    'a11y.footerNav': 'Footer navigation',
    'a11y.promoOpen': 'Open promo code FAMILY',
  },

  // TODO: казахский. Пока пусто → недостающие ключи берутся из FALLBACK (английский).
  // Когда будут тексты — заполни этот объект теми же ключами, что и в ru/en, и всё
  // подхватится автоматически (KK-интерфейс начнёт показывать казахский).
  kk: {},
};

let current = FALLBACK;

/** Текущий активный язык ('ru' | 'en' | 'kk'). */
export function getLang() {
  return current;
}

/** Выбирает язык по предпочтениям браузера/системы: ru/kk как есть, иначе en. */
export function pickLang(preferred) {
  const list =
    preferred ||
    (typeof navigator !== 'undefined' && navigator.languages && navigator.languages.length
      ? navigator.languages
      : [(typeof navigator !== 'undefined' && navigator.language) || 'en']);
  for (const raw of list) {
    const code = String(raw).toLowerCase().slice(0, 2);
    if (code === 'ru') return 'ru';
    if (code === 'kk') return 'kk';
  }
  return 'en';
}

/** Перевод по ключу для текущего языка с откатом: lang → FALLBACK → ru → сам ключ. */
export function t(key) {
  const chain = [current, FALLBACK, 'ru'];
  for (const lang of chain) {
    const table = dict[lang];
    if (table && table[key] != null) return table[key];
  }
  return key;
}

function setMeta(attr, value, content) {
  const el = document.querySelector(`meta[${attr}="${value}"]`);
  if (el && content != null) el.setAttribute('content', content);
}

/** Применяет язык ко всему документу: тексты, атрибуты, <head>, WhatsApp-ссылки. */
export function applyLang(lang) {
  current = SUPPORTED.includes(lang) ? lang : FALLBACK;
  // Атрибут языка должен отражать РЕАЛЬНО показанный текст: если словарь языка
  // ещё пуст (напр. kk без переводов), контент берётся из FALLBACK — его и указываем.
  const hasTable = dict[current] && Object.keys(dict[current]).length > 0;
  document.documentElement.lang = hasTable ? current : FALLBACK;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });

  // <head>
  document.title = t('meta.title');
  setMeta('name', 'description', t('meta.desc'));
  setMeta('property', 'og:title', t('meta.title'));
  setMeta('property', 'og:description', t('meta.desc'));
  setMeta('name', 'twitter:title', t('meta.title'));

  // WhatsApp — подставляем текст сообщения на активном языке
  document.querySelectorAll('a[href*="wa.me"]').forEach((a) => {
    try {
      const url = new URL(a.href);
      url.searchParams.set('text', t(a.dataset.wa === 'promo' ? 'wa.msgPromo' : 'wa.msg'));
      a.setAttribute('href', url.toString());
    } catch {
      /* некорректный href — пропускаем */
    }
  });

  return current;
}

/** Определяет язык и применяет его. Вызывать один раз при загрузке. */
export function initI18n() {
  return applyLang(pickLang());
}
