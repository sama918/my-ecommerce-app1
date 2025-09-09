export const routes = [
  {
    path: '/',
    name : 'product.index',
    component: () => import('./components/product/Index.vue')
  },
  {
    path: '/product/:slug',
    name : 'product.show',
    component: () => import('./components/product/Show.vue')
  },
  {
    path: '/checkout',
    name : 'order.checkout',
    component: () => import('./components/order/Checkout.vue')
  },
  {
    path: '/summary',
    name : 'order.summary',
    component: () => import('./components/order/Summary.vue')
  }
]