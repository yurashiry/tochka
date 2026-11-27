import { requireAccountRole } from '@app/auth'
import { jsx } from '@app/html-jsx'
import { images } from './content'
import BrandLockup from './components/BrandLockup.vue'
import { Styles } from './styles'
import Requests from './tables/requests.table'

const interests: Record<string, string> = {
  base: 'Базовый',
  extended: 'Расширенный',
  living: 'Живая история',
  advice: 'Нужен совет',
}

function formatDate(date: Date) {
  return date.toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const requestsPageRoute = app.get('/', async (ctx) => {
  requireAccountRole(ctx, 'Staff')
  const rows = await Requests.findAll(ctx, {
    limit: 200,
    order: [{ createdAt: 'desc' }, { id: 'asc' }],
  })

  return (
    <html lang="ru">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Заявки с сайта — Точка памяти</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" type="image/png" href={images.favicon} />
        <Styles />
      </head>
      <body>
        <div class="container">
          <div class="page__top">
            <a href="/" aria-label="Точка памяти — на главную" style="text-decoration: none"><BrandLockup /></a>
            <a class="page__back" href="/">← На сайт</a>
          </div>
        </div>

        <main class="page">
          <div class="container">
            <div class="page__head">
              <p class="eyebrow">Только для сотрудников</p>
              <h1>Заявки с сайта</h1>
              <p class="lead">Всего: {rows.length}. Показаны последние 200 заявок.</p>
            </div>

            {rows.length === 0
              ? <p class="admin-empty">Заявок пока нет.</p>
              : (
                <table class="admin-table">
                  <thead>
                    <tr>
                      <th>Дата</th>
                      <th>Имя</th>
                      <th>Контакт</th>
                      <th>Интерес</th>
                      <th>Комментарий</th>
                      <th>Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map(row => (
                      <tr>
                        <td>{formatDate(row.createdAt)}</td>
                        <td>{row.name}</td>
                        <td>
                          {row.contact}
                          {row.email ? <div><a href={`mailto:${row.email}`}>{row.email}</a></div> : null}
                        </td>
                        <td>{interests[row.interest ?? ''] ?? row.interest ?? '—'}</td>
                        <td>{row.message ?? '—'}</td>
                        <td>{row.status === 'done' ? 'Обработана' : 'Новая'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
          </div>
        </main>
      </body>
    </html>
  )
})
