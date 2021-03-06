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
from . import __version__ as app_version

app_name = "filmcomposer"
app_title = "Film Composer"
app_publisher = "Haynie Research & Development, LLC"
app_description = "Film Composer"
app_icon = "fa fa-music"
app_color = "grey"
app_email = "info@haynieresearch.us"
app_license = "Apache 2.0"

fixtures = [
    {"doctype":"Custom Field", "filters": [["_user_tags", "like", ("%filmcomposer%")]]},
    {"doctype":"Property Setter", "filters": [["_user_tags", "like", ("%filmcomposer%")]]},
    {"doctype":"Opportunity", "filters": [["_user_tags", "like", ("%filmcomposer%")]]},
    {"doctype":"Customer", "filters": [["_user_tags", "like", ("%filmcomposer%")]]},
    {"doctype":"Expense Claim", "filters": [["_user_tags", "like", ("%filmcomposer%")]]},
    {"doctype":"Purchase Order", "filters": [["_user_tags", "like", ("%filmcomposer%")]]},
    {"doctype":"Purchase Receipt", "filters": [["_user_tags", "like", ("%filmcomposer%")]]},
    {"doctype":"Purchase Invoice", "filters": [["_user_tags", "like", ("%filmcomposer%")]]},
    {"doctype":"Sales Order", "filters": [["_user_tags", "like", ("%filmcomposer%")]]},
    {"doctype":"Sales Invoice", "filters": [["_user_tags", "like", ("%filmcomposer%")]]},
    {"doctype":"Delivery Note", "filters": [["_user_tags", "like", ("%filmcomposer%")]]},
    {"doctype":"Role", "filters": [["_user_tags", "like", ("%filmcomposer%")]]}
]

calendars = ["Production", "Production Music Project"]

domains = {
	'Film Composer': 'filmcomposer.domains.filmcomposer'
}

#website_generators = ["Production", "Spotting Notes", "Sketch Project"]

website_route_rules = [
	{"from_route": "/production-project", "to_route": "Production"},
    {"from_route": "/spotting-notes", "to_route": "Spotting Notes"},
    {"from_route": "/sketch-project", "to_route": "Sketch Project"}
]

default_roles = [
	{'role': 'Director', 'doctype':'Contact', 'email_field': 'email_id'},
	{'role': 'Producer', 'doctype':'Contact', 'email_field': 'email_id'}
]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/filmcomposer/css/filmcomposer.css"
# app_include_js = "/assets/filmcomposer/js/filmcomposer.js"

# include js, css files in header of web template
# web_include_css = "/assets/filmcomposer/css/filmcomposer.css"
# web_include_js = "/assets/filmcomposer/js/filmcomposer.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "filmcomposer/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "filmcomposer.utils.jinja_methods",
# 	"filters": "filmcomposer.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "filmcomposer.install.before_install"
# after_install = "filmcomposer.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "filmcomposer.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"filmcomposer.tasks.all"
# 	],
# 	"daily": [
# 		"filmcomposer.tasks.daily"
# 	],
# 	"hourly": [
# 		"filmcomposer.tasks.hourly"
# 	],
# 	"weekly": [
# 		"filmcomposer.tasks.weekly"
# 	],
# 	"monthly": [
# 		"filmcomposer.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "filmcomposer.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "filmcomposer.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "filmcomposer.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"filmcomposer.auth.validate"
# ]
