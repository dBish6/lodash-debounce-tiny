# lodash-debounce-tiny
A lightweight alternative to lodash.debounce. This utility doesn't include all the bloat from lodash.debounce, all it does is delay invoking a function call until after the provided milliseconds.

## Installation
```
$ npm i lodash-debounce-tiny
```

## Example
```
import debounce from "lodash-debounce-tiny";

function handleResize() {
  // Do something.
}
window.addEventListener("resize", debounce(handleResize, 500));
```

## Contributing
Contributions are welcome! Although I'd like to keep this package as small as possible since it is meant to be a tiny utility.

### To Get Started
- Fork this repository.
- Create a new branch.
- install the dependencies with `npm install`.
- Do a `npm run test` to see if you're all set.
- For the dev environment, `npm run dev` and there you go!

```
$ npm install
$ npm run test
$ npm run dev
```

## License
This project is licensed under the [MIT](https://github.com/dBish6/lodash-debounce-tiny/blob/master/LICENSE) License.

## Support Me
If you find this package helpful consider buying me a coffee, your support helps me stay motivated!

<a href="https://www.buymeacoffee.com/dBish" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
