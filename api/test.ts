import {$axios} from '@/utils/api'

export const getIP = (params: { type: number }) =>
  $axios({
    url: 'http://icanhazip.com',
    method: 'get',
    params
  })

export const postIP = (data: any) =>
  $axios.$post('https://www.shihjie.com/api/flutter-test.php', data)
