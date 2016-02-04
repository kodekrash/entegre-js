/**
 * @package EntegreJS
 * @subpackage Demos
 * @subpackage Bootstrap
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

$( function() {

	var lipsum1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.';				
	var lipsum2 = 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.';
	
	var p1 = E.node( 'p', null, lipsum1 );
	var p2 = E.node( 'p', null, lipsum1 );

	// jumbotron
	$E('jumbotron').child( $E('heading','1').primary('Theme example') ).child( p2 ).append('#demo-jumbotron');
	
	// buttons
	for( var s in E.bootstrap.conf.sizes ) {
		var p = E.node('p');
		for( var m in E.bootstrap.conf.modes ) {
			var o = $E('button').child( E.bootstrap.conf.modes[ m ] ).mode( E.bootstrap.conf.modes[ m ] );
			if( !E.empty( E.bootstrap.conf.sizes[ s ] ) ) {
				o.size( E.bootstrap.conf.sizes[ s ] );
			}
			p.child( o );
			// add space for demo only
			p.child( ' ' );
		}
		p.append('#demo-button');
	}

	// tables
	var h = [ '#', 'First Name', 'Last Name', 'Username' ];
	var r = [
		[ '1', 'Larry the Bird', null, '@twitter' ],
		[ '2', 'James', 'Linden', '@kodekrash' ],
		[ '3', 'EntegreIO', null, '@entegreio' ]
	];
	$E('table').headers(h).rows(r).append('#demo-table-1');
	$E('table').headers(h).rows(r).mode('striped').append('#demo-table-2');
	$E('table').headers(h).rows(r).mode('bordered').append('#demo-table-1');
	$E('table').headers(h).rows(r).mode('condensed').append('#demo-table-2');
	$E('table').headers(h).rows(r).footer().append('#demo-table-1');
	$E('table').headers(h).rows(r).hover().append('#demo-table-2');
	
	// glyphicons
	var g = [ 'cog', 'signal', 'time', 'music', 'bookmark', 'asterisk', 'user', 'star', 'ok', 'remove', 'heart', 'film' ];
	for( var i in g ) {
		$E('glyphicon',g[i]).append('#demo-glyphicons-' + i);
	}

	// breadcrumbs
	$E('breadcrumbs').crumb( '#one', 'One' ).crumb( '#two', 'Two' ).crumb( '#', 'Three', true ).append( '#demo-breadcrumbs' );

	// dropdown
	$E('dropdown').label( 'Dropdown' ).item( '#', 'Item 1 (normal)' ).item( '#', 'Item 2 (active)', true ).item( '#', 'Item 3 (disabled)', false, true ).separator().item( '#', 'Item 4' ).append( '#demo-dropdown' );

	// thumbnails
	for( var m in E.bootstrap.conf.imgmodes ) {
		$E( 'image', { 'src': 'http://placehold.it/200x200' } ).mode( E.bootstrap.conf.imgmodes[ m ] ).append( '#demo-thumbnails-' + m );
	}

	// labels
	var g = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p' ];
	for( var s in g ) {
		var p = new E.factory.node( g[ s ] );
		for( var m in E.bootstrap.conf.modes ) {
			if( E.bootstrap.conf.modes[ m ] != 'link' ) {
				p.child( $E('label').child( E.bootstrap.conf.modes[ m ] ).mode( E.bootstrap.conf.modes[ m ] ) );
				// add space for demo only
				p.child( ' ' );
			}
		}
		p.append( '#demo-label' );
	}
	
	// badges
	var o = new E.tag.a( { 'href': '#' }, 'Home' );
	o.child( ' ' ).child( $E('badge').child('42') );
	o.append( '#demo-badges' );

	// alerts
	var g = [ 'success', 'info', 'warning', 'danger' ]
	for( var m in g ) {
		$E('alert').callout( g[ m ] + '! ' ).child( lipsum2 ).mode( g[ m ] ).append('#demo-alert');
	}

	// progressbars
	$E('progressbar').bar( 0, 100, 50, 'default' ).append( '#demo-progressbars' );
	$E('progressbar').bar( 0, 100, 68, 'success' ).append( '#demo-progressbars' );
	$E('progressbar').bar( 0, 100, 35, 'info' ).append( '#demo-progressbars' );
	$E('progressbar').bar( 0, 100, 91, 'warning' ).append( '#demo-progressbars' );
	$E('progressbar').bar( 0, 100, 18, 'danger' ).append( '#demo-progressbars' );
	$E('progressbar').bar( 0, 100, 10, 'default' ).bar( 0, 100, 30, 'success' ).bar( 0, 100, 20, 'danger' ).append( '#demo-progressbars' );
	$E('progressbar').bar( 0, 100, 70, 'offset' ).bar( 0, 100, 25, 'success' ).append( '#demo-progressbars' );

	// panels
	$E('panel').header( 'Panel title' ).body( 'Panel content' ).mode( 'default' ).append( '#demo-panel-1' );
	$E('panel').header( 'Panel title' ).body( 'Panel content' ).mode( 'primary' ).append( '#demo-panel-1' );
	$E('panel').header( 'Panel title' ).body( 'Panel content' ).mode( 'success' ).append( '#demo-panel-2' );
	$E('panel').header( 'Panel title' ).body( 'Panel content' ).mode( 'info' ).append( '#demo-panel-2' );
	$E('panel').header( 'Panel title' ).body( 'Panel content' ).mode( 'warning' ).append( '#demo-panel-3' );
	$E('panel').header( 'Panel title' ).body( 'Panel content' ).mode( 'danger' ).append( '#demo-panel-3' );
	$E('panel').header( 'Panel title' ).body( p2 ).footer( 'Panel footer' ).mode( 'default' ).append( '#demo-panel-4' );
	$E('panel').body( 'Panel content' ).mode( 'default' ).append( '#demo-panel-5' );
	$E('panel').body( 'Panel content' ).mode( 'primary' ).append( '#demo-panel-5' );
	$E('panel').body( 'Panel content' ).mode( 'success' ).append( '#demo-panel-5' );
	$E('panel').body( 'Panel content' ).mode( 'info' ).append( '#demo-panel-6' );
	$E('panel').body( 'Panel content' ).mode( 'warning' ).append( '#demo-panel-6' );
	$E('panel').body( 'Panel content' ).mode( 'danger' ).append( '#demo-panel-6' );

	// accordion
	$E('accordion').card( 'Accordion panel 1', p1 ).card( 'Accordion panel 2', p2 ).card( 'Accordion panel 3', [ p1, p2 ] ).append( '#demo-accordion' );

	// navbar
	var o = new E.bootstrap.navbar();
	o.brand( new E.tag.a( { 'href': '#', 'class': 'navbar-brand' }, 'Brand' ) );
	o.item( '#', 'Item 1 (normal)' );
	o.item( '#', 'Item 2 (active)', true );
	o.item( '#', 'Item 3 (disabled)', false, true );
	o.item( '#', 'Item 4' );
	o.append( '#demo-navbars' );
	var o = new E.bootstrap.navbar();
	o.brand( new E.tag.a( { 'href': '#', 'class': 'navbar-brand' }, 'Brand' ) );
	o.item( '#', 'Item 1 (normal)' );
	o.item( '#', 'Item 2 (active)', true );
	o.item( '#', 'Item 3 (disabled)', false, true );
	o.item( '#', 'Item 4' );
	o.inverse().append( '#demo-navbars' );

	// tabs
	$E('tabs').card( 'Item 1', p1 ).card( 'Item 2', p2 ).card( 'Item 3', [ p1, p2 ] ).append( '#demo-tabs' );

	// pills
	$E('tabs').card( 'Item 1', p1 ).card( 'Item 2', p2 ).card( 'Item 3', [ p1, p2 ] ).pills().append( '#demo-pills' );

	// well
	$E('well').child( lipsum1 ).append( '#demo-well' );
	$E('well').child( lipsum1 ).small().append( '#demo-well' );
	$E('well').child( lipsum1 ).large().append( '#demo-well' );

	// lists
	var o = new E.bootstrap.list();
	for( var i = 1; i <= 5; i ++ ) {
		o.child( 'Item ' + i );
	}
	o.ordered().append( '#demo-lists-ol' );
	var o = new E.bootstrap.list();
	for( var i = 1; i <= 5; i ++ ) {
		o.child( 'Item ' + i );
	}
	o.unordered().append( '#demo-lists-ul' );
	
	// modal
	$E('modal').attr('id','demo-modal-1').header('Modal title').body('<p>One fine body...</p>').append('#demo-modal');
	
	// helper classes - text
	for( var m in E.bootstrap.conf.textmodes ) {
		var o = new E.bootstrap.p();
		o.child( new E.factory.node( 'strong', null, E.bootstrap.conf.textmodes[ m ].toUpperCase() + ' ' ) ).child( lipsum2 );
		o.textmode( E.bootstrap.conf.textmodes[ m ] ).append( '#demo-helpers-text' );
	}
	
	// helper classes - background
	for( var m in E.bootstrap.conf.bgmodes ) {
		var o = new E.bootstrap.p();
		o.child( new E.factory.node( 'strong', null, E.bootstrap.conf.bgmodes[ m ].toUpperCase() + ' ' ) ).child( lipsum2 );
		// padding for demo purposes
		o.attr( 'style', 'padding: 3px 5px' );
		o.bgmode( E.bootstrap.conf.bgmodes[ m ] ).append( '#demo-helpers-bg' );
	}

	// typography - headings
	for( var i = 1; i <= 6; i ++ ) {
		$E( 'heading', i ).primary( `h${i}. Bootstrap heading` ).append( '#demo-typo-headings' );
		$E( 'heading', i ).primary( `h${i}. Bootstrap heading` ).secondary( 'Secondary text' ).append( '#demo-typo-headings' );
	}

	// typography - alignment
	for( var a in E.bootstrap.conf.aligns ) {
		$E('p').child( `${ E.bootstrap.conf.aligns[ a ] } text` ).align( E.bootstrap.conf.aligns[ a ] ).append( '#demo-typo-aligns' );
	}

	// typography - transformations
	$E('p').child( lipsum1 ).textcase( 'down' ).append( '#demo-typo-transforms' );
	$E('p').child( lipsum1 ).textcase( 'up' ).append( '#demo-typo-transforms' );
	$E('p').child( lipsum1 ).textcase( 'camel' ).append( '#demo-typo-transforms' );

	// typography - blockquotes
	$E('blockquote').child( p2 ).append( '#demo-typo-blockquotes' );
	$E('blockquote').child( p2 ).footer( 'Someone famous' ).append( '#demo-typo-blockquotes' );
	$E('blockquote').child( p2 ).footer( 'Someone famous' ).reverse().append( '#demo-typo-blockquotes' );
	
	// forms
	var o = $E('select').attr( 'id', 'my-select' );
	var r = E.random( 1, 10 );
	for( var i = 1; i <= 10; i ++ ) {
		o.item( 'Item ' + i, 'item' + i, ( r == i ) );
	}
	$E('formgroup').child( o ).append( '#demo-forms-1' );
	$E('formgroup').child( $E('checkbox', { 'name': 'test1', 'value': 'test1-value' } ).label( 'Test value 1' ) ).append( '#demo-forms-1' );
	$E('formgroup').child( $E('checkbox', { 'name': 'test2', 'value': 'test2-value' } ).label( 'Test value 2' ) ).append( '#demo-forms-1' );
	var o1 = $E('radio', { 'name': 'test2', 'value': 'test3-valueA' } ).label( 'Test 3 value A' ).inline();
	var o2 = $E('radio', { 'name': 'test2', 'value': 'test3-valueB' } ).label( 'Test 3 value B' ).inline();
	var o3 = $E('radio', { 'name': 'test2', 'value': 'test3-valueC' } ).label( 'Test 3 value C' ).inline();
	$E('formgroup').child( o1 ).child( o2 ).child( o3 ).append( '#demo-forms-1' );
	var f1 = $E('input', { 'type': 'text', 'placeholder': 'Username' } );
	var f2 = $E('input', { 'type': 'text' } );
	$E('formgroup').child( $E('inputgroup').before('@').field( f1 ) ).append( '#demo-forms-2' );
	$E('formgroup').child( $E('inputgroup').field( f1 ).after('@example.com') ).append( '#demo-forms-2' );
	$E('formgroup').child( $E('inputgroup').before('$').field( f2 ).after('.00') ).append( '#demo-forms-2' );

} );