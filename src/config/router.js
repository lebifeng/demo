import dynamicImport from './dynamicImport';

export default [
  {
    path: 'http',
    label: 'HTTP',
    lazy: () => dynamicImport('http-demo'),
  },
  {
    path: 'double-wing-layout',
    label: '双飞翼布局',
    lazy: () => dynamicImport('double-wing-layout'),
  },
  {
    path: 'web-component-demo',
    label: 'Web Component',
    lazy: () => dynamicImport('web-component'),
  },
];
