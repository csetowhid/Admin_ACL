import dashboard from './components/admin/dashboard/index.vue';
import category_list from './components/admin/category/list.vue';

export const routes = [
  { path: '/', component: dashboard },
  { path: '/category', component: category_list }
]