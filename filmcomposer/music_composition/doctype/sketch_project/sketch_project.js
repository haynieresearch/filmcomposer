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
frappe.ui.form.on('Sketch Project', 'setup', function(frm) {
  cur_frm.set_query("cue_id", "cues", function(doc, cdt, cdn) {
    return{
      filters: [
        ['Cue', 'production_id', '=', frm.doc.production_id]
      ]
    }
  });
  cur_frm.set_query("spotting_notes_id", function(doc, cdt, cdn) {
    return{
      filters: [
        ['Spotting Notes', 'production_id', '=', frm.doc.production_id]
      ]
    }
  });
});

frappe.ui.form.on('Sketch Project', {
  set_status: function(frm, status) {
    frappe.confirm(__('Set Sketch Project and all Cues to status {0}?', [status.bold()]), () => {
      frappe.xcall('filmcomposer.music_composition.doctype.sketch_project.sketch_project.set_project_status',
        {sketch_project: frm.doc.name, status: status}).then(() => { window.location.reload(); });
    });
  }
});

frappe.ui.form.on('Sketch Project', 'onload', function(frm) {
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

frappe.ui.form.on('Sketch Project', 'refresh', function(frm) {
  frm.add_custom_button(__('Revisions'), () => {
    frm.events.set_status(frm, 'Revisions');
  }, __('Set Status'))
  frm.add_custom_button(__('Approval'), () => {
    frm.events.set_status(frm, 'Approval');
  }, __('Set Status'))
  frm.add_custom_button(__('Completed'), () => {
    frm.events.set_status(frm, 'Completed');
  }, __('Set Status'))
});

frappe.ui.form.on('Sketch Project', 'spotting_notes_id', function(frm) {
  frappe.model.with_doc("Spotting Notes", frm.doc.spotting_notes_id, function() {
      var tabletransfer= frappe.model.get_doc("Spotting Notes", frm.doc.spotting_notes_id)
      $.each(tabletransfer.cues, function(index, row){
          var d = frm.add_child("cues");
          d.cue_id = row.cue_id;
          d.cue_no = row.cue_no;
          d.notes = row.description;
          frm.refresh_field("cues");
      });
  });
});
