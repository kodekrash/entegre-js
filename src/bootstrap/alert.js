/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.alert = class extends E.bootstrap.node {

	constructor( attr, children ) {
		super( 'alert', 'div', attr, children );
		this.attr( 'class', 'alert' );
	}

	callout( s ) {
		if( s && !E.empty( s ) ) {
			this.child( new E.factory.node( 'strong', null, s ) );
		}
		return this;
	}

};
