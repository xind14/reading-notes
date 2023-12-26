# BASH Practice

1. **The Command Line - What is it, how does it work and how do I get to one.**

   - The terminal has a command history that can be navigated using arrow keys.
   - Multiple terminals can be opened simultaneously for different tasks.

2. **Basic Navigation - An introduction to the Linux directory system and how to get around it.**

   - **pwd (Print Working Directory):** Command to display the current working directory.
   - **ls (List):** Command to list the contents of a directory.
   - Hierarchy: Root directory (/) -> Subdirectories -> Files.
   - Absolute paths: From the root directory (start with /).
   - Relative paths: In relation to the current directory (do not start with /).
   - `~` (tilde): Shortcut for the home directory.
   - `.` (dot): Reference to the current directory.
   - `..` (dotdot): Reference to the parent directory.
   - `cd`: Change directory.
   - Efficiently complete paths by pressing Tab.

3. **More About Files - Find out some interesting characteristics of files and directories in a Linux environment.**

   - Spaces in names are valid but need careful handling.
   - Use quotes or escape characters (\\) to handle spaces.
   - Files starting with `.` are considered hidden.
   - Use `ls -a` to list hidden files and directories.
   - Configuration files are commonly hidden.
   - Everything is a file under Linux. Even directories.

4. **Manual Pages - Learn how to make the most of the Linux commands you are learning.**

   - Manual pages explain every command on the system.
   - Invoked with the `man <command>` command.
   - Consistent structure with a command overview, synopsis, and description.
   - Use 'q' to exit the man pages.
   - Keyword search using `man -k <search term>`.
   - Within a manual page, use '/' to search for a term and 'n' for the next result.
   - Long hand options use two dashes (--) and short hand options use a single dash (-).
     - Example: `ls -a` is equivalent to `ls --all`.
     - Chain multiple short hand options together (e.g., `ls -alh`).

5. **File Manipulation - How to make, remove, rename, copy and move files and directories.**

    - Create a directory with `mkdir [options] <Directory>`.

      - `-p`: Make parent directories as needed.
      - `-v`: Display what `mkdir` is doing.

    - Remove a directory with `rmdir [options] <Directory>`.

      - Must be empty before removal.

    - Create a blank file with `touch [options] <filename>`.

    - Copy a file or directory with `cp [options] <source> <destination>`.
    - Use `-r` for recursive copying of directories.
    - Move a file or directory with `mv [options] <source> <destination>`.
    - Use `mv` to rename a file or directory.
    - Remove a file with `rm [options] <file>`.

      - Remove a directory and its contents with `rm -r`.

    - The command line does not have an undo feature; be cautious.

6. **Cheat Sheet - A quick reference for the main points covered in this tutorial.**

- Basic Navigation
  - `pwd`: Display current location in the system.
  - `ls [path]`: List contents of given path or current directory.
    - Common options: -l, -h, -a
  - `cd [path]`: Change to given path or home directory.

- Path
  - Description of file or directory location on the filesystem.
  - **Absolute Path**: Begins from the root (e.g., /etc/sysconfig).
  - **Relative Path**: Relative to the current location (e.g., Documents/music).
  - **~ (tilde)**: Represents the home directory (e.g., ~/Documents).
  - **. (dot)**: Refers to the current directory (e.g., ./bin).
  - **.. (dot dot)**: Refers to the parent directory (e.g., ../bin).
  - **TAB Completion**: Start typing, press TAB for autocompletion.

- More About Files
  - `file [path]`: Identify the type of a file or directory.
  - **Spaces in Names**: Use quotes (" ") or a backslash (\) for spaces.
  - **Hidden Files and Directories**: Names starting with a dot are hidden.

- Manual Pages
  - `man <command>`: View manual page for a command.
  - `man -k <search term>`: Search for man pages with the search term.
  - Press 'q' to exit man pages.

- File Manipulation
  - `mkdir <directory name>`: Create a directory.
  - `rmdir <directory name>`: Remove a directory (if empty).
  - `touch <file name>`: Create a blank file.
  - `cp <source> <destination>`: Copy source file to destination.
  - `mv <source> <destination>`: Move or rename files or directories.
  - `rm <path>`: Remove a file or directory.
    - Common options: -r, -f




- Process Management
  - **CTRL + C**: Cancel currently running process.
  - **kill <process id>**: Cancel a given process.
    - Include -9 option to force kill.
  - **ps**: List processes and their IDs.
    - Use `ps aux` to show all processes.
  - **CTRL + Z**: Pause and put the process in the background.
  - **jobs**: List current background processes.
  - **fg <job number>**: Move a process from background to foreground.

- Useful Commands
  - `du -sh ./*`: Find size of every directory in the current directory.
  - `df -h`: Display used and free disk space.
  - basename -s .jpg -a *.jpg | xargs -n1 -i cp {}.jpg {}_original.jpg
