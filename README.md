# KeyAuth-Chrome-Extension

> a chrome extension tools built with Vite + Vanilla + TypeScript, and Manifest v3

> Shows how to do requests to server side (keyauth.win) nothing else really. Template generated with `npx create-chrome-ext`. New Ui will come in future.
## Installing

1. Check if your `Node.js` version is >= **14**.
2. Change or configurate the name of your extension on `src/manifest`.
3. Run `npm install` to install the dependencies.

## Developing

1. run the command

```shell
$ cd KeyAuth-Chrome-Extension
```

1. Change Application Credentials in `package.json` > `KeyAuth`
```json
  "KeyAuth": {
    "AppName": "",
    "OwnerId": "",
    "Version": "1.0"
  },
```

2. run the command

```shell
$ npm run dev
```

3. open `chrome://extensions/` in your Chrome browser
4. click 'Load unpacked', and select `KeyAuth-Chrome-Extension/build` folder
5. click 'Update' button when you modify the code
6. Done!

### Chrome Extension Developer Mode

1. set your Chrome browser 'Developer mode' up
2. click 'Load unpacked', and select `KeyAuth-Chrome-Extension/build` folder

### Normal FrontEnd Developer Mode

1. access `http://0.0.0.0:3000/`
2. when debugging popup page, open `http://0.0.0.0:3000//popup.html`

## Packing

After the development of your extension run the command

```shell
$ npm run build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.
