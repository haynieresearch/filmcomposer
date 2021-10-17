frappe.listview_settings['Cue Sheet'] = {
        get_indicator: function(doc) {
                if(doc.docstatus==0) {
                        return [__("Draft", "red", "docstatus,=,0")]
                } else if(doc.docstatus==2) {
                        return [__("Cancelled", "grey", "docstatus,=,2")]
                } else {
                        return [__("Completed"), "green"]
                }
        }
};
