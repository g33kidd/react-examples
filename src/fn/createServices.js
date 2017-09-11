export default () => {
  return [
    {
      name: 'Twitter',
      slug: 'twitter',
      connectionTypes: [
        {name: 'Profiles', slug: 'profiles'}
      ],
      connections: [
        { username: 'g33kidd', type: 'profiles', avatar: 'https://unsplash.it/200' },
      ]
    },
    {
      name: 'Facebook',
      slug: 'facebook',
      connectionTypes: [
        {name: 'Profiles', slug: 'profiles'},
        {name: 'Pages', slug: 'pages'},
        {name: 'Groups', slug: 'groups'}
      ],
      connections: []
    },
    {
      name: 'Pinterest',
      slug: 'pinterest',
      beta: true,
      connectionTypes: [
        {name: 'Profiles', slug: 'profiles', beta: true}
      ],
      connections: [
        { username: 'Hello', type: 'profiles', avatar: 'https://unsplash.it/200' }
      ]
    },
    {
      name: 'LinkedIn',
      slug: 'linkedin',
      beta: true,
      connectionTypes: [
        {name: 'Profiles', slug: 'profiles', beta: true},
        {name: 'Pages', slug: 'pages', beta: true}
      ],
      connections: [
        {username: 'Joshua Kidd', type: 'profiles', avatar: 'https://unsplash.it/200'},
        {username: 'Richard Branson', type: 'pages', avatar: 'https://unsplash.it/200'},
      ]
    },
    {
      name: 'Google+',
      slug: 'google-plus',
      comingSoon: true,
      connectionTypes: [
        {name: 'Pages', slug: 'pages'},
        {name: 'Profiles', slug: 'profiles', comingSoon: true}
      ],
      connections: [
        {username: 'React Programming', type: 'pages', avatar: 'https://unsplash.it/200'}
      ]
    }
  ]
}
