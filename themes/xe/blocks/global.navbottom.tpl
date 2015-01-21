<!-- BEGIN: main -->

					<p class="topnews hidden-xs">
						<a href="http://demow111.web4s.vn/chi-tiet-tin/kei-phan-tich-danh-gia-muc-do-kho-cua-tu-khoa.html">KEI - Phân tích đánh giá mức độ khó của từ khóa</a>
					</p>
					<div class="botnav_right">
						<div class="searchtop">
							<script type="text/javascript">
								function LTrim(value) {
									var re = /\s*((\S+\s*)*)/;
									return value.replace(re, "$1");
								}

								// Hàm cắt ký tự trắng ở cuối chuỗi
								function RTrim(value) {
									var re = /((\s*\S+)*)\s*/;
									return value.replace(re, "$1");
								}

								// Cắt các ký tự trắng ở đầu và cuối chuỗi
								function trim(value) {
									return LTrim(RTrim(value));
								}

								function send_url() {
									var key = document.getElementById("keyword").value;
									key = trim(key);
									key = key.replace(/ /g, "+");
									//alert(key);return;
									if (key != 'Tìm kiếm ...' && key != "") {
										document.location.href = site_root_domain + "/search_top/key/" + key + ".html";
									}
								}

								function send_url_2(event) {
									if (event.keyCode == 13) {
										var key = document.getElementById("keyword").value;
										key = trim(key);
										key = key.replace(/ /g, "+");
										//alert(key);return;
										if (key != 'Tìm kiếm ...' && key != "") {
											document.location.href = site_root_domain + "/search_top/key/" + key + ".html";
										}
									}
								}

							</script>
							<input class="searchtxt" autocomplete="on" id="keyword" onkeypress="return send_url_2(event);" type="text" name="keyword" value="Tìm kiếm ..." onclick="if ( this.value == &#39;Tìm kiếm ...&#39; ) { this.value=&#39;&#39;; }" onblur="if ( this.value == &#39;&#39; ) { this.value = &#39;Tìm kiếm ...&#39;; }">
							<input class="searchbtn" onclick="return send_url()" type="button" name="submit">
						</div>
					</div>
					<div class="clr"></div>

<!-- END: main -->