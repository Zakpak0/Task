# Taskcli research for development flow

## Node global commands and responses

https://nodejs.org/api/child_process.html

### Anatomy of child process

Spawn child processes

|-----1----| |-2-||--------------------3--------------------| |----4----|  
childprocess.exec("chrome --headless https://www.github.com/", (callback) => {

    |----------5---------=|

})

1 The child proccess module, must be required/imported

2 The method on child proccess to executes
*exec : a command that can be executed from the commandlind
*execFile : a file that can be executed
*fork : a module that can be executed
*spawn : to be determined

3 the command to execute

4 a funtion that determines when the command has completed it's execution

5 how to continue after the command has been executed

## Terminate proccess and ? Save work ?

### Running commands from anywhere on the system

set Path=C:\Program Files\Google\Chrome\Application;%Path%

### Running commands that fire events to start applications through the terminal

## Relevent applications for proof of concept and their terminal refrences

## Add these Executables to path variable

### GoogleChrome

## Commands to be executed

##### Take a screen shot for page previews

chrome --headless --disable-gpu --screenshot="PATH_TO_STORE_SCREEN_SHOT" https://www.WEBSITE_TO_SCREEN_SHOT.com/

##### Open specified page

chrome https://www.WEBSITE_TO_OPEN.com/

#### Headless Requests

https://source.chromium.org/chromium/chromium/src/+/main:headless/app/headless_shell_switches.cc
https://developers.google.com/web/updates/2017/04/headless-chrome#node
https://www.google.com/chrome/canary/

#### Puppeteer

https://developers.google.com/web/tools/puppeteer

Puppeteer is a Node library developed by the Chrome team. It provides a high-level API to control headless (or full) Chrome. It's similar to other automated testing libraries like Phantom and NightmareJS, but it only works with the latest versions of Chrome.

Among other things, Puppeteer can be used to easily take screenshots, create PDFs, navigate pages, and fetch information about those pages. I recommend the library if you want to quickly automate browser testing. It hides away the complexities of the DevTools protocol and takes care of redundant tasks like launching a debug instance of Chrome.

### VScode

## Commands to be executed

##### Open specified repo

code -g "PATH_TO_REPO"

### Github Desktop

### Gitbash

### Andriod Studio && Andriod Phone

### Tidal

## Reading and Writing command criteria in a JSON file

### Localizing the files paths

### Editing the file paths and criteria
