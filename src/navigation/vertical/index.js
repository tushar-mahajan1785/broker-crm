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
      icon: 'tabler:wallet'
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
          title: 'Location',
          children: [
            {
              title: 'Country',
            },
            {
              title: 'State',
            },
            {
              title: 'City',
            }
          ]
        },
        {
          title: 'Product',
          path: '/products/list'
        },
        {
          title: 'Line Of Business',
        },
        {
          title: 'Insurance Company',
        },
        {
          title: 'Other',
          children: [
            {
              title: 'Lead Source',
            },
            {
              title: 'Organization Type',
            },
            {
              title: 'Industry',
            },
            {
              title: 'Role',
            },
            {
              title: 'Permissions',
            }
          ]
        },
      ]
    },
  ]
}

export default navigation
