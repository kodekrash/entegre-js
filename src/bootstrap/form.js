/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.form = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'form', attr, children );
	}

	horizontal() {
		this.attr( 'class', 'form-horizontal' );
		return this;
	}

	inline() {
		this.attr( 'class', 'form-inline' );
		return this;
	}

};
