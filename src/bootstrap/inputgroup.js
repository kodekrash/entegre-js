/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.inputgroup = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
		this.attr( 'class', 'input-group' );
		this.ap = null;
		this.as = null;
		this.ifd = null;
		this.is = '';
	}

	size( x ) {
		x = x.toString().toLowerCase();
		if( E.bootstrap.conf.sizes.includes( x ) ) {
			this.is = x;
		}
		return this;
	}
	
	before( x ) {
		if( !E.empty( x ) ) {
			this.ap = x;
		}
		return this;
	}
	
	after( x ) {
		if( !E.empty( x ) ) {
			this.as = x;
		}
		return this;
	}

	field( x ) {
		if( !E.empty( x ) ) {
			this.ifd = x;
		}
		return this;
	}

	build() {
		if( !E.empty( this.is ) ) {
			this.attr( 'class', `input-group-${this.is}` );
		}
		if( !E.empty( this.ap ) ) {
			this.child( new E.factory.node( 'span', { 'class': 'input-group-addon' }, this.ap ) );
		}
		this.child( this.ifd );
		if( !E.empty( this.as ) ) {
			this.child( new E.factory.node( 'span', { 'class': 'input-group-addon' }, this.as ) );
		}
		return super.build();
	}

};
