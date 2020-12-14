<template>
		<div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Add New Category</h3></div>
                                    <div class="card-body">
                                        <form>
                                            <div class="form-group">
                                                <label class="small mb-1" for="inputEmailAddress">Category Name</label>
                                                <input class="form-control py-4" id="inputEmailAddress" type="text" placeholder="Enter Category Name" />
                                            </div>
                                            <div class="form-row">
                                                <div class="col-md-6">
                                                    <div class="form-group mt-4 mb-0"><a class="btn btn-primary btn-block" href="login.html">Create Category</a></div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group mt-4 mb-0">
                                                    	<router-link to="/category" class="btn btn-primary btn-block">Back</router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
</template>

<script>
	export default{

	}
</script>