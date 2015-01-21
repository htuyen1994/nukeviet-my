<!-- BEGIN: main -->
{FILE "header_only.tpl"}
{FILE "header_extended.tpl"}

				<div class="slider col-xs-12  col-sm-12">
				[SILDE]
				</div><!--Begin wraper-->
				<!-- slider -->
				<div class="mainblock right col-xs-12 col-sm-9">
				{MODULE_CONTENT}
			</div><!--End mainblock-->
				<div class="sideblock left col-xs-12  col-sm-3">
					<!-- Danh mục sản phẩm -->
					<div class="side_category">
					[DANHMUC]
				</div>
					<!-- Hỗ trợ -->
					<div class="side_support">
					[HOTRO]
					</div>
					<!-- Liên kết -->
					<div class="side_link">
					[LIENKET]
					</div>
					<script type="text/javascript">
						$(document).ready(function() {
							$('.slider2').bxSlider({
								auto : true,
								slideWidth : 300,
								minSlides : 1,
								maxSlides : 1,
								slideMargin : 10
							});
						});
					</script>
					<!--Sản phẩm tiêu biểu-->
					<div class="side_promo">
						[SANPHAM]
					</div>
					<!-- Quảng cáo-->
					<div class="side_adv">
					[QUANGCAO]
					</div>
					<div class="side_apps">
					[TIENICH]
					</div>

					<!--Lượt truy cập-->
					<div class="side_stat">
					[TRUYCAP]
					</div><!--End mod-right-->

				</div><!--End leftcol-->

{FILE "footer_extended.tpl"}
{FILE "footer_only.tpl"}
<!-- END: main -->