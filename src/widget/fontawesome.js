/**
 * @package EntegreJS
 * @subpackage Widgets
 * @subpackage fontawesome
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.widget.fontawesome = class extends E.factory.node {

	constructor( icon ) {
		super( 'i' );
		this.attr( 'class', `fa fa-${icon.toString().toLowerCase()}` );
	}

	static css() {
		return 'https:/' + '/maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css';
	}
	
	size( size ) {
		if( !E.empty( size ) ) {
			var sizes = [ 'lg', '2x', '3x', '4x', '5x' ];
			size = size.toString().toLowerCase();
			if( sizes.includes( size ) ) {
				this.attr( 'class', `fa-${size}` );
			}
		}
		return this;
	}
	
	fixedwidth() {
		this.attr( 'class', 'fa-fw' );
		return this;
	}

	border() {
		this.attr( 'class', 'fa-border' );
		return this;
	}
	
	rotate( angle ) {
		angle = parseInt( angle );
		if( angle >= 0 && angle <= 360 ) {
			this.attr( 'class', `fa-rotate-${angle}` );
		}
		return this;
	}
	
	flip( dir ) {
		if( !E.empty( dir ) ) {
			switch( dir.toString().toLowerCase() ) {
				case 'h':
				case 'horz':
					dir = 'horizontal';
				break;
				case 'v':
				case 'vert':
					dir = 'vertical';
				break;
			}
			if( dir in [ 'horizontal', 'vertical' ] ) {
				this.attr( 'class', `fa-flip-${dir}` );
			}
		}
		return this;
	}
	
};
