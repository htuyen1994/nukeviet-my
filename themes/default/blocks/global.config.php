<?php

function nv_test_config($module, $data_block, $lang_block) {

	$return = '<tr><td>' . $lang_block['facebook'] . '</td><td><input type="text" name="facebook" value="' . $data_block[facebook] . '"/></td></tr>';
	$return .= '<tr><td>' . $lang_block['youtube'] . '</td><td><input type="text" name="youtube" value="' . $data_block[youtube] . '"/></td></tr>';
	$return .= '<tr><td>' . $lang_block['twitter'] . '</td><td><input type="text" name="twitter" value="' . $data_block[twitter] . '"/></td></tr>';
	return $return;

}

function nv_test_submit($module, $lang_block) {
	global $nv_Request;
	$return = array();
	$return['error'] = array();
	$return['config']['facebook'] = $nv_Request -> get_title('facebook', 'post', 'string');
	$return['config']['youtube'] = $nv_Request -> get_title('youtube', 'post', 'string');
	$return['config']['twitter'] = $nv_Request -> get_title('twitter', 'post', 'string');
	return $return;
}

function global_config($block_config) {

	$xtpl = new XTemplate('global.config.tpl', NV_ROOTDIR . '/themes/default/blocks');
	$xtpl -> assign('NV_BASE_SITEURL', NV_BASE_SITEURL);
	$xtpl -> assign('NV_BASE_ADMINURL', NV_BASE_ADMINURL);
	$xtpl -> assign('DATA', $block_config);
	$xtpl -> parse('main');
	return $xtpl -> text('main');
}

$content = global_config($block_config);
