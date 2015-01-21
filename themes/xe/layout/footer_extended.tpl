
			</div><!--End wrapper-->
			<div class="footer clr">
				<nav class="navbar navbar-default" role="navigation">
				[NAVFOOTER]
				</nav>
				<div class="footer-content">
				[FOOTERCONTENT]
				</div><!--End footer-content-->
				<script type="text/javascript">
					$(document).ready(function() {
						$(window).scroll(function() {
							if ($(window).scrollTop() != 0) {
								$('#back_to_top').fadeIn();
							} else {
								$('#back_to_top').fadeOut();
							}
						});
						$('#back_to_top').click(function() {
							$('html, body').animate({
								scrollTop : 0
							}, 500);
						});
					});
				</script>
				<div id="back_to_top" style="display: block;"></div>
			</div><!--End footer-->
			<!--<div class="coppyright">Copyright 2012 <span>demow111.web4s.vn</span>. All Rights Reserved</div>-->
		</div><!--End w1-container-->

		<script type="text/javascript">
			function openJS() {
				alert('loaded')
			}

			function closeJS() {
				alert('closed')
			}
		</script>
		<script type="text/javascript" src="{NV_BASE_SITEURL}themes/{TEMPLATE}/js/bootstrap.js"></script>
		<script type="text/javascript">
			var $ = jQuery.noConflict();
			$(document).ready(function() {
				if (1) {
					var _elementClone2 = $(".wraper .slider").clone();
					$('.wraper .slider').remove();
					$(".wraper").prepend(_elementClone2);
				}
				$('#myCarousel').carousel({
					interval : 3000,
					cycle : true
				});
				//$('#promotion-module').carousel({ interval: 3000, cycle: true });
			});
		</script>
		<div id="cluetip-waitimage" style="position: absolute; display: none;"></div>
		<div id="cluetip" style="position: absolute; display: none;">
			<div class="cluetip-outer" style="position: relative; z-index: 97;">
				<h3 class="cluetip-title ui-widget-header ui-cluetip-header"></h3><div class="cluetip-inner ui-widget-content ui-cluetip-content"></div>
			</div><div class="cluetip-extra"></div>
		</div>
	