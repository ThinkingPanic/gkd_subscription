import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动跳过',
      activityIds: 'com.qidian.QDReader.ui.activity.SplashImageActivity',
      rules: 'Button[text^="跳过"][text.length<=10][clickable=true]',
    },
  ],
});
