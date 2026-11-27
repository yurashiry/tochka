import { Heap } from '@app/heap'

const Requests = Heap.Table('t_memory_requests_W3F7', {
  name: Heap.String({ customMeta: { title: 'Имя' } }),
  contact: Heap.String({ customMeta: { title: 'Телефон или мессенджер' } }),
  email: Heap.Optional(Heap.String({ customMeta: { title: 'Email' } })),
  interest: Heap.Optional(Heap.String({ customMeta: { title: 'Что интересует' } })),
  message: Heap.Optional(Heap.String({ customMeta: { title: 'Комментарий' } })),
  status: Heap.Enum({ new: 'new', done: 'done' } as const, { customMeta: { title: 'Статус' } }),
  source: Heap.Optional(Heap.String({ customMeta: { title: 'Источник' } })),
}, {
  customMeta: {
    title: 'Заявки с сайта',
    description: 'Заявки на страницы памяти, оставленные на лендинге «Точка памяти»',
  },
})

export default Requests
