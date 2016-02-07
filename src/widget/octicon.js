/**
 * @package EntegreJS
 * @subpackage Widgets
 * @subpackage octicon
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.widget.octicon = class extends E.factory.node {

	constructor( icon ) {
		super( 'i' );
		this.attr( 'class', `octicon-${icon.toString().toLowerCase()}` );
		this.omega = false;
	}

	static css() {
		return 'https:/' + '/cdnjs.cloudflare.com/ajax/libs/octicons/3.4.1/octicons.min.css';
	}
	
	mega() {
		this.omega = true;
		return this;
	}

	build() {
		this.attr( 'class', `${(this.omega ? 'mega-' : '')}octicon` ); 
		return super.build();
	}

};
