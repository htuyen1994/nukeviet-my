<!-- BEGIN: main -->
<form action="{NV_BASE_SITEURL}index.php?{NV_NAME_VARIABLE}={MODULE_NAME}&step=2" method="post" enctype="multipart/form-data" class="form-horizontal" role="form">
	
	<div class="form-group">
		<label class="col-sm-4 control-label">Thư mục chứa giao diện</label>
		<div class="col-sm-8">
			<input type="text" class="form-control required" value="{DATA.theme}"  name="theme">
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-sm-4 control-label">Tên gọi giao diện</label>
		<div class="col-sm-8">
			<input type="text" class="form-control required" value="{DATA.info_name}"  name="info_name">
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-sm-4 control-label">Tác giả</label>
		<div class="col-sm-8">
			<input type="text" class="form-control required" value="{DATA.info_author}" name="info_author">
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-sm-4 control-label">Website</label>
		<div class="col-sm-8">
			<input type="url" class="form-control required" value="{DATA.info_website}" name="info_website">
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-sm-4 control-label">Mô tả</label>
		<div class="col-sm-8">
			<input type="text" class="form-control required" value="{DATA.info_description}" name="info_description">
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-sm-4 control-label">Phiên bản sử dụng</label>
		<div class="col-sm-8">
			<input type="text" class="form-control required" value="{DATA.version}" name="version">
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-sm-4 control-label">Xây dựng trên giao diện</label>
		<div class="col-sm-8">
			<select name="source_theme" class="form-control" style="width: 200px">
				<!-- BEGIN: source_theme -->
				<option value="{SOURCE_THEME}" {SELECT_THEME}>{SOURCE_THEME}</option>
				<!-- END: source_theme -->
			</select>
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-sm-4 control-label">Copy giao diện các module</label>
		<div class="col-sm-8">
			<div style="height: 150px; overflow: auto; border: 1px solid #CCCCCC; padding: 10px" id="td_mod_theme">
			<!-- BEGIN: mod_theme -->
			<label class="center-block"><input type="checkbox" name="mod_theme[]" value="{MOD_THEME}"/> {MOD_THEME}</label>
			<!-- END: mod_theme -->
			</div>
		</div>
	</div>
<div class="table-responsive">
	<table class="table table-striped table-bordered table-hover" id="additem_position">
		<caption> Các khối giao diện </caption>
		<thead>
			<tr class="text-center">
				<th> Số thứ tự </th>
				<th> Mã khối giao diện </th>
				<th> Tên khối giao diện tiếng anh </th>
				<th> Tên khối giao diện tiếng việt </th>
			</tr>
		</thead>
		<tfoot>
			<tr>
				<td colspan="4">
				<button id="" onclick="theme_additem_position();return false;" class="btn btn-primary">
					<span>Thêm khối giao diện</span>
				</button></td>
			</tr>
		</tfoot>
		<!-- BEGIN: loop -->
		<tbody>
			<tr>
				<td align="center"> {POSITION.id} </td>
				<td><input type="text" class="form-control" value="{POSITION.tag}" name="position_tag[{POSITION.id}]" readonly="readonly"></td>
				<td><input type="text" class="form-control" value="{POSITION.name}" name="position_name[{POSITION.id}]"></td>
				<td><input type="text" class="form-control" value="{POSITION.name_vi}" name="position_name_vi[{POSITION.id}]"></td>
			</tr>
		</tbody>
		<!-- END: loop -->
	</table>
</div>
	<div style="text-align:center">
		<input name="submit" type="submit" value="Thực hiện" class="btn btn-primary" />
	</div>
</form>
<script type="text/javascript">
	var items_positions = '{ITEMS_POSITIONS}';
	var checkss = '{CHECKSS}';
	$("select[name=source_theme]").change(function() {
		var source_theme = $("select[name=source_theme]").val();
		$("#td_mod_theme").html("Loading...").load(script_name + "?" + nv_name_variable + "=" + nv_module_name + "&get_module_theme=" + source_theme + "&checkss=" + checkss + "&nocache=" + new Date().getTime());

	});
	function theme_additem_position() {
		items_positions++;
		var newitem = '';
		newitem += '<tr>';
		newitem += '	<td align="center">' + items_positions + '</td>';
		newitem += '	<td><input type="text" name="position_tag[' + items_positions + ']" class="form-control" /></td>';
		newitem += '	<td><input type="text" name="position_name[' + items_positions + ']" class="form-control" /></td>';
		newitem += '	<td><input type="text" name="position_name_vi[' + items_positions + ']" class="form-control" /></td>';
		newitem += '</tr>';
		$("#additem_position").append(newitem);
	}
</script>
<!-- END: main -->
