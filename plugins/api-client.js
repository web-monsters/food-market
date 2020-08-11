'use strict';

import Vue from 'vue';
import baseAxios from 'axios';

const axios = baseAxios.create({
  // baseURL: process.browser ? BROWSER_BASE_URL : SERVER_BASE_URL,
  timeout: process.env.TIMEOUT || 10000,
  // headers: {
  //   'Content-Type': 'application/json',
  //   'X-App-Token': 'yF27jwg5orUVo4abrops'
  // },
});

Vue.prototype.$axios = axios;

export default function (ctx) {
  ctx.$axios = Vue.prototype.$axios;
  ctx.app.$axios = Vue.prototype.$axios;
  ctx.store.$axios = Vue.prototype.$axios;
}

