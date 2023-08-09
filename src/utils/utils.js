export function rute(Track) {
  return `/src/audio/${Track}`;
}

export function changeKeyName(key) {
  if (key == 'name') {
      return 'nombre'
  } else if (key == 'price') {
      return 'precio'
  } else if (key == 'tag') {
      return 'género'
  } else {
      return key
  }
}