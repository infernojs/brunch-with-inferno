# Brunch + Inferno + Babel/ES6

This is a modern JS skeleton with Inferno for Brunch. Includes `inferno` and `inferno-component` packages.

## Installation

Clone this repo manually or use `brunch new your-project -s inferno` or `brunch new your-project -s infernojs/brunch-with-inferno`.

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history) on port `3333`.
    * `npm run prod` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
	* [Inferno site](https://infernojs.org), [Getting started guide](https://infernojs.org/docs/guides/getting-started)
