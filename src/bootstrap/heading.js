/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.heading = class extends E.bootstrap.node {

	constructor( size, primary, secondary ) {
		super( null, 'h' + size.toString() );
		this.tp = null;
		this.ts = null;
		this.primary( primary );
		this.secondary( secondary );
	}

	primary( x ) {
		if( !E.empty( x ) ) {
			this.tp = x;
		}
		return this;
	}

	secondary( x ) {
		if( !E.empty( x ) ) {
			this.ts = x;
		}
		return this;
	}

	build() {
		if( !E.empty( this.tp ) ) {
			this.child( this.tp );
		}
		if( !E.empty( this.ts ) ) {
			this.child( ' ' );
			this.child( new E.factory.node( 'small', null, this.ts ) );
		}
		return super.build();
	}

};
