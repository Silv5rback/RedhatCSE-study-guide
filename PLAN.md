# RedhatCSE Study Guide — Multi-Session Plan

## Project

Interactive RHCSA → RHCE study guide built with Docusaurus + MDX, featuring live shell labs (xterm.js + ttyd), React quiz widgets, SVG diagrams, and asciinema terminal recordings.

**Repo:** `C:\Users\SliveredSerf\Projects\RedhatCSE/`
**Stack:** Docusaurus 3.10.2, React 18, MDX, xterm.js, ttyd (WSL2/EC2 backend), draw.io SVG, asciinema
**Deploy:** GitHub Pages — LIVE at https://Silv5rback.github.io/RedhatCSE-study-guide/

## Phases — ALL COMPLETE

### Phase 0 — Lab Environment Setup (4 modules)
- [x] 01-wsl-vm-install — WSL2 + RHEL/CentOS Stream VM
- [x] 02-rhel-install — RHEL installation and initial config
- [x] 03-ssh-keys-sudo — SSH key auth, sudo, user management
- [x] 04-ttyd-backend — ttyd WebSocket terminal server (WSL2/EC2)

### Phase 1 — RHCSA Foundations (8 modules)
- [x] module01-essentials — Shell navigation, file manipulation, Vim, archives (+ asciinema demo)
- [x] module02-boot-systemd — Boot process, systemd targets, process management
- [x] module03-storage — Partitions, filesystems, /etc/fstab, swap
- [x] module04-lvm-stratis — LVM VG/LV, resizing, snapshots, Stratis
- [x] module05-dnf — Package management, repositories, modules
- [x] module06-users-groups — Accounts, passwords, sudo, ACLs
- [x] module07-security-selinux — SELinux modes/booleans/contexts, firewalld (+ asciinema demo)
- [x] module08-capstone — Multi-task RHCSA simulation + self-assessment

### Phase 2 — RHCE / Ansible (6 modules)
- [x] module09-ansible-basics — Inventory, ad-hoc commands, modules, playbooks (+ SVG diagram)
- [x] module10-playbooks — Variables, facts, conditionals, loops, handlers, Jinja2
- [x] module11-roles — Role structure, ansible-galaxy, role reuse
- [x] module12-rhel-mgmt — Managing packages, services, users, storage via Ansible
- [x] module13-vault-debug — Ansible Vault, sensitive data, playbook debugging
- [x] module14-capstone — Multi-role playbook provisioning full stack + mock exam

### Resources (3 modules)
- [x] exam-objectives — RHCSA + RHCE exam task checklists (+ SVG diagram)
- [x] command-cheatsheet — Critical commands/files per domain
- [x] troubleshooting — Common break/fix scenarios

## Media Assets — ALL COMPLETE

### SVG Diagrams (3 files)
- `static/svg/lab-architecture.svg` → embedded in 04-ttyd-backend.mdx
- `static/svg/exam-path.svg` → embedded in resources/exam-objectives.mdx
- `static/svg/ansible-architecture.svg` → embedded in module09-ansible-basics.mdx

### asciinema Recordings (2 files)
- `static/cast/rhcsa-essentials.cast` → embedded in module01-essentials.mdx
- `static/cast/rhcsa-selinux.cast` → embedded in module07-security-selinux.mdx
- `static/cast/README.md` — recording instructions

## Deployment

- GitHub repo: `Silv5rback/RedhatCSE-study-guide`
- Main branch: source code
- gh-pages branch: deployed static site
- Live URL: https://Silv5rback.github.io/RedhatCSE-study-guide/
- Deploy command: `$env:GIT_USER = "Silv5rback"; npm run deploy`

## Live Shell Backend (running)

ttyd is running as a systemd service on WSL2 Ubuntu-24.04:
- IP: 172.26.57.86 (WSL2)
- Port: 7681
- WebSocket: ws://172.26.57.86:7681
- Service: `sudo systemctl status ttyd` (on WSL2)
- Accessible from Windows browser at http://172.26.57.86:7681

Note: WSL2 IP may change on restart. An Amazon EC2 instance is an alternative backend option.

## OpenCode artifacts

- `AGENTS.md` — project-wide standing rules
- `.opencode/skills/docusaurus-writer/SKILL.md` — MDX page writing playbook
- `.opencode/skills/mdx-linter/SKILL.md` — MDX/React linting playbook
