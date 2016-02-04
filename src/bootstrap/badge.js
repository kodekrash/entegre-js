/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.badge = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'span', attr, children );
		this.attr( 'class', 'badge' );
	}

};
