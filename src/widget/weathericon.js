/**
 * @package EntegreJS
 * @subpackage Widgets
 * @subpackage weathericon
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.widget.weathericon = class extends E.factory.node {

	constructor( icon ) {
		super( 'i' );
		this.attr( 'class', `wi wi-${icon}` );
	}

	static css() {
		return [
			'https:/' + '/cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.10/css/weather-icons.min.css',
			'https:/' + '/cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.10/css/weather-icons-wind.min.css'
		];
	}

	flip( dir ) {
		dir = dir.toString().toLowerCase();
		var h = [ 'horizontal', 'h', 'horz' ];
		var v = [ 'vertical', 'v', 'vert' ];
		if( h.includes( dir ) ) {
			dir = h[0];
		} else if( v.includes( dir ) ) {
			dir = v[0];
		} else {
			dir = null;
		}
		if( !E.empty( dir ) ) {
			this.attr( 'class', `wi-flip-${dir}` );
		}
		return this;
	}

	rotate( angle ) {
		angle = parseInt( angle );
		if( angle in [ 90, 180, 270 ] ) {
			this.attr( 'class', `wi-rotate-${angle}` );
		}
		return this;
	}

	fixedwidth() {
		this.attr( 'class', 'wi-fw' );
		return this;
	}

	wind() {
		this.attr( 'class', 'wi-wind' );
		return this;
	}

};
