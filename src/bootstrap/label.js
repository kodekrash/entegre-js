/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.label = class extends E.bootstrap.node {

	constructor( attr, children ) {
		super( 'label', 'span', attr, children );
		this.attr( 'class', 'label' );
	}

};
