/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.tabs = class extends E.factory.deck {

	constructor( attr ) {
		super();
		this.attr( attr );
		this.attr( 'class', 'e-tabs' );
		this.op = false;
		this.oj = false;
	}

	pills() {
		this.op = true;
		return this;
	}

	justify() {
		this.oj = true;
		return this;
	}

	build() {
		var x = new E.tag.div( this.a );
		if( !E.empty( this.c ) ) {
			var u = new E.factory.node( 'ul', { 'class': 'nav', 'role': 'tablist' } );
			u.attr( 'class', this.op === true ? 'nav-pills' : 'nav-tabs' );
			if( this.oj === true ) {
				u.attr( 'class', 'nav-justified' );
			}
			var b = new E.tag.div( { 'class': 'tab-content' } );
			for( var i in this.c ) {
				var c = this.c[ i ];
				if( !E.empty( c.attr ) ) {
					y.attr( c.attr );
				}
				var id = E.id();
				if( !E.empty( c.title ) ) {
					var a = new E.tag.a( { 'href': `#${id}`, 'aria-controls': id, 'role': 'tab', 'data-toggle': 'tab' }, c.title );
					var l = { 'role': 'presentation' };
					if( i == 0 ) {
						l['class'] = 'active';
					}
					u.child( new E.factory.node( 'li', l, a ) );
				}
				b.child( new E.tag.div( { 'class': `tab-pane${i == 0 ? ' active' : ''}`, 'role': 'tabpanel', 'id': id }, c.body ) );
			}
			x.child( u ).child( b );
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

	$('body').on( 'click', '.e-tabs a', function( e ) {
		e.preventDefault();
		$(this).tab('show');
		$(this).blur();
	} );

} );
