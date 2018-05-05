# SQAT06 - test
++ My first assignment for SQAT 006 Software Quality Assurance and Testing. Testing of the web application for the registration page of "figure 1"  using open source tools such as Selenium Standalone, Web Driver, Cmkkwucumber Framework, Chai Framework, GitHub, Node JS, and Windows OS. This is completed by Nandani Ramnaraine-Singh, student number 300930639 ++


1. The purpose of this test is to test the web application: "Figure 1" using the URL listed below
   https://app.figure1.com/account/register

2. TEST TOOLS
The following testing tools needs to be downloaded onto your local computer

        1)      GIT: " https://git-scm.com/downloads" for windows version (64 bits)

        Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
      
        Once you have successfully downloaded GIT. you can check the version of your GIT by using the command line prompt " git --version ". This can be used to confirmed you have successfully down loaded the correct GIT. 
      
        C:\Users\Vanan>git --version
        git version 2.16.2.windows.1

        2)  GitHub: "www.github.com"

        Git Hub is a web-based hosting service for version control using git. It is mostly used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project

        3)  Visual Studio Code "https://code.visual studio.com/"
        ownload Visual studio code according to the system 64 bit

        Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS.  It includes support for debugging, embedded Git Control, rich development experiences such as intelligent code completion (also known as IntelliSense), and other features.

        4)  NODE.JS: "https://nodejs.org/en/download/releases//"
        Select the below for download
        ode.js 7.8.0		2017-03-29	5.5.372.43	4.2.0	51	Downloads Changelog Docs

        Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser. Node.js lets developers use JavaScript for server-side scripting—running scripts server-side to  produce dynamic web page content before the page is sent to the user's web browser. 

        5.  Selenium Standalone:" https://www.npmjs.com/package/selenium-standalone "

        Is a server that runs selenium test cases in a remote machine. It uses this server to established aa communication channel between browser and the code to start the web browser like chrome, internet explorer, \fire Fox driver for the tests.

        6.  NPM: is a package manager for Node javascript platforms

        7.  JAVA: " https://java.com/en/download/ "

        Is a platform which refers to a group of software products from Sun Microsystems. The platform is used to develop and run Java programs. The platform includes the execution engine (called a Java Virtual Machine) that allows Java programs to do the same thing on different computer systems.

4. Testing procedures
        1) First, you need to start Selenium-standalone server by using the command line within the root user level

        a)Using the Selenium documentation that can be found at the following URL https://www.npmjs.com/package/selenium-standalone
        b) Using the command line to install and start selenium-standalone, by entering the below commands:
           
        "npm install selenium-standalone@-g" (Do not use the @latest since we have selected a specific version we will use)
        
        selenium-standalone install
       
        selenium-standalone start

        2) Using the following URL  https://github.com/join?source=login  and register a git account

        3) log into github and search for SQAT06  project.
           Using instructor`s name "IzzatBamieh" to locate the SQAT06 project. Clone the SQAT06 project code and its web link. This remote URL will be used

        4) Clone the SQAT06 project code to your local computer using the command line 

           git clone https://github.com/IzzatBamieh/SQAT06.git

           Click on 'Fork' button in the github web browser gui of the 'IzzatBamieh/SQAT06' It creates an exact copy of 'IzzatBamieh/SQAT06' onto my 'sqattarasingh/SQAT06' repository

           Now use the command line
           dir - This will check the SQAT06 environment is cloned successfully

        5) Using the command line 
           cd SQAT06 and hit enter (This will take you to the SQAT06 folder)
           Now using the "dir" keyword this will heck the folder details

        6) Now install npm by using the command line - If this the first time then use

           "npm install"

        7) Open a Visual Studio Code session to open the SQAT06 file. By selecting "open folder"

        8) Now select the web_basic.js tab. Edit a line of code and save same 

        9) You will now run the JavaScript by using the command line 

          node web_basic.js. This will run the test case

        10) Once the first line of JavaScript code is successfully ran, you will edit the next line of code and run again.\

        NOTE: Step 9 - step 10 should be repeated until all the codesare completely ran in the test cases


++ The README.md file is an introduction of what was thought to me in our class SQAT06 class my our Teacher Mr. Izzy ++

5. Pushing of the codes to your GitHub project repository

  1) Using GitHub locate your project SQAT06
     Fork a copy of the "IzzatBamieh/SQAT06" to your account

  2) Clone your account project SQAT06 URL link where you store your code

  3) Using the command line type "Git remote add" (to remotely add the origin master account)

     git remote add Tara https://github.com/sqattarasingh/SQAT06.git

     Using the command line 

     "git remote -v"

C:\Users\Vanan\SQAT06>git remote -v
origin  https://github.com/IzzatBamieh/SQAT06.git (fetch)
origin  https://github.com/IzzatBamieh/SQAT06.git (push)
tara    https://github.com/sqattarasingh/SQAT06.git (fetch)
tara    https://github.com/sqattarasingh/SQAT06.git (push)

     This will confirm whether your account was added successfully

   4) Now using command line type " git add -p" (This will add or modify any contents in the working tree interactively to the       index)

5. In the command line enter "git commit -m "message". (This will push any commits made on your local environment to the          remote repository)

6.  'git push tara master'

7. Now using GitHub account in your project repository after you have pushed successfully
      Check Code/commits,to verify the new pushed commits are listed








