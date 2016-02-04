/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.progressbar = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
		this.attr( 'class', 'e-progress progress' );
		this.bi = [];
	}

	bar( min, max, value, mode, label, attr ) {
		var x = {
			'min': parseInt( min ),
			'max': parseInt( max ),
			'value': parseInt( value ),
			'size': 0,
			'label': E.empty( label ) ? '' : label,
			'attr': E.empty( attr ) ? {} : attr
		};
		x.size = ( x.value / ( x.max - x.min ) ) * 100;
		if( !E.empty( mode ) ) {
			mode = mode.toString().toLowerCase();
			if( E.bootstrap.conf.modes.includes( mode ) || mode == 'offset' ) {
				x.mode = mode;
				if( mode == 'offset' ) {
					x.attr.style = 'background-color:transparent !important; box-shadow:none !important;';
				}
			}
		}
		this.bi.push( x );
		return this;
	}

	build() {
		for( var i in this.bi ) {
			var b = this.bi[ i ];
			var x = new E.tag.div( { 'class': 'progress-bar', 'role': 'progressbar', 'aria-valuemin': b.min, 'aria-valuemax': b.max, 'aria-valuenow': b.value } );
			x.attr( b.attr );
			x.attr( 'style', 'width: ' + b.size + '%' );
			if( 'mode' in b ) {
				x.attr( 'class', 'progress-bar-' + b.mode );
			}
			if( !E.empty( b.label ) ) {
				x.child( b.label );
			}
			this.child( x );
		}
		return super.build();
	}

};
