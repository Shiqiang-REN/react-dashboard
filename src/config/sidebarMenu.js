export default [
  {
    title: 'HOME',
    key: 'home',
    path: '/admin/home',
    submenu: false
  },
  {
    title: 'PRODUCTS',
    key: 'prod',
    path: '/admin/prod',
    submenu: true,
    children: [
      {
        title: 'Categories',
        key: 'category',
        path: '/admin/prod/categories'
      },
      {
        title: 'Products',
        key: 'product',
        path: '/admin/prod/products'
      }
    ]
  },
  {
    title: 'USERS',
    key: 'users',
    path: '/admin/user',
    submenu: false
  },
  {
    title: 'ROLES',
    key: 'roles',
    path: '/admin/role',
    submenu: false
  },
  {
    title: 'CHARTS',
    key: 'charts',
    path: '/admin/charts',
    submenu: true,
    children: [
      {
        title: 'Sales',
        key: 'dayReport',
        path: '/admin/charts/sales'
      },
      {
        title: 'Visitors',
        key: 'yearReport',
        path: '/admin/charts/visitors'
      }
    ]
  }
]