import api from '..'

it('api runs well', async () => {
  const res = await api.fetch()
  expect(res).toBe('hello')
})
