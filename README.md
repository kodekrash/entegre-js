# EntegreJS

**Built with ECMA Script 6, using `strict mode`.**

**Requires Chrome 42+, Firefox 45+, Safari 9+, Edge 13.**

**Feature coverage may vary!**

The purpose of this UI toolkit is to make prgrammatic use of Bootstrap components easier.

Application development is the main target use for Entegre. It isn't intended for regular web page use. This distinction has important SEO ramifications due to the way Entegre works. It injects code into the DOM which won't exist in the actual source code, so search engines, etc. will not see the additional content/markup. This is different from the core way jQuery and jQuery plugins work as they generally apply some style and logic to existing DOM nodes and only add DOM nodes when necessary.

## Core Concepts

The library follows three main tenents:

* Recursive object build
* Chainable methods
* Careful / logical object naming

## Basic Usage

```javascript
// Create instance of 'p' widget
var p = $E('p').child( 'Hello World!' );

// Append to an existing DOM element
p.put( '#mydiv' );
```

Your HTML would be

```html
<div id="mydiv"><p>Hello World!</p></div>
```


`.put` method uses jQuery's `.append` method, so any valid jQuery selector is valid for `.put`.

## Recursive objects

```javascript
// Create instance of 'p' widget
var p = $E('p').child( 'Hello World!' );

// Create a div with id=mydiv and add the p as a child
var d = $E('div').attr( 'id', 'mydiv' ).child( p );

// Append to DOM
d.put( 'body' );
```

Your HTML would be the same

```html
<div id="mydiv"><p>Hello World!</p></div>
```

## Magic method $E

`$E` method is a shorter way to create object instances

Regular instance creation is more to type:

```javascript
var p = new E.widget.p();
```
and is not chainable without some extra syntax:

```javascript
var p = ( new E.widget.p() ).child( 'Hi' );
```

`$E(name)` will look for `name` in `E.widget`, then `E.plugin`, then `E.control` and return an instance of the first found or `false` if none found.

## Objects

| Widgets | Plugins | Controls |
| ---     | ---     | ---      |
| accordion | flagicon | bootswatch |
| alert | fontawesome | datatable |
| badge | gravatar | dataview |
| blockquote | highlight | notifications |
| breadcrumbs | mustache | timeline |
| button | weathericon | tree |
| checkbox |
| div |
| dropdown |
| form |
| formgroup |
| glyphicon |
| heading |
| img |
| input |
| inputgroup |
| jumbotron |
| label |
| list |
| modal |
| navbar |
| p |
| pageheader |
| pager |
| panel |
| progressbar |
| radio |
| select |
| table |
| tabs |
| well |
