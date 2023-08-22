export interface SidenavItem {
  routeLink: string,
  icon?: string,
  label: string,
  expanded?: boolean,
  subItems?: SidenavItem[]
}

export const navbarData: SidenavItem[] = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard'
  },
  {
    routeLink: 'ordering',
    icon: 'fal fa-tags',
    label: 'Ordering'
  },
  {
    routeLink: 'establishment',
    icon: 'fal fa-map-marker',
    label: 'Establishments',
    subItems: [
      {
        routeLink: 'establishment',
        label: 'Overview'
      },
      {
        routeLink: 'establishment/map',
        label: 'All-Map'
      },
      {
        routeLink: 'establishment/list',
        label: 'List'
      }
    ]
  },
  {
    routeLink: 'dishes',
    icon: 'fal fa-hamburger',
    label: 'Dishes'
  },
  {
    routeLink: 'users',
    icon: 'fal fa-user',
    label: 'Users'
  },
  {
    routeLink: 'demo',
    icon: 'fal fa-keyboard',
    label: 'Demo'
  },
];

export interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}
