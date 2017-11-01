
export interface IMenuItem {
  type: string,       // Possible values: link/dropDown/icon/separator/extLink
  name?: string,      // Used as display text for item and title for separator type
  state?: string,     // Router state
  icon?: string,      // Item icon name
  tooltip?: string,   // Tooltip text
  roles?: string[],   // Roles allowed to see this
  disabled?: boolean, // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]  // Dropdown items
}

export interface IChildItem {
  name: string,       // Display text
  state: string,      // Router state
  roles?: string[],   // Roles allowed to see this
}

export const menuItems: IMenuItem[] = [
  {
    name: 'ROLLEIFLEX.DASHBOARD.TITLE',
    type: 'link',
    tooltip: 'Dashboard',
    icon: 'dashboard',
    state: 'dashboard'
  },
  {
    name: 'ROLLEIFLEX.USERS.HEADER',
    type: 'dropDown',
    tooltip: 'Users',
    icon: 'person',
    state: 'users',
    sub: [
      {name: 'ROLLEIFLEX.USERS.WORKFLOW.ACTIVE', state: 'active'},
      {name: 'ROLLEIFLEX.USERS.WORKFLOW.INACTIVE', state: 'inactive'},
      {name: 'ROLLEIFLEX.USERS.WORKFLOW.CREATED', state: 'created'},
      {name: 'ROLLEIFLEX.USERS.ALL', state: 'all'},
      {name: 'ROLLEIFLEX.USERS.ADD', state: 'add'}
    ]
  },
  {
    name: 'ROLLEIFLEX.GROUPS.HEADER',
    type: 'dropDown',
    tooltip: 'Groups',
    icon: 'group',
    state: 'groups',
    sub: [
      {name: 'ROLLEIFLEX.GROUPS.ALL', state: 'all'},
      {name: 'ROLLEIFLEX.GROUPS.ADD', state: 'add'}
    ]
  }
];
