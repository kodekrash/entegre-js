/**
 * @package EntegreJS
 * @subpackage Controls
 * @subpackage dataview
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.control.dataview = class extends E.factory.paginated {

	constructor() {
		super();
		this.ocolumns = 4;
		this.otemplate = '';
		this.ocallback = '';
		this.id = E.id();
		var self = this;
		E.events.listen( `${this.id}:pager`, function( i ) { self.update( i ); } );
	}

	columns( i ) {
		this.ocolumns = parseInt( i );
		return this;
	}

	template( x ) {
		if( !E.empty( x ) ) {
			this.otemplate = x.toString();
		}
		return this;
	}

	callback( x ) {
		if( !E.empty( x ) && E.type( x, 'function' ) ) {
			this.ocallback = x;
		}
		return this;
	}

	_renderitem( x ) {
		if( x ) {
			if( !E.empty( this.otemplate ) && window.Mustache ) {
				return Mustache.render( this.otemplate, x );
			} else if( !E.empty( this.ocallback ) ) {
				return this.ocallback( x );
			} else if( x.build ) {
				return x.build();
			} else if( x.toString ) {
				return x.toString();
			} else {
				return x;
			}
		}
		return '';
	}

	update( i ) {
		var r = E.chunk( this.data( i ), this.ocolumns );
		var x = [];
		for( var i1 in r ) {
			var y = new E.factory.node( 'tr' );
			for( var i2 in r[ i1 ] ) {
				y.child( new E.factory.node( 'td', null, this._renderitem( r[ i1 ][ i2 ] ) ) );
			}
			x.push( y.build() );
		}
		$('div[data-instance="' + this.id + '"] tbody').empty().append( x.join() );
		this.updatestatus( this.id );
		this.updatecontrols( this.id );
	}

	build() {
		var x = new E.tag.div( { 'class': 'e-dataview e-pagination-instance', 'data-instance': this.id } );
		var y = new E.factory.node( 'table', { 'style': 'width:100%' } );
		y.child( new E.factory.node( 'tbody' ) );
		x.child( new E.tag.div( { 'class': 'row' }, new E.tag.div( { 'class': 'col-xs-12' }, y ) ) );
		y = new E.tag.div( { 'class': 'col-xs-6' }, this._status() );
		var z = new E.tag.div( { 'class': 'col-xs-6 text-right' }, this._controls() );
		x.child( new E.tag.div( { 'class': 'row' }, [ y, z ] ) );
		return x.build();
	}

};