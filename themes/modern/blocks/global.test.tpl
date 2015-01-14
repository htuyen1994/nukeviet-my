<!-- BEGIN: main -->

<table class="table table-hover">
	<thead>
		<tr>
			<th>#</th>
			<th> TITTLE</th>
			<th>DESCRIPTION</th>
			<th>URL IMAGE</th>
			<th> IMAGE</th>
		</tr>
	</thead>
	<tbody>
		<!-- BEGIN: loop  -->
		<tr>
			<td>{DATA.ID}</td>
			<td>{DATA.TITTLE}</td>
			<td>{DATA.DESCRIPTION}</td>
			<td>{DATA.URL}</td>
			<td><img src="{DATA.URL}" width="100px"></td>
		</tr>
		<!-- END: loop -->
	</tbody>
</table>
<!-- END: main -->