/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.accordion = class extends E.factory.deck {

	constructor( attr ) {
		super();
		this.attr( attr );
		this.attr( 'class', 'e-accordion panel-group' );
		this.attr( 'role', 'tablist' );
		this.attr( 'aria-multiselectable', 'true' );
	}

	build() {
		if( !( 'id' in this.a ) ) {
			this.attr( 'id', E.id() );
		}
		var x = new E.tag.div( this.a );
		if( !E.empty( this.c ) ) {
			for( var i in this.c ) {
				var c = this.c[ i ];
				var y = new E.tag.div( { 'class': 'panel panel-default' } );
				if( !E.empty( c.attr ) ) {
					y.attr( c.attr );
				}
				var id = E.id();
				if( !E.empty( c.title ) ) {
					var h = new E.tag.a( { 'class': 'e-accordion-toggle', 'role': 'button', 'data-toggle': 'collapse', 'data-parent': `#${this.a.id}`, 'href': `#${id}`, 'aria-expanded': 'false', 'aria-controls': y.a.id }, c.title );
					h = new E.tag.div( { 'class': 'panel-heading', 'role': 'tab', 'id': `${id}-h` }, new E.tag.h( '4', { 'class': 'panel-title' }, h ) );
					y.child( h );
				}
				var z = new E.tag.div( { 'class': 'panel-body' }, c.body );
				z = new E.tag.div( { 'class': 'panel-collapse collapse', 'role': 'tabpanel', 'id': id, 'aria-labelledby': `${id}-h` }, z );
				y.child( z );
				x.child( y );
			}
		}
		return x.build();
	}
	
	toString() {
		return this.build();
	}
	
	append( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};

$( function() {

	$('body').on( 'click', '.e-accordion-toggle', function() {
		$(this).blur();
	} );

} );
