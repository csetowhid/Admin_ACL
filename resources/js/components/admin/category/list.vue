<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                        <div class="card mb-4">
                            <div class="card-header">
                            <span style="float:left;"><i class="fas fa-table mr-1"></i>
                                Category List</span>
                            <span style="float:right;">
                                <router-link to="/add_category">
                                    <button type="button" class="btn btn-outline-success btn-sm">Add Category</button>
                                </router-link>
                            </span>
                            </div>
                             <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Category Name</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>
                                                    <router-link to="">
                                                        <button type="button" class="btn btn-outline-success btn-sm">Edit</button>
                                                    </router-link>
                                                    <router-link to="">
                                                        <button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
                                                    </router-link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </div>
</template>

<script>
	export default{

	}
</script>