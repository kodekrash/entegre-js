/**
 * @package EntegreJS
 * @subpackage Controls
 * @subpackage datatable
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.control.datatable = class extends E.factory.paginated {

	constructor() {
		super();
		this.col = [];
		this.id = E.id();
		var self = this;
		E.events.listen( `${this.id}:pager`, function( i ) { self.update( i ); } );
	}

	column( label ) {
		if( !E.empty( label ) ) {
			this.col.push( label );
		}
		return this;
	}

	row( data ) {
		if( !E.empty( data ) && E.type( data, 'array' ) ) {
			super.item( data );
		}
		return this;
	}

	update( i ) {
		var r = this.data( i );
		var x = [];
		for( var i1 in r ) {
			var y = new E.factory.node( 'tr' );
			for( var i2 in r[ i1 ] ) {
				y.child( new E.factory.node( 'td', null, r[ i1 ][ i2 ] ) );
			}
			x.push( y.build() );
		}
		$('div[data-instance="' + this.id + '"] tbody').empty().append( x.join() );
		this.updatestatus( this.id );
		this.updatecontrols( this.id );
	}

	build() {
		var x = new E.tag.div( { 'class': 'e-datatable e-pagination-instance', 'data-instance': this.id } );
		var y = new E.widget.table().headers( this.col ).hover();
		x.child( new E.tag.div( { 'class': 'row' }, new E.tag.div( { 'class': 'col-xs-12' }, y ) ) );
		y = new E.tag.div( { 'class': 'col-xs-6' }, this._status() );
		var z = new E.tag.div( { 'class': 'col-xs-6 text-right' }, this._controls() );
		x.child( new E.tag.div( { 'class': 'row' }, [ y, z ] ) );
		return x.build();
	}

};
