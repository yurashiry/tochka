import { jsx } from '@app/html-jsx'
import LandingPage from './components/LandingPage.vue'
import { images } from './content'
import { Styles } from './styles'

const organizationSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Точка памяти',
  legalName: 'ИП Соколов А. В.',
  taxID: '77344179',
  description: 'Цифровые страницы памяти и QR-таблички в форме свечи для памятника',
  url: 'https://vip-petrovskaya-m.chatium.ru/',
  image: images.logo,
  telephone: '+7 925 156-09-87',
  priceRange: '4 900–15 000 ₽',
  areaServed: 'RU',
})

export const homePageRoute = app.get('/', async () => (
  <html lang="ru">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Точка памяти — страницы памяти и QR-таблички в форме свечи</title>
      <meta
        name="description"
        content="Цифровые страницы памяти и QR-таблички в форме свечи для памятника: биография, фотографии и видео, воспоминания родных, карта захоронения и книга соболезнований. Разовая оплата, бессрочное хранение, без подписок."
      />
      <meta name="theme-color" content="#F8F5ED" />
      <link rel="icon" type="image/png" href={images.favicon} />
      <link rel="apple-touch-icon" href={images.favicon} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Точка памяти" />
      <meta property="og:title" content="Точка памяти — страницы памяти и QR-таблички" />
      <meta
        property="og:description"
        content="Страница памяти о человеке и табличка-свеча с QR-кодом для памятника. Разовая оплата, бессрочное хранение."
      />
      <meta property="og:image" content={images.logo} />
      <meta property="og:locale" content="ru_RU" />
      <script type="application/ld+json">{organizationSchema}</script>
      <Styles />
    </head>
    <body>
      <LandingPage />
    </body>
  </html>
))
