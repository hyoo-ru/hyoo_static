namespace $ {
	const port = Number( $mol_state_arg.value( 'port' ) || process.env.PORT )
	if( port ) $hyoo_static( port )
}
