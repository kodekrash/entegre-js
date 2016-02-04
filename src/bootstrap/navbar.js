/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.navbar = class extends E.factory.iterable {

	constructor( attr, children ) {
		super( attr, children );
		this.attr( 'class', 'dropdown' );
		this.db = '';
		this.ofluid = false;
		this.oinverse = false;
		this.ofixed = false;
	}

	brand( str ) {
		if( !E.empty( str ) ) {
			this.db = str;
		}
		return this;
	}

	fluid() {
		this.ofluid = true;
		return this;
	}
	
	fixed() {
		this.ofixed = true;
		return this;
	}
	
	inverse() {
		this.oinverse = true;
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

	build() {
		if( !( 'id' in this.a ) ) {
			this.attr( 'id', E.id() );
		}
		var x = new E.tag.div( { 'class': `container${this.ofluid ? '-fluid' : ''}` } );
		var y = new E.factory.node( 'span', { 'class': 'icon-bar' } );
		var b = new E.bootstrap.button( { 'class': 'navbar-toggle collapsed', 'type': 'button', 'data-toggle': 'collapse', 'data-target': `#${this.a.id}`, 'aria-expanded': 'false' } );
		b.child( new E.factory.node( 'span', { 'class': 'sr-only' }, 'Toggle navigation' ) ).child( y ).child( y ).child( y );
		y = new E.tag.div( { 'class': 'navbar-header' }, b );
		if( !E.empty( this.db ) ) {
			y.child( this.db );
		}
		x.child( y );
		y = new E.bootstrap.list( { 'class': 'nav navbar-nav' } );
		for( var i in this.c ) {
			y.child( new E.tag.a( { 'href': this.c[ i ].url }, this.c[ i ].label ), this.c[ i ].active, this.c[ i ].disabled );
		}
		y = new E.tag.div( { 'class': 'collapse navbar-collapse', 'id': this.a.id }, y );
		x.child( y );
		x = new E.factory.node( 'nav', { 'class': 'navbar' }, x );
		if( this.ofixed === true ) {
			x.attr( 'class', 'navbar-fixed-top' );
		}
		if( this.oinverse === true ) {
			x.attr( 'class', 'navbar-inverse' );
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
