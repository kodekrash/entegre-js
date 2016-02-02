/**
 * @package EntegreJS
 * @subpackage Controls
 * @subpackage tree
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.control.tree = class extends E.factory.iterable {

	constructor( attr, children ) {
		super();
		this.attr( attr );
		this.child( children );
	}

	branch( label, tree ) {
		if( !E.empty( label ) && tree instanceof E.control.tree ) {
			this.child( new E.factory.treebranch( label, tree ) );
		}
		return this;
	}

	build( id ) {
		if( !E.empty( id ) ) {
			this.attr( 'id', id );
			this.attr( 'class', 'collapse' );
		}
		var x = E.node( 'ul', this.a );
		x.attr( 'style', "list-style-type: none;" );
		if( !E.empty( this.c ) ) {
			for( var i in this.c ) {
				var c = this.c[ i ];
				var y = E.node( 'li' );
				if( c instanceof E.factory.treebranch ) {
					var n = E.id( 'et' );
					var z = new E.widget.glyphicon( 'chevron-right', { 'id': `${n}-i` } );
					y.child( new E.tag.a( { 'class': 'e-tree-toggle', 'href': `#${n}` , 'data-toggle': 'collapse', 'aria-expanded': 'false', 'aria-controls': n }, z ) );
					y.child( ' ' );
					y.child( c.label() );
					y.child( c.items().build( n ) );
				} else {
					y.child( c );
				}
				x.child( y );
			}
		}
		x = new E.widget.div( { 'class': 'e-tree' }, x );
		return x.build();
	}

	append( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};

E.factory.treebranch = class {
	
	constructor( label, items ) {
		this.l = null;
		this.i = null;
		this.label( label );
		this.items( items );
	}

	label( x ) {
		if( E.empty( x ) ) {
			return this.l;
		} else {
			this.l = x;
		}
		return this;
	}

	items( x ) {
		if( E.empty( x ) ) {
			return this.i;
		} else {
			this.i = x instanceof E.control.tree ? x : null;
		}
		return this;
	}

};

$( function() {

	$('body').on( 'click', '.e-tree a.e-tree-toggle', function() {
		var cr = 'glyphicon-chevron-right';
		var cd = 'glyphicon-chevron-down';
		var a = ( $(this).attr('aria-expanded') == 'false' );
		var i = $(this).children('.glyphicon');
		i.removeClass( cr ).removeClass( cd ).addClass( a ? cd : cr );
		$(this).blur();
	} );

} );
