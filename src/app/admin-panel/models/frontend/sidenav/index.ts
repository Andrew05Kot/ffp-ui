export interface SidenavItem {
  routeLink: string,
  icon?: string,
  label: string,
  expanded?: boolean,
  subItems?: SidenavItem[]
}

export const navbarData: SidenavItem[] = [
  {
    routeLink: 'admin/dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard'
  },
  {
    routeLink: 'admin/ordering',
    icon: 'fal fa-tags',
    label: 'Ordering'
  },
  {
    routeLink: 'admin/establishment',
    icon: 'fal fa-map-marker',
    label: 'Establishments',
    subItems: [
      {
        routeLink: 'admin/establishment',
        label: 'Overview'
      },
      {
        routeLink: 'admin/establishment/map',
        label: 'All-Map'
      },
      {
        routeLink: 'admin/establishment/list',
        label: 'List'
      }
    ]
  },
  {
    routeLink: 'admin/dishes',
    icon: 'fal fa-hamburger',
    label: 'Dishes',
    subItems: [
      {
        routeLink: 'admin/dishes',
        label: 'Overview'
      },
      {
        routeLink: 'admin/dishes/cards',
        label: 'Cards'
      },
    ]
  },
  {
    routeLink: 'admin/users',
    icon: 'fal fa-user',
    label: 'Users'
  },
  {
    routeLink: 'admin/demo',
    icon: 'fal fa-keyboard',
    label: 'Demo'
  },
];

export interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}
