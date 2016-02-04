/**
 * @package EntegreJS
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap.select = class extends E.factory.iterable {

	constructor( attr, children ) {
		super( attr );
		this.attr( 'class', 'form-control' );
		if( children && !E.empty( children ) ) {
			this.items( children );
		}
		this.sv = null;
		this.mu = false;
	}

	multiple() {
		this.mu = true;
		return this;
	}

	selected( value ) {
		this.sv = value;
		return this;
	}
	
	item( label, value, selected ) {
		if( !E.empty( label ) ) {
			var x = { 'value': value, 'label': label };
			if( selected && selected === true ) {
				x.selected = true;
			}
			this.child( x );
		}
		return this;
	}
	
	items( data ) {
		if( !E.empty( data ) && E.type( data, 'array' ) ) {
			for( var i in data ) {
				d = data[ i ];
				if( 'value' in d && 'label' in d ) {
					this.item( d.label, d.value );
				} else {
					this.item( d[0], d[1] );
				}
			}
		}
		return this;
	}

	build() {
		if( this.mu === true ) {
			this.attr( 'multiple', true );
		}
		var x = new E.factory.node( 'select', this.a );
		for( var i in this.c ) {
			var c = this.c[ i ];
			var y = new E.factory.node( 'option', { 'value': c.value }, c.label );
			if( ( c.selected && c.selected === true ) || c.value == this.sv ) {
				y.attr( 'selected', 'selected' );
			}
			x.child( y );
		}
		return x.build();
	}

	toString() {
		return this.build();
	}
	
	append( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};
