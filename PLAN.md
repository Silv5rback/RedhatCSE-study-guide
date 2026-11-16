# RedhatCSE Study Guide — Multi-Session Plan

## Project
Interactive RHCSA → RHCE study guide built with Docusaurus + MDX, featuring live shell labs (xterm.js + ttyd), React quiz widgets, and asciinema terminal recordings.

**Repo:** `C:\Users\SliveredSerf\Projects\RedhatCSE/`
**Stack:** Docusaurus 3.10.2, React 18, MDX, xterm.js, ttyd (WSL2 backend), draw.io SVG, asciinema
**Deploy:** GitHub Pages

## Phases

### Phase 0 — Lab Environment Setup (4 modules)
- [x] 01-wsl-vm-install — WSL2 + RHEL/CentOS Stream VM
- [ ] 02-rhel-install — RHEL installation and initial config
- [ ] 03-ssh-keys-sudo — SSH key auth, sudo, user management
- [ ] 04-ttyd-backend — ttyd WebSocket terminal server on WSL2

### Phase 1 — RHCSA Foundations (8 modules)
- [ ] module01-essentials — Shell navigation, file manipulation, Vim, archives
- [ ] module02-boot-systemd — Boot process, systemd targets, process management
- [ ] module03-storage — Partitions, filesystems, /etc/fstab, swap
- [ ] module04-lvm-stratis — LVM VG/LV, resizing, snapshots, Stratis
- [ ] module05-dnf — Package management, repositories, modules
- [ ] module06-users-groups — Accounts, passwords, sudo, ACLs
- [ ] module07-security-selinux — SELinux modes/booleans/contexts, firewalld
- [ ] module08-capstone — Multi-task RHCSA simulation + self-assessment

### Phase 2 — RHCE / Ansible (6 modules)
- [ ] module09-ansible-basics — Inventory, ad-hoc commands, modules, playbooks
- [ ] module10-playbooks — Variables, facts, conditionals, loops, handlers, Jinja2
- [ ] module11-roles — Role structure, ansible-galaxy, role reuse
- [ ] module12-rhel-mgmt — Managing packages, services, users, storage via Ansible
- [ ] module13-vault-debug — Ansible Vault, sensitive data, playbook debugging
- [ ] module14-capstone — Multi-role playbook provisioning full stack + mock exam

### Resources (3 modules)
- [ ] exam-objectives — RHCSA + RHCE exam task checklists
- [ ] command-cheatsheet — Critical commands/files per domain
- [ ] troubleshooting — Common break/fix scenarios

## OpenCode artifacts
- `AGENTS.md` — project-wide standing rules
- `.opencode/skills/docusaurus-writer/SKILL.md` — MDX page writing playbook
- `.opencode/skills/mdx-linter/SKILL.md` — MDX/React linting playbook

## Deployment notes
- Live shell (ttyd) cannot run on static GitHub Pages — host separately on WSL2/Linux VM
- asciinema recordings provide offline fallback for terminal demos
- draw.io SVGs embed in static output without backend
