/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.input = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'input', attr, children );
		this.attr( 'class', 'form-control' );
	}

};
