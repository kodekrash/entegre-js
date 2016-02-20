/**
 * @package EntegreJS
 * @subpackage Demos
 * @subpackage Controls
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

$( function() {

	if( !window.E ) {
		return false;
	}

	// bootswatch
	var bw = $E('bootswatch');
	var g = E.control.bootswatch.themes();
	var s = $E('dropdown').label( 'Change Bootswatch Theme' );
	for( var i in g ) {
		s.item( '#', g[ i ] );
	}
	s.append('#demo-bootswatch');
	$('#demo-bootswatch a').click( function() {
		var t = $(this).html();
		bw.theme( t );
	} );
	$('#demo-bootswatch-clear').click( function() {
		bw.clear();
	} );

	// datatable
	$.getJSON( 'demodata.js', function( d ) {
		if( d ) {
			var o = $E('datatable').columns( [ 'ID', 'First name', 'Last name' ] );
			for( var i in d ) {
				o.item( [ d[i].id.toString(), d[i].first_name, d[i].last_name, d[i].joined ] );
			}
			o.append( '#demo-datatable' );
		}
	} )

	// dataview
	function render_row( d ) {
		var x = $E('panel').mode('default').header( d.first_name + ' ' + d.last_name );
		x.body( '<p style="color:' + d.color.toLowerCase() + '">' + d.gender + '</p>' );
		x.body( '<p>' + d.joined + '</p>' );
		return x.build();
	}

	$.getJSON( 'demodata.js', function( d ) {
		if( d ) {
			$E('dataview').pagesize( 12 ).callback( render_row ).items( d ).append( '#demo-dataview' );
		}
	} );

	// notifications
	var notify1 = $E('notifications').append();
	$('#demo-notifications-trigger-1 button').click( function() {
		var m = $(this).data('mode');
		notify1.post( m, m, 'This is a notification message' );
	} );
	var notify2 = $E('notifications').bar().append();
	$('#demo-notifications-trigger-2 button').click( function() {
		var m = $(this).data('mode');
		notify2.post( m, m, 'This is a notification message' );
	} );

	// timeline
	var o = $E('timeline');
	o.begin( 'Sep 1, 1939' ).end( 'Oct 5, 1939 23:59:59' );
	o.event( 'Battle of Westerplatte', 'Sep 1, 1939', 'Sep 7, 1939 23:59:59' );
	o.event( 'Defense of the Polish Post Office in Danzig', 'Sep 1, 1939', 'Sep 1, 1939 23:59:59' );
	o.event( 'Battle of Węgierska Górka', 'Sep 1, 1939', 'Sep 3, 1939 23:59:59' );
	o.event( 'Battle of Jordanów', 'Sep 2, 1939', 'Sep 2, 1939 23:59:59' );
	o.event( 'Battle of Borowa Góra', 'Sep 2, 1939', 'Sep 6, 1939 23:59:59' );
	o.event( 'Battle of Różan', 'Sep 4, 1939', 'Sep 6, 1939 23:59:59' );
	o.event( 'Battle of Tomaszów Mazowiecki', 'Sep 6, 1939', 'Sep 6, 1939 23:59:59' );
	o.event( 'Battle of Łódź', 'Sep 6, 1939', 'Sep 8, 1939 23:59:59' );
	o.event( 'Battle of Wizna', 'Sep 7, 1939', 'Sep 10, 1939 23:59:59' );
	o.event( 'Battle of Radom', 'Sep 8, 1939', 'Sep 9, 1939 23:59:59' );
	o.event( 'Battle of Wola Cyrusowa', 'Sep 8, 1939', 'Sep 8, 1939 23:59:59' );
	o.event( 'Siege of Warsaw', 'Sep 8, 1939', 'Sep 28, 1939 23:59:59' );
	o.event( 'Battle of Gdynia', 'Sep 8, 1939', 'Sep 14, 1939 23:59:59' );
	o.event( 'Battle of Hel', 'Sep 9, 1939', 'Oct 2, 1939 23:59:59' );
	o.event( 'Battle of Kampinos Forest', 'Sep 9, 1939', 'Sep 20, 1939 23:59:59' );
	o.event( 'Battle of the Bzura', 'Sep 9, 1939', 'Sep 22, 1939 23:59:59' );
	o.event( 'Battle of Jarosław', 'Sep 10, 1939', 'Sep 11, 1939 23:59:59' );
	o.event( 'Battle of Kępa Oksywska', 'Sep 10, 1939', 'Sep 19, 1939 23:59:59' );
	o.event( 'Battle of Kałuszyn', 'Sep 11, 1939', 'Sep 12, 1939 23:59:59' );
	o.event( 'Battle of Przemyśl', 'Sep 11, 1939', 'Sep 14, 1939 23:59:59' );
	o.event( 'Battle of Lwów', 'Sep 12, 1939', 'Sep 22, 1939 23:59:59' );
	o.event( 'Battle of Modlin', 'Sep 13, 1939', 'Sep 29, 1939 23:59:59' );
	o.event( 'Battle of Kobryń', 'Sep 14, 1939', 'Sep 18, 1939 23:59:59' );
	o.event( 'Battle of Brześć Litewski', 'Sep 14, 1939', 'Sep 17, 1939 23:59:59' );
	o.event( 'Battle of Tomaszów Lubelski', 'Sep 17, 1939', 'Sep 26, 1939 23:59:59' );
	o.event( 'Battle of Wilno', 'Sep 18, 1939', 'Sep 19, 1939 23:59:59' );
	o.event( 'Battle of Wólka Węglowa', 'Sep 19, 1939', 'Sep 19, 1939 23:59:59' );
	o.event( 'Battle of Grodno', 'Sep 21, 1939', 'Sep 24, 1939 23:59:59' );
	o.event( 'Battle of Krasnobród', 'Sep 23, 1939', 'Sep 23, 1939 23:59:59' );
	o.event( 'Battle of Szack', 'Sep 28, 1939', 'Sep 28, 1939 23:59:59' );
	o.event( 'Battle of Wytyczno', 'Oct 1, 1939', 'Oct 1, 1939 23:59:59' );
	o.event( 'Battle of Kock', 'Oct 2, 1939', 'Oct 5, 1939 23:59:59' );
	o.append( '#demo-timeline' );

	// tree
	var a = [ 'A', 'B', 'C', 'D' ];
	var o = $E('tree');
	for( var i1 = 1; i1 <= 7; i1 ++ ) {
		if( i1 % 3 == 0 ) {
			var o1 = $E('tree');
			for( var i2 in a ) {
				if( a[ i2 ] == 'C' ) {
					var o2 = $E('tree');
					var c = E.random( 1, 7 );
					for( var i3 = 1; i3 <= c; i3 ++ ) {
						o2.child( `Branch ${ i1 } ${ a[ i2 ] } ${ i3 }` );
					}
					o1.branch( `Branch ${ i1 } ${ a[ i2 ] }`, o2 );
				} else {
					o1.child( `Branch ${ i1 } ${ a[ i2 ] }` );
				}
			}
			o.branch( `Branch ${ i1 }`, o1 );
		} else {
			o.child( `Branch ${ i1 }` );
		}
	}
	o.append( '#demo-tree' );

} );
