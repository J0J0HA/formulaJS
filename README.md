# formulaJS
## Install
1. Run `npm init` and answer all questions following in the console
2. Run `npm i @jojojux/formulajs` and wait for the process to finish
3. Add these lines to your HTML header:
```html
<link rel="stylesheet" href="/node_modules/@jojojux/formulajs/css/formula.css">
<script src="/node_modules/@jojojux/formulajs/js/jquery.js"></script>
<script src="/node_modules/@jojojux/formulajs/js/formula.js"></script>
```
4. Add the following code to your page:
```javascript
$(() => {
    formula.autoassign();
    formula.init();
})
```
