/**
 * @package EntegreJS
 * @subpackage Factories
 * @author James Linden <kodekrash@gmail.com>
 * @copyright 2016 James Linden
 * @license MIT
 */

E.factory.node = class extends E.factory.base {

	constructor( tag, attrs, children ) {
		super();
		this.t = ( tag && tag.toString().length > 0 ) ? tag.toString().toLowerCase() : '';
		this.attr( attrs );
		this.child( children );
	}

	build() {
		var nc = [ 'br', 'hr', 'img', 'link', 'meta', 'meta-equiv', 'input' ];
		var a = this.buildattrs();
		var s = `<${this.t + ( !E.empty( a ) ? ' ' + a : '' )}>`;
		if( !( this.t in nc ) ) {
			s += `${this.buildchildren()}</${this.t}>`;
		}
		return s;
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
