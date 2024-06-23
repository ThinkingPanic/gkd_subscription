import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jdcloud.mt.smartrouter',
  name: '京东云无线宝',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动跳过',
      activityIds: 'com.jdcloud.mt.smartrouter.nwelcome.WelcomeActivity',
      rules: '[text="跳过"][text.length<=10][clickable=true][focusable=true]',
    },
  ],
});
