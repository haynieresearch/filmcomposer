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
frappe.ui.form.on('Production Music Project', {
  setup: function(frm) {
    cur_frm.set_query("cue_id", "cues", function(doc, cdt, cdn) {
    	return{
    		filters: [
    			['Cue', 'project_id', '=', frm.doc.project_id]
    		]
    	}
    });
	},
  set_status: function(frm, status) {
    frappe.confirm(__('Set Production Music Project and all Cues to status {0}?', [status.bold()]), () => {
      frappe.xcall('filmcomposer.music_composition.doctype.production_music_project.production_music_project.set_project_status',
        {production_music_project: frm.doc.name, status: status}).then(() => { window.location.reload(); });
    });
  },
  refresh(frm) {
    frm.add_custom_button('Expense Claim', () => {
        frappe.new_doc('Expense Claim', {
            production_music_project: frm.doc.name
        })
    }, __('Create'))
    frm.add_custom_button('Purchase Order', () => {
        frappe.new_doc('Purchase Order', {
            production_music_project: frm.doc.name
        })
    }, __('Create'))
    frm.add_custom_button('Purchase Receipt', () => {
        frappe.new_doc('Purchase Receipt', {
            production_music_project: frm.doc.name
        })
    }, __('Create'))
    frm.add_custom_button('Purchase Invoice', () => {
        frappe.new_doc('Purchase Invoice', {
            production_music_project: frm.doc.name
        })
    }, __('Create'))
    frm.add_custom_button(__('Research'), () => {
      frm.events.set_status(frm, 'Research');
    }, __('Set Status'))
    frm.add_custom_button(__('In Progress'), () => {
      frm.events.set_status(frm, 'In Progress');
    }, __('Set Status'))
    frm.add_custom_button(__('Mixing'), () => {
      frm.events.set_status(frm, 'Mixing');
    }, __('Set Status'))
    frm.add_custom_button(__('Mastering'), () => {
      frm.events.set_status(frm, 'Mastering');
    }, __('Set Status'))
    frm.add_custom_button(__('Completed'), () => {
      frm.events.set_status(frm, 'Completed');
    }, __('Set Status'))
  }
});
