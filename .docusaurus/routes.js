import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/RedhatCSE-study-guide/lab-shell',
    component: ComponentCreator('/RedhatCSE-study-guide/lab-shell', 'fe3'),
    exact: true
  },
  {
    path: '/RedhatCSE-study-guide/',
    component: ComponentCreator('/RedhatCSE-study-guide/', '831'),
    routes: [
      {
        path: '/RedhatCSE-study-guide/',
        component: ComponentCreator('/RedhatCSE-study-guide/', 'e8b'),
        routes: [
          {
            path: '/RedhatCSE-study-guide/',
            component: ComponentCreator('/RedhatCSE-study-guide/', '654'),
            routes: [
              {
                path: '/RedhatCSE-study-guide/phase0-lab-setup/01-wsl-vm-install',
                component: ComponentCreator('/RedhatCSE-study-guide/phase0-lab-setup/01-wsl-vm-install', '566'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase0-lab-setup/02-rhel-install',
                component: ComponentCreator('/RedhatCSE-study-guide/phase0-lab-setup/02-rhel-install', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase0-lab-setup/03-ssh-keys-sudo',
                component: ComponentCreator('/RedhatCSE-study-guide/phase0-lab-setup/03-ssh-keys-sudo', 'b20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase0-lab-setup/04-ttyd-backend',
                component: ComponentCreator('/RedhatCSE-study-guide/phase0-lab-setup/04-ttyd-backend', '9a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase1-rhcsa/module01-essentials',
                component: ComponentCreator('/RedhatCSE-study-guide/phase1-rhcsa/module01-essentials', '1f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase1-rhcsa/module02-boot-systemd',
                component: ComponentCreator('/RedhatCSE-study-guide/phase1-rhcsa/module02-boot-systemd', 'af9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase1-rhcsa/module03-storage',
                component: ComponentCreator('/RedhatCSE-study-guide/phase1-rhcsa/module03-storage', 'c08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase1-rhcsa/module04-lvm-stratis',
                component: ComponentCreator('/RedhatCSE-study-guide/phase1-rhcsa/module04-lvm-stratis', '4d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase1-rhcsa/module05-dnf',
                component: ComponentCreator('/RedhatCSE-study-guide/phase1-rhcsa/module05-dnf', 'fe3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase1-rhcsa/module06-users-groups',
                component: ComponentCreator('/RedhatCSE-study-guide/phase1-rhcsa/module06-users-groups', 'b98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase1-rhcsa/module07-security-selinux',
                component: ComponentCreator('/RedhatCSE-study-guide/phase1-rhcsa/module07-security-selinux', '71f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase1-rhcsa/module08-capstone',
                component: ComponentCreator('/RedhatCSE-study-guide/phase1-rhcsa/module08-capstone', 'e3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase2-rhce/module09-ansible-basics',
                component: ComponentCreator('/RedhatCSE-study-guide/phase2-rhce/module09-ansible-basics', '753'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase2-rhce/module10-playbooks',
                component: ComponentCreator('/RedhatCSE-study-guide/phase2-rhce/module10-playbooks', '744'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase2-rhce/module11-roles',
                component: ComponentCreator('/RedhatCSE-study-guide/phase2-rhce/module11-roles', '9bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase2-rhce/module12-rhel-mgmt',
                component: ComponentCreator('/RedhatCSE-study-guide/phase2-rhce/module12-rhel-mgmt', 'cd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase2-rhce/module13-vault-debug',
                component: ComponentCreator('/RedhatCSE-study-guide/phase2-rhce/module13-vault-debug', 'dc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/phase2-rhce/module14-capstone',
                component: ComponentCreator('/RedhatCSE-study-guide/phase2-rhce/module14-capstone', 'e99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/resources/command-cheatsheet',
                component: ComponentCreator('/RedhatCSE-study-guide/resources/command-cheatsheet', '6e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/resources/exam-objectives',
                component: ComponentCreator('/RedhatCSE-study-guide/resources/exam-objectives', '968'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/resources/troubleshooting',
                component: ComponentCreator('/RedhatCSE-study-guide/resources/troubleshooting', '50f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RedhatCSE-study-guide/',
                component: ComponentCreator('/RedhatCSE-study-guide/', '66b'),
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
