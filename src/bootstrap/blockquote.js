/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.blockquote = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'blockquote', attr, children );
		this.ft = null;
	}

	footer( x ) {
		if( !E.empty( x ) ) {
			this.ft = x;
		}
		return this;
	}

	reverse() {
		this.attr( 'class', 'blockquote-reverse' );
		return this;
	}
	
	build() {
		if( !E.empty( this.ft ) ) {
			this.child( new E.factory.node( 'footer', null, this.ft ) );
		}
		return super.build();
	}

};
