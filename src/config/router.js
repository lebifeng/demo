import dynamicImport from './dynamicImport';

export default [
  // {
  //   path: 'http',
  //   label: 'HTTP',
  //   lazy: () => dynamicImport('http-demo'),
  // },
  // {
  //   path: 'double-wing-layout',
  //   label: 'double-wing',
  //   lazy: () => dynamicImport('double-wing-layout'),
  // },
  {
    path: 'web-component-demo',
    label: 'Web Component',
    lazy: () => dynamicImport('web-component'),
  },
];
