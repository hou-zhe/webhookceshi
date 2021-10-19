var express = require('express');
var app = express();
var router=express.Router();
const http  = require('./utils/http');

var svgCaptcha = require('svg-captcha');
const cookieParase = require('cookie-parser');

app.use(cookieParase());

var message = ''
var token = '2076614162:AAGUCY9a-klTWiQow30AY0M2pC54jTWLBVs'
// setInterval(() => {
// 	http.get('https://api.telegram.org/bot' + token + '/getUpdates').then(res=>{
// 		var result = res.result
// 		if(result.length != 0) {
// 			if(result[result.length - 1].message.chat.type == 'group') {			//判断最后一项是不是群组成员消息
// 				let temp = result[result.length - 1].message.text + 'USDT'			//赋值最后一项消息
// 				if(message != temp) {										//判断是不是最新消息
// 					message = result[result.length - 1].message.text + 'USDT'
// 					http.get('https://api.binance.com/api/v3/ticker/24hr?symbol=' + message.toUpperCase()).then(res=>{
// 						let price = res
// 						let sendMessage = price.symbol.substring(0,price.symbol.length - 4) + '\n' + 'Price: $' + Number(price.bidPrice).toFixed(4) + '\n' + 'priceChangePercent: ' + price.priceChangePercent + '%';
// 						let url = 'https://api.telegram.org/bot' + token + '/sendMessage?parse_mode=HTML&chat_id=-646313583&text=' + sendMessage
// 						http.get(url).then(res=>{
// 							console.log(res,'发送成功')
// 						}).catch(err1=>{
// 							console.log(err1,'发送失败')
// 						})
// 					}).catch(err2 =>{
// 						console.log(err2,'不能查询到' + message)
// 					})
// 				}
// 			}
// 		}else {
// 			console.log("没有message信息的")
// 		}
		
// 	}).catch(err=>{
// 		console.log(err,'机器人获取信息错误')
// 	})
// }, 1000);

router.get('/api/getCaptcha', function(req, res, next) {
	// return api.getCaptcha(req, res, next);
	console.log(res)
	console.log(req)
  })
  
	// http.get('https://api.telegram.org/bot2076614162:AAGUCY9a-klTWiQow30AY0M2pC54jTWLBVs/setWebhook?url=https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT').then(res=>{
	// 	console.log(res,'res')
	// }).catch(err=>{
	// 	console.log(err,'err')
	// })

module.exports = router
app.listen(2090);