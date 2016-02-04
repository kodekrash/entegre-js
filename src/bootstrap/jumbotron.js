/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.jumbotron = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
		this.attr( 'class', 'jumbotron' );
	}

	header( x ) {
		if( !E.empty( x ) ) {
			this.child( new E.tag.h( '1', null, x ) );
		}
		return this;
	}

};
