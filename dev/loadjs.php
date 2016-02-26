<?php

/**
 * @package EntegreJS
 * @subpackage Loader for development
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

header( 'Content-type: text/javascript' );

$build = [
	'core' => [ 'core.js', 'factory/attr.js', 'factory/iterable.js', 'factory/base.js', 'factory/*.js', 'tags.js' ],
	'bootstrap' => [ 'bootstrap/bootstrap.js', 'bootstrap/*.js' ],
	'widgets' => 'widget/*.js',
	'controls' => 'control/*.js'
];

foreach( $build as $group => $sources ) {
	$files = [];
	$sources = is_array( $sources ) ? $sources : [ $sources ];
	foreach( $sources as $source ) {
		$x = glob( '../src/' . $source );
		if( is_array( $x ) ) {
			foreach( $x as $y ) {
				if( !in_array( $y, $files ) ) {
					$files[] = $y;
				}
			}
		}
	}
	foreach( $files as $file ) {
		readfile( $file );
	}
}

?>