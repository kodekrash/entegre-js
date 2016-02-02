/**
 * @package EntegreJS
 * @subpackage Controls
 * @subpackage notifications
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.control.notifications = class {

	constructor() {
		this.id = E.id();
		this.m = 'bubble';
		this.timers = {};
		this.t = 3;
	}

	bubble() {
		this.m = 'bubble';
		return this;
	}

	bar() {
		this.m = 'bar';
		return this;
	}

	embed() {
		this.m = 'embed';
		return this;
	}

	delay( i ) {
		if( i ) {
			this.t = parseInt( i );
		}
		return this;
	}

	clear( i ) {
		if( i && this.timers[ i ] ) {
			window.clearTimeout( this.timers[ i ] );
			$('#' + i).remove();
			return true;
		}
		return false;
	}

	post( m, c, t ) {
		var id = E.id();
		var x = $E('alert').mode( m ).attr( 'id', id );
		if( c && !E.empty( c ) ) {
			x.callout( c ).child( this.m == 'bubble' ? '<br>' : ' ' );
		}
		if( t && !E.empty( t ) ) {
			x.child( t );
		}
		x = x.build();
		$('#' + this.id).append( x );
		var self = this;
		this.timers[ id ] = window.setTimeout( function( x ) { self.clear( x ); }, ( this.t * 1000 ), id );
	}

	success( c, t ) {
		this.post( 'success', c, t );
	}

	info( c, t ) {
		this.post( 'info', c, t );
	}

	warning( c, t ) {
		this.post( 'warning', c, t );
	}

	danger( c, t ) {
		this.post( 'danger', c, t );
	}

	build() {
		var x = new E.tag.div( { 'class': 'e-notifications e-notifications-' + this.m, 'id': this.id } );
		var y;
		switch( this.m ) {
			case 'bar':
				y = "position:absolute; top:0; left:0; right:0; z-index:9999;";
			break;
			case 'embed':
				y = "position:relative; top:0; left:0; right:0; z-index:9999;";
			break;
			case 'bubble':
			default:
				y = "position:absolute; top:10px; right:10px; z-index:9999; width:200px; overflow:hidden;";
			break;
		}
		x.attr( 'style', y );
		return x.build();
	}

	toString() {
		return this.build();
	}

	put( t ) {
		t = this.m == 'bubble' || E.empty( t ) ? 'body' : t;
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};
