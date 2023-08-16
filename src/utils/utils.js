export function rute(Track) {
  return `/audio/${Track}`;
}

export function changeKeyName(key) {
  if (key == "name") {
    return "nombre";
  } else if (key == "price") {
    return "precio";
  } else if (key == "tag") {
    return "género";
  } else {
    return key;
  }
}

export function getColors(light, dark, textColorLight, textColorDark) {
  const ColorsLight = `bg-${light} hover:border-${light} hover:shadow-${light} text-${textColorLight} `;
  const ColorsDark = `dark:bg-${dark} dark:hover:border-${dark} darktext-${textColorDark}`;
  return ColorsDark, ColorsLight;
}
export const getChildrenColors = (light, dark) => {
  const ColorsLight = `group-hover/button:text-${light}`;
  const ColorsDark = `dark:group-hover/button:text-${dark}`;
  return ColorsDark, ColorsLight;
};

export const colorTag = (light, dark) => {
  const colorsLight = `border-${light} shadow-${light} text-${light}`;
  const colorsDark = `dark:border-${dark} dark:shadow-${dark} dark:text-${dark}`;
  return `${colorsLight} ${colorsDark}`;
};
