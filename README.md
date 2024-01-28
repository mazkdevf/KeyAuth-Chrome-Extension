# KeyAuth-Chrome-Extension

> a chrome extension tools built with Vite + Vanilla + TypeScript, and Manifest v3

> Shows how to do requests to server side (keyauth.win) nothing else really. Template generated with `npx create-chrome-ext`. New Ui will come in future.
## Installing

1. Check if your `Node.js` version is >= **14**.
2. Change or configurate the name of your extension on `src/manifest`.
3. Run `npm install` to install the dependencies.

## Preview of React version coming in future :)


![img](https://github.com/mazkdevf/KeyAuth-Chrome-Extension/assets/79049205/5f8edf56-267a-4ae5-ac44-1725fa59ee78)
![img](https://github.com/mazkdevf/KeyAuth-Chrome-Extension/assets/79049205/4a40b634-0093-41dc-bf1a-fecba379adc5)
![img](https://github.com/mazkdevf/KeyAuth-Chrome-Extension/assets/79049205/0c54a967-89f0-4e96-bcd3-172b4dc72d68)
![img](https://github.com/mazkdevf/KeyAuth-Chrome-Extension/assets/79049205/38fa4602-d020-488e-bb50-84d66961e741)
![img](https://github.com/mazkdevf/KeyAuth-Chrome-Extension/assets/79049205/da7fe8c5-9cc1-416f-992e-2ed6b34debdd)


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
