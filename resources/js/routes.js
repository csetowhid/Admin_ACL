import dashboard from './components/admin/dashboard/index.vue';
//Category
import category_list from './components/admin/category/list.vue';
import categoryadd from './components/admin/category/add.vue';
import categoryedit from './components/admin/category/edit.vue';
//Sub Category
import subCategoryList from './components/admin/subcategory/list.vue';
import subCategoryadd from './components/admin/subcategory/add.vue';
import subCategoryedit from './components/admin/subcategory/edit.vue';

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
]
