# Favcode54     Timetable Application

This is the official Favcode54 Ionic app, using a variety of Ionic Framework components and native features.

## Table of Contents
 - [Getting Started](#getting-started)
 - [Contributing](#contributing)
 - [Use Cases](#use-cases)
 - [App Preview](#app-preview)
 - [File Structure of App](#file-structure-of-app)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/codewithfavour/favcode54-timetable.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: You may need to add “sudo” in front of any global commands to install the utilities._


## Use Cases

* Action Sheet - [ [template](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/speaker-list/speaker-list.html) | [code](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/speaker-list/speaker-list.ts) ]
* Alert - [ [code](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/schedule/schedule.ts) ]
* Cards - [ [template](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/speaker-list/speaker-list.html) ]
* Datetime - [ [template](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/about/about.html) ]
* Items (Sliding) - [ [template](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/schedule/schedule.html) | [code](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/schedule/schedule.ts) ]
* Menu - [ [template](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/app/app.template.html) |
[code](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/app/app.component.ts) ]
* Modal - [ [template](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/schedule-filter/schedule-filter.html) | [code](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/schedule/schedule.ts) ]
* Searchbar - [ [template](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/schedule/schedule.html) | [code](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/schedule/schedule.ts) ]
* Segment - [ [template](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/schedule/schedule.html) | [code](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/schedule/schedule.ts) ]
* Slides - [ [template](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/tutorial/tutorial.html) |
* Sticky headers - [ [template](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/schedule/schedule.html) ]
* Tabs - [ [template](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/tabs-page/tabs-page.html) | [code](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/tabs-page/tabs-page.ts) ]
* Toggle - [ [template](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/schedule-filter/schedule-filter.html) ]
[code](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/tutorial/tutorial.ts) ]
* Using Angular HTTP for JSON - [ [code](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/providers/timetable-data.ts) | [usage](https://github.com/codewithfavour/favcode54-timetable/blob/master/src/pages/schedule/schedule.ts) ]

Check out [(https://ionicframework.com) for more]

## Deploying

* PWA - Un-comment [this] if commented.(https://github.com/codewithfavour/favcode54-timetable/master/src/index.html#L21), run `npm run ionic:build --prod` and then push the `www` folder to your favorite hosting service
* Android - Run `ionic cordova run android --prod`
  - If you are deploying to Android 4.4 or below I recommend adding crosswalk: `cordova plugin add cordova-plugin-crosswalk-webview`
* iOS - Run `ionic cordova run ios --prod`

## File Structure of App

```
ionic-conference-app/
├-- .github/                            * GitHub files
│   ├── CONTRIBUTING.md                 * Documentation on contributing to this repo
│   └── ISSUE_TEMPLATE.md               * Template used to populate issues in this repo
|
|-- resources/
|
|-- src/
|    |-- app/
|    |    ├── app.component.ts
|    |    └── app.module.ts
|    |    └── app.template.html
|    |    └── main.ts
|    |
|    |-- assets/
|    |    ├── data/
|    |    |    └── data.json             * Contains all of our json data for classes and the rest
|    |    |
|    |    ├── fonts/
|    |    |     ├── ionicons.eot
|    |    |     └── ionicons.svg
|    |    |     └── ionicons.ttf
|    |    |     └── ionicons.woff
|    |    |     └── ionicons.woff2 + more
|    |    |
|    |    ├── img/
|    |
|    |-- pages/                          * Contains all of our pages
│    │    ├── about/                     * About tab page
│    │    │    ├── about.html            * AboutPage template
│    │    │    └── about.ts              * AboutPage code
│    │    │    └── about.scss            * AboutPage stylesheet
│    │    │
|    │    ├── about-popover/             * About pop-over page
│    │    │    └── about-popover.ts      * About-PopoverPage code
│    │    │
│    │    │── schedule/                  * Schedule tab page
│    │    │    ├── schedule.html         * SchedulePage template
│    │    │    └── schedule.ts           * SchedulePage code
│    │    │    └── schedule.scss         * SchedulePage stylesheet
│    │    │
│    │    │── schedule-filter/            * Schedule Filter page
│    │    │    ├── schedule-filter.html   * ScheduleFilterPage template
│    │    │    └── schedule-filter.ts     * ScheduleFilterPage code
│    │    │    └── schedule-filter.scss   * ScheduleFilterPage stylesheet
│    │    │
│    │    │── session-detail/            * Session Detail page
│    │    │    ├── session-detail.html   * SessionDetailPage template
│    │    │    └── session-detail.ts     * SessionDetailPage code
│    │    │
│    │    │── speaker-detail/            * Speaker Detail page (Clasess)
│    │    │    ├── speaker-detail.html   * SpeakerDetailPage template
│    │    │    └── speaker-detail.ts     * SpeakerDetailPage code
│    │    │    └── speaker-detail.scss   * SpeakerDetailPage stylesheet
│    │    │
│    │    │── speaker-list/              * Speakers tab page (Classes)
│    │    │    ├── speaker-list.html     * SpeakerListPage template
│    │    │    └── speaker-list.ts       * SpeakerListPage code
│    │    │    └── speaker-list.scss     * SpeakerListPage stylesheet
│    │    │
│    │    │── tabs-page/                 * Tabs page
│    │    │    ├── tabs-page.html        * TabsPage template
│    │    │    └── tabs-page.ts          * TabsPage code
│    │    │    └── tabs-page.scss        * TabsPage code
│    │    │
│    │    └── tutorial/                  * Tutorial Intro page
│    │         ├── tutorial.html         * TutorialPage template
│    │         └── tutorial.ts           * TutorialPage code
│    │         └── tutorial.scss         * TutorialPage stylesheet
|    |
│    ├── providers/                      * Contains all Injectables
│    │     ├── timetable-data.ts         * TimetableData code
│    │     └── user-data.ts              * UserData code
|    |
│    ├── theme/                          * App theme files
|    |     ├── variables.scss            * App Shared Sass Variables
|    |
|    |-- index.html
|
|-- www/
|    ├── assets/
|    |    ├── data.json
|    |    | 
|    |    |
|    |    ├── fonts/
|    |    |     ├── ionicons.eot
|    |    |     └── ionicons.svg
|    |    |     └── ionicons.ttf
|    |    |     └── ionicons.woff
|    |    |     └── ionicons.woff2 + more
|    |    |
|    |    ├── img/
|    |
|    └── build/
|    └── index.html
|    └── manifest.json
|    └── service-worker.json
|
├── .editorconfig                       * Defines coding styles between editors
├── .gitignore                          * Example git ignore file
├── LICENSE                             * Apache License
├── README.md                           * This file
├── config.xml                          * Cordova configuration file
├── ionic.config.json                   * Ionic configuration file
├── package.json                        * Defines our JavaScript dependencies
├── tsconfig.json                       * Defines the root files and the compiler options
├── tslint.json                         * Defines the rules for the TypeScript linter
```
## Uploading to Web
When uploading to the web collect all files under the /www folder it is the code for web, edit its data.json file too.