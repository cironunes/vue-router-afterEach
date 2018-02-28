const Foo = { template: `<div>Foo</div>` };
const Bar = { template: `<div>Bar</div>` };

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');

app.$router.afterEach((to, from) => {
  console.log('VueRouter fullPath', to.fullPath);
  console.log('Browser URL:', window.location.pathname + window.location.hash);
});