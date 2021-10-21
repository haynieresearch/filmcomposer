# Copyright (c) 2021, Lance Haynie, LLC and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import frappe

class ProductionMusicProject(Document):
	pass

@frappe.whitelist()
def set_project_status(production_music_project, status):
	production_music_project = frappe.get_doc('Production Music Project', production_music_project)
	frappe.has_permission(doc = production_music_project, throw = True)

	production_music_project.status = status
	production_music_project.save()

	for production_music_cues in frappe.get_all('Production Music Cues', dict(parent = production_music_project.name)):
		frappe.db.update("Production Music Cues", production_music_cues.name, "status", status)
		frappe.db.commit()
