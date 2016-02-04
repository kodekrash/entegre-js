/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.radio = class extends E.factory.attr {
	
	constructor( attr ) {
		super();
		this.attr( attr );
		this.oi = false;
		this.od = false;
		this.txt = '';
	}

	inline() {
		this.oi = true;
		return this;
	}

	disabled() {
		this.od = true;
		return this;
	}

	label( x ) {
		if( !E.empty( x ) ) {
			this.txt = x;
		}
		return this;
	}

	build() {
		var x = new E.factory.node( 'label' );
		if( this.oi === true ) {
			x.attr( 'class', 'radio-inline' );
		}
		var y = new E.factory.node( 'input', { 'type': 'radio' } );
		if( this.od === true ) {
			y.attr( 'disabled', true );
		}
		y.attr( this.a );
		x.child( y );
		if( !E.empty( this.txt ) ) {
			x.child( this.txt );
		}
		if( this.oi !== true ) {
			x = new E.tag.div( { 'class': 'radio' }, x );
			if( this.od === true ) {
				x.attr( 'disabled', true );
			}
		}
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
