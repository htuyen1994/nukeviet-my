<?php

/**
 * @Project NUKEVIET 4.x
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2015 VINADES.,JSC. All rights reserved
 * @License GNU/GPL version 2 or any later version
 * @Createdate Thu, 15 Jan 2015 07:01:36 GMT
 */

if ( ! defined( 'NV_MAINFILE' ) ) die( 'Stop!!!' );

function nv4_block_dannhmuc( $block_config )
{
	global $global_config, $db, $site_mods, $module_name;

	$mod_name = 'news'; // or $module_name;
	$list = array();
	if( isset( $site_mods[$mod_name] ) )
	{
		$mod_file = $site_mods[$mod_name]['module_file'];
		$mod_data = $site_mods[$mod_name]['module_data'];
	}
	$xtpl = new XTemplate( 'global.dannhmuc.tpl', NV_ROOTDIR . '/themes/' . $global_config['module_theme'] . '/blocks' );
	$xtpl->assign( 'NV_BASE_SITEURL', NV_BASE_SITEURL );
	$xtpl->assign( 'TEMPLATE', $global_config['module_theme'] );
/*
	foreach( $list as $row )
	{
		$xtpl->assign( 'ROW', $row );
		$xtpl->parse( 'main.loop' );
	}
*/
	$xtpl->parse( 'main' );
	return $xtpl->text( 'main' );
}

if( defined( 'NV_SYSTEM' ) )
{
	$content = nv4_block_dannhmuc( $block_config );
}

?>