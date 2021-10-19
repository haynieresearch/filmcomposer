# ERPNext Film Composer
Film Composer is an app designed to be used with [ERPNext](https://github.com/frappe/erpnext) to help manage the film composer business.  
It follows a general workflow for film composing:  
Production Information -> Spotting Notes -> Sketches -> Cue Sheet -> Master Recording Details.  

For larger productions, you can skip the Cue Sheet process. For smaller/independent projects that are not as familiar with what a Cue Sheet is or what to do with it, it makes it easier to generate one for them since you will have all the data handy.

## REQUIREMENTS
You will need to have a [ERPNext](https://github.com/frappe/erpnext) server installed for this to work. Generally speaking, this will be a Linux box with Python installed. If you follow the instructions, it will setup everything for you. You can choose to use a locally installed MySQL server, or an external source.

## SETUP
bench get-app filmcomposer https://github.com/haynieresearch/filmcomposer.git  
bench --site [site-name] install-app filmcomposer  
bench migrate && bench build && bench clear-cache  

## UPDATE
bench update  
bench migrate && bench build && bench clear-cache

## IN PROGRESS
Please note this is still very much an in progress application in active development and not considered mature at this point. If you see anything missing or functionality that should be included, feel free to open an issue.

## GOAL
The overall goal of this project is to make it easier for Film Composers to track their work/projects and the output they deliver. ERPNext is an excellent framework for this project due to the built in functionality for managing your business. The idea being, all of your business from accounting, to HR, and the core composer work can be done in one single application.

## LICENSE
Copyright (c) 2021 Haynie IPHC, LLC\
Developed by Haynie Research & Development, LLC for Lance Haynie, LLC under license.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## SCREENSHOTS

### Workspace Home
Here you can access all the features in one spot.
![Screenshot](https://raw.githubusercontent.com/haynieresearch/filmcomposer/master/screenshots/screenshot01.png)  

### Production
This is where you will start, enter all of the production information. Once you have saved a production the easiest way to move into Spotting Notes is to use the "Create Spotting Notes" button in the upper right. The required information will transition from the Production to the Spotting Notes.
![Screenshot](https://raw.githubusercontent.com/haynieresearch/filmcomposer/master/screenshots/screenshot02.png)  


### Production (Continued)
![Screenshot](https://raw.githubusercontent.com/haynieresearch/filmcomposer/master/screenshots/screenshot03.png)  


### Spotting Notes  
![Screenshot](https://raw.githubusercontent.com/haynieresearch/filmcomposer/master/screenshots/screenshot04.png)  


### Spotting Notes Cue
In the detailed edit button you will find all of the required details, including the description/notes section to make notes about each cue.
![Screenshot](https://raw.githubusercontent.com/haynieresearch/filmcomposer/master/screenshots/screenshot05.png)  


### Sketch Project
Here is where you go from spotting, to tracking the individual cues and their status. The cues from the Spotting Notes will transition over to the Sketch Project.
![Screenshot](https://raw.githubusercontent.com/haynieresearch/filmcomposer/master/screenshots/screenshot06.png)  


### Cue Sheet
If you follow the general workflow, the cues from Spotting & Sketching will follow into the Cue Sheet.
![Screenshot](https://raw.githubusercontent.com/haynieresearch/filmcomposer/master/screenshots/screenshot07.png)  


### Cue Sheet Cue Details
![Screenshot](https://raw.githubusercontent.com/haynieresearch/filmcomposer/master/screenshots/screenshot08.png)  


### Generated Cue Sheet
![Screenshot](https://raw.githubusercontent.com/haynieresearch/filmcomposer/master/screenshots/screenshot09.png)  


### Master Recording
This is not required for anything, but just a detailed list of all Master Recordings produced.
![Screenshot](https://raw.githubusercontent.com/haynieresearch/filmcomposer/master/screenshots/screenshot10.png)
