<!-- BEGIN: main -->
Để có thể chuyển <b>html</b> sang giao diện của <b>NukeViet 4</b> bạn hãy  bố trí file html như sau
<ol>
	<li><em class="fa fa-folder-open">&nbsp;&nbsp;</em>css <span style="color: red">(*)</span></li>
	<li><em class="fa fa-folder-open">&nbsp;&nbsp;</em>images <span style="color: red">(*)</span></li>
	<li><em class="fa fa-folder-open">&nbsp;&nbsp;</em>uploads</li>
	<li><em class="fa fa-folder-open">&nbsp;&nbsp;</em>js</li>
	<li><em class="fa fa-html5">&nbsp;&nbsp;</em>index.html <span style="color: red">(*)</span></li>
	<li><em class="fa fa-file-image-o">&nbsp;&nbsp;</em>view.jpg</li>
</ol>

<blockquote>
	<strong>Trong đó thư mục</strong>
	<p>
		- <strong>images</strong>: Chứa những ảnh có trong file css, những file bắt buộc cần có trong theme
	</p>
	<p>
		- <strong>uploads:</strong> sẽ chứa những file, sẽ bị thay thế trong quá trình người sử dụng (Mục đích để xóa đi sau này không sinh file thừa trong giao diện)
	</p>
	<p>
		- <strong>css:</strong> Chứa các file css
	</p>
	<p>
		- <strong>index.html</strong> file html của giao diện
	</p>
	<p>
		- <strong>view.jpg</strong> ảnh minh họa của giao diện, kích thước 300x145, Nếu lớn hơn sẽ bị resize về kích thước này.
	</p>
</blockquote>

<b>Chỉnh sửa file index.html</b>
<br>
<br>
<p>
	1) Hãy thêm lên đầu khối (Để tách ra file header.tpl, footer.tpl)
</p>
<p>
	<code>&lt;!-- begin nv_body --&gt;</code>
</p>
<p>
	Cuối khối
</p>
<p>
	<code>&lt;!-- end nv_body --&gt;</code>
</p>

<br>
<br>
<p>
	2) Hãy thêm lên đầu khối (Thay thế nội dung của moudle)
</p>
<p>
	<code>&lt;!-- begin nv_content --&gt;</code>
</p>
<p>
	Cuối khối
</p>
<p>
	<code>&lt;!-- end nv_content --&gt;</code>
</p>

<br>
<br>
<p>
	3) Hãy thêm lên đầu khối cần tách block bằng khối (Có thể có nhiều khối, nhưng các khối block không lồng nhau)
</p>
<p>
	<code>&lt;!-- begin block:tên khối --&gt;</code>
</p>
<p>
	Cuối khối
</p>
<p>
	<code>&lt;!-- end block:tên khối --&gt;</code>
</p>
<p>
	<em class="text-danger">Ghi chú: tên khối dùng tiếng việt không dấu hoặc tiếng anh, có thể sử dụng dấu cách, không dùng ký tự đặc biệt, tên các khối không trùng nhau</em>
</p>
<b>Sau đó Nén .ZIP các file này lại Upload hệ site, hệ thống sẽ trả về cấu trúc giao diện: </b>
<form action="{NV_BASE_SITEURL}index.php?{NV_NAME_VARIABLE}={MODULE_NAME}" method="post" enctype="multipart/form-data">
	<table class="table">
		<tbody>
			<tr>
				<td>Chọn file upload:</td>
				<td><input type="file" name="zipfile"></td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td colspan="2" class="text-center">
					<input name="submit" class="btn btn-primary" type="submit" value="Thực hiện" />
				</td>
			</tr>
		</tfoot>
	</table>
</form>
<!-- END: main -->
