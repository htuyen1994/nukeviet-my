<?php

function global_test() {

	global $db;

	$sql = "SELECT id,catid,title,alias,hometext,homeimgfile from nv4_vi_news_rows where 1";
	$r = $db -> query($sql);
	
	///fetchcolumn lấy về phần tử đầu tiên của mảng
	// $sql = "SELECT title from nv4_vi_news_rows where catid=1";
	// $title = $db -> query($sql)->fetchColumn();
	// if (empty($title)) {
		// die("k có");
	// }
	// else {
		// print_r($title);
	// }
	
		
	//$rows = $r -> fetchall();
	//print_r($rows);

	//kiểm tra có hay k
	/*$r = $db -> query($sql) -> fetch();
	if (empty($r)) {
		die("k có");
	}
	else {
		print_r($r);
	}*/
	
	$xtpl = new XTemplate('global.test.tpl', NV_ROOTDIR . '/themes/default/blocks');
	
	
	
	//foreach ($rows as $key => $data) {
	foreach ($r as $data) {
		$xtpl -> assign('DATA', $data);
		$xtpl -> assign('NV_BASE_SITEURL', NV_BASE_SITEURL);
		$xtpl -> parse('main.loop');
	}
	/*for ($i = 1; $i <= 8; $i++) {

	 $data[$i]['ID'] = $i;
	 $data[$i]['TITTLE'] = 'hinh' . $i;
	 $data[$i]['DESCRIPTION'] = 'hinh anh ' . $i;
	 $data[$i]['URL'] = NV_BASE_SITEURL . 'uploads/Penguins (' . $i . ').jpg';

	 $xtpl -> assign('DATA', $data[$i]);
	 $xtpl -> parse('main.loop');
	 }*/
	//print_r($data);die;

	$xtpl -> parse('main');
	return $xtpl -> text('main');
}

$content = global_test();
