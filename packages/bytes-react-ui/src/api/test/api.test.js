import api from '../'

/*
it('api runs well', async () => {
  // const res = await api.fetch()
  expect(res).toBe('hello')
})
*/

it('/api/file/getDirectionListOfPath runs well', async () => {
  const res = await api.fetch('/api/file/getDirectionListOfPath')
  expect(JSON.stringify(res)).toBe(
    JSON.stringify({
      code: 500,
      data: null,
      msg: '服务器出错',
    })
  )
})

it('/api/file/getStartCliPath runs well', async () => {
  const res = await api.fetch('/api/file/getStartCliPath')
  expect(JSON.stringify(res)).toBe(
    JSON.stringify({
      code: 500,
      data: 'G:\\temp\\youthCamp\\packages\\final\\packages\\bytes-react-cli',
      msg: '服务器出错',
    })
  )
})

it('/api/project/getProjectStatus runs well', async () => {
  const res = await api.fetch('/api/project/getProjectStatus')
  expect(JSON.stringify(res)).toBe(
    JSON.stringify({
      code: 200,
      data: 'waiting',
      msg: '',
    })
  )
})
