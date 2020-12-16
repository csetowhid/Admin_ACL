export default {
    state:{
        category:[],
        subCategory:[],
    },
    getters:{
        categoryList(state){
            return state.category
        },
        subCategoryList(state){
            return state.subCategory
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
        }
    },
    mutations:{
        categoryList(state, responseData){
            return state.category = responseData;
        },
        subCategoryList(state, response){
            return state.subCategory = response;
        }
    }

}
