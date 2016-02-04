/**
 * @package EntegreJS
 * @subpackage Factories
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.factory.attr = class {
	
	constructor() {
		this.a = {};
	}

	_attr( k, v ) {
		k = k.toString();
		if( !( k in this.a ) ) {
			this.a[ k ] = [];
		}
		this.a[ k ].push( v );
	}

	attr( k, v ) {
		if( !( E.empty( k ) && E.empty( v ) ) ) {
			if( E.iterable( k ) ) {
				if( E.empty( v ) ) {
					for( var k1 in k ) {
						this._attr( k1, k[ k1 ] );
					}
				} else {
					for( var k1 in k ) {
						this._attr( k1, v );
					}
				}
			} else {
				this._attr( k, v );
			}
		}
		return this;
	}

	_buildattr( k, v ) {
		return `${k.toString()}="${( E.iterable( v ) ? v.join( ' ' ) : v )}"`;
	}
	
	buildattrs() {
		var s = [];
		for( var k in this.a ) {
			s.push( this._buildattr( k, this.a[ k ] ) );
		}
		return s.join( ' ' );
	}

};
