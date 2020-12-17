<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="card mb-4">
                    <div class="card-header">
                            <span style="float:left;"><i class="fas fa-table mr-1"></i>
                                Role List</span>
                        <span style="float:right;">
                                <router-link to="/addRole">
                                    <button type="button" class="btn btn-outline-success btn-sm">Add Role</button>
                                </router-link>
                            </span>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Role Name</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(role,index) in getRoleList" :key = "role.id">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ role.name }}</td>
                                    <td>
                                        <router-link :to="`/editRole/${role.id}`">
                                            <button type="button" class="btn btn-outline-success btn-sm">Edit</button>
                                        </router-link>
                                        <a href="" @click.prevent="categoryDelete(role.id)">
                                            <button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
                                        </a>
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
export default {
    name: "List",

    mounted() {
        this.$store.dispatch('getRoleList')
    },
    computed:{
        getRoleList(){
            return this.$store.getters.roleList
        }
    },
    methods:{
        categoryDelete(id){
            axios.get('/categoryDelete/'+id).then((response)=>{
                this.$store.dispatch('getCategoryList')
                Toast.fire({
                    icon: 'success',
                    title: 'Category Deleted successfully'
                })
            })
        }

    }
}
</script>
