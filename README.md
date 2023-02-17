
# Not discontinued!
**This project is neither finished nor discontinued!**  
It may seems so, since the last commit is very long ago, but this or a new version of it is still in development.  
If you want a feature to be added or have any errors, feel free to create an issue, I will look into it.  
Please note that not all errors will be fixed, because this repository is not matching with the current state of development.


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
## Github Pages
If you are serving your site over GitHub Pages, you should add an empty file named `.nojekyll` to the root directory to allow serving node_modules.
