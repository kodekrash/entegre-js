/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.breadcrumbs = class extends E.factory.node {
	
	constructor( attr, children ) {
		super( 'ol', attr );
		this.attr( 'class', 'breadcrumb' );
		this.i = [];
	}
	
	crumb( url, label, active ) {
		if( label ) {
			this.i.push( { 'url': url, 'label': label, 'active': active } );
		}
		return this;
	}
	
	build() {
		for( var i in this.i ) {
			var y = ( this.i[ i ].active === true );
			var l = y ? this.i[ i ].label : new E.tag.a( { 'href': this.i[ i ].url }, this.i[ i ].label );
			this.child( new E.factory.node( 'li', y ? { 'class': 'active' } : null, l ) );
		}
		return super.build(); 
	}

};
