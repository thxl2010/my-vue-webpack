import Vue from 'vue';

function addFeedbackClass(elm) {
  if (!elm.classList.contains('e-feedback')) {
    elm.className += ' e-feedback';
  }
}

function removeFeedbackClass(elm) {
  if (elm.classList.contains('e-feedback')) {
    elm.className = elm.className.replace(/\b\se-feedback\b/, '');
  }
}

/* 触摸反馈 */
Vue.directive('feedback', {
  bind(el, binding, vnode) {
    const elm = vnode.elm;
    elm.addEventListener('touchstart', addFeedbackClass.bind(null, elm));
    elm.addEventListener('touchcancel', removeFeedbackClass.bind(null, elm));
    elm.addEventListener('touchend', removeFeedbackClass.bind(null, elm));
  },
  unbind(el, binding, vnode) {
    const elm = vnode.elm;
    elm.removeEventListener('touchstart', addFeedbackClass.bind(null, elm));
    elm.removeEventListener('touchcancel', removeFeedbackClass.bind(null, elm));
    elm.removeEventListener('touchend', removeFeedbackClass.bind(null, elm));
  },
});
