const { default: auth } = require('../lib/auth');
const { upload, add } = require('../lib/file');
const { login, password, domain } = require('./credentials');

const file = './image.jpg';

auth(login, password, domain)
  .then((auth) => upload(auth, file)
    .then(({ hash, size }) => add(auth, {
      name: '//image.jpg',
      hash,
      size
    })))
  .then((res) => {
    res;
  });