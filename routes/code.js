// const code = require("svg-captcha");
// function createCode() {
//     return code.create({
//         size: 4,
//         ignoreChars: "0o1iIl",
//         noise: 3,
//         color: true,
//         background: "#fff",
//         fontSize: 60
//     });
// }
// module.exports = createCode;
var svgCaptcha = require('svg-captcha');


function getCaptcha(req, res, next) {
    var captcha = svgCaptcha.create({  
      // 翻转颜色  
      inverse: false,  
      // 字体大小  
      fontSize: 36,  
      // 噪声线条数  
      noise: 2,  
      // 宽度  
      width: 80,  
      // 高度  
      height: 30,  
    });  
    // 保存到session,忽略大小写  
    req.session = captcha.text.toLowerCase(); 
    console.log(req.session); //0xtg 生成的验证码
    //保存到cookie 方便前端调用验证
    res.cookie('captcha', req.session); 
    res.setHeader('Content-Type', 'image/svg+xml');
    res.write(String(captcha.data));
    res.end();
  }