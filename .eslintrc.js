module.exports = {
  root: true,
  extends: '@react-native-community',
  // extends: 'standard',
  rules: {
    semi: 'none',
    "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"]
  }
};
