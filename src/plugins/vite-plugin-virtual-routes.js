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
        const dirs = fs.read;
        console.log(json);
        return resolvedVirtualModuleId;
      }
      return null;
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `
          export default [];
        `;
      }
      return null;
    },
  };
}
