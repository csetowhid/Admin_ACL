<template>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Add New User</h3></div>
                                <div class="card-body">
                                    <form @submit.prevent='userSave'>
    <div class="form-group">
        <label class="small mb-1" for="inputEmailAddress">Name</label>
        <input class="form-control py-4" id="inputEmailAddress" v-model="form.name" type="text" placeholder="Enter Name" :class="{ 'is-invalid': form.errors.has('name') }" name="name">
        <has-error :form="form" field="name"></has-error>
    </div>
    <div class="form-group">
        <label class="small mb-1">Email</label>
        <input class="form-control py-4" id="inputEmailAddress" v-model="form.email" type="email" placeholder="Enter Email Address" :class="{ 'is-invalid': form.errors.has('email') }" name="email">
        <has-error :form="form" field="email"></has-error>
    </div>

    <div class="form-group">
        <label class="small mb-1" for="inputEmailAddress">Select Role</label>
        <select class="form-control" v-model="form.roles" type="text" placeholder="Enter Sub Category Name" :class="{ 'is-invalid': form.errors.has('roles') }" name="roles">
        <option :value="role.id" v-for="role in getRoleList" :key="role.id">{{role.name}}</option>
        </select>
        <has-error :form="form" field="roles"></has-error>
    </div>
    <div class="form-row">
        <div class="col-md-6">
        <div class="form-group">
        <label class="small mb-1" for="inputEmailAddress">Password</label>
        <input class="form-control py-4" id="inputEmailAddress" v-model="form.password" type="password" placeholder="Enter Password" :class="{ 'is-invalid': form.errors.has('password') }" name="password">
        <has-error :form="form" field="password"></has-error>
        </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
        <label class="small mb-1" for="inputEmailAddress">Confirm Password</label>
        <input class="form-control py-4" id="inputEmailAddress" v-model="form.cpassword" type="password" placeholder="Enter Confirm Password" :class="{ 'is-invalid': form.errors.has('cpassword') }" name="cpassword">
        <has-error :form="form" field="cpassword"></has-error>
            </div>
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-6">
            <div class="form-group mt-4 mb-0">
                <button class="btn btn-primary btn-block">Submit</button>
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group mt-4 mb-0">
                <router-link to="/user" class="btn btn-primary btn-block">Back</router-link>
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
    name: "save",

    mounted() {
        this.$store.dispatch('getRoleList')
    },
    computed:{
        getRoleList(){
            return this.$store.getters.roleList
        }
    },

    data () {
        return {
            // Create a new form instance
            form: new Form({
                name: '',
                email: '',
                password: '',
                cpassword: '',
                roles: [],

            })
        }
    },

    methods: {
        userSave () {
            // Submit the form via a POST request
            this.form.post('/userSave')
                .then((response) => {
                    this.$router.push('/user');
                    Toast.fire({
                        icon: 'success',
                        title: 'User Added successfully'
                    })
                })
                .catch(()=>{

                });
        }
    }
}
</script>
