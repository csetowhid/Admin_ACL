<template>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Add New Sub Category</h3></div>
                                <div class="card-body">
                                    <form @submit.prevent='subCategorySave'>

<!--                                        <div class="form-group">-->
<!--                                            <label>Select Category</label>-->
<!--                                            <select class="form-control" class="form-control py-4" v-model="form.cat_id" type="text" placeholder="Enter Sub Category Name"-->
<!--                                                    :class="{ 'is-invalid': form.errors.has('cat_id') }" name="cat_id"  id="exampleFormControlSelect1">-->
<!--                                                <option value="">Select</option>-->
<!--                                                <option :value="category.id" v-for="category in getCategoryList" :key="category.id">{{category.cat_name}}</option>-->
<!--                                            </select>-->
<!--                                            <has-error :form="form" field="sub_cat_name"></has-error>-->
<!--                                        </div>-->



                                        <div class="form-group">
                                            <label class="small mb-1" for="inputEmailAddress">Select Category</label>
                                            <select class="form-control" v-model="form.cat_id" type="text" placeholder="Enter Sub Category Name"
                                                    :class="{ 'is-invalid': form.errors.has('cat_id') }" name="cat_id">
                                            <option :value="category.id" v-for="category in getCategoryList" :key="category.id">{{category.cat_name}}</option>
                                            </select>
                                            <has-error :form="form" field="sub_cat_name"></has-error>
                                        </div>

                                        <div class="form-group">
                                            <label class="small mb-1" for="inputEmailAddress">Category Name</label>
                                            <input class="form-control py-4" id="inputEmailAddress" v-model="form.cat_name" type="text" placeholder="Enter Sub Category Name"
                                                   :class="{ 'is-invalid': form.errors.has('sub_cat_name') }" name="sub_cat_name">
                                            <has-error :form="form" field="sub_cat_name"></has-error>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-md-6">
                                                <div class="form-group mt-4 mb-0">
                                                    <button class="btn btn-primary btn-block">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group mt-4 mb-0">
                                                    <router-link to="/subcategory" class="btn btn-primary btn-block">Back</router-link>
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
    name: "category add",
    mounted() {
        this.$store.dispatch('getCategoryList')
    },
    computed:{
        getCategoryList(){
            return this.$store.getters.categoryList
        }
    },

    data () {
        return {
            // Create a new form instance
            form: new Form({
                sub_cat_name: '',

            })
        }
    },

    methods: {
        categorySave () {
            // Submit the form via a POST request
            this.form.post('/categorySave')
                .then((response) => {
                    this.$router.push('/category');
                    Toast.fire({
                        icon: 'success',
                        title: 'Category Added successfully'
                    })
                })
                .catch(()=>{

                });
        }
    }
}
</script>
