/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.div = class extends E.bootstrap.node {

	constructor( attr, children ) {
		super( null, 'div', attr, children );
	}

	column( m, s ) {
		if( !E.empty( m ) ) {
			m = m.toString().toLowerCase();
			if( E.bootstrap.conf.columns.includes( m ) ) {
				s = parseInt( s );
				if( s >= 1 && s <= 12 ) {
					this.attr( 'class', `${m}-${s}` );
				}
			}
		}
		return this;
	}

	offset( m, s ) {
		if( !E.empty( m ) ) {
			m = m.toString().toLowerCase();
			if( E.bootstrap.conf.columns.includes( m ) ) {
				s = parseInt( s );
				if( s >= 1 && s <= 12 ) {
					this.attr( 'class', `${m}-offset-${s}` );
				}
			}
		}
		return this;
	}

};
