/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.image = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'img', attr, children );
	}

	mode( x ) {
		x = x.toString().toLowerCase();
		if( !E.empty( x ) && E.bootstrap.conf.imgmodes.includes( x ) ) {
			this.attr( 'class', `img-${x}` );
		}
		return this;
	}

};
