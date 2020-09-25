import DateFormat from './date-format';

const uuid = require('uuid');

const MOBILE_PHONE_REG_STR =
  '^(13[0-9]|144|145|146|147|149|15[0-235-9]|165|166|167|170|171|173|17[5-8]|18[0-9]|191|19[8-9])[0-9]{8}$';
const MOBILE_PHONE_REG = new RegExp(MOBILE_PHONE_REG_STR);

export default {
  URL_REGEXP: /(https?:\/\/[A-Za-z0-9-._~:/?#\[\]@!$&'()*+,;=%]+|[A-Za-z0-9]+[A-Za-z0-9\.]*\.(?:cn|com|COM|so|me|co|im|cc)(?:\/[A-Za-z0-9-._~:/?#\[\]@!$&'()*+,;=%]*)?)/g,
  NUMBER_REG: /^[0-9]+.?[0-9]*$/,
  INTEGER_REG: /^[1-9]+[0-9]*]*$/,

  clone(obj) {
    return typeof obj === 'object' ? JSON.parse(JSON.stringify(obj)) : obj;
  },

  locationQuery() {
    const query = {};
    window.location.search &&
      window.location.search
        .slice(1)
        .split('&')
        .forEach((v) => {
          const val = v.split('=');
          query[val[0]] = val[1];
        });
    return query;
  },

  setTitle(title) {
    document.title = title || 'hello world';
  },

  // 数字 => 千位分隔符
  numberThousandsSeparator(num) {
    if (num === null || num === '' || global.isNaN(num)) {
      return '--';
    }
    const reg = /\d{1,3}(?=(\d{3})+$)/g;
    return `${num}`.replace(reg, '$&,');
  },

  /**
   * 日期格式化 YYYY-MM-DD hh:mm
   */
  dateFormat(date) {
    return DateFormat(date, 'YYYY-MM-DD hh:mm');
  },

  /**
   * 日期格式化2 YYYY.MM.DD
   */
  dateFormat2D(date) {
    return DateFormat(date, 'YYYY-MM-DD');
  },
  dateFormat2DWord(date) {
    return DateFormat(date, 'MM月DD日');
  },

  /**
   * 日期格式化2 MM.DD
   */
  dateFormat2MD(date) {
    return DateFormat(date, 'MM-DD');
  },
  dateFormat2HM(date) {
    return DateFormat(date, 'hh-00');
  },
  dateFormat2HMS(date) {
    return DateFormat(date, 'hh:mm:ss');
  },
  dateFormat2HMSWord(str) {
    // str: 08:03:50
    const data = str.trim().split(':');
    const hour = +data[0];
    const min = +data[1];
    const second = +data[2];
    if (second) {
      return `${hour}点${min}分${second}秒`;
    }
    if (min) {
      return `${hour}点${min}分`;
    }
    return `${hour}点`;
  },
  getDateString() {
    const time = new Date();
    const year = time
      .getFullYear()
      .toString()
      .substr(2);
    const month = time.getMonth() + 1;
    const hour = time.getHours();
    const date = time.getDate();
    const min = time.getMinutes();

    return `${year}${month < 10 ? `0${month}` : month}${
      date < 10 ? `0${date}` : date
    }${hour < 10 ? `0${hour}` : hour}${min < 10 ? `0${min}` : min}`;
  },
  getMonthAndDate(dateNumber) {
    const time = new Date(dateNumber);
    const month = time.getMonth() + 1;
    const date = time.getDate();
    return `${month}月${date}日`;
  },
  isJson(req) {
    const str =
      req.headers['Content-Type'] || req.headers['content-type'] || '';
    const contentType = str.split(';')[0];
    return contentType === 'application/json';
  },

  // 手机号校验
  checkMobile(mobile) {
    const REG_MOBILE = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])[0-9]{8}$/;
    let isMobile = false;
    if (REG_MOBILE.test(mobile)) {
      isMobile = true;
    }

    return isMobile;
  },

  isURL(str) {
    /* eslint no-useless-escape: 0 */
    return !!str.match(this.URL_REGEXP);
  },

  // 获取光标位置
  getCursorPosition(textDom) {
    let cursorPos = 0;
    if (document.selection) {
      // IE Support
      textDom.focus();
      const selectRange = document.selection.createRange();
      selectRange.moveStart('character', -textDom.value.length);
      cursorPos = selectRange.text.length;
    } else if (textDom.selectionStart || textDom.selectionStart === 0) {
      // Firefox support
      cursorPos = textDom.selectionStart;
    }
    return cursorPos;
  },

  selectRange(textDom, start, end) {
    if (!end) end = start;

    if (textDom.setSelectionRange) {
      textDom.focus();
      textDom.setSelectionRange(start, end);
    } else if (this.createTextRange) {
      const range = textDom.createTextRange();
      range.collapse(true);
      range.moveEnd('character', end);
      range.moveStart('character', start);
      range.select();
    }
  },

  copyTextOfElement(obj) {
    const range = document.createRange();
    range.selectNode(obj);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
  },

  getMilliseconds(milliseconds) {
    let text;
    if (milliseconds < 3600000) {
      text = `${Math.floor(milliseconds / 60000)}分钟`; // 1000 * 60
    } else if (milliseconds < 86400000) {
      text = `${Math.floor(milliseconds / 3600000)}小时`; // 1000 * 60 * 60
    } else {
      text = `${Math.floor(milliseconds / 86400000)}天`; // 1000 * 60 * 60 * 24
    }
    return text;
  },

  // 身份证校验
  isCardId(sId) {
    const aCity = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外',
    };
    let iSum = 0;
    if (!/^\d{17}(\d|x)$/i.test(sId)) return '你输入的身份证长度或格式错误';
    sId = sId.replace(/x$/i, 'a');
    if (aCity[parseInt(sId.substr(0, 2), 10)] == null)
      return '你的身份证地区非法';
    const sBirthday = `${sId.substr(6, 4)}-${Number(
      sId.substr(10, 2)
    )}-${Number(sId.substr(12, 2))}`;
    const d = new Date(sBirthday.replace(/-/g, '/'));
    if (sBirthday !== `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`)
      return '身份证上的出生日期非法';
    /* eslint no-restricted-properties:0 */
    for (let i = 17; i >= 0; i--)
      iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
    if (iSum % 11 !== 1) return '你输入的身份证号非法';
    // 此次还可以判断出输入的身份证号的人性别
    // aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");
    return true;
  },

  // 手机号码去重
  uniqueTestMobileArr(arr) {
    let res = [];
    let repeat = [];
    let json = {};
    for (let i = 0, len = arr.length; i < len; i++) {
      if (!json[arr[i]]) {
        res.push(arr[i]);
        json[arr[i]] = 1;
      } else {
        repeat.push(arr[i]);
      }
    }
    return { res, repeat };
  },
  validateMobileNumber(mobile, callback) {
    if (MOBILE_PHONE_REG.test(mobile)) {
      callback && callback(null);
      return true;
    }
    callback && callback({ message: '手机号码格式错误' });
    return false;
  },
  // js判断字符串字符数(汉字算两个)
  getByteLen(val) {
    let len = 0;
    const reg = /^[\u4e00-\u9fa5]+$/;
    for (let i = 0; i < val.length; i++) {
      let a = val.charAt(i);
      if (reg.test(a)) {
        len += 2;
      } else {
        len += 1;
      }
    }
    return len;
  },
  // 去除手机号前缀的0086
  filterMobilesStr(str, prefixStr) {
    let group = [];
    if (str) {
      const arr = str.split(',');
      arr.forEach((item) => {
        group.push(item.replace(prefixStr, ''));
      });
    }
    return group.join(',');
  },
  filterMobilesStrByArr(arr, prefixStr) {
    let group = [];
    if (arr && arr.length) {
      arr.forEach((item) => {
        group.push(item.replace(prefixStr, ''));
      });
    }
    return group;
  },

  // 生成随机id
  generateIdStr() {
    const str = uuid.v1().replace(/-/g, '');
    return str;
  },
  // 验证是否有英文标点符号
  checkEnglishSymbols(str) {
    const reg = /[!,;'$^\(\)\[\]]/;
    return reg.test(str);
  },
  // 验证是否有特殊符号
  checkSpecialSymbols(str) {
    const reg = /[【】{}ヾ▽ノ^√※→●★「」@#￥%&\*\+—~《》<>]/;
    return reg.test(str);
  },
};
