/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.well = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
		this.attr( 'class', 'well' );
	}

	large() {
		this.attr( 'class', 'well-lg' );
		return this;
	}

	small() {
		this.attr( 'class', 'well-sm' );
		return this;
	}

};
