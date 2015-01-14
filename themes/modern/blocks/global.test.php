<?php

function global_test() {

	$xtpl = new XTemplate('global.test.tpl', NV_ROOTDIR . '/themes/default/blocks');
	$data = array();
	

	for ($i = 1; $i <= 8; $i++) {

		$data[$i]['ID'] = $i;
		$data[$i]['TITTLE'] = 'hinh' . $i;
		$data[$i]['DESCRIPTION'] = 'hinh anh ' . $i;
		$data[$i]['URL']=NV_BASE_SITEURL.'uploads/Penguins ('.$i.').jpg';
		
		$xtpl -> assign('DATA', $data[$i]);
		$xtpl -> parse('main.loop');
	}
//print_r($data);die;
	$xtpl -> parse('main');
	return $xtpl -> text('main');
}

$content = global_test();
