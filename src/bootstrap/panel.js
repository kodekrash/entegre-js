/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.panel = class extends E.bootstrap.node {

	constructor( attr, children ) {
		super( 'panel', 'div', attr, children );
		this.attr( 'class', 'panel' );
		this.ph = [];
		this.pb = [];
		this.pf = [];
	}
	
	header( x ) {
		if( !E.empty( x ) ) {
			this.ph.push( x );
		}
		return this;
	}

	body( x ) {
		if( !E.empty( x ) ) {
			this.pb.push( x );
		}
		return this;
	}

	footer( x ) {
		if( !E.empty( x ) ) {
			this.pf.push( x );
		}
		return this;
	}

	build() {
		if( !E.empty( this.ph ) ) {
			var x = new E.tag.div( { 'class': 'panel-heading' } );
			if( this.ph.length == 1 ) {
				x.child( new E.tag.h( '3', { 'class': 'panel-title' }, this.ph[0] ) );
			} else {
				for( var i in this.ph ) {
					x.child( this.ph[ i ] );
				}
			}
			this.child( x );
		}
		if( !E.empty( this.pb ) ) {
			this.child( new E.tag.div( { 'class': 'panel-body' }, this.pb ) );
		}
		if( !E.empty( this.pf ) ) {
			this.child( new E.tag.div( { 'class': 'panel-footer' }, this.pf ) );
		}
		return super.build();
	}

};
