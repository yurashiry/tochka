import Requests from '../tables/requests.table'

export const requestCreateRoute = app.post('/')
  .body(s => ({
    name: s.string().min(1).max(120),
    contact: s.string().min(2).max(200),
    email: s.string().max(200).optional(),
    interest: s.enum({ base: 'base', extended: 'extended', living: 'living', advice: 'advice' }).optional(),
    message: s.string().max(2000).optional(),
    consent: s.boolean(),
    company: s.string().max(200).optional(),
  }))
  .handle(async (ctx, req) => {
    if (req.body.company) {
      return { ok: true }
    }
    if (!req.body.consent) {
      return { ok: false, error: 'consent_required' }
    }
    await Requests.create(ctx, {
      name: req.body.name.trim(),
      contact: req.body.contact.trim(),
      email: req.body.email?.trim() || undefined,
      interest: req.body.interest || 'advice',
      message: req.body.message?.trim() || undefined,
      status: 'new',
      source: 'landing',
    })
    return { ok: true }
  })
