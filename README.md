# Mobalytics Builds widget

## Usage

- Reference the `/dist/index.bundle.js` script in your webpage with an `async` flag like this: `<script async src="https://TESTCDN.com/index.bundle.js" type="text/javascript"></script>`
- Add a div to the page with this data attribute: `data-moba-widget="build"`
- Add a `script` tag of type `application/json` containing the champion name like so:
```
<script type="application/json">
{
    "champion": "akali"
}
</script>
```
- ＄＄＄＄＄＄

## Development

### Build (for demos, etc)

- Run `yarn build`
- Use the `index.html` page to show the widget off

### Dist (for CDN)

- Run `yarn dist`
- Load the `index.bundle.js` [via JSDELIVR](https://www.jsdelivr.com/?docs=gh)

### Local dev

- Run `yarn start`
- Ports need to be in the range of `3000` to `3005` to be able to use the Mobalytics API without authentication (the default of `3000` should be fine)