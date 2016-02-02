/**
 * @package EntegreJS
 * @subpackage Widgets
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.bootstrap = {

	modes: [ 'default', 'primary', 'success', 'info', 'warning', 'danger', 'link' ],
	sizes: [ 'lg', '', 'sm', 'xs', 'block' ],
	states: [ '', 'active', 'disabled' ],
	tablemodes: [ '', 'striped', 'bordered', 'condensed' ],
	imgmodes: [ 'rounded', 'circle', 'thumbnail' ],
	textmodes: [ 'muted', 'primary', 'success', 'info', 'warning', 'danger' ],
	bgmodes: [ 'primary', 'success', 'info', 'warning', 'danger' ],
	aligns: [ 'left', 'center', 'right', 'justify', 'nowrap' ],
	casemodes: [ 'up', 'down', 'camel', 'uppercase', 'lowercase', 'capitalize' ]

};

E.bootstrap.node = class extends E.factory.node {

	constructor( prefix, tag, attrs, children ) {
		super( tag, attrs, children );
		this.p = !E.empty( prefix ) ? prefix.toString() : null;
	}

	mode( x ) {
		if( !E.empty( this.p ) ) {
			x = x.toString().toLowerCase();
			if( E.bootstrap.modes.includes( x ) ) {
				this.attr( 'class', `${this.p}-${x}` );
			}
		}
		return this;
	}

	size( x ) {
		if( !E.empty( this.p ) ) {
			x = x.toString().toLowerCase();
			if( E.bootstrap.sizes.includes( x ) ) {
				this.attr( 'class', `${this.p}-${x}` );
			}
		}
		return this;
	}

	state( x ) {
		if( !E.empty( this.p ) ) {
			x = x.toString().toLowerCase();
			if( E.bootstrap.states.includes( x ) ) {
				this.attr( 'class', x );
			}
		}
		return this;
	}

	textmode( x ) {
		x = x.toString().toLowerCase();
		if( E.bootstrap.textmodes.includes( x ) ) {
			this.attr( 'class', `text-${x}` );
		}
		return this;
	}

	bgmode( x ) {
		x = x.toString().toLowerCase();
		if( E.bootstrap.bgmodes.includes( x ) ) {
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
		if( E.bootstrap.aligns.includes( x ) ) {
			this.attr( 'class', `text-${x}` );
		}
		return this;
	}
	
	textcase( x ) {
		x = x.toString().toLowerCase();
		if( E.bootstrap.casemodes.includes( x ) ) {
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

E.widget.accordion = class extends E.factory.deck {

	constructor( attr ) {
		super();
		this.attr( attr );
		this.attr( 'class', 'e-accordion panel-group' );
		this.attr( 'role', 'tablist' );
		this.attr( 'aria-multiselectable', 'true' );
	}

	build() {
		if( !( 'id' in this.a ) ) {
			this.attr( 'id', E.id() );
		}
		var x = new E.tag.div( this.a );
		if( !E.empty( this.c ) ) {
			for( var i in this.c ) {
				var c = this.c[ i ];
				var y = new E.tag.div( { 'class': 'panel panel-default' } );
				if( !E.empty( c.attr ) ) {
					y.attr( c.attr );
				}
				var id = E.id();
				if( !E.empty( c.title ) ) {
					var h = new E.tag.a( { 'class': 'e-accordion-toggle', 'role': 'button', 'data-toggle': 'collapse', 'data-parent': `#${this.a.id}`, 'href': `#${id}`, 'aria-expanded': 'false', 'aria-controls': y.a.id }, c.title );
					h = new E.tag.div( { 'class': 'panel-heading', 'role': 'tab', 'id': `${id}-h` }, new E.tag.h( '4', { 'class': 'panel-title' }, h ) );
					y.child( h );
				}
				var z = new E.tag.div( { 'class': 'panel-body' }, c.body );
				z = new E.tag.div( { 'class': 'panel-collapse collapse', 'role': 'tabpanel', 'id': id, 'aria-labelledby': `${id}-h` }, z );
				y.child( z );
				x.child( y );
			}
		}
		return x.build();
	}
	
	toString() {
		return this.build();
	}
	
	put( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};

E.widget.alert = class extends E.bootstrap.node {

	constructor( attr, children ) {
		super( 'alert', 'div', attr, children );
		this.attr( 'class', 'alert' );
	}

	callout( s ) {
		if( s && !E.empty( s ) ) {
			this.child( new E.factory.node( 'strong', null, s ) );
		}
		return this;
	}

};

E.widget.badge = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'span', attr, children );
		this.attr( 'class', 'badge' );
	}

};

E.widget.blockquote = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'blockquote', attr, children );
		this.ft = null;
	}

	footer( x ) {
		if( !E.empty( x ) ) {
			this.ft = x;
		}
		return this;
	}

	reverse() {
		this.attr( 'class', 'blockquote-reverse' );
		return this;
	}
	
	build() {
		if( !E.empty( this.ft ) ) {
			this.child( new E.factory.node( 'footer', null, this.ft ) );
		}
		return super.build();
	}

};

E.widget.breadcrumbs = class extends E.factory.node {
	
	constructor( attr, children ) {
		super( 'ol', attr );
		this.attr( 'class', 'breadcrumb' );
		this.i = [];
	}
	
	crumb( url, label, active ) {
		if( label ) {
			this.i.push( { 'url': url, 'label': label, 'active': active } );
		}
		return this;
	}
	
	build() {
		for( var i in this.i ) {
			var y = ( this.i[ i ].active === true );
			var l = y ? this.i[ i ].label : new E.tag.a( { 'href': this.i[ i ].url }, this.i[ i ].label );
			this.child( new E.factory.node( 'li', y ? { 'class': 'active' } : null, l ) );
		}
		return super.build(); 
	}

};

E.widget.button = class extends E.bootstrap.node {

	constructor( attr, children ) {
		super( 'btn', 'button', attr, children );
		this.attr( 'class', 'btn' );
	}

};

E.widget.checkbox = class extends E.factory.attr {
	
	constructor( attr ) {
		super();
		this.attr( attr );
		this.oi = false;
		this.od = false;
		this.txt = '';
	}

	inline() {
		this.oi = true;
		return this;
	}

	disabled() {
		this.od = true;
		return this;
	}

	label( x ) {
		if( !E.empty( x ) ) {
			this.txt = x;
		}
		return this;
	}

	build() {
		var x = new E.factory.node( 'label' );
		if( this.oi === true ) {
			x.attr( 'class', 'checkbox-inline' );
		}
		var y = new E.factory.node( 'input', { 'type': 'checkbox' } );
		if( this.od === true ) {
			y.attr( 'disabled', true );
		}
		y.attr( this.a );
		x.child( y );
		if( !E.empty( this.txt ) ) {
			x.child( this.txt );
		}
		if( this.io !== true ) {
			x = new E.tag.div( { 'class': 'checkbox' }, x );
			if( this.od === true ) {
				x.attr( 'disabled', true );
			}
		}
		return x.build();
	}

	toString() {
		return this.build();
	}

	put( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};

E.widget.div = class extends E.bootstrap.node {

	constructor( attr, children ) {
		super( null, 'div', attr, children );
	}

};

E.widget.dropdown = class extends E.factory.iterable {

	constructor( attr, children ) {
		super( attr, children );
		this.attr( 'class', 'dropdown' );
		this.db = '';
	}

	label( str ) {
		if( !E.empty( str ) ) {
			this.db = str.toString();
		}
		return this;
	}

	item( url, label, active, disabled ) {
		if( !E.empty( label ) ) {
			var x = { 'url': url.toString(), 'label': label, 'active': false, 'disabled': false };
			if( active && active === true ) {
				x.active = true;
			}
			if( disabled && disabled === true ) {
				x.disabled = true;
			}
			this.child( x );
		}
		return this;
	}
	
	separator() {
		this.child( { 'separator': true } );
		return this;
	}
	
	build() {
		var z = new E.tag.div( { 'class': 'dropdown' } );
		if( !( 'id' in this.a ) ) {
			this.attr( 'id', E.id() );
		}
		var x = new E.widget.button( { 'class': 'btn-default dropdown-toggle', 'type': 'button', 'id': this.a.id, 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' } );
		if( !E.empty( this.db ) ) {
			x.child( this.db );
		}
		x.child( ' ' ).child( new E.factory.node( 'span', { 'class': 'caret' } ) );
		z.child( x );
		x = new E.widget.list( { 'class': 'dropdown-menu', 'aria-labelledby': this.a.id } );
		for( var i in this.c ) {
			if( 'separator' in this.c[ i ] ) {
				x.separator();
			} else {
				var y = new E.tag.a( { 'href': this.c[ i ].url }, this.c[ i ].label );
				x.child( y, this.c[ i ].active, this.c[ i ].disabled );
			}
		}
		z.child( x );
		return z.build();
	}
	
	toString() {
		return this.build();
	}
	
	put( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};

E.widget.form = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'form', attr, children );
	}

	horizontal() {
		this.attr( 'class', 'form-horizontal' );
		return this;
	}

	inline() {
		this.attr( 'class', 'form-inline' );
		return this;
	}

};

E.widget.formgroup = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
		this.attr( 'class', 'form-group' );
	}
	
};

E.widget.glyphicon = class extends E.factory.node {

	constructor( icon, attr ) {
		super( 'i' );
		this.attr( attr );
		this.attr( 'class', `glyphicon glyphicon-${icon.toString().toLowerCase()}` );
	}
	
};

E.widget.heading = class extends E.bootstrap.node {

	constructor( size, primary, secondary ) {
		super( null, 'h' + size.toString() );
		this.tp = null;
		this.ts = null;
		this.primary( primary );
		this.secondary( secondary );
	}

	primary( x ) {
		if( !E.empty( x ) ) {
			this.tp = x;
		}
		return this;
	}

	secondary( x ) {
		if( !E.empty( x ) ) {
			this.ts = x;
		}
		return this;
	}

	build() {
		if( !E.empty( this.tp ) ) {
			this.child( this.tp );
		}
		if( !E.empty( this.ts ) ) {
			this.child( ' ' );
			this.child( new E.factory.node( 'small', null, this.ts ) );
		}
		return super.build();
	}

};

E.widget.img = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'img', attr, children );
	}

	mode( x ) {
		x = x.toString().toLowerCase();
		if( !E.empty( x ) && E.bootstrap.imgmodes.includes( x ) ) {
			this.attr( 'class', `img-${x}` );
		}
		return this;
	}

};

E.widget.input = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'input', attr, children );
		this.attr( 'class', 'form-control' );
	}

};


E.widget.inputgroup = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
		this.attr( 'class', 'input-group' );
		this.ap = null;
		this.as = null;
		this.ifd = null;
		this.is = '';
	}

	size( x ) {
		x = x.toString().toLowerCase();
		if( E.bootstrap.sizes.includes( x ) ) {
			this.is = x;
		}
		return this;
	}
	
	before( x ) {
		if( !E.empty( x ) ) {
			this.ap = x;
		}
		return this;
	}
	
	after( x ) {
		if( !E.empty( x ) ) {
			this.as = x;
		}
		return this;
	}

	field( x ) {
		if( !E.empty( x ) ) {
			this.ifd = x;
		}
		return this;
	}

	build() {
		if( !E.empty( this.is ) ) {
			this.attr( 'class', `input-group-${this.is}` );
		}
		if( !E.empty( this.ap ) ) {
			this.child( new E.factory.node( 'span', { 'class': 'input-group-addon' }, this.ap ) );
		}
		this.child( this.ifd );
		if( !E.empty( this.as ) ) {
			this.child( new E.factory.node( 'span', { 'class': 'input-group-addon' }, this.as ) );
		}
		return super.build();
	}

};

E.widget.jumbotron = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
		this.attr( 'class', 'jumbotron' );
	}

	header( x ) {
		if( !E.empty( x ) ) {
			this.child( new E.tag.h( '1', null, x ) );
		}
		return this;
	}

};

E.widget.label = class extends E.bootstrap.node {

	constructor( attr, children ) {
		super( 'label', 'span', attr, children );
		this.attr( 'class', 'label' );
	}

};

E.widget.list = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'ul', attr, children );
	}

	ordered() {
		this.t = 'ol';
		return this;
	}
	
	unordered() {
		this.t = 'ul';
		return this;
	}

	inline() {
		this.attr( 'class', 'list-inline' );
		return this;
	}
	
	child( c, active, disabled ) {
		if( !E.empty( c ) ) {
			var x = new E.factory.node( 'li', null, c );
			if( active && active === true ) {
				x.attr( 'class', 'active' );
			}
			if( disabled && disabled === true ) {
				x.attr( 'class', 'disabled' );
			}
			super.child( x );
		}
		return this;
	}
	
	separator() {
		super.child( new E.factory.node( 'li', { 'role': 'separator', 'class': 'divider' } ) );
	}

};

E.widget.modal = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
		this.attr( 'class', 'modal fade' );
		this.attr( 'tabindex', '-1' );
		this.attr( 'role', 'dialog' );
		this.mh = null;
		this.mb = [];
		this.mf = [];
		this.cb = true;
	}

	noclose() {
		this.cb = false;
	}

	header( x ) {
		if( !E.empty( x ) ) {
			this.mh = x;
		}
		return this;
	}

	body( x ) {
		if( !E.empty( x ) ) {
			this.mb.push( x );
		}
		return this;
	}

	footer( x ) {
		if( !E.empty( x ) ) {
			this.mf.push( x );
		}
		return this;
	}

	build() {
		if( !( 'id' in this.a ) ) {
			this.attr( 'id', E.id() );
		}
		var z = new E.tag.div( { 'class': 'modal-content' } );
		if( this.cb || !E.empty( this.mh ) ) {
			var x = new E.tag.div( { 'class': 'modal-header' } );
			if( this.cb ) {
				var y = new E.factory.node( 'span', { 'aria-hidden': 'true' }, '&times;' );
				x.child( new E.factory.node( 'button', { 'type': 'button', 'class': 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' }, y ) );
			}
			if( !E.empty( this.mh ) ) {
				x.child( new E.tag.h( '4', { 'class': 'modal-title' }, this.mh ) );
			}
			z.child( x );
		}
		if( !E.empty( this.mb ) ) {
			z.child( new E.tag.div( { 'class': 'modal-body' }, this.mb ) );
		}
		if( !E.empty( this.mf ) ) {
			z.child( new E.tag.div( { 'class': 'modal-footer' }, this.mf ) );
		}
		this.child( new E.tag.div( { 'class': 'modal-dialog', 'role': 'document' }, z ) );
		return super.build();
	}

};

E.widget.navbar = class extends E.factory.iterable {

	constructor( attr, children ) {
		super( attr, children );
		this.attr( 'class', 'dropdown' );
		this.db = '';
		this.ofluid = false;
		this.oinverse = false;
		this.ofixed = false;
	}

	brand( str ) {
		if( !E.empty( str ) ) {
			this.db = str;
		}
		return this;
	}

	fluid() {
		this.ofluid = true;
		return this;
	}
	
	fixed() {
		this.ofixed = true;
		return this;
	}
	
	inverse() {
		this.oinverse = true;
		return this;
	}

	item( url, label, active, disabled ) {
		if( !E.empty( label ) ) {
			var x = { 'url': url.toString(), 'label': label, 'active': false, 'disabled': false };
			if( active && active === true ) {
				x.active = true;
			}
			if( disabled && disabled === true ) {
				x.disabled = true;
			}
			this.child( x );
		}
		return this;
	}

	build() {
		if( !( 'id' in this.a ) ) {
			this.attr( 'id', E.id() );
		}
		var x = new E.tag.div( { 'class': `container${this.ofluid ? '-fluid' : ''}` } );
		var y = new E.factory.node( 'span', { 'class': 'icon-bar' } );
		var b = new E.widget.button( { 'class': 'navbar-toggle collapsed', 'type': 'button', 'data-toggle': 'collapse', 'data-target': `#${this.a.id}`, 'aria-expanded': 'false' } );
		b.child( new E.factory.node( 'span', { 'class': 'sr-only' }, 'Toggle navigation' ) ).child( y ).child( y ).child( y );
		y = new E.tag.div( { 'class': 'navbar-header' }, b );
		if( !E.empty( this.db ) ) {
			y.child( this.db );
		}
		x.child( y );
		y = new E.widget.list( { 'class': 'nav navbar-nav' } );
		for( var i in this.c ) {
			y.child( new E.tag.a( { 'href': this.c[ i ].url }, this.c[ i ].label ), this.c[ i ].active, this.c[ i ].disabled );
		}
		y = new E.tag.div( { 'class': 'collapse navbar-collapse', 'id': this.a.id }, y );
		x.child( y );
		x = new E.factory.node( 'nav', { 'class': 'navbar' }, x );
		if( this.ofixed === true ) {
			x.attr( 'class', 'navbar-fixed-top' );
		}
		if( this.oinverse === true ) {
			x.attr( 'class', 'navbar-inverse' );
		}
		return x.build();
	}

	toString() {
		return this.build();
	}
	
	put( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};

E.widget.p = class extends E.bootstrap.node {

	constructor( attr, children ) {
		super( null, 'p', attr, children );
	}

	lead() {
		this.attr( 'class', 'lead' );
	}

};

E.widget.pageheader = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr );
		this.attr( 'class', 'page-header' );
		this.child( children );
	}

	child( x ) {
		if( !E.empty( x ) ) {
			super.child( new E.tag.h( ( this.c.length + 1 ), null, x ) );
		}
		return this;
	}

};

E.widget.pager = class extends E.factory.attr {
	
	constructor( attr ) {
		super();
		this.attr( attr );
		this.c = [];
	}

	button( label, href, disabled, attr ) {
		if( !E.empty( label ) ) {
			var x = { 'label': label, 'url': href, 'disabled': false, 'attr': ( attr ? attr : {} ) };
			if( disabled && disabled === true ) {
				x.disabled = true;
			}
			this.c.push( x );
		}
		return this;
	}

	build() {
		var x = new E.widget.list( { 'class': 'pager' } );
		for( var i in this.c ) {
			var y = new E.factory.node( 'a', { 'href': this.c[ i ].url }, this.c[ i ].label );
			if( !E.empty( this.c[ i ].attr ) ) {
				y.attr( this.c[ i ].attr );
			}
			x.child( y, null, this.c[ i ].disabled );
		}
		x = new E.factory.node( 'nav', this.a, x );
		return x.build();
	}

};

E.widget.panel = class extends E.bootstrap.node {

	constructor( attr, children ) {
		super( 'panel', 'div', attr, children );
		this.attr( 'class', 'panel' );
		this.ph = [];
		this.pb = [];
		this.pf = [];
	}
	
	header( x ) {
		if( !E.empty( x ) ) {
			this.ph.push( x );
		}
		return this;
	}

	body( x ) {
		if( !E.empty( x ) ) {
			this.pb.push( x );
		}
		return this;
	}

	footer( x ) {
		if( !E.empty( x ) ) {
			this.pf.push( x );
		}
		return this;
	}

	build() {
		if( !E.empty( this.ph ) ) {
			var x = new E.tag.div( { 'class': 'panel-heading' } );
			if( this.ph.length == 1 ) {
				x.child( new E.tag.h( '3', { 'class': 'panel-title' }, this.ph[0] ) );
			} else {
				for( var i in this.ph ) {
					x.child( this.ph[ i ] );
				}
			}
			this.child( x );
		}
		if( !E.empty( this.pb ) ) {
			this.child( new E.tag.div( { 'class': 'panel-body' }, this.pb ) );
		}
		if( !E.empty( this.pf ) ) {
			this.child( new E.tag.div( { 'class': 'panel-footer' }, this.pf ) );
		}
		return super.build();
	}

};

E.widget.progressbar = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
		this.attr( 'class', 'e-progress progress' );
		this.bi = [];
	}

	bar( min, max, value, mode, attr ) {
		var x = {
			'min': parseInt( min ),
			'max': parseInt( max ),
			'value': parseInt( value ),
			'size': 0,
			'attr': E.empty( attr ) ? {} : attr
		};
		x.size = ( x.value / ( x.max - x.min ) ) * 100;
		if( !E.empty( mode ) ) {
			mode = mode.toString().toLowerCase();
			if( E.bootstrap.modes.includes( mode ) || mode == 'offset' ) {
				x.mode = mode;
				if( mode == 'offset' ) {
					x.attr.style = 'background-color:transparent !important; box-shadow:none !important;';
				}
			}
		}
		this.bi.push( x );
		return this;
	}

	build() {
		for( var i in this.bi ) {
			var b = this.bi[ i ];
			var x = new E.tag.div( { 'class': 'progress-bar', 'role': 'progressbar', 'aria-valuemin': b.min, 'aria-valuemax': b.max, 'aria-valuenow': b.value } );
			x.attr( b.attr );
			x.attr( 'style', 'width: ' + b.size + '%' );
			if( 'mode' in b ) {
				x.attr( 'class', 'progress-bar-' + b.mode );
			}
			this.child( x );
		}
		return super.build();
	}

};

E.widget.radio = class extends E.factory.attr {
	
	constructor( attr ) {
		super();
		this.attr( attr );
		this.oi = false;
		this.od = false;
		this.txt = '';
	}

	inline() {
		this.oi = true;
		return this;
	}

	disabled() {
		this.od = true;
		return this;
	}

	label( x ) {
		if( !E.empty( x ) ) {
			this.txt = x;
		}
		return this;
	}

	build() {
		var x = new E.factory.node( 'label' );
		if( this.oi === true ) {
			x.attr( 'class', 'radio-inline' );
		}
		var y = new E.factory.node( 'input', { 'type': 'radio' } );
		if( this.od === true ) {
			y.attr( 'disabled', true );
		}
		y.attr( this.a );
		x.child( y );
		if( !E.empty( this.txt ) ) {
			x.child( this.txt );
		}
		if( this.oi !== true ) {
			x = new E.tag.div( { 'class': 'radio' }, x );
			if( this.od === true ) {
				x.attr( 'disabled', true );
			}
		}
		return x.build();
	}

	toString() {
		return this.build();
	}

	put( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};

E.widget.select = class extends E.factory.iterable {

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
	
	put( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};

E.widget.table = class extends E.factory.node {

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
		if( !E.empty( x ) && E.bootstrap.tablemodes.includes( x ) ) {
			this.attr( 'class', `table-${x}` );
		}
		return this;
	}
	
	hover() {
		this.attr( 'class', 'table-hover' );
		return this;
	}
	
	footer( x ) {
		this.tf = x;
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

E.widget.tabs = class extends E.factory.deck {

	constructor( attr ) {
		super();
		this.attr( attr );
		this.attr( 'class', 'e-tabs' );
		this.op = false;
		this.oj = false;
	}

	pills() {
		this.op = true;
		return this;
	}

	justify() {
		this.oj = true;
		return this;
	}

	build() {
		var x = new E.tag.div( this.a );
		if( !E.empty( this.c ) ) {
			var u = new E.factory.node( 'ul', { 'class': 'nav', 'role': 'tablist' } );
			u.attr( 'class', this.op === true ? 'nav-pills' : 'nav-tabs' );
			if( this.oj === true ) {
				u.attr( 'class', 'nav-justified' );
			}
			var b = new E.tag.div( { 'class': 'tab-content' } );
			for( var i in this.c ) {
				var c = this.c[ i ];
				if( !E.empty( c.attr ) ) {
					y.attr( c.attr );
				}
				var id = E.id();
				if( !E.empty( c.title ) ) {
					var a = new E.tag.a( { 'href': `#${id}`, 'aria-controls': id, 'role': 'tab', 'data-toggle': 'tab' }, c.title );
					var l = { 'role': 'presentation' };
					if( i == 0 ) {
						l['class'] = 'active';
					}
					u.child( new E.factory.node( 'li', l, a ) );
				}
				b.child( new E.tag.div( { 'class': `tab-pane${i == 0 ? ' active' : ''}`, 'role': 'tabpanel', 'id': id }, c.body ) );
			}
			x.child( u ).child( b );
		}
		return x.build();
	}
	
	toString() {
		return this.build();
	}
	
	put( t ) {
		if( !E.empty( t ) ) {
			$( t ).append( this.build() );
		}
		return this;
	}

};

E.widget.well = class extends E.factory.node {

	constructor( attr, children ) {
		super( 'div', attr, children );
		this.attr( 'class', 'well' );
	}

	large() {
		this.attr( 'class', 'well-lg' );
		return this;
	}

	small() {
		this.attr( 'class', 'well-sm' );
		return this;
	}

};

$( function() {

	$('body').on( 'click', '.e-accordion-toggle', function() {
		$(this).blur();
	} );
	
	$('body').on( 'click', '.e-tabs a', function( e ) {
		e.preventDefault();
		$(this).tab('show');
		$(this).blur();
	} );

} );
