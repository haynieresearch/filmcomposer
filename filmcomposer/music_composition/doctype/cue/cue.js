// Copyright (c) 2021, Lance Haynie, LLC and contributors
// For license information, please see license.txt

frappe.ui.form.on('Cue', {
  refresh(frm) {
    frm.add_custom_button('Create Master Recording', () => {
        frappe.new_doc('Master Recording', {
            production_id: frm.doc.production_id,
            cue_id: frm.doc.name
        })
    })
  }
});
