jQuery.sap.declare("sap.ui.halomoan.PoApproval.Component");



sap.ui.core.UIComponent.extend("sap.ui.halomoan.PoApproval.Component", {



	createContent : function() {



		// create root view

		var oView = sap.ui.view({

			id : "app",

			viewName : "sap.ui.halomoan.PoApproval.view.App",

			type : "JS",

			viewData : { component : this }

		});



		// set i18n model

		var i18nModel = new sap.ui.model.resource.ResourceModel({

			bundleUrl : "i18n/messageBundle.properties"

		});

		oView.setModel(i18nModel, "i18n");



		// Using OData model to connect against a real service

		//var url = "proxy/http/172.16.1.50:8000/sap/opu/odata/sap/ZPOAPPROVAL_SRV/";

		//var url = "https://odin.uol.com.sg/sap/opu/odata/sap/ZPOAPPROVAL_SRV/";
		var url = "/sap/opu/odata/sap/ZPOAPPROVAL_SRV/";

		

		//var url = "/proxy/http/172.16.1.41:8000/sap/opu/odata/sap/ZPOAPPROVAL_SRV/";

		//var oModel = new sap.ui.model.odata.ODataModel(url, true, "zmarketing", "11223344");

		var oModel = new sap.ui.model.odata.ODataModel(url, true);

		oView.setModel(oModel);



		// set device model

		var deviceModel = new sap.ui.model.json.JSONModel({

			isPhone : jQuery.device.is.phone,

			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",

			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"

		});

		deviceModel.setDefaultBindingMode("OneWay");

		oView.setModel(deviceModel, "device");



		// done

		return oView;

	},

	

	getUrl: function(sUrl) {

		if (sUrl == "") {

			return sUrl;

		}

		if(window.location.hostname == "localhost") {

			return "proxy" + sUrl;

		}else {

			return sUrl;

		}

	}



});