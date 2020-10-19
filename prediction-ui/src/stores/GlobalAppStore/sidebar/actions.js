export const TYPES = {
  OPEN: 'sidebar.open',
  CLOSE: 'sidebar.close',
  TOGGLE: 'sidebar.toggle'
};

export function open() {
  return {
      type: TYPES.OPEN
  };
}

export function close() {
  return {
      type: TYPES.CLOSE
  };
}

export function toggle() {
  return {
      type: TYPES.TOGGLE
  }
}
