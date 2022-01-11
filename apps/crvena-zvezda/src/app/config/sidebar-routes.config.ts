import { RouteInfo } from '@viber-bot/shared';


export const ROUTES: RouteInfo[] = [
  { title: 'Viber bot', type: 'title' },

  {
    opened: false,
    title: 'sidebarMenu.general',
    type: 'dropdown',
    icon: 'pi pi-shield',
    children: [
      {
        icon: 'pi pi-comment',
        path: '/chat',
        title: 'sidebarMenu.chat',
        role: ['admin'],
      },
      {
        icon: 'pi pi-ticket',
        path: '/ticket',
        title: 'sidebarMenu.tickets',
        role: ['admin'],
      },
      {
        icon: 'pi pi-table',
        path: '/about',
        title: 'sidebarMenu.aboutUs',
        role: ['admin'],
      },
      {
        icon: 'pi pi-tablet',
        path: '/sticker',
        title: 'sidebarMenu.stickers',
        role: ['admin'],
      },
      {
        icon: 'pi pi-info-circle',
        path: '/news',
        title: 'sidebarMenu.news',
        role: ['admin'],
      },
      {
        icon: 'pi pi-shopping-cart',
        path: '/shop',
        title: 'sidebarMenu.shop',
        role: ['admin'],
      },
    ],
    role: ['admin'],
  },
  {
    opened: false,
    title: 'sidebarMenu.video',
    type: 'dropdown',
    icon: 'pi pi-video',
    children: [
      {
        icon: 'pi pi-video',
        path: '/video',
        title: 'sidebarMenu.videoList',
        role: ['admin'],
      },
      {
        icon: 'pi-user-edit',
        path: '/videoCategory',
        title: 'sidebarMenu.channelList',
        role: ['admin'],
      },
    ],
  },
  // {
  //   path: '/clubInfo',
  //   title: 'sidebarMenu.clubInfo',
  //   icon: 'pi pi-flag',
  //   role: ['admin'],
  // },
  // {
  //   path: '/club',
  //   title: 'sidebarMenu.club',
  //   icon: 'pi pi-star-o',
  //   role: ['admin'],
  // },
  // {
  //   path: '/matches',
  //   title: 'sidebarMenu.allMatches',
  //   icon: 'pi pi-list',
  //   role: ['admin'],
  // },

  {
    opened: false,
    title: 'sidebarMenu.team',
    type: 'dropdown',
    icon: 'pi pi-users',
    children: [
      {
        path: '/member',
        title: 'sidebarMenu.members',
        icon: 'pi pi-users',
        role: ['admin'],
      },
      {
        path: '/coach',
        title: 'sidebarMenu.coaches',
        icon: 'pi pi-users',
        role: ['admin'],
      },
      {
        path: '/academy',
        title: 'sidebarMenu.academy',
        icon: 'pi pi-users',
        role: ['admin'],
      },
    ],
  },
  {
    opened: false,
    title: 'sidebarMenu.FAQ',
    type: 'dropdown',
    icon: 'pi pi-question-circle',
    children: [
      {
        path: '/faq',
        title: 'sidebarMenu.FAQList',
        icon: 'pi pi-question',
        role: ['admin'],
      },
      {
        path: '/faqCategory',
        title: 'sidebarMenu.FAQCategories',
        icon: 'pi pi-folder',
        role: ['admin'],
      },
    ],
    role: ['admin'],
  },
  {
    path: '/quiz',
    title: 'sidebarMenu.quiz',
    icon: 'pi pi-star-o',
    role: ['admin'],
  },
  {
    path: '/survey',
    title: 'sidebarMenu.surveys',
    icon: 'pi pi-file',
    role: ['admin'],
  },
  { title: 'CMS', type: 'title' },
  {
    path: '/admin',
    title: 'sidebarMenu.admins',
    icon: 'pi pi-cog',
    role: ['admin'],
  },
];

