import fs from 'fs';
import path from 'path';

const virtualModuleId = 'virtual:routes';
const resolvedVirtualModuleId = `\0${virtualModuleId}`;

export default function virtualRoutesPlugin() {
  return {
    name: 'virtual-routes',
    enforce: 'pre',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
      return null;
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const dirs = fs.readdirSync(path.resolve(__dirname, '../pages'));

        return `
          import dynamicImport from '@/utils/dynamic-import'
          
          const dirs = ${JSON.stringify(dirs)};
          const routes = dirs.map(dir => ({
            path: dir,
            label: dir,
            lazy: () => dynamicImport(dir)
          }))
          
          export default routes;
        `;
      }
      return null;
    },
  };
}
