/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.p = class extends E.bootstrap.node {

	constructor( attr, children ) {
		super( null, 'p', attr, children );
	}

	lead() {
		this.attr( 'class', 'lead' );
	}

};
