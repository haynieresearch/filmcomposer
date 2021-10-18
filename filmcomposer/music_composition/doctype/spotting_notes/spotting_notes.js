// Copyright (c) 2021, Lance Haynie, LLC and contributors
// For license information, please see license.txt

frappe.ui.form.on('Spotting Notes', {
  setup: function(frm) {
    cur_frm.set_query("cue_id", "cues", function(doc, cdt, cdn) {
    	return{
    		filters: [
    			['Cue', 'production_id', '=', frm.doc.production_id]
    		]
    	}
    });
	},

  refresh(frm) {
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
  }
});
