/**
 * @package EntegreJS
 * @subpackage Controls
 * @subpackage bootswatch
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.control.bootswatch = class {

	constructor() {
		$('head').append( '<link rel="stylesheet" id="e-bootswatch">' );
	}

	static themes() {
		return [ 'cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal', 'lumen', 'paper', 'readable',
		         'sandstone', 'simplex', 'slate', 'spacelab', 'superhero', 'united', 'yeti' ];
	}

	url( t ) {
		return 'https:/'+'/maxcdn.bootstrapcdn.com/bootswatch/3.3.6/'+t+'/bootstrap.min.css';
	}

	load( u ) {
		$('link#e-bootswatch').attr( 'href', u );
	}

	clear() {
		this.load( null );
		return this;
	}

	theme( t ) {
		t = !E.empty( t ) ? t.toString().toLowerCase() : null;
		if( E.control.bootswatch.themes().includes( t ) ) {
			this.load( this.url( t ) );
		}
		return this;
	}

};
