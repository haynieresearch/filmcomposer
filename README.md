# ERPNext Film Composer
Film Composer is an app designed to be used with [ERPNext](https://github.com/frappe/erpnext) to help manage the film composer business.  
It follows a general workflow for film composing:  
Production Information -> Spotting Notes -> Sketches -> Cue Sheet -> Master Recording Details.
For larger productions, you can skip the Cue Sheet process. For smaller/independent projects that are not as familiar with what a Cue Sheet is or what to do with it, it makes it easier to generate one for them since you will have all the data handy.

### Setup
bench get-app filmcomposer https://github.com/haynieresearch/filmcomposer.git  
bench --site [site-name] install-app filmcomposer  
bench migrate && bench build && bench clear-cache  

### Update
bench update  
bench migrate && bench build && bench clear-cache  

### Workspace Home
Here you can access all the features in one spot.
![Screenshot](https://raw.githubusercontent.com/haynieresearch/filmcomposer/master/screenshots/screenshot01.png)

### Production
This is where you will start, enter all of the production information. Once you have saved a production the easiest way to move into Spotting Notes is to use the "Create Spotting Notes" button in the upper right. The required information will transition from the Production to the Spotting Notes.
![Screenshot](https://raw.githubusercontent.com/haynieresearch/filmcomposer/master/screenshots/screenshot02.png)

Production (Continued)
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
