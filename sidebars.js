// sidebars.js for RedhatCSE study guide
// This is the source of truth for navigation structure

const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Phase 0 — Lab Environment Setup',
      collapsible: false,
      items: [
        'phase0-lab-setup/phase0-lab-setup-01-wsl-vm-install',
        'phase0-lab-setup/phase0-lab-setup-02-rhel-install',
        'phase0-lab-setup/phase0-lab-setup-03-ssh-keys-sudo',
        'phase0-lab-setup/phase0-lab-setup-04-ttyd-backend',
      ],
    },
    {
      type: 'category',
      label: 'Phase 1 — RHCSA Foundations',
      collapsible: false,
      items: [
        'phase1-rhcsa/phase1-rhcsa-module01-essentials',
        'phase1-rhcsa/phase1-rhcsa-module02-boot-systemd',
        'phase1-rhcsa/phase1-rhcsa-module03-storage',
        'phase1-rhcsa/phase1-rhcsa-module04-lvm-stratis',
        'phase1-rhcsa/phase1-rhcsa-module05-dnf',
        'phase1-rhcsa/phase1-rhcsa-module06-users-groups',
        'phase1-rhcsa/phase1-rhcsa-module07-security-selinux',
        'phase1-rhcsa/phase1-rhcsa-module08-capstone',
      ],
    },
    {
      type: 'category',
      label: 'Phase 2 — RHCE / Ansible',
      collapsible: false,
      items: [
        'phase2-rhce/phase2-rhce-module09-ansible-basics',
        'phase2-rhce/phase2-rhce-module10-playbooks',
        'phase2-rhce/phase2-rhce-module11-roles',
        'phase2-rhce/phase2-rhce-module12-rhel-mgmt',
        'phase2-rhce/phase2-rhce-module13-vault-debug',
        'phase2-rhce/phase2-rhce-module14-capstone',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsible: false,
      items: [
        'resources/resources-exam-objectives',
        'resources/resources-command-cheatsheet',
        'resources/resources-troubleshooting',
      ],
    },
  ],
};

module.exports = sidebars;
