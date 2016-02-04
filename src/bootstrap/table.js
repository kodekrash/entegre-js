/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.table = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'table', attr, children );
		this.attr( 'class', 'table' );
		this.th = [];
		this.tr = [];
		this.tf = false;
		this.thover = false;
	}

	mode( x ) {
		x = x.toString().toLowerCase();
		if( !E.empty( x ) && E.bootstrap.conf.tablemodes.includes( x ) ) {
			this.attr( 'class', `table-${x}` );
		}
		return this;
	}
	
	hover() {
		this.attr( 'class', 'table-hover' );
		return this;
	}
	
	footer() {
		this.tf = true;
		return this;
	}

	header( x ) {
		this.th.push( x );
		return this;
	}

	headers( x ) {
		if( E.type( x, 'array' ) ) {
			this.th = x;
		}
		return this;
	}

	row( x ) {
		if( E.iterable( x ) ) {
			this.tr.push( x );
		}
		return this;
	}

	rows( x ) {
		if( !E.empty( x ) && E.type( x, 'array' ) ) {
			for( var i in x ) {
				this.row( x[i] );
			}
		}
		return this;
	}

	build() {
		var h = null;
		if( !E.empty( this.th ) ) {
			var x = new E.factory.node( 'tr' );
			for( var i in this.th ) {
				x.child( new E.factory.node( 'th', null, this.th[ i ] ) );
			}
			this.child( new E.factory.node( 'thead', null, x ) );
			if( this.tf === true ) {
				h = x;
			}
		}
		var x = new E.factory.node( 'tbody' );
		if( !E.empty( this.tr ) ) {
			for( var i in this.tr ) {
				if( E.iterable( this.tr[ i ] ) ) {
					var r = new E.factory.node( 'tr' );
					for( var j in this.tr[ i ] ) {
						r.child( new E.factory.node( 'td', null, this.tr[ i ][ j ] ) );
					}
					x.child( r );
				}
			}
		}
		this.child( x );
		if( !E.empty( h ) ) {
			this.child( new E.factory.node( 'tfoot', null, h ) );
		}
		return super.build();
	}

};
