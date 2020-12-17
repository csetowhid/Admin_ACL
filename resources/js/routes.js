import dashboard from './components/admin/dashboard/index.vue';
//Category
import category_list from './components/admin/category/list.vue';
import categoryadd from './components/admin/category/add.vue';
import categoryedit from './components/admin/category/edit.vue';
//Sub Category
import subCategoryList from './components/admin/subcategory/list.vue';
import subCategoryadd from './components/admin/subcategory/add.vue';
import subCategoryedit from './components/admin/subcategory/edit.vue';

//User
import userlist from './components/admin/user/list.vue';
import useradd from './components/admin/user/add.vue';
import useredit from './components/admin/user/edit.vue';
//Role
import rolelist from './components/admin/role/list.vue';
import roleadd from './components/admin/role/add.vue';
import roleedit from './components/admin/role/edit.vue';


export const routes = [
  { path: '/', component: dashboard },
    //Category
  { path: '/category', component: category_list },
  { path: '/add_category', component: categoryadd },
  { path: '/editcategory/:categoryId', component: categoryedit },
    //SubCategory
  { path: '/subcategory', component: subCategoryList },
  { path: '/addsubcategory', component: subCategoryadd },
  { path: '/editsubcategory/:subcategoryId', component: subCategoryedit },
    //User
    { path: '/user', component: userlist },
    { path: '/addUser', component: useradd },
    { path: '/editUser/:userId', component: useredit },
    //Role
    { path: '/role', component: rolelist },
    { path: '/addRole', component: roleadd },
    { path: '/editRole/:roleId', component: roleedit },
]
