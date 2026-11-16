---
id: resources-command-cheatsheet
title: Command Cheatsheet
description: Critical commands and files for each RHCSA/RHCE domain
slug: /resources/command-cheatsheet
---

# Command Cheatsheet

## Shell Essentials
| Task | Command |
|------|---------|
| Print working directory | `pwd` |
| List files | `ls -la` |
| Change directory | `cd /path` |
| Make directory | `mkdir -p /path` |
| Create empty file | `touch file` |
| Copy file | `cp src dest` |
| Move/rename file | `mv src dest` |
| Remove file | `rm file` |
| Remove directory | `rm -rf dir` |
| Display file | `cat file` |
| Page through file | `less file` |
| First N lines | `head -n N file` |
| Last N lines | `tail -n N file` |
| Search text | `grep "pattern" file` |
| Redirect output | `cmd > file` |
| Append output | `cmd >> file` |
| Pipe output | `cmd1 \| cmd2` |
| Create archive | `tar -czvf archive.tar.gz dir` |
| List archive | `tar -tzvf archive.tar.gz` |
| Extract archive | `tar -xzvf archive.tar.gz -C dir` |
| Vim save+quit | `:wq` |
| Vim quit no save | `:q!` |

## systemd & Boot
| Task | Command |
|------|---------|
| Check default target | `systemctl get-default` |
| Set default target | `systemctl set-default target` |
| Start service | `systemctl start service` |
| Stop service | `systemctl stop service` |
| Enable at boot | `systemctl enable service` |
| Disable at boot | `systemctl disable service` |
| Check status | `systemctl status service` |
| Is enabled at boot | `systemctl is-enabled service` |
| Is running | `systemctl is-active service` |
| List processes | `ps aux` |
| Kill by PID | `kill PID` |
| Kill by name | `pkill name` |
| Change priority | `nice -n N cmd` |
| Renice running | `renice -n N -p PID` |
| View processes interactively | `top` |
| Schedule one-time job | `echo "cmd" \| at now + N minutes` |
| Edit crontab | `crontab -e` |
| List crontab | `crontab -l` |

## Storage
| Task | Command |
|------|---------|
| List block devices | `lsblk` |
| List partitions | `sudo fdisk -l` |
| Create partition | `sudo fdisk /dev/sdX` |
| Create XFS filesystem | `sudo mkfs.xfs /dev/sdX1` |
| Create ext4 filesystem | `sudo mkfs.ext4 /dev/sdX1` |
| Mount filesystem | `sudo mount /dev/sdX1 /mnt` |
| Unmount filesystem | `sudo umount /mnt` |
| Show disk usage | `df -h` |
| Show filesystem UUID | `sudo blkid` |
| Edit fstab | `sudo nano /etc/fstab` |
| Test fstab | `sudo mount -a` |
| Create swap file | `sudo dd if=/dev/zero of=/swapfile bs=1M count=N` |
| Format swap | `sudo mkswap /swapfile` |
| Enable swap | `sudo swapon /swapfile` |
| Show swap | `sudo swapon --show` |
| Show memory | `free -h` |

## LVM
| Task | Command |
|------|---------|
| Initialize PV | `sudo pvcreate /dev/sdX1` |
| Create VG | `sudo vgcreate vgname /dev/sdX1` |
| Create LV | `sudo lvcreate -L 5G -n lvname vgname` |
| Extend LV | `sudo lvextend -L +2G /dev/vgname/lvname` |
| Grow XFS | `sudo xfs_growfs /mountpoint` |
| Remove LV | `sudo lvremove /dev/vgname/lvname` |
| Create snapshot | `sudo lvcreate -L 1G -s -n snapname /dev/vgname/lvname` |
| List PVs | `sudo pvs` |
| List VGs | `sudo vgs` |
| List LVs | `sudo lvs` |

## DNF & RPM
| Task | Command |
|------|---------|
| Search package | `dnf search name` |
| Package info | `dnf info name` |
| Install package | `sudo dnf install -y name` |
| Remove package | `sudo dnf remove -y name` |
| Update all | `sudo dnf update -y` |
| List installed | `dnf list installed` |
| List repos | `dnf repolist` |
| Which package owns file | `rpm -qf /path/to/file` |
| List package files | `rpm -ql package` |
| Query package | `rpm -qi package` |
| List modules | `dnf module list` |
| Install module | `sudo dnf module install -y name:stream` |
| Clean cache | `sudo dnf clean all` |

