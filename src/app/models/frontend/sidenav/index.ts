export const navbarData = [
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
    icon: 'fal fa-university',
    label: 'Establishments'
  },
  {
    routeLink: 'dishes',
    icon: 'fal fa-hamburger',
    label: 'Dishes'
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
