export default async function lazyLoadComponent(componentPath) {
  console.info('lazy load component from:', componentPath);

  if (!componentPath) {
    throw new Error('lazy load requires a valid path');
  }
  const result = await import(componentPath);

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
