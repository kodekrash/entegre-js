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
	'core' => [ 'core', 'tags', 'widget/bootstrap' ],
	'plugins' => 'plugin/*',
	'controls' => 'control/*'
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

}

$a = [];

$prefix = '// EntegreJS -- http://entegre.io' . PHP_EOL . '"use strict";' . PHP_EOL;

foreach( $build as $group => $sources ) {
	helpers::debug( 'Building ' . $group );
	$s = [];
	if( !is_array( $sources ) ) {
		$d = dirname( $sources );
		$x = glob( '../src/' . $sources );
		if( is_array( $x ) ) {
			$sources = [];
			foreach( $x as $y ) {
				$sources[] = $d . '/' . basename( $y, '.js' );
			}
		}
	}
	if( !is_array( $sources ) ) {
		helpers::debug( chr(9) . 'No sources found' );
		break;
	}
	foreach( $sources as $file ) {
		$file = '../src/' . $file . '.js';
		if( is_file( $file ) ) {
			helpers::debug( chr(9) . 'Adding ' . $file );
			$s[] = file_get_contents( $file );
		} else {
			helpers::debug( chr(9) . 'ERROR -- Unable to add ' . $file );
		}
	}
	helpers::debug( 'Cleaning ' . $group );
	$s = implode( PHP_EOL, $s );
	$s = helpers::stripcomments( $s );
	helpers::debug( 'Uglifying ' . $group );
	$s = str_replace( chr(9), ' ', $s );
	$s = helpers::unduplicate( $s, PHP_EOL );
	$s = helpers::unduplicate( $s, ' ' );
	$src = [ ', ', ' }', '{ ', ' )', '( ', ' ]', ' [', ' :', ': ' ];
	$fix = [ ',', '}', '{', ')', '(', ']', '[', ':', ':' ];
	$s = str_replace( $src, $fix, $s );
	$s = helpers::unduplicate( $s, ' ' );
	$s = str_replace( PHP_EOL . ' ' . PHP_EOL, PHP_EOL, $s );
	$s = str_replace( PHP_EOL . ' ', PHP_EOL, $s );
	$s = trim( $s );
	$a[] = $s;
	$fn = sprintf( $filename, $group );
	helpers::debug( 'Saving ' . $group . ' to ' . $fn );
	helpers::save( $path, $fn, $prefix . $s );
}
$fn = sprintf( $filename, 'all' );
helpers::debug( 'Saving combined sources to ' . $fn );
helpers::save( $path, $fn, $prefix . implode( ' ', $a ) );
helpers::debug( 'Done' );

?>