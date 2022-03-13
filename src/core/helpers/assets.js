/**
 * @description Images path in dir public.
 * @param dir
 * @param imageName
 * @returns {string}
 */
export const getImagesPath = (dir, imageName) => {
  return `img/${dir}/${imageName}`;
};

/**
 * @description Images path in dir public.
 * @param dir
 * @param iconName
 * @returns {string}
 */
export const getImagesIconPath = (dir, iconName) => {
  return `img/${dir}/icon/${iconName}`;
};

/**
 * @description Get logo in dir public.
 * @returns {string}
 */
export const getLogo = () => {
  return `img/gamerhash-logo.svg`;
};
