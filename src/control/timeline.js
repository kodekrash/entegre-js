/**
 * @package EntegreJS
 * @subpackage Controls
 * @subpackage timeline
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.control.timeline = class extends E.factory.iterable {

	constructor( attr, children ) {
		super();
		this.attr( attr );
		this.child( children );
		this.db = null;
		this.de = null;
	}

	begin( d ) {
		this.db = moment( d );
		return this;
	}

	end( d ) {
		this.de = moment( d );
		return this;
	}

	event( label, begin, end, mode ) {
		var x = {
			'label': E.empty( label ) ? null : label,
			'begin': E.empty( begin ) ? null : moment( begin ),
			'end': E.empty( end ) ? null : moment( end ),
			'offset': 0,
			'length': 0,
			'mode': 'default'
		};
		if( !E.empty( mode ) ) {
			mode = mode.toString().toLowerCase();
			if( E.bootstrap.conf.modes.includes( mode ) ) {
				x.mode = mode;
			}
		}
		if( !E.empty( x.begin ) && !E.empty( this.db ) ) {
			x.offset = x.begin.diff( this.db );
		}
		if( !E.empty( x.begin ) && !E.empty( x.end ) ) {
			x.length = x.end.diff( x.begin );
		}
		this.child( x );
		return this;
	}

	build() {
		this.length = ( !E.empty( this.db ) && !E.empty( this.de ) ) ? this.de.diff( this.db ) : 0;
		var x = new E.tag.div( { 'class': 'e-timeline' } );
		for( var i in this.c ) {
			var c = this.c[ i ];
			var r = new E.tag.div( { 'class': 'row' } );
			r.child( new E.tag.div( { 'class': 'col-xs-6 col-md-4 text-nowrap text-right e-timeline-label' }, c.label ) );
			var p = new E.bootstrap.progressbar();
			if( c.offset > 0 ) {
				p.bar( 0, this.length, c.offset, 'offset' );
			}
			p.bar( 0, this.length, c.length, c.mode );
			r.child( new E.tag.div( { 'class': 'col-xs-6 col-md-8' }, p ) );
			x.child( r );
		}
		return x.build();
	}

	append( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};
