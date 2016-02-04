<?php

/**
 * @package EntegreJS
 * @subpackage Build tool
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

define( 'DEBUG', true );

$build = [
	'core' => [ 'core.js', 'factory/attr.js', 'factory/iterable.js', 'factory/base.js', 'factory/*.js', 'tags.js' ],
	'bootstrap' => [ 'bootstrap/bootstrap.js', 'bootstrap/*.js' ],
	'widgets' => 'widget/*.js',
	'controls' => 'control/*.js'
];

$filename = 'entegre-%s.min.js';
$path = './dist/';

class helpers {

	public static function unduplicate( $source, $remove ) {
		$source = trim( $source, $remove );
		$d = $remove . $remove;
		while( strpos( $source, $d, 0 ) > 0 ) {
			$source = str_replace( $d, $remove, $source );
		}
		return $source;
	}

	public static function stripcomments( $str ) {
		$p = [ '/\/\/.*?[\n]+/s', '/\/\*.*?[\r\n\s\*]+\*\//s', '/<\!--.*?[\r\n\s]+-->/s' ];
		return preg_replace( $p, null, $str );
	}

	public static function save( $path, $file, $contents ) {
		if( is_dir( $path ) && is_writable( $path ) ) {
			return file_put_contents( rtrim( $path, '/' ) . '/' . $file, $contents );
		}
		return false;
	}

	public static function debug( $msg ) {
		if( defined( 'DEBUG' ) && DEBUG === true ) {
			echo $msg, PHP_EOL;
		}
	}

	public static function clean( $src ) {
		$src = helpers::stripcomments( $src );
		$src = helpers::unduplicate( $src, PHP_EOL );
		$src = helpers::unduplicate( $src, ' ' );
		return trim( $src );
	}

	public static function uglify( $src ) {
		$src = str_replace( chr(9), ' ', $src );
		$x1 = [ ', ', ' }', '{ ', ' )', '( ', ' ]', ' [', ' :', ': ' ];
		$x2 = [ ',', '}', '{', ')', '(', ']', '[', ':', ':' ];
		$src = str_replace( $x1, $x2, $src );
		$src = helpers::unduplicate( $src, ' ' );
		$src = str_replace( PHP_EOL . ' ' . PHP_EOL, PHP_EOL, $src );
		$src = str_replace( PHP_EOL . ' ', PHP_EOL, $src );
		return trim( $src );
	}

}

$all = [];

$prefix = '// EntegreJS -- http://entegre.io' . PHP_EOL . '"use strict";' . PHP_EOL;

foreach( $build as $group => $sources ) {
	helpers::debug( 'Building ' . $group );
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
	if( !empty( $files ) ) {
		$src = [];
		foreach( $files as $file ) {
			helpers::debug( chr(9) . 'Adding ' . $file );
			$src[] = file_get_contents( $file );
		}
		if( !empty( $src ) ) {
			$src = implode( PHP_EOL, $src );
			helpers::debug( 'Cleaning ' . $group );
			$src = helpers::clean( $src );
			helpers::debug( 'Uglifying ' . $group );
			$src = helpers::uglify( $src );
			$all[] = $src;
			$name = sprintf( $filename, $group );
			helpers::debug( 'Saving ' . $group . ' to ' . $name );
			helpers::save( $path, $name, $prefix . $src );
		}
	} else {
		helpers::debug( chr(9) . 'No sources found' );
	}
}
if( !empty( $all ) ) {
	$name = sprintf( $filename, 'all' );
	helpers::debug( 'Saving combined sources to ' . $name );
	helpers::save( $path, $name, $prefix . implode( PHP_EOL, $all ) );
}
helpers::debug( 'Done' );

?>