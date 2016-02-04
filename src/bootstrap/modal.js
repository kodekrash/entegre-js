/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.modal = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
		this.attr( 'class', 'modal fade' );
		this.attr( 'tabindex', '-1' );
		this.attr( 'role', 'dialog' );
		this.mh = null;
		this.mb = [];
		this.mf = [];
		this.osize = null;
		this.cb = true;
	}

	noclose() {
		this.cb = false;
	}

	large() {
		this.osize = 'lg';
		return this;
	}
	
	small() {
		this.osize = 'sm';
		return this;
	}

	header( x ) {
		if( !E.empty( x ) ) {
			this.mh = x;
		}
		return this;
	}

	body( x ) {
		if( !E.empty( x ) ) {
			this.mb.push( x );
		}
		return this;
	}

	footer( x ) {
		if( !E.empty( x ) ) {
			this.mf.push( x );
		}
		return this;
	}

	build() {
		if( !( 'id' in this.a ) ) {
			this.attr( 'id', E.id() );
		}
		var z = new E.tag.div( { 'class': 'modal-content' } );
		if( this.cb || !E.empty( this.mh ) ) {
			var x = new E.tag.div( { 'class': 'modal-header' } );
			if( this.cb ) {
				var y = new E.factory.node( 'span', { 'aria-hidden': 'true' }, '&times;' );
				x.child( new E.factory.node( 'button', { 'type': 'button', 'class': 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' }, y ) );
			}
			if( !E.empty( this.mh ) ) {
				x.child( new E.tag.h( '4', { 'class': 'modal-title' }, this.mh ) );
			}
			z.child( x );
		}
		if( !E.empty( this.mb ) ) {
			z.child( new E.tag.div( { 'class': 'modal-body' }, this.mb ) );
		}
		if( !E.empty( this.mf ) ) {
			z.child( new E.tag.div( { 'class': 'modal-footer' }, this.mf ) );
		}
		x = new E.tag.div( { 'class': 'modal-dialog', 'role': 'document' }, z );
		if( !E.empty( this.osize ) ) {
			x.attr( 'class', `modal-${this.osize}` );
		}
		this.child( x );
		return super.build();
	}

};
