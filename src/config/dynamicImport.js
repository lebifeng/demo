/**
 * 懒加载component
 * @param {*} directory 页面文件夹名
 * @param {*} fileExtension 后缀 默认 index
 * @returns
 */
export default async function lazyLoadComponent(
  directory,
  fileExtension = 'index',
) {
  console.info('lazy load component from:', `src/pages/${directory}`);

  if (!directory) {
    throw new Error('lazy load requires a valid path');
  }

  const result = await import(`../pages/${directory}/${fileExtension}.jsx`);
  if (!result) {
    console.error('component not found');
    const NotFound = await import('../pages/404');
    return {
      Component: NotFound,
    };
  }

  return {
    Component: result.default || result.Component,
  };
}
