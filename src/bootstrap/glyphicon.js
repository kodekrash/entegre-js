/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.glyphicon = class extends E.factory.node {

	constructor( icon, attr ) {
		super( 'i' );
		this.attr( attr );
		this.attr( 'class', `glyphicon glyphicon-${icon.toString().toLowerCase()}` );
	}
	
};
