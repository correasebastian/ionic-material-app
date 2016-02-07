## Synopsis

Mobile application (hybrid) built using web technologies such as Ionic framework, AngularJS and cordova/crosswalk. It has been 
developed primarily targeting Android platform and can be easily ported to iOS platform.

* Ionic, v1.0.0-beta.14
* Ionicons, v1.5.2
* ng-material, v0.7.0-rc2-master-1981ac9
* Font Awesome 4.2.0
* ng-fx, VERSION: 1.11.8
* tab-slide-box 

## Code Example

`itemCards` scope array can be updated to insert more slides to the slidebox. 


## Motivation

This project has been a sincere attempt to bring material-design features to hybrid mobile application world using `ng-material`
library. The current idea behind this repo is to make a template out of this project that could be reused for new projects.


## Installation

* Tools - Ionic CLI, [Intel XDK](https://software.intel.com/en-us/intel-xdk)
* Pre-requisites: node.js, Ionic, cordova, Android SDK

The published version of android application has been built on crosswalk (reason for increase in size of .apk) but the application 
build should work fine with cordova for Android 5.0+ release.

[playstore download](https://play.google.com/store/apps/details?id=com.naveenkarippai.animals&hl=en)

### How to run on local browser

navigate to cloned project root directory, then:

`$ ionic serve`

### How to build android application on local machine

navigate to cloned project root directory, then:

```
$ ionic platform add android
$ ionic build android
```
### Porting to iOS platform

Pre-requisites: Mac OS, node.js, Xcode

```
$ npm install -g ionic cordova ios-sim
$ ionic start myApp blank
```
Then, replace www/ directory on downloaded Ionic starter template project with Intel XDK `www/` directory from existing project. 
The [ng-cordova](http://ngcordova.com/) project official page provide cordova plugin installation links.

```
$ ionic platform add ios
$ ionic emulate ios
```
It should open ios-simulator with application running on your machine.

## Tests

Need help to write tests.

## Contributors

Naveen Karippai (author)

## License

The MIT License (MIT)

Copyright (c) 2016 Naveen Karippai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


