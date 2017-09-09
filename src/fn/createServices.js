export default () => {
  return [
    {
      name: 'Twitter',
      slug: 'twitter',
      connectionTypes: [
        {name: 'Profiles', slug: 'profiles'}
      ],
      connections: [
        { username: 'g33kidd', type: 'profiles' },
        { username: 'fundSocialApp', type: 'profiles' }
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
      connections: [
        { username: 'Joshua Kidd', type: 'profiles' },
        { username: 'Something Cool', type: 'pages' },
        { username: "ClickBait Titles", type: 'pages' },
        { username: "The Trading Group", type: 'groups' }
      ]
    },
    {
      name: 'Pinterest',
      slug: 'pinterest',
      beta: true,
      connectionTypes: [
        {name: 'Profiles', slug: 'profiles', beta: true}
      ],
      connections: [
        { username: 'watspinterest', type: 'profiles' }
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
        {username: 'Joshua Kidd', type: 'profiles'},
        {username: 'Richard Branson', type: 'pages'},
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
        {username: 'React Programming', type: 'pages'}
      ]
    }
  ]
}
