/**
 * @package EntegreJS
 * @subpackage Factories
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.factory.iterable = class extends E.factory.attr {

	constructor() {
		super();
		this.c = [];
	}

	child( v ) {
		if( v && !E.empty( v ) ) {
			if( E.type( v, 'array' ) ) {
				for( var k in v ) {
					this.c.push( v[ k ] );
				}
			} else {
				this.c.push( v );
			}
		}
		return this;
	}

};
