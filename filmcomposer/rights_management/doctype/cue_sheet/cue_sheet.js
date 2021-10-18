// Copyright (c) 2021, Lance Haynie, LLC and contributors
// For license information, please see license.txt

frappe.ui.form.on('Cue Sheet', {
	setup: function(frm) {
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
	},

	refresh(frm) {
    cur_frm.add_fetch('production_id', 'production_aka', 'production_aka')
		cur_frm.add_fetch('production_id', 'duration', 'duration')
    cur_frm.add_fetch('production_id', 'music_duration', 'music_duration')
    cur_frm.add_fetch('production_id', 'production_number', 'production_number')
    cur_frm.add_fetch('production_id', 'source', 'source')
    cur_frm.add_fetch('production_id', 'category', 'category')
    cur_frm.add_fetch('production_id', 'version', 'version')
    cur_frm.add_fetch('production_id', 'episode_title', 'episode_title')
    cur_frm.add_fetch('production_id', 'episode_number', 'episode_number')
    cur_frm.add_fetch('production_id', 'legal_name', 'legal_name')
	},

	"spotting_notes_id": function(frm) {
			frappe.model.with_doc("Spotting Notes", frm.doc.spotting_notes_id, function() {
					var tabletransfer= frappe.model.get_doc("Spotting Notes", frm.doc.spotting_notes_id)
					$.each(tabletransfer.cues, function(index, row){
							var d = frm.add_child("cues");
							d.cue_id = row.cue_id;
							d.cue_no = row.cue_no;
							frm.refresh_field("cues");
					});
			});
	}
})
