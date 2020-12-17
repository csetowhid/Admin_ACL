<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="card mb-4">
                    <div class="card-header">
                            <span style="float:left;"><i class="fas fa-table mr-1"></i>
                                User List</span>
                        <span style="float:right;">
                                <router-link to="addUser">
                                    <button type="button" class="btn btn-outline-success btn-sm">Add User</button>
                                </router-link>
                            </span>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User Name</th>
                                    <th>User Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(user,index) in getUserList" :key = "user.id">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.role_name }}</td>
                                    <td>
                                        <router-link :to="`/editUser/${user.id}`">
                                            <button type="button" class="btn btn-outline-success btn-sm">Edit</button>
                                        </router-link>
                                        <a href="" @click.prevent="userDelete(user.id)">
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
        this.$store.dispatch('getUserList')
    },
    computed:{
        getUserList(){
            return this.$store.getters.userList
        }
    },
    methods:{
        userDelete(id){
            axios.get('/userDelete/'+id).then((response)=>{
                this.$store.dispatch('getUserList')
                Toast.fire({
                    icon: 'success',
                    title: 'User Deleted successfully'
                })
            })
        }

    }
}
</script>
