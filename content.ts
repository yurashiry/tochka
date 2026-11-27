// @shared
export const brand = {
  name: 'Точка памяти',
  tagline: 'Всегда рядом',
  phone: '+7 925 156-09-87',
  phoneHref: 'tel:+79251560987',
  telegram: '',
  telegramHref: '',
  whatsapp: '',
  email: '',
  city: '',
}

export const images = {
  logo: 'https://fs.chatium.ru/get/image_msk_WFOTV2GtYo.696x498.png',
  markLight: 'https://fs.chatium.ru/get/image_msk_shDkYPd2pD.320x319.png',
  mark: 'https://fs.chatium.ru/get/image_msk_B0F0No2mw6.320x319.png',
  favicon: 'https://fs.chatium.ru/get/image_msk_mhngGfLMAR.512x512.png',
  qr: 'https://fs.chatium.ru/get/image_msk_DgxoKk4rxw.740x740.png',
  qrInk: 'https://fs.chatium.ru/get/image_msk_2zr5IsuhMM.604x604.png',
  qrTarget: 'https://vip-petrovskaya-m.chatium.ru/',
}

export type Example = {
  id: string
  name: string
  years: string
  tag: string
  description: string
  image: string
  alt: string
}

export const examples: Example[] = [
  {
    id: 'yurkevich',
    name: 'Юркевич Эльдар Викторович',
    years: '10.07.1986 — 03.03.2025',
    tag: 'Муж, отец, друг',
    description: 'Коллаж из семейных фотографий, биография и слова близких.',
    image: 'https://fs.chatium.ru/get/image_msk_xD0RLzy4ny.1100x1955.jpeg',
    alt: 'Страница памяти Эльдара Юркевича',
  },
  {
    id: 'aristarkhova',
    name: 'Аристархова Евгения Никитична',
    years: '02.01.1903 — 24.07.1988',
    tag: 'Наша бабушка',
    description: 'Архивные снимки, история жизни и воспоминания внуков.',
    image: 'https://fs.chatium.ru/get/image_msk_s03UNaYa5c.900x1600.jpeg',
    alt: 'Страница памяти Евгении Аристарховой',
  },
  {
    id: 'pakhomova',
    name: 'Пахомова Инна Ивановна',
    years: '20.02.1942 — 08.03.2014',
    tag: 'Девочка с глазами войны',
    description: 'История жизни в главах: детство, юность, семья, любовь.',
    image: 'https://fs.chatium.ru/get/image_msk_1kcqInzv33.1100x1955.jpeg',
    alt: 'Страница памяти Инны Пахомовой',
  },
]

export const nav = [
  { href: '#what', label: 'Что внутри' },
  { href: '#how', label: 'Как это работает' },
  { href: '#candle', label: 'Табличка' },
  { href: '#price', label: 'Тарифы' },
  { href: '#examples', label: 'Примеры' },
  { href: '#faq', label: 'Вопросы' },
]
