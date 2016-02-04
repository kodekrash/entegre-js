/**
 * @package EntegreJS
 * @subpackage Widgets
 * @subpackage highlight
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.widget.highlight = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'pre', attr, children );
		this.attr( 'class', 'e-highlight' );
	}

	static css() {
		return 'https:/' + '/cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/styles/default.min.css';
	}

	static js() {
		return 'https/' + '/cdnjs.cloudflare.com/ajax/libs/highlight.js/9.1.0/highlight.min.js';
	}

	block( lang, str ) {
		if( !E.empty( lang ) && !E.empty( str ) ) {
			lang = lang.toString().toLowerCase();
			str = window.hljs ? hljs.highlight( lang, str.toString() ).value : str.toString();
			this.child( new E.factory.node( 'code', { 'class': lang }, str ) );
		}
		return this;
	}

};
