# asciinema terminal recordings
# Place .cast files here for terminal demos embedded in the guide.
#
# To record:
#   1. Install asciinema on your WSL2/EC2 Linux VM:
#      sudo dnf install -y asciinema  (or: pip install asciinema)
#   2. Record a session:
#      asciinema rec static/cast/rhcsa-essentials.cast
#   3. Run your demo commands, then type `exit` to stop recording
#   4. The .cast file is JSON — embed it in MDX with:
#      <asciinema-player src="/RedhatCSE-study-guide/static/cast/rhcsa-essentials.cast" rows="20" cols="80" />
#
# Recommended recordings:
#   - rhcsa-essentials.cast  → Module 1 (Vim, tar, grep)
#   - rhcsa-lvm.cast         → Module 4 (pvcreate, vgcreate, lvcreate)
#   - rhcsa-selinux.cast     → Module 7 (getenforce, setsebool, restorecon)
#   - rhce-ansible.cast      → Module 9 (ansible-playbook, roles)
