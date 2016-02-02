/**
 * @package EntegreJS
 * @subpackage tags
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.tag.a = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'a', attr, children );
	}

};

E.tag.div = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
	}

};

E.tag.h = class extends E.factory.node {

	constructor( size, attr, children ) {
		super( 'h' + size.toString(), attr, children );
	}

};

E.tag.label = class extends E.factory.node {

	constructor( text, forid ) {
		super( 'label' );
		if( !E.empty( forid ) ) {
			this.attr( 'for', forid );
		}
		if( !E.empty( text ) ) {
			this.child( text );
		}
	}

};

E.tag.p = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'p', attr, children );
	}

};
