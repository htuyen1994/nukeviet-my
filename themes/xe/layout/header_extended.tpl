YPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="vi-vn" class="">
	<head>
	{THEME_PAGE_TITLE}
	{THEME_META_TAGS}

		<base href=".">
		<link href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/bootstrap.css" type="text/css" rel="stylesheet">
		<link href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/bootstrap-theme.css" type="text/css" rel="stylesheet">
		<link href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/style_m.css" type="text/css" rel="stylesheet">
		<link href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/function2.css" type="text/css" rel="stylesheet">
		<link href="{NV_BASE_SITEURL}themes/{TEMPLATE}/css/custom.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/global.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.min.1.8.3.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery-ui-1.10.3.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.jplayer.min.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.jcarousel.min.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/clientscript_v2.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/js_menu.cookie.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/js_menu.tree.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.jqzoom-core.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.fancybox-2.1.5.pack.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/query_tooltip.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/rotator.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.bxslider.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.dropdownPlain.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/tinybox.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.md5.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.rating.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.cluetip.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.nestedAccordion.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.quicksand.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/jquery.easing.1.3.js"></script>

		<script type="text/javascript">
			$(document).ready(function() {
				$('.jqzoom').jqzoom({
					zoomType : 'standard',
					lens : true,
					preloadImages : false,
					alwaysOn : false
				});
			});
		</script>

		<script type="text/javascript">
			$(document).ready(function() {

				$("a#example2").fancybox({
					'overlayShow' : false,
					'transitionIn' : 'elastic',
					'transitionOut' : 'elastic',
				});

			});
		</script>

		<script type="text/javascript">
			$(function() {
				$("#category").treeview({
					collapsed : true,
					animated : "fast",
					control : "#sidetreecontrol",
					unique : true,
					persist : "location"
				});
			})
		</script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/js_ajax.js"></script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/js_cart.js"></script>

	{THEME_CSS}
	{THEME_SITE_RSS}
	{THEME_SITE_JS}
</head>
	<body style="">
		<div class="container">
			<!--Begin container-->
			<div class="header clr">
				<!--Begin header-->
				[HEADERTOP]
			</div><!--End header-->
			<div class="banner clr">
				<!--Begin banner-->
				<div class="logo col-xs-12">
					<a class="logo box_img" href="saved_resource.html"> <img src="{NV_BASE_SITEURL}themes/{TEMPLATE}/images/1369024758_logo2.png" alt="http://demow111.web4s.vn"> </a>
				</div><!--End logo-->
				<div class="bannerright hidden-xs">
					[BANNERRIGHT]
				</div>
			</div><!--End banner-->
			<div class="mainnav clr">
				<nav class="navbar navbar-default" role="navigation">
				[NAVTOP]
				</nav><!--End -->
				<div class="bottomnav">
				[NAVBOTTOM]
				</div><!--End -->
			</div><!--End mainnav-->
			<div class="wraper clr">
			