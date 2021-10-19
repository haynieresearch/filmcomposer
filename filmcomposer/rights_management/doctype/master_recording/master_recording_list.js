frappe.listview_settings['Master Recording'] = {
  column_render: {
			if(doc.isrc) {
				html += 'TESTING';
			}
			return html;
		}
	}
};
