jQuery.sap.declare("sap.ui.halomoan.PoApproval.util.Formatter");



jQuery.sap.require("sap.ui.core.format.DateFormat");



sap.ui.halomoan.PoApproval.util.Formatter = {

	

	_statusStateMap : {

		"P" : "Success",

		"R" : "Warning"

	},



	statusText :  function (value) {

		var bundle = this.getModel("i18n").getResourceBundle();

		return bundle.getText("StatusText" + value, "?");

	},

	

	statusState :  function (value) {

		var map = sap.ui.halomoan.PoApproval.util.Formatter._statusStateMap;

		return (value && map[value]) ? map[value] : "None";

	},

	

	date : function (value) {

		if (value) {

			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "dd/MM/yyyy"}); 

			var year = value.substr(0,4);

			var month = value.substr(4,2);

			var day = value.substr(6,2);

			return oDateFormat.format(new Date(year, month - 1, day));

		} else {

			return value;

		}

	},

	

	quantity :  function (value) {

		try {			

			return value;

		} catch (err) {

			return "Not-A-Number";

		}

	},

	

	number: function(value) {

		try {			

						

			return  parseFloat(value).toLocaleString("en-US",{ minimumFractionDigits: 2 });

						

		} catch(err) {

			return "Failed to Format";

		}

	}

	

	

};