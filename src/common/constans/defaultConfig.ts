export default {
  version: 7,
  perf: {
    custom: {
      theme: 'SPRING',
      primaryColor: '#ff4ea4',
      errorColor: '#ed6d46',
      warningColor: '#e5a84b',
      successColor: '#c0d695',
      infoColor: '#aa8eeB',
      logo: `file://${__static}/logo.png`,
placeholder: 'Hello Rubick! Enter search text',      username: 'Rubick',
    },
    shortCut: {
      showAndHidden: 'Option+R',
      separate: 'Ctrl+D',
      quit: 'Shift+Escape',
      capture: 'Ctrl+Shift+A',
    },
    common: {
      start: true,
      space: true,
      hideOnBlur: true,
      autoPast: false,
      darkMode: false,
      guide: false,
      history: true,
      lang: 'en',
    },
    local: {
      search: true,
    },
  },
  global: [],
};
