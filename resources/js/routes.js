import dashboard from './components/admin/dashboard/index.vue';
import category_list from './components/admin/category/list.vue';
import categoryadd from './components/admin/category/add.vue';

export const routes = [
  { path: '/', component: dashboard },
  { path: '/category', component: category_list },
  { path: '/add_category', component: categoryadd }
]