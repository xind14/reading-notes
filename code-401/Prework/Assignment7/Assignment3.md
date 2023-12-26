# Create and manage projects in Python

In this module, you'll learn to:

1. **Create a Python project.**
2. **Develop and run your code in isolation on a machine.**
3. **Use libraries that someone else has written.**
4. **Restore a project from a list of dependencies.**

## Work with packages

Most programs that you write will rely on code written by others. This code often comes in the form of packages, which are external modules or libraries that you include in your project. As with any project that requires a set of resources, it's important to consider how you'll ensure that the right resources are available for your program.

A good start is learning how to manage your program. A way to do that is to think of the program as a project. Python approaches this by using something called virtual environments.

### What's a virtual environment?

You have a development machine. On that machine, you might have one version of Python installed or one version of a library that you meant to use. What happens when you move your program to a machine that has a different version of Python installed or different versions of the libraries that you depend on?

One thing you don't want to do is assume that your program will work and that you can just install the latest version of whatever libraries you depend on. If you do that, you might end up destroying the ability of the other programs to function on the target machine. The solution is to find a way for your app to work in isolation.

Python's solution for these problems is a virtual environment. A virtual environment is a self-contained copy of everything needed to run your program. This includes the Python interpreter and any libraries your program needs. By using a virtual environment, you can ensure your program will have access to the correct versions and resources to run correctly.

#### The basic workflow looks like this:

1. **Create a virtual environment that won't affect the rest of the machine.**
   - Go to the directory where you want to keep your project.
   - Use the following command to call the venv module.

     ```bash
     python3 -m venv env
     ```

   - At this point, some directories are created for you.

     On Windows:

     ```
     /env
       /include
       /lib
       /Scripts
     ```

     On Linux and macOS:
     ```
     /env
       /bin
       /include
       /lib
     ```

   - Your environment needs the env directory to keep track of details like which version of Python and which libraries you're using. Don't put your program files in the env directory. We suggest that you put your files in a directory called src or something similar. The project structure might then look like this:
     ```
     /env
     /src
       program.py
     ```

2. **Activate the virtual environment**
   - At this point, you have a virtual environment, but you haven't started using it. To use it, you need to activate it by calling an activate script.

     On Windows:
     ```bash
     C:\ .. \env\Scripts\activate
     ```

     On Linux and macOS:
     ```bash
     source env/bin/activate
     ```

   - Calling activate changes your prompt. It's now preceded with (env) and looks something like this example:
     ```
     (env) -> path/to/project
     ```

   - At this point, you're inside your virtual environment. Anything you do happens in isolation.

3. **What's a package?**

   One of the main advantages of using external libraries is to speed up the development time of your program. You can fetch such a library on the internet. But by fetching and installing these libraries through a virtual environment, you ensure that you install these libraries only for the virtual environment and not globally for the entire machine.

4. **Install a package**
   - You install a package by using pip. The pip command uses the Python Package Index, or PyPi for short, to know where to get the packages. You can visit the PyPi website to see what packages are available.

   - To install a package, run pip install from the env directory, like in this example:
     ```bash
     pip install python-dateutil
     ```

   - If you run the preceding command, you'll download and install dateutil, a package for parsing the .yml file format. After you install the package, you can see it listed if you expand the lib directory under env, like this:
     ```
     /env
       /lib
         /dateutil
     ```

   - To see what packages are now installed in your virtual environment, you can run pip freeze. This command produces a list of installed packages in the terminal:
     ```bash
     python-dateutil==2.8.2
     six==1.16.0
     ```

   - **Note:** The reason that the preceding list contains more than just pipdate is that pipdate itself relies on other libraries that are also fetched.

   - To ensure that these packages exist only in your virtual environment, try stepping out of that environment by calling deactivate:
     ```bash
     deactivate
     ```

   - Notice how the terminal prompt changes. It's no longer preceded by (env) and has reverted to this appearance:
     ```
     path/to/project
     ```

   - If you run pip freeze, you'll see a much longer list of dependencies. This list indicates that you see all the packages installed on your machine rather than just what's installed in your virtual environment.

5. **More ways to install a package**
   - You can also use the following commands to install a package:

     - Have a set of files on your machine and install from that source:
       ```bash
       cd <to where the package is on your machine>
       python3 -m pip install .
       ```

     - Install from a GitHub repository that provides version control:
       ```bash
       git+https://github.com/your-repo.git
       ```

     - Install from a compressed archive file:
       ```bash
       python3 -m pip install package.tar.gz
       ```

6. **Use an installed package**
   - You now have a package installed. How do you use it in code?

   - Ensure that you have a directory for your files. We suggest that you call the directory src and add an entry-point Python file called app.py. Now add some code to call dateutil:

     **Python:**
     ```python
     from datetime import *
     from dateutil.relativedelta import *

     now = datetime.now()
     print(now)

     now = now + relativedelta(months=1, weeks=1, hour=10)
     print(now)
     ```

   - Run the app:
     ```bash
     python app.py
     ```

   - The output should look something like this:
     ```
     2023-01-30 17:04:24.799976
     2023-03-07 10:04:24.799976
     ```

### Exercise - Create a package


1. **Create a virtual environment by using venv.**

    Open a new console window and run the following command:
    ```bash
    python3 -m venv env
    ```
    You now have an env directory created in your terminal.

    To activate the virtual environment, run the following
    ```bash
    source env/bin/activate
    ```

    You now see (env) in your terminal. That means you've activated your virtual environment and isolated yourself from the rest of your machine.

2. **Install a library**

    Now that you're inside your virtual environment, you can install a library and know that the library will exist only in the virtual environment.

    Run `pip freeze` to see installed libraries in your environment:
    ```bash
    pip freeze
    ```
    You should get no response. Next, let's see how the output of `pip freeze` changes when you add a library (a package).

    Run `pip install` to install a library:
    ```bash
    pip install python-dateutil
    ```
    A large output of text says it's installing your library, and it should end with the following sentence:
    ```
    Successfully installed python-dateutil-2.8.2 six-1.16.0
    ```
    Rerun `pip freeze` to see how your list of libraries has changed:
    ```bash
    pip freeze
    ```
    Now you should see the following list:
    ```
    python-dateutil==2.8.2
    six==1.16.0
    ```

3. **Deactivate a virtual environment**

    So far, you've created a virtual environment and added a package to it. However, you might be working on several Python projects and need to change between them. To do that, you need to step out of (deactivate) your virtual environment.

    Run the `deactivate` command:
    ```bash
    deactivate
    ```
    Note how your terminal prompt changes from (env) to how it looked before.






## Work with project files

At this point, you know about virtual environments and how to install a package. Now it's time to start thinking about how to distribute this project to others for collaboration, and how you can manage your dependencies over time. You're likely to want to remove a dependency that's no longer used, for example.

### Freeze: Create a project file

You've seen how to use the command `pip freeze` to list the packages that are installed in your virtual environment. This command has more than one use, though.

Imagine that you want to collaborate on a project with other developers. A good way to collaborate is to, for example, use GitHub. You don't want to check in all the files you have, but only the application code and a list of packages that you depend on for the program to function. Why check in only a list of packages and not the packages themselves? A list takes a lot less space than checking in the packages.

> **Note:** Thanks to pip, all you need is a list.

#### Share a project

To share your project on GitHub so that others can work on it, you would take the following steps:

1. Call `pip freeze > requirements.txt`. This command creates a `requirements.txt` file with all the packages that the program needs.
2. Create a `.gitignore` file, and check in your application code and `requirements.txt`.
3. Check in the code to GitHub.

#### Consume a project

To consume a project as a contributor (a fellow developer), you would take the following steps:

