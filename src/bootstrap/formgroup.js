/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.formgroup = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
		this.attr( 'class', 'form-group' );
	}
	
};
