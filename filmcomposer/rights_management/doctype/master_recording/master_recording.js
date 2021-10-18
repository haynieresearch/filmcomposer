// Copyright (c) 2021, Lance Haynie, LLC and contributors
// For license information, please see license.txt

frappe.ui.form.on('Master Recording', {
  setup: function(frm) {
    cur_frm.set_query("cue_id", function(doc, cdt, cdn) {
    	return{
    		filters: [
    			['Cue', 'production_id', '=', frm.doc.production_id]
    		]
    	}
    });
  }
})