1. Fetch the project from GitHub.
2. Create a virtual environment and place yourself in it.
3. Restore the project by using `pip install -r requirements.txt`. It will look for `requirements.txt` and fetch and install the packages listed for that file.
4. Run your app.

### Manage dependencies

Packages come in different versions. Every time a package is fixed for bugs or has more features added to it, its version number usually changes. For the sake of your program, you might need a specific version of a package. You want to keep your project updated so it uses the latest version of a package.

Here are the main reasons why upgrading your packages is a good idea:

- **Bug fixes:** The library that you use might have problems. For example, a feature doesn't work as intended and the author goes in to fix it. You most likely want to upgrade the package as soon as such a fix is in place.
- **Security issues:** Your package might have a security vulnerability. After such a fix is released, you want to upgrade the package to protect your company and your customers.
- **Additional features:** The release of more features is nice, though it isn't a strong reason to upgrade the package. Still, if there's a feature that you've been waiting for, you might want to upgrade for that reason.

You can use either of the following approaches to make sure that your packages stay up to date.

#### Install the latest version

You can check for the latest available version of a package and install that as soon as it's available.

> **Important:** Check that any new version is compatible with other dependencies that you might be using.

To install a specific version, use `==` between the package name and the version number. Here's an example command:

```bash
pip install python-dateutil==1.4
```

The preceding command would install version 1.4, if it's available.

There are many ways to find out what versions are available. One way is to specify a version that you know doesn't exist. The resulting error will tell you what version does exist. Here's an example command that uses the nonsense string `randomwords`:

```bash
pip install python-dateutil==randomwords
```

Here's the resulting output, with a list of existing versions:

```
ERROR: Could not find a version that satisfies the requirement python-dateutil==randomwords (from versions: 1.4, 1.4.1, 1.5, 2.1, 2.2, 2.3, 2.4.0, 2.4.1, 2.4.1.post1, 2.4.2, 2.5.0, 2.5.1, 2.5.2, 2.5.3, 2.6.0, 2.6.1, 2.7.0, 2.7.1, 2.7.2, 2.7.3, 2.7.4, 2.7.5, 2.8.0, 2.8.1, 2.8.2)
ERROR: No matching distribution found for python-dateutil==randomwords
```

Another way is to call `pip freeze`:

```bash
pip freeze python-dateutil
```

The output shows what specific versions it already installed for us, when we gave it only the package name as an argument:

```
python-dateutil==2.8.2
six==1.16.0
```

The preceding example shows that version 2.8.2 is installed. If you want to change that to an earlier version (because another package that you have requires it), you can use a command like this example: `pip install python-dateutil==2.8.0`.

#### Upgrade a package

Packages change over time, as previously stated. You can upgrade to the latest package without specifying what the exact version number is. Use this command:

```bash
pip install <name of package> --upgrade
```

#### Apply an update strategy

Packages use something called semantic versioning. This means that if you look at a number like version "1.2.3," you can break down that number:

- **Major:** 1
- **Minor:** 2
- **Patch:** 3

The leftmost number is called Major. If this number increases, many things have changed, and you can no longer assume that methods are named the same or have the same number of arguments as before.

The middle number is called Minor. If it changes, a feature has been added.

The rightmost number is called Patch. If this number increases, it most likely means that a bug has been corrected.

