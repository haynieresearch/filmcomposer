// Copyright (c) 2021, Lance Haynie, LLC and contributors
// For license information, please see license.txt

frappe.ui.form.on('Production', {
  refresh: function(frm) {
      frm.add_custom_button('Create Spotting Notes', () => {
          frappe.new_doc('Spotting Notes', {
              production_id: frm.doc.name,
          })
      })
      frm.add_custom_button('Create Cue Sheet', () => {
          frappe.new_doc('Cue Sheet', {
              production_id: frm.doc.name
          })
      })
  }
});
