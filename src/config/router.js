import dynamicImport from './dynamicImport';

export default [
  {
    path: 'http',
    label: 'HTTP',
    lazy: () => dynamicImport('http-demo'),
  },
];