## Users & Groups
| Task | Command |
|------|---------|
| Create user | `sudo useradd -m -G wheel username` |
| Set password | `sudo passwd username` |
| Modify user | `sudo usermod -aG group username` |
| Delete user | `sudo userdel -r username` |
| Create group | `sudo groupadd groupname` |
| Delete group | `sudo groupdel groupname` |
| Show user info | `id username` |
| Show current user | `whoami` |
| Edit sudoers | `sudo visudo` |
| Set ACL | `sudo setfacl -m u:user:rwx path` |
| Get ACL | `sudo getfacl path` |
| Password aging | `sudo chage -l username` |
| Change password aging | `sudo chage -M days username` |

## Security & SELinux
| Task | Command |
|------|---------|
| Check SELinux mode | `getenforce` |
| Set SELinux (temporary) | `sudo setenforce 0\|1` |
| SELinux status | `sestatus` |
| List booleans | `getsebool -a` |
| Set boolean (permanent) | `sudo setsebool -P bool on` |
| Show file context | `ls -Z path` |
| Change context (temp) | `sudo chcon -t type path` |
| Restore context | `sudo restorecon -v path` |
| Set persistent context | `sudo semanage fcontext -a -t type "path(/.*)?"` |
| List SELinux ports | `sudo semanage port -l` |
| Add SELinux port | `sudo semanage port -a -t http_port_t -p tcp 8080` |
| Check firewalld | `sudo firewall-cmd --state` |
| List all firewalld | `sudo firewall-cmd --list-all` |
| Add service (permanent) | `sudo firewall-cmd --add-service=http --permanent` |
| Add port (permanent) | `sudo firewall-cmd --add-port=8080/tcp --permanent` |
| Reload firewalld | `sudo firewall-cmd --reload` |
| Check SELinux denials | `sudo ausearch -m avc -ts recent` |

## Ansible
| Task | Command |
|------|---------|
| Check Ansible version | `ansible --version` |
| Ping hosts | `ansible all -i inventory -m ping` |
| Run ad-hoc command | `ansible all -i inventory -a "uptime"` |
| Install package | `ansible all -i inventory -m ansible.builtin.package -a "name=httpd state=present" --become` |
| Run playbook | `ansible-playbook -i inventory playbook.yml` |
| Run with vault | `ansible-playbook -i inventory playbook.yml --ask-vault-pass` |
| Syntax check | `ansible-playbook -i inventory playbook.yml --syntax-check` |
| Check mode (dry run) | `ansible-playbook -i inventory playbook.yml --check` |
| Diff mode | `ansible-playbook -i inventory playbook.yml --diff` |
| Verbose output | `ansible-playbook -i inventory playbook.yml -vvv` |
| Initialize role | `ansible-galaxy role init role_name` |
| Install Galaxy role | `ansible-galaxy install username.role_name` |
| Create vault file | `ansible-vault create file.yml` |
| Edit vault file | `ansible-vault edit file.yml` |
| View vault file | `ansible-vault view file.yml` |
| Show all facts | `ansible all -i inventory -m setup` |

## Key Files
| File | Purpose |
|------|---------|
| `/etc/passwd` | User account information |
| `/etc/shadow` | Encrypted password hashes |
| `/etc/group` | Group definitions |
| `/etc/sudoers` | Sudo configuration (edit with visudo) |
| `/etc/fstab` | Filesystem mount table |
| `/etc/ssh/sshd_config` | SSH daemon configuration |
| `/etc/yum.repos.d/*.repo` | DNF repository definitions |
| `/etc/hostname` | System hostname |
| `/etc/resolv.conf` | DNS resolver configuration |
| `/etc/chrony.conf` | NTP configuration |
| `/var/log/audit/audit.log` | SELinux audit log |
| `/etc/sysconfig/network-scripts/` | Network config (older RHEL) |
| `/etc/ansible/hosts` | Default Ansible inventory |
