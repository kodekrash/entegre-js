/**
 * @package EntegreJS
 * @subpackage Demos
 * @subpackage Widgets
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

$( function() {

	// highlighter
	var c = [ '#!/bin/bash', '', 'if [ $# -lt 3 ]; then', '	echo "Usage: $0 database user pass [import_file]"',
		'	exit 1', 'fi', '', 'db=$(mysql --batch --skip-column-names -e "SHOW DATABASES LIKE \'$1\';" | grep "$1" > /dev/null; echo "$?")',
		'if [ $db -eq 0 ]; then', '	echo "Database already exists"', '	exit 1', 'fi', '',
		'us=$(mysql --batch --skip-column-names -e "SELECT EXISTS(SELECT 1 FROM mysql.user WHERE user=\'$2\');")', 'if [ $us -eq 1 ]; then',
		'	echo "User already exists"', '	exit 1', 'fi', '',
		'echo "CREATE DATABASE $1; GRANT ALL ON $1.* TO $2@\'%\' IDENTIFIED BY \'$3\'; FLUSH PRIVILEGES;" | mysql', '',
		 'if [ $4 -a -f $4 ]; then', '	mysql -u$2 -p$3 $1 < $4','fi' ];
	$E('highlight').block( 'bash', c.join( "\n" ) ).append('#demo-highlight');

	// font awesome
	var g = [ 'cog', 'bolt', 'hand-spock-o', 'music', 'bookmark', 'asterisk', 'user', 'star', 'gamepad', 'remove', 'heart', 'film' ];
	for( var i in g ) {
		$E('fontawesome', g[ i ] ).size( '2x' ).append( '#demo-fontawesome-' + i );
	}

	// flag icons
	var x = E.random( 0, 20 );
	var g = E.widget.flagicon.flags().slice( x, ( x + 19 ) );
	var o1 = new E.tag.h( '1', { 'class': 'text-center' } );
	for( var i in g ) {
		o1.child( $E( 'flagicon', g[ i ] ) );
		// space for demo purposes
		o1.child( ' ' );
	}
	o1.append( '#demo-flagicons' );

	// weather icons
	var g = [ 'raindrop', 'day-sunny', 'solar-eclipse', 'night-showers', 'night-snow', 'tsunami', 'lightning', 'celsius', 'moon-waxing-crescent-4', 'time-8', 'direction-right', 'from-ssw' ];
	for( var i in g ) {
		var o = $E('weathericon', g[ i ] );
		if( i == 11 ) {
			o.wind();
		}
		o.append( '#demo-weathericon-' + i );
	}

	// mustache
	var t = '<p>Hello user!</p><p>We see that you are using <strong>{{useragent}}</strong>.</p>';
	var d = { 'useragent': navigator.userAgent };
	$E('mustache').child( t, d ).append( '#demo-mustache' );

	// gravatar
	var g = [ 32, 64, 128, 256 ];
	for( var i in g ) {
		$E('gravatar').email('iamentegre@gmail.com').size( g[ i ] ).append( '#demo-gravatar' );
	}

} );
