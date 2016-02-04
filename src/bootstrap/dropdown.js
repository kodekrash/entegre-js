/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.dropdown = class extends E.factory.iterable {

	constructor( attr, children ) {
		super( attr, children );
		this.attr( 'class', 'dropdown' );
		this.db = '';
	}

	label( str ) {
		if( !E.empty( str ) ) {
			this.db = str.toString();
		}
		return this;
	}

	item( url, label, active, disabled ) {
		if( !E.empty( label ) ) {
			var x = { 'url': url.toString(), 'label': label, 'active': false, 'disabled': false };
			if( active && active === true ) {
				x.active = true;
			}
			if( disabled && disabled === true ) {
				x.disabled = true;
			}
			this.child( x );
		}
		return this;
	}
	
	separator() {
		this.child( { 'separator': true } );
		return this;
	}
	
	build() {
		var z = new E.tag.div( { 'class': 'dropdown' } );
		if( !( 'id' in this.a ) ) {
			this.attr( 'id', E.id() );
		}
		var x = new E.bootstrap.button( { 'class': 'btn-default dropdown-toggle', 'type': 'button', 'id': this.a.id, 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' } );
		if( !E.empty( this.db ) ) {
			x.child( this.db );
		}
		x.child( ' ' ).child( new E.factory.node( 'span', { 'class': 'caret' } ) );
		z.child( x );
		x = new E.bootstrap.list( { 'class': 'dropdown-menu', 'aria-labelledby': this.a.id } );
		for( var i in this.c ) {
			if( 'separator' in this.c[ i ] ) {
				x.separator();
			} else {
				var y = new E.tag.a( { 'href': this.c[ i ].url }, this.c[ i ].label );
				x.child( y, this.c[ i ].active, this.c[ i ].disabled );
			}
		}
		z.child( x );
		return z.build();
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
