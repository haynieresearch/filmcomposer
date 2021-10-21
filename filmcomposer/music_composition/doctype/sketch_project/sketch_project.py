#**********************************************************
#* CATEGORY	SOFTWARE
#* GROUP	ERPNEXT/FRAPPE
#* AUTHOR	LANCE HAYNIE
#**********************************************************
#Copyright Haynie IPHC, LLC
#Developed by Haynie Research & Development, LLC
#Developed for Lance Haynie, LLC
#Licensed under the Apache License, Version 2.0 (the "License");
#you may not use this file except in compliance with the License.#
#You may obtain a copy of the License at
#http://www.apache.org/licenses/LICENSE-2.0
#Unless required by applicable law or agreed to in writing, software
#distributed under the License is distributed on an "AS IS" BASIS,
#WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#See the License for the specific language governing permissions and
#limitations under the License.
from frappe.model.document import Document
import frappe

class SketchProject(Document):
	pass

@frappe.whitelist()
def set_project_status(sketch_project, status):
	sketch_project = frappe.get_doc('Sketch Project', sketch_project)
	frappe.has_permission(doc = sketch_project, throw = True)

	sketch_project.status = status
	sketch_project.save()

	for sketch_cues in frappe.get_all('Sketch Cues', dict(parent = sketch_project.name)):
		frappe.db.update("Sketch Cues", sketch_cues.name, "status", status)
		frappe.db.commit()
