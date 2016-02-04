/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.conf = {

	modes: [ 'default', 'primary', 'success', 'info', 'warning', 'danger', 'link' ],
	sizes: [ 'lg', '', 'sm', 'xs', 'block' ],
	states: [ '', 'active', 'disabled' ],
	tablemodes: [ '', 'striped', 'bordered', 'condensed' ],
	imgmodes: [ 'rounded', 'circle', 'thumbnail' ],
	textmodes: [ 'muted', 'primary', 'success', 'info', 'warning', 'danger' ],
	bgmodes: [ 'primary', 'success', 'info', 'warning', 'danger' ],
	aligns: [ 'left', 'center', 'right', 'justify', 'nowrap' ],
	casemodes: [ 'up', 'down', 'camel', 'uppercase', 'lowercase', 'capitalize' ],
	columns: [ 'xs', 'sm', 'md', 'lg' ]

};

E.bootstrap.node = class extends E.factory.node {

	constructor( prefix, tag, attrs, children ) {
		super( tag, attrs, children );
		this.p = !E.empty( prefix ) ? prefix.toString() : null;
	}

	mode( x ) {
		if( !E.empty( this.p ) ) {
			x = x.toString().toLowerCase();
			if( E.bootstrap.conf.modes.includes( x ) ) {
				this.attr( 'class', `${this.p}-${x}` );
			}
		}
		return this;
	}

	size( x ) {
		if( !E.empty( this.p ) ) {
			x = x.toString().toLowerCase();
			if( E.bootstrap.conf.sizes.includes( x ) ) {
				this.attr( 'class', `${this.p}-${x}` );
			}
		}
		return this;
	}

	state( x ) {
		if( !E.empty( this.p ) ) {
			x = x.toString().toLowerCase();
			if( E.bootstrap.conf.states.includes( x ) ) {
				this.attr( 'class', x );
			}
		}
		return this;
	}

	textmode( x ) {
		x = x.toString().toLowerCase();
		if( E.bootstrap.conf.textmodes.includes( x ) ) {
			this.attr( 'class', `text-${x}` );
		}
		return this;
	}

	bgmode( x ) {
		x = x.toString().toLowerCase();
		if( E.bootstrap.conf.bgmodes.includes( x ) ) {
			this.attr( 'class', `bg-${x}` );
		}
		return this;
	}
	
	clearfix() {
		this.attr( 'class', 'clearfix' );
		return this;
	}

	align( x ) {
		x = x.toString().toLowerCase();
		if( E.bootstrap.conf.aligns.includes( x ) ) {
			this.attr( 'class', `text-${x}` );
		}
		return this;
	}
	
	textcase( x ) {
		x = x.toString().toLowerCase();
		if( E.bootstrap.conf.casemodes.includes( x ) ) {
			switch( x ) {
				case 'up':
				case 'upper':
				case 'uppercase':
					x = 'uppercase';
				break;
				case 'down':
				case 'lower':
				case 'lowercase':
					x = 'lowercase';
				break;
				case 'camel':
				case 'capitalize':
					x = 'capitalize';
				break;
			}
			this.attr( 'class', `text-${x}` );
		}
		return this;
	}
	
};
