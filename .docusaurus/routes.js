import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/RedhatCSE/lab-shell',
    component: ComponentCreator('/RedhatCSE/lab-shell', '3b7'),
    exact: true
  },
  {
    path: '/RedhatCSE/',
    component: ComponentCreator('/RedhatCSE/', 'fb5'),
    routes: [
      {
        path: '/RedhatCSE/',
        component: ComponentCreator('/RedhatCSE/', '1ba'),
        routes: [
          {
            path: '/RedhatCSE/',
            component: ComponentCreator('/RedhatCSE/', 'e4a'),
            routes: [
              {
                path: '/RedhatCSE/phase0-lab-setup/01-wsl-vm-install',
                component: ComponentCreator('/RedhatCSE/phase0-lab-setup/01-wsl-vm-install', '483'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase0-lab-setup/02-rhel-install',
                component: ComponentCreator('/RedhatCSE/phase0-lab-setup/02-rhel-install', 'fac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase0-lab-setup/03-ssh-keys-sudo',
                component: ComponentCreator('/RedhatCSE/phase0-lab-setup/03-ssh-keys-sudo', 'f9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase0-lab-setup/04-ttyd-backend',
                component: ComponentCreator('/RedhatCSE/phase0-lab-setup/04-ttyd-backend', 'ffb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase1-rhcsa/module01-essentials',
                component: ComponentCreator('/RedhatCSE/phase1-rhcsa/module01-essentials', 'bea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase1-rhcsa/module02-boot-systemd',
                component: ComponentCreator('/RedhatCSE/phase1-rhcsa/module02-boot-systemd', 'faa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase1-rhcsa/module03-storage',
                component: ComponentCreator('/RedhatCSE/phase1-rhcsa/module03-storage', '5b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase1-rhcsa/module04-lvm-stratis',
                component: ComponentCreator('/RedhatCSE/phase1-rhcsa/module04-lvm-stratis', '6dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase1-rhcsa/module05-dnf',
                component: ComponentCreator('/RedhatCSE/phase1-rhcsa/module05-dnf', '415'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase1-rhcsa/module06-users-groups',
                component: ComponentCreator('/RedhatCSE/phase1-rhcsa/module06-users-groups', '03e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase1-rhcsa/module07-security-selinux',
                component: ComponentCreator('/RedhatCSE/phase1-rhcsa/module07-security-selinux', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase1-rhcsa/module08-capstone',
                component: ComponentCreator('/RedhatCSE/phase1-rhcsa/module08-capstone', '7dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase2-rhce/module09-ansible-basics',
                component: ComponentCreator('/RedhatCSE/phase2-rhce/module09-ansible-basics', '316'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase2-rhce/module10-playbooks',
                component: ComponentCreator('/RedhatCSE/phase2-rhce/module10-playbooks', '4ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase2-rhce/module11-roles',
                component: ComponentCreator('/RedhatCSE/phase2-rhce/module11-roles', 'b8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase2-rhce/module12-rhel-mgmt',
                component: ComponentCreator('/RedhatCSE/phase2-rhce/module12-rhel-mgmt', 'f5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase2-rhce/module13-vault-debug',
                component: ComponentCreator('/RedhatCSE/phase2-rhce/module13-vault-debug', 'feb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/phase2-rhce/module14-capstone',
                component: ComponentCreator('/RedhatCSE/phase2-rhce/module14-capstone', 'a64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/resources/command-cheatsheet',
                component: ComponentCreator('/RedhatCSE/resources/command-cheatsheet', '288'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/resources/exam-objectives',
                component: ComponentCreator('/RedhatCSE/resources/exam-objectives', '02a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/resources/troubleshooting',
                component: ComponentCreator('/RedhatCSE/resources/troubleshooting', 'cf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE/',
                component: ComponentCreator('/RedhatCSE/', '7c5'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
