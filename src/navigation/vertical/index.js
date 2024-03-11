const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: 'tabler:smart-home',
      children: [
        {
          title: 'Analytics',
          path: '/dashboards/analytics'
        }
      ]
    },
    {
      sectionTitle: 'Operations'
    },
    {
      title: 'Leads',
      icon: 'tabler:user-pin',
      badgeContent: '10',
      badgeColor: 'error',
      path: '/operations/leads/list'
    },
    {
      title: 'Business',
      icon: 'tabler:wallet',
      path: '/operations/business/list'
    },
    {
      sectionTitle: 'Client Managements'
    },
    {
      title: 'Clients',
      icon: 'tabler:user-heart',
      badgeContent: '12,000',
      badgeColor: 'warning',
      path: '/clients/list'
    },
    {
      sectionTitle: 'Users'
    },
    {
      title: 'Users',
      icon: 'tabler:user',
      path: '/users/list'
    },
    {
      sectionTitle: 'Settings'
    },
    {
      title: 'Master Setup',
      icon: 'tabler:settings',
      children: [
        {
          title: 'Line Of Business',
          path: '/masters/line-of-business/list'
        },
        {
          title: 'Product',
          path: '/masters/products/list'
        },
        {
          title: 'Insurance Company',
          path: '/masters/insurance-company/list'
        },
        {
          title: 'Other',
          children: [
            {
              title: 'Lead Source',
              path: '/masters/other/lead-source/list'
            },
            {
              title: 'Organization Type',
              path: '/masters/other/organization-type/list'
            },
            {
              title: 'Industry',
              path: '/masters/other/industry/list'
            },
            {
              title: 'Role',
              path: '/masters/other/role/list'
            },
            {
              title: 'Permissions',
              path: '/masters/other/permission/list'
            }
          ]
        }
      ]
    }
  ]
}

export default navigation
