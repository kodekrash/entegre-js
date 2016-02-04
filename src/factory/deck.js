/**
 * @package EntegreJS
 * @subpackage Factories
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.factory.deck = class extends E.factory.attr {

	constructor() {
		super();
		this.c = [];
	}

	card( title, body, attr ) {
		var x = {
			'title': E.empty( title ) ? null : title,
			'body': E.empty( body ) ? null : body,
			'attr': !E.empty( attr ) && E.iterable( attr ) ? attr : {}
		};
		this.c.push( x );
		return this;
	}

};