Why does all this matter for upgrading your package? It has to do with how careful you need to be. Sometimes, you're in a situation where you can't (or aren't allowed to) change the major and minor values, but you welcome bug fixes. You can specify this as part of the upgrade command:

```bash
pip install "python-dateutil==2.7.*" --upgrade
```

In the preceding example, you specify that you want to upgrade only if there are new patch versions that use the "2.7.*" pattern. That means if you're on version 2.7.1, you're OK to upgrade to 2.7.2 (for example), because the rightmost number is about the patch version. However, you're not OK with upgrading the minor version--for example, from 2.7 to 2.8.

#### Clean up unused packages

Sometimes, you might realize that you no longer need a certain Python package and you want to remove it. For such a case, you can use `pip

 uninstall`:

```bash
pip uninstall python-dateutil
```

However, if you run `pip freeze`, you see how the preceding command removed only the `python-dateutil` library.

```
six==1.16.0
```

This can be problematic because your project now might contain many unused libraries that take up space. To clear out everything that this package depended on, you can write all installed packages to a `requirements.txt` list, like this:

```bash
pip freeze > requirements.txt
```

Then remove all the packages in that list, like this:

```bash
pip uninstall -r requirements.txt -y
```

> **Warning:** The preceding commands would remove all installed packages, by first writing them to a `requirements.txt` list and then removing all packages in that list.




### Exercise - Create and manage a project file

#### Create a virtual environment

Before you start, create a virtual environment and place yourself in it. By doing so, you isolate yourself from the rest of your machine. Your environment should be isolated so you don't affect the rest of the machine when you install libraries.

Run `venv env`, to create a virtual environment called env:

```bash
python -m venv env
```

You should now see a new env subdirectory.

To activate the virtual environment, run the following command on Windows:

```bash
C:\ .. \env\Scripts\activate
```

Or, this command on Linux, WSL, or macOS:

```bash
source env/bin/activate
```

Your command prompt should start with `(env)` to indicate the name of the virtual environment.

#### Install dependencies for a project

You have access to some source code and a requirements.txt file. The .txt file contains libraries that you want to download. You need to download these libraries so your program will function as intended.

Create the `src` directory and the needed files from the terminal.

Run the following commands on Windows, one line at a time:

```bash
md src
cd src
type nul > app.py
type nul > requirements.txt
```

Or, these commands on Linux, WSL, or macOS, one line at a time:

```bash
mkdir src
cd src
touch app.py
touch requirements.txt
```

These are your files:

```
src/
  app.py
  requirements.txt
```

Add the following content to `app.py`:

```python
from datetime import *
from dateutil.relativedelta import *
now = datetime.now()
print(now)

now = now + relativedelta(months=1, weeks=1, hour=10)

print(now)
```

Add the following content to `requirements.txt`:

```
python-dateutil==2.8.2
six==1.16.0
```

Run `pip install` to install libraries specified in `requirements.txt`:

```bash
pip install -r requirements.txt
```

You'll see output similar to the following text:

```
Collecting python-dateutil==2.8.2
  Using cached python_dateutil-2.8.2-py2.py3-none-any.whl (247 kB)
Collecting six==1.16.0
  Using cached six-1.16.0-py2.py3-none-any.whl (11 kB)
Installing collected packages: six, python-dateutil
Successfully installed python-dateutil-2.8.2 six-1.16.0
```

Congratulations! You've successfully restored a project that had nothing but application files and a `requirements.txt` file in it.

#### Upgrade a package

Imagine that the project you created is using an older version of the library `python-dateutil`. Also, your team has asked you to install only fixes. In other words, the team wants you to upgrade the patch version and not install a major update, because that might be risky for your application and potentially break it.

Let's first simulate being on an earlier version of `python-dateutil`.

Run `pip install`:

```bash
pip install python-dateutil==2.7.4
```

Other versions will be uninstalled before the specified version is installed:

```
Installing collected packages: python-dateutil
  Attempting uninstall: python-dateutil
    Found existing installation: python-dateutil 2.8.2
    Uninstalling python-dateutil-2.8.2:
      Successfully uninstalled python-dateutil-2.8.2
Successfully installed python-dateutil-2.7.4
```

Now, you should be on version 2.7.4. Next, you want to try to upgrade to the latest patch version.

Run `pip install --upgrade`:

```bash
pip install "python-dateutil==2.7.*" --upgrade
```

The last line of your output should say "Successfully installed python-dateutil-2.7.5." That means it upgraded the package by looking at the rightmost number.
