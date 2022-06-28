export default {
  currencyType: 'Rp',
  add0(m) {
    return m < 10 ? '0' + m : m
  },
  ///时间戳 转化-4时区时间戳
  serverTime(time) {
    //参数i为时区值数字，比如北京为东八区则输进8,西5输入-5
    // if (typeof i !== 'number') return;
    var d = new Date(time)
    //得到1970年一月一日到现在的秒数
    var len = d.getTime()
    //本地时间与GMT时间的时间偏移差
    var offset = d.getTimezoneOffset() * 60000
    //得到现在的格林尼治时间
    var utcTime = len + offset
    return utcTime + 3600000 * -4
  },
  ///本地时间转服务器时间
  localToServer() {
    var d = new Date()
    //得到1970年一月一日到现在的秒数
    var len = d.getTime()
    //本地时间与GMT时间的时间偏移差
    var offset = d.getTimezoneOffset() * 60000
    //得到现在的格林尼治时间
    var utcTime = len + offset
    return utcTime + 3600000 * -4
  },
  ///本地时间转服务器时间
  toLocalTime(time) {
    // const toDate = new Date("2020-09-10 06:26:59");
    var d = this.formattime(time)
    var localTime = time
    var localOffset = d.getTimezoneOffset() * 60000 //getTimezoneOffset()返回是以分钟为单位，需要转化成ms
    var utc = localTime + localOffset
    var offset = 9 //以韩国时间为例，东9区
    var korean = utc + 3600000 * offset
    var nd = new Date(korean)
    let YY = nd.getFullYear() + '年'
    let MM = nd.getMonth() + 1 + '月'
    let dd = nd.getDate() + '日  '
    let hh = nd.getHours() + ':'
    let mm = nd.getMinutes() + ':'
    let ss = nd.getSeconds()
    return YY + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss
  },
  ///
  formattime(shijianchuo, flag = false) {
    let add0 = this.add0

    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(Number(shijianchuo))
    var y = time.getFullYear()
    var m = time.getMonth() + 1
    var d = time.getDate()
    var h = time.getHours()
    var mm = time.getMinutes()
    var s = time.getSeconds()
    if (s == 59) {
      return (
        add0(y) +
        '-' +
        add0(m) +
        '-' +
        add0(d) +
        ' ' +
        add0(h) +
        ':' +
        add0(flag ? mm + 1 : mm) +
        ':' +
        add0(flag ? 0 : s)
      )
    }
    return (
      add0(y) +
      '-' +
      add0(m) +
      '-' +
      add0(d) +
      ' ' +
      add0(h) +
      ':' +
      add0(mm) +
      ':' +
      add0(flag ? s + 1 : s)
    )
  },

  formattimestr(shijianchuo, flag, isHours = true) {
    let add0 = this.add0
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(this.serverTime(shijianchuo))
    var y = time.getFullYear()
    var m = time.getMonth() + 1
    var d = time.getDate()
    var h = time.getHours()
    var mm = time.getMinutes()
    var s = time.getSeconds()
    if (s == 59) {
      return (
        add0(y) +
        '-' +
        add0(m) +
        '-' +
        add0(d) +
        ' ' +
        add0(h) +
        ':' +
        add0(flag ? mm + 1 : mm) +
        ':' +
        add0(flag ? 0 : s)
      )
    }
    if (isHours) {
      return (
        add0(y) +
        '-' +
        add0(m) +
        '-' +
        add0(d) +
        ' ' +
        add0(h) +
        ':' +
        add0(mm) +
        ':' +
        add0(flag ? s + 1 : s)
      )
    } else {
      return add0(y) + '-' + add0(m) + '-' + add0(d)
    }
  },
  downApp() {
    let _downUrl = ''
    let u = navigator.userAgent
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
    if (isiOS) {
      return
    } else if (isAndroid) {
      _downUrl = 'https://m.sunpowers.online/media/apk/sunpower.apk'
      // _downUrl = 'https://mysolarpower.cc/apk/MySolarPower.apk'
    }
    setTimeout(() => {
      window.location.href = _downUrl
    }, 100)
  },
  getPstr(val) {
    val = Math.floor(val)
    let strVal = String(val)
    if (strVal.length > 6) {
      const reg = /(?=(\B)(\d{3})+$)/g
      return strVal.replace(reg, '.')
    }
    return val
  },
  getkStr(number, decimals = 0, decPoint = '.', thousandsSep = '.') {
    number = (number + '').replace(/[^0-9+-Ee.]/g, '')
    let n = !isFinite(+number) ? 0 : +number
    let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
    let sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep
    let dec = typeof decPoint === 'undefined' ? '.' : decPoint
    let s = ''
    let toFixedFix = function(n, prec) {
      let k = Math.pow(10, prec)
      return '' + Math.ceil(n * k) / k
    }
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
    let re = /(-?\d+)(\d{3})/
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, '$1' + sep + '$2')
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || ''
      s[1] += new Array(prec - s[1].length + 1).join('0')
    }
    return s.join(dec)
  },
  formatDecimal(num, decimal) {
    num = num.toString()
    let index = num.indexOf('.')
    if (index !== -1) {
      num = num.substring(0, decimal + index + 1)
    } else {
      num = num.substring(0)
    }
    return parseFloat(num).toFixed(decimal)
  },
  openWindow(url, targetType = '_blank', id = 'open', download = false) {
    // 如果存在则删除
    if (document.getElementById(id)) {
      document.body.removeChild(document.getElementById(id))
    }
    const a = document.createElement('a')
    a.setAttribute('href', url)
    if (download) {
      a.setAttribute('download', url)
    }
    a.setAttribute('target', targetType)
    a.setAttribute('id', id)
    document.body.appendChild(a)
    a.click()
  },
}
