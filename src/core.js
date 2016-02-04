/**
 * @package EntegreJS
 * @subpackage core
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

class Entegre {

	constructor() {
		this.idc = 1;
		this.factory = {};
		this.tag = {};
		this.bootstrap = {};
		this.widget = {};
		this.control = {};
		this.utility = {
			events: class {

				constructor() {
					this.e = {};
				}
			
				register( n ) {
					if( n && !E.empty( n ) && !( n in this.e ) ) {
						this.e[ n ] = [];
					}
					return this;
				}
			
				listen( n, f ) {
					if( n && !E.empty( n ) && f && E.type( f, 'function' ) ) {
						this.register( n );
						this.e[ n ].push( f );
					}
					return this;
				}
			
				trigger( n, a ) {
					this.register( n );
					this.e[ n ].forEach( function( c ) {
						c( a );
					} );
					return this;
				}
			}
		};
		this.events = new this.utility.events();
	}

	id( p ) {
		var s = ( p && p.length > 0 ? p : 'ejs' ) + this.idc;
		this.idc ++;
		return s;
	}
	
	type( o, t ) {
		var x = Object.prototype.toString.call( o );
		x = x.substring( 8, ( x.length - 1 ) ).toLowerCase();
		if( t ) {
			return ( t == x );
		}
		return x;
	}
	
	iterable( x ) {
		var y = this.type( x );
		return ( y == 'object' || y == 'array' );
	}
	
	empty( x ) {
		if( x == null ) {
			return true;
		}
		if( x.length > 0 ) {
			return false;
		}
		if( x.length === 0 ) {
			return true;
		}
		for( var k in x ) {
			if( Object.prototype.hasOwnProperty.call( x, k ) ) {
				return false;
			}
		}
		return true;
	}
	
	random( min, max ) {
		min = new Number( min );
		max = new Number( max );
		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	}
	
	chunk( x, s ) {
		if( x && this.type( x, 'array' ) ) {
			s = parseInt( s );
			if( x.length > s ) {
				var y = [];
				while( x.length > 0 ) {
					var z = [];
					for( var i = 1; i <= s; i ++ ) {
						if( x.length > 0 ) {
							z.push( x.shift() );
						}
					}
					y.push( z );
				}
				return y;
			}
		}
		return x;
	}
	
	node( t, a, c ) {
		return new E.factory.node( t, a, c );
	}
	
}

var E = new Entegre();

function $E( cls, arg ) {
	cls = cls.toString().toLowerCase();
	var ptr = false;
	if( cls in E.bootstrap ) {
		ptr = E.bootstrap[ cls ];
	} else if( cls in E.widget ) {
		ptr = E.widget[ cls ];
	} else if( cls in E.control ) {
		ptr = E.control[ cls ];
	} else if( cls in E.tag ) {
		ptr = E.tag[ cls ];
	}
	if( ptr !== false ) {
		return arg ? new ptr( arg ) : new ptr();
	}
	return false;
}
