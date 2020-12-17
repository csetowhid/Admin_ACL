<template>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header"><h3 class="text-center font-weight-light">Edit Role</h3></div>
                                    <form @submit.prevent='roleEdit'>
                                        <div class="form-row">
                                            <div class="col-md-4">
                                                <div class="card-body">
                                                <div class="form-group">
                                            <label class="small mb-1" for="inputEmailAddress">Role Name</label>
                                            <input class="form-control py-4" id="inputEmailAddress" v-model="form.name" type="text" placeholder="Enter Role Name"
                                                   :class="{ 'is-invalid': form.errors.has('name') }" name="name">
                                            <has-error :form="form" field="name"></has-error>
                                        </div>
                                    </div>
                                    <div class="card-footer">
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
                                                    <router-link to="/role" class="btn btn-primary btn-block">Back</router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card">
                                                    <div class="card-header">
                                                        <div class="form-row">
                                                    <div class="col-md-3">List</div>
                                                    <div class="col-md-3">Add</div>
                                                    <div class="col-md-3">Edit</div>
                                                    <div class="col-md-3">Delete</div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                    <div class="form-row">
                                                       <div class="col-md-3" v-for="permission in getPermissionList">
                                                        <div class="form-row">
                                                        <div class="col-md-2">
                                                            <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="defaultCheck1" v-model="form.permission" :value="permission.id" :class="{ 'is-invalid': form.errors.has('permission') }" name="permission">
                    <has-error :form="form" field="permission"></has-error>
                                               </div>
                                                        </div>
                                                        <div class="col-md-10">
                <label class="form-check-label" for="defaultCheck1">
   {{ permission.name }}
  </label>
                                                
                                            </div>
                                                        </div>
                                                        
                                                
                                            </div>
                                            
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                            
                                    </form>
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
    name: "Edit",
    data () {
        return {
            form: new Form({
                name: '',
                permission:[],

            })
        }
    },

    mounted() {
        this.$store.dispatch('getPermissionList')
    },
    created(){
        axios.get('/roleById/'+ this.$route.params.roleId).then((response)=> {
            this.form.name = response.data.role.name;
            for(let i=0;i<response.data.permission.length;i++){
                for(let j=0;j<=response.data.SelectedRoleLength;j++){
                if(response.data.permission[i].id == response.data.rolePermissions[j]){
                        this.form.permission[i]=response.data.rolePermissions[j];
                    }
                }
                    
            }
        });
    },
    computed:{
        getPermissionList(){
            return this.$store.getters.permissionList
        }
    },

    methods: {
        roleEdit () {
            this.form.post(`/roleUpdate/${this.$route.params.roleId}`)
                .then((response) => {
                    this.$router.push('/role');
                    Toast.fire({
                        icon: 'success',
                        title: 'Role Updated successfully'
                    })
                })
                .catch(()=>{

                });
        }
    }
}
</script>
