import Vue from 'vue';
import * as Conf from '../components/index';
import DateFormat from '../utils/date-format';
import Utils from '../utils/index';

/**
 * OSS图像处理
 */
function appendOssProcessStyle(url, style) {
  if (!url) {
    return '';
  }

  if (/x-oss-process=image/.test(url)) {
    return url.replace(/(x-oss-process=image[^&]*)/, `$1${style}`);
  }
  if (/\?/.test(url)) {
    return `${url}&x-oss-process=image${style}`;
  }
  return `${url}?x-oss-process=image${style}`;
}

Vue.filter('oss_w100', (url) => appendOssProcessStyle(url, '/resize,w_100'));

Vue.filter('oss_w200', (url) => appendOssProcessStyle(url, '/resize,w_200'));

Vue.filter('oss_w300', (url) => appendOssProcessStyle(url, '/resize,w_300'));

Vue.filter('oss_w400', (url) => appendOssProcessStyle(url, '/resize,w_400'));

Vue.filter('oss_w640', (url) => appendOssProcessStyle(url, '/resize,w_640'));

/**
 * 金额 最多2位小数，末尾去0
 */
Vue.filter('priceFixed2', (p) =>
  p === Infinity ? '--' : +(p || 0).toFixed(2)
);

/* eslint no-confusing-arrow: 0 */
Vue.filter('showText', (text) =>
  text === undefined || text === null || text === '' ? '--' : text
);

/**
 * 数字 => 千位分隔符
 */
Vue.filter('numberThousandsSeparator', (num) =>
  Utils.numberThousandsSeparator(num)
);

Vue.filter('currency', (value) => `￥${value}`);

Vue.filter('percent', (value) => `${+((value || 0) * 100).toFixed(2) || 0}%`);

/**
 * 日期格式化 YYYY-MM-DD hh:mm
 */
Vue.filter('dateFormat', (date) => DateFormat(date, 'YYYY-MM-DD hh:mm'));

/**
 * 日期格式化2 YYYY.MM.DD
 */
Vue.filter('dateFormat2D', (date) => DateFormat(date, 'YYYY.MM.DD'));
Vue.filter('dateFormat2D2', (date) => DateFormat(date, 'YYYY-MM-DD'));

/**
 * 日期格式化2 MM.DD
 */
Vue.filter('dateFormat2MDText', (date) => DateFormat(date, 'M月D号'));
Vue.filter('dateFormat2MMDD', (date) => DateFormat(date, 'MM-DD'));

/**
 * 时间 毫秒->对应单位（秒/分钟/小时/天）
 */
Vue.filter('timeMilliseconds2TimingUnit', (milliseconds) => {
  let text;

  if (milliseconds < 60000) {
    text = `${parseInt(milliseconds / 1000, 10)}秒`; // 1000
  } else if (milliseconds < 3600000) {
    text = `${parseInt(milliseconds / 60000, 10)}分钟`; // 1000 * 60
  } else if (milliseconds < 86400000) {
    text = `${parseInt(milliseconds / 3600000, 10)}小时`; // 1000 * 60 * 60
  } else {
    const days = parseInt(milliseconds / 86400000, 10);

    if (days % 365 === 0) {
      text = `${days / 365}年`;
    } else if (days % 366 === 0) {
      text = `${days / 366}年`;
    } else {
      text = `${days}天`; // 1000 * 60 * 60 * 24
    }
  }

  return text;
});

/**
 * 毫秒转换小时
 */
Vue.filter('timeMilliseconds2Hour', (milliseconds) => {
  let text = `${milliseconds / 3600000}小时`; // 1000 * 60 * 60
  return text;
});

/**
 * 店铺名 去掉 _taobao
 */
Vue.filter('subTaobao', (str = '') => {
  if (str) {
    const len = str.length;
    if (len > 7 && str.indexOf('_taobao', len - 7) !== -1) {
      return str.substring(0, len - 7);
    }
  }

  return str;
});

/**
 * 性别 gender
 * 男male 女female
 */
Vue.filter('gender', (gender) => Conf.SEX[gender]);

/**
 * 软件到期
 * =============================
 */
Vue.filter('purchaseDaysLeft', (purchaseTime) => {
  const purchaseDaysLeft = Math.ceil((purchaseTime - new Date()) / 86400000);
  return purchaseDaysLeft < 0 ? 0 : purchaseDaysLeft;
});

/**
 * 续费时间单位
 */
Vue.filter('rechargeTimeUnit', (timeUnit) => {
  let name;
  /* eslint default-case: 0 */
  switch (timeUnit) {
    case 'YEAR':
      name = '年';
      break;
    case 'MONTH':
      name = '月';
      break;
  }
  return name;
});

/**
 * 订购版本
 */
Vue.filter(
  'purchaseVersion',
  (version) => Conf.PRODUCTION_VERSION[version] || '--'
);

/**
 * 折扣：0.8 => 8折/ 0.75 => 75折
 */
// Vue.filter('discount', num => `${parseInt(num * 10, 10)}折`);
Vue.filter('discount', (num) => {
  const discount = parseInt(num * 100, 10);
  return discount % 10 === 0 ? discount / 10 : discount;
});

// 80 => 8折 、 75 => 75折
Vue.filter('discount100', (num) => {
  let text;
  if (num < 10) {
    const discount = num / 10;
    text = `${discount}折`;
  } else if (num < 100) {
    const discount = num % 10 === 0 ? num / 10 : num;
    text = `${discount}折`;
  } else {
    text = '无';
  }

  return text;
});

/**
 * 订购时间
 */
Vue.filter('orderTime', (time) => {
  let name;

  switch (time) {
    case '1YEAR':
      name = '全年';
      break;
    case '6MONTH':
      name = '半年';
      break;
    case '1MONTH':
      name = '月';
      break;
    default:
      name = '--';
  }
  return name;
});

/**
 * 订购时间2
 */
Vue.filter('orderTime2', (time) => {
  let name;

  switch (time) {
    case '1YEAR':
      name = '一年';
      break;
    case '6MONTH':
      name = '半年';
      break;
    case '1MONTH':
      name = '一月';
      break;
    default:
      name = '--';
  }
  return name;
});

// 活动起止时间
Vue.filter('activityTime', (date) => {
  let text;

  if (date && date[0] && date[1]) {
    text = `${Utils.dateFormat(date[0])} - ${Utils.dateFormat(date[1])}`;
  } else {
    text = '--';
  }

  return text;
});
