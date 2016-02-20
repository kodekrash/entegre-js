/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.pager = class extends E.factory.attr {
	
	constructor( attr ) {
		super();
		this.attr( attr );
		this.c = [];
	}

	button( label, href, disabled, attr ) {
		if( !E.empty( label ) ) {
			var x = { 'label': label, 'url': href, 'disabled': false, 'attr': ( attr ? attr : {} ) };
			if( disabled && disabled === true ) {
				x.disabled = true;
			}
			this.c.push( x );
		}
		return this;
	}

	build() {
		var x = new E.bootstrap.list( { 'class': 'pager' } );
		for( var i in this.c ) {
			var y = new E.factory.node( 'a', { 'href': this.c[ i ].url }, this.c[ i ].label );
			if( !E.empty( this.c[ i ].attr ) ) {
				y.attr( this.c[ i ].attr );
			}
			x.child( y, null, this.c[ i ].disabled );
		}
		x = new E.factory.node( 'nav', this.a, x );
		return x.build();
	}

};
