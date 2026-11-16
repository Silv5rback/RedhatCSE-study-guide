# asciinema terminal recordings

# Available recordings:
#   - rhcsa-essentials.cast  → Module 1 Essentials (Vim, tar, grep, archives)
#   - rhcsa-selinux.cast     → Module 7 Security & SELinux (contexts, modes)

# To record new sessions on your WSL2/EC2 Linux VM:
#   1. Install asciinema:
#      sudo dnf install -y asciinema
#   2. Record a session:
#      asciinema rec static/cast/<name>.cast
#   3. Run your demo commands, then type `exit` or press Ctrl-D to stop
#   4. Copy the .cast file to Windows:
#      wsl -- cp /tmp/<name>.cast /mnt/c/Users/SliveredSerf/Projects/RedhatCSE/static/cast/
#   5. Embed in MDX:
#      <asciinema-player src="/RedhatCSE-study-guide/static/cast/<name>.cast" rows="20" cols="80" />

# The asciinema-player client module is loaded from CDN via src/clientModules/asciinema.js
