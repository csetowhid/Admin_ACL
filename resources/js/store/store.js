export default {
    state:{
        category:[],
        subCategory:[],
        user:[],
        role:[],
        permission:[],
    },
    getters:{
        categoryList(state){
            return state.category
        },
        subCategoryList(state){
            return state.subCategory
        },
        userList(state){
            return state.user
        },
        roleList(state){
            return state.role
        },
        permissionList(state){
            return state.permission
        }
    },
    actions:{
        getCategoryList(context){
            axios.get('/categoryList').then((response)=>{
                context.commit('categoryList', response.data.categoryList)
            })
        },
        getSubCategoryList(context){
            axios.get('/subCategoryList').then((response)=>{
                context.commit('subCategoryList', response.data.subCategoryList)
            })
        },
        getUserList(context){
            axios.get('/userList').then((response)=>{
                context.commit('userList', response.data.userList)
            })
        },
        getRoleList(context){
            axios.get('/roleList').then((response)=>{
                context.commit('roleList', response.data.roleList)
            })
        },
        getPermissionList(context){
            axios.get('/permissionList').then((response)=>{
                context.commit('permissionList', response.data.permissionList)
            })
        }
    },
    mutations:{
        categoryList(state, responseData){
            return state.category = responseData;
        },
        subCategoryList(state, response){
            return state.subCategory = response;
        },
        userList(state, response){
            return state.user = response;
        },
        roleList(state, response){
            return state.role = response;
        },
        permissionList(state, response){
            return state.permission = response;
        },
    }

}
