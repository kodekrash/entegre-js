/**
 * @package EntegreJS
 * @subpackage Plugins
 * @subpackage mustache
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.plugin.mustache = class {

	constructor() {
		this.c = [];
	}

	static js() {
		return 'https:/' + '/cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.1/mustache.min.js';
	}

	child( template, data ) {
		if( !E.empty( template ) && !E.empty( data ) ) {
			this.c.push( { 'template': template, 'data': data } );
		}
		return this;
	}

	build() {
		if( window.Mustache ) {
			var x = [];
			for( var i in this.c ) {
				x.push( Mustache.render( this.c[ i ].template, this.c[ i ].data ) );
			}
			return x.join( '' );
		}
		return '';
	}

	toString() {
		return this.build();
	}

	append( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};
