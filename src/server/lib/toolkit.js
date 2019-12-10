const get = require('lodash/get')
const isFunc = require('lodash/isFunction')
const cookieParser = require('cookie')
const accepts = require('accepts')
const browser = require('bowser')
const requestIp = require('request-ip')

const mobileDetect = (ua) => {
  // reference to http://detectmobilebrowsers.com/

  return (
    /(android|bb\d+|meego).+mobile|avantgo|darwin|proxy|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile/i.test(ua) ||
    /ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone/i.test(ua) ||
    /p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua.substr(0, 4)) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)/i.test(ua.substr(0, 4)) ||
    /aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)/i.test(ua.substr(0, 4)) ||
    /c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)/i.test(ua.substr(0, 4)) ||
    /el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)/i.test(ua.substr(0, 4)) ||
    /haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230/i.test(ua.substr(0, 4)) ||
    /iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon/i.test(ua.substr(0, 4)) ||
    /kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\//i.test(ua.substr(0, 4)) ||
    /ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )/i.test(ua.substr(0, 4)) ||
    /mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im/i.test(ua.substr(0, 4)) ||
    /op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a/i.test(ua.substr(0, 4)) ||
    /qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\//i.test(ua.substr(0, 4)) ||
    /se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)/i.test(ua.substr(0, 4)) ||
    /t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)/i.test(ua.substr(0, 4)) ||
    /vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(ua.substr(0, 4))
  )
}

class ToolkitService {
  constructor (req) {
    this.supportedLocales = ['es-us', 'en-us']
    this.req = req
    this.ua = get(this.req, 'headers[\'user-agent\']', '')
    this.browser = null
    this.cookies = this.parseCookies()
  }

  initKeys (keys = []) {
    return keys.reduce((acc, o) => {
      if (isFunc(this[o])) {
        acc[o] = this[o]()
      } else {
        acc[o] = this[o]
      }
      return acc
    }, {})
  }

  requestUrl () {
    return this.req.url.href.replace('/template', '')
  }

  local () {
    return accepts(this.req).language(this.supportedLocales) || 'en-us'
  }

  ip () {
    return requestIp.getClientIp(this.req)
  }

  getBrowser () {
    if (this.browser) return this.browser
    if (!this.ua) return
    this.browser = browser.getParser(this.ua).getResult()
    return this.browser
  }

  isInIPadApp () {
    return get(this.getBrowser(), 'platform.model') === 'iPad'
  }

  isIos () {
    return get(this.getBrowser(), 'platform.type') === 'iOS'
  }

  isMobile () {
    return (
      get(this.getBrowser(), 'platform.type') === 'mobile' ||
      ['Bada', 'BlackBerry', 'WindowsPhone', 'iOS', 'Android', 'Tizen'].includes(get(this.getBrowser(), 'os.name')) ||
      mobileDetect(this.ua)
    )
  }

  isAmp () {
    return this.req.url.href.indexOf('/amp') >= 0
  }

  parseCookies (options = {}) {
    if (!this.req.headers) return {}
    const cookies = this.req.headers.cookie
    if (!cookies) return {}
    this.cookies = cookieParser.parse(cookies, options)
    return this.cookies
  }
}

module.exports = ToolkitService
