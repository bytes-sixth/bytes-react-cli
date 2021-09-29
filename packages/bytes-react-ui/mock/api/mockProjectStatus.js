import Mock from 'mockjs'

export default Mock.mock({
  status: 200,
  'data|1': ['waiting', 'starting', 'success', 'error'],
  msg: '',
})
