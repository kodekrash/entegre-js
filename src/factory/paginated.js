/**
 * @package EntegreJS
 * @subpackage Factories
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.factory.paginated = class {

	constructor() {
		this.d = [];
		this.opage = 10;
		this.ostart = 0;
	}

	item( x ) {
		if( !E.empty( x ) ) {
			this.d.push( x );
		}
		return this;
	}
	
	items( x ) {
		if( !E.empty( x ) && E.type( x, 'array' ) ) {
			this.d = x;
		}
		return this;
	}

	pagesize( x ) {
		this.opage = parseInt( x );
		return this;
	}

	_total() {
		return this.d.length;
	}

	_first() {
		return ( this.ostart > 0 ? 0 : null );
	}

	_last() {
		var i = ( Math.ceil( this._total() / this.opage ) - 1 ) * this.opage;
		return ( i <= this.ostart ) ? null : i;
	}

	_prev() {
		var i = ( this.ostart - this.opage );
		return ( i >= 0 ) ? i : null;
	}

	_next() {
		var i = ( this.ostart + this.opage );
		return ( i <= this._total() ) ? i : null;
	}

	_pagestart() {
		return ( this.ostart + 1 );
	}
	
	_pageend() {
		var i = ( this.ostart + this.opage );
		return ( i > this._total() ? this._total() : i );
	}

	_controls() {
		if( this._total() > this.opage ) {
			var x = new E.widget.pager( { 'class': 'e-pagination' } );
			x.button( $E( 'glyphicon','step-backward' ), '#' + this.id, false, { 'data-index': this._first(), 'title': 'First page', 'class': 'page-first' } );
			x.button( $E( 'glyphicon','triangle-left' ), '#' + this.id, false, { 'data-index': this._prev(), 'title': 'Previous page', 'class': 'page-prev' } );
			x.button( $E( 'glyphicon','triangle-right' ), '#' + this.id, false, { 'data-index': this._next(), 'title': 'Next page', 'class': 'page-next' } );
			x.button( $E( 'glyphicon','step-forward' ), '#' + this.id, false, { 'data-index': this._last(), 'title': 'Last page', 'class': 'page-last' } );
			return x;
		}
		return '';
	}

	updatecontrols( id ) {
		$('div[data-instance="' + id + '"] .e-pagination li').hide();
		var x = this._first();
		if( x != null ) {
			$('div[data-instance="' + id + '"] .e-pagination li a.page-first').data('index',x);
			$('div[data-instance="' + id + '"] .e-pagination li a.page-first').parent().show();
		}
		var x = this._prev();
		if( x != null ) {
			$('div[data-instance="' + id + '"] .e-pagination li a.page-prev').data('index',x);
			$('div[data-instance="' + id + '"] .e-pagination li a.page-prev').parent().show();
		}
		var x = this._next();
		if( x != null ) {
			$('div[data-instance="' + id + '"] .e-pagination li a.page-next').data('index',x);
			$('div[data-instance="' + id + '"] .e-pagination li a.page-next').parent().show();
		}
		var x = this._last();
		if( x != null ) {
			$('div[data-instance="' + id + '"] .e-pagination li a.page-last').data('index',x);
			$('div[data-instance="' + id + '"] .e-pagination li a.page-last').parent().show();
		}
	}

	_status() {
		return 'Showing records <span class="e-pagination-start"></span> to <span class="e-pagination-end"></span> of <span class="e-pagination-total"></span>';
	}

	updatestatus( id ) {
		$('div[data-instance="' + id + '"] .e-pagination-start').html( this._pagestart() );
		$('div[data-instance="' + id + '"] .e-pagination-end').html( this._pageend() );
		$('div[data-instance="' + id + '"] .e-pagination-total').html( this._total() );
	}

	data( i ) {
		this.ostart = parseInt( i );
		var r = [];
		for( var i = ( this._pagestart() - 1 ); i < this._pageend(); i ++ ) {
			r.push( this.d[ i ] );
		}
		return r;
	}

	toString() {
		return this.build();
	}
	
	append( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
			E.events.trigger( `${this.id}:pager`, 0 );
		}
		return this;
	}
	
};

$('body').on( 'click', '.e-pagination a', function() {
	E.events.trigger( $(this).parents('.e-pagination-instance').data('instance') + ':pager', $(this).data('index') );
	$(this).blur();
} );
