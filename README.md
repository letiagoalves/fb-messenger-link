# fb-messenger-link

Generate a Facebook Messenger protocol share link

## Instalation

```bash
$ npm install --save fb-messenger-link
```

## Usage

```javascript
const fbMessengerLink = require('fb-messenger-link');

// build a factory function with your Facebook Application ID
const APP_ID = '1234567890';
const createLink = fbMessengerLink(APP_ID);

// create all the links!!!
const repositoryShareLink = createLink('https://github.com/letiagoalves/fb-messenger-link');

const licenseShareLink = createLink('https://github.com/letiagoalves/fb-messenger-link/blob/master/LICENSE');
```

## Contributing
Feel free to contribute with improvements or bugfixes.

## License

fb-messenger-link is [MIT licensed](./LICENSE).
