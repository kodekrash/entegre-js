# EntegreJS

**Built with ECMA Script 6, using `strict mode`.**

**Requires Chrome 42+, Firefox 45+, Safari 9+, Edge 13.**

**Feature coverage may vary!**

The purpose of this UI toolkit is to make programmatic use of Bootstrap components easier.

Application development is the main target use for Entegre. It isn't intended for regular web page use. This distinction has important SEO ramifications due to the way Entegre works. It injects code into the DOM which won't exist in the actual source code, so search engines, etc. will not see the additional content/markup. This is different from the core way jQuery and jQuery plugins work as they generally apply some style and logic to existing DOM nodes and only add DOM nodes when necessary.

## Core Concepts

* Careful / logical object naming
* Chainable methods
* Recursive object build
* Late DOM modification

