export interface NavigationItem {
  name: string;
  routerLink?: boolean;
  icon: string;
  path: string | HTMLElement;
  isActive?: boolean;
}
