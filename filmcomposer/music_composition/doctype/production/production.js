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
frappe.ui.form.on('Production', {
  refresh: function(frm) {
      frm.add_custom_button('Spotting Notes', () => {
          frappe.new_doc('Spotting Notes', {
              production_id: frm.doc.name,
          })
      }, __('Create'))
      frm.add_custom_button('Cue Sheet', () => {
          frappe.new_doc('Cue Sheet', {
              production_id: frm.doc.name
          })
      }, __('Create'))
      frm.add_custom_button('Opportunity', () => {
          frappe.new_doc('Opportunity', {
              film_production_project: frm.doc.name
          })
      }, __('Create'))
      frm.add_custom_button('Customer', () => {
          frappe.new_doc('Customer', {
              film_production_project: frm.doc.name
          })
      }, __('Create'))
      frm.add_custom_button('Expense Claim', () => {
          frappe.new_doc('Expense Claim', {
              film_production_project: frm.doc.name
          })
      }, __('Create'))
      frm.add_custom_button('Purchase Order', () => {
          frappe.new_doc('Purchase Order', {
              film_production_project: frm.doc.name
          })
      }, __('Create'))
      frm.add_custom_button('Purchase Receipt', () => {
          frappe.new_doc('Purchase Receipt', {
              film_production_project: frm.doc.name
          })
      }, __('Create'))
      frm.add_custom_button('Purchase Invoice', () => {
          frappe.new_doc('Purchase Invoice', {
              film_production_project: frm.doc.name
          })
      }, __('Create'))
      frm.add_custom_button('Sales Order', () => {
          frappe.new_doc('Sales Order', {
              film_production_project: frm.doc.name
          })
      }, __('Create'))
      frm.add_custom_button('Sales Invoice', () => {
          frappe.new_doc('Sales Invoice', {
              film_production_project: frm.doc.name
          })
      }, __('Create'))
      frm.add_custom_button('Delivery Note', () => {
          frappe.new_doc('Delivery Note', {
              film_production_project: frm.doc.name
          })
      }, __('Create'))
      frm.add_custom_button(__('Commission'), () => {
        frm.events.set_status(frm, 'Commission');
      }, __('Set Status'))
      frm.add_custom_button(__('Spotting'), () => {
        frm.events.set_status(frm, 'Spotting');
      }, __('Set Status'))
      frm.add_custom_button(__('Theme Suite'), () => {
        frm.events.set_status(frm, 'Theme Suite');
      }, __('Set Status'))
      frm.add_custom_button(__('Revisions'), () => {
        frm.events.set_status(frm, 'Revisions');
      }, __('Set Status'))
      frm.add_custom_button(__('Approval'), () => {
        frm.events.set_status(frm, 'Approval');
      }, __('Set Status'))
      frm.add_custom_button(__('Production'), () => {
        frm.events.set_status(frm, 'Production');
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
  },
  set_status: function(frm, status) {
    frappe.confirm(__('Set Production status {0}?', [status.bold()]), () => {
      frappe.xcall('filmcomposer.music_composition.doctype.production.production.set_project_status',
        {production: frm.doc.name, status: status}).then(() => { window.location.reload(); });
    });
  }
});
