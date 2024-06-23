import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动跳过',
      activityIds: 'com.qq.reader.activity.launch.DefaultAliasSplashActivity',
      rules: 'TextView[text^="跳过"][text.length<=10][clickable=true]',
    },
  ],
});
