export default ({ appEnvironment, path }) =>
  `${appEnvironment !== 'local' ? '/public' : ''}/images/${path}`;
