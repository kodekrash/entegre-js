/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.button = class extends E.bootstrap.node {

	constructor( attr, children ) {
		super( 'btn', 'button', attr, children );
		this.attr( 'class', 'btn' );
	}

};
