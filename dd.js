const request = require('request')
const NAVER_CLIENT_ID = 'K6XzcZtwVawJs1JzI3rI'
const NAVER_CLIENT_SECRET = 'fLmYf01WK4'

const option = {
  query : '이정재',
  start :1,
  display : 10
  
}

request.get({
  uri: 'https://openapi.naver.com/v1/search/movie?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&genre=1',
  qs : option,
  headers:{
    'X-Naver-Client-Id':NAVER_CLIENT_ID, 
    'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
  }
}, function(err, res, body){
  let json = JSON.parse(body) //json으로 파싱
  console.log(json)
})