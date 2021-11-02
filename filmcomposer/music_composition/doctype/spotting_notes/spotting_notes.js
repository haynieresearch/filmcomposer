//**********************************************************
//* CATEGORY	SOFTWARE
//* GROUP	ERPNEXT/FRAPPE
//* AUTHOR	LANCE HAYNIE
//**********************************************************
//Copyright Haynie IPHC, LLC
//Developed by Haynie Research & Development, LLC
//Developed for Lance Haynie, LLC
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.#
//You may obtain a copy of the License at
//http://www.apache.org/licenses/LICENSE-2.0
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.
frappe.ui.form.on('Spotting Notes', 'setup', function(frm) {
  cur_frm.set_query("cue_id", "cues", function(doc, cdt, cdn) {
  	return{
  		filters: [
  			['Cue', 'production_id', '=', frm.doc.production_id]
  		]
  	}
  });
});

frappe.ui.form.on('Spotting Notes', 'onload', function(frm) {
  cur_frm.add_fetch('production_id', 'duration', 'duration')
  cur_frm.add_fetch('production_id', 'music_duration', 'music_duration')
  cur_frm.add_fetch('production_id', 'category', 'category')
  cur_frm.add_fetch('production_id', 'version', 'version')
  cur_frm.add_fetch('production_id', 'episode_title', 'episode_title')
  cur_frm.add_fetch('production_id', 'episode_number', 'episode_number')
  cur_frm.add_fetch('production_id', 'director_name', 'director_name')
  cur_frm.add_fetch('production_id', 'director_email', 'director_email')
  cur_frm.add_fetch('production_id', 'director_phone', 'director_phone')
  cur_frm.add_fetch('production_id', 'director_mobile', 'director_mobile')
});

frappe.ui.form.on('Spotting Notes', 'refresh', function(frm) {
  frm.add_custom_button('Create Sketch Project', () => {
      frappe.new_doc('Sketch Project', {
          production_id: frm.doc.production_id,
          spotting_notes_id: frm.doc.name,
      })
  })
  frm.add_custom_button('Create Cue Sheet', () => {
      frappe.new_doc('Cue Sheet', {
          production_id: frm.doc.production_id,
          spotting_notes_id: frm.doc.name,
      })
  })
});
