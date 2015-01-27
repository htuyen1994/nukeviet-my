<!-- BEGIN: main -->

<table class="table table-hover">
	<thead>
		<tr>
			<th>id</th>
			<th> TITTLE</th>
			<th> IMAGE</th>
		</tr>
	</thead>
	<tbody>
		<!-- BEGIN: loop  -->
		<tr>
			<td>{DATA.id}</td>
			<td>{DATA.title}</td>
			<td><img src="{NV_BASE_SITEURL}files/news/{DATA.homeimgfile}"></td>
		</tr>
		<!-- END: loop -->
	</tbody>
</table>
<!-- END: main -->