/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.list = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'ul', attr, children );
	}

	ordered() {
		this.t = 'ol';
		return this;
	}
	
	unordered() {
		this.t = 'ul';
		return this;
	}

	inline() {
		this.attr( 'class', 'list-inline' );
		return this;
	}
	
	child( c, active, disabled ) {
		if( !E.empty( c ) ) {
			var x = new E.factory.node( 'li', null, c );
			if( active && active === true ) {
				x.attr( 'class', 'active' );
			}
			if( disabled && disabled === true ) {
				x.attr( 'class', 'disabled' );
			}
			super.child( x );
		}
		return this;
	}
	
	separator() {
		super.child( new E.factory.node( 'li', { 'role': 'separator', 'class': 'divider' } ) );
	}

};
