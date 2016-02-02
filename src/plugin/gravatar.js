/**
 * @package EntegreJS
 * @subpackage Plugins
 * @subpackage gravatar
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.plugin.gravatar = class {

	constructor( email, size ) {
		this.e = '';
		this.s = '';
		this.email( email );
		this.size( size );
	}

	static js() {
		return 'https:/' + '/cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.1.0/js/md5.min.js';
	}

	email( s ) {
		if( s && !E.empty( s ) ) {
			this.e = s.toString().toLowerCase();
		}
		return this;
	}
	
	size( i ) {
		if( i ) {
			this.s = parseInt( i );
		}
		return this;
	}

	uri() {
		return 'http:/' + '/www.gravatar.com/avatar/' + md5( this.e ) +	( !E.empty( this.s ) ? '?s=' + this.s.toString() : '' );
	}
	
	build() {
		var x = new E.factory.node( 'img', { 'class': 'e-gravatar' } );
		x.attr( 'src', this.uri() );
		return x.build();
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
