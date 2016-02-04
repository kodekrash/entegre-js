/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.pageheader = class extends E.bootstrap.heading {

	constructor( primary, secondary ) {
		super( '1', primary, secondary );
	}

	build() {
		var x = new E.bootstrap.div( { 'class': 'page-header' }, super.build() );
		return x.build();
	}

};
