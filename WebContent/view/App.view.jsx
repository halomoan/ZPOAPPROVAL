sap.ui.jsview("sap.ui.halomoan.PoApproval.view.App", {



	getControllerName: function () {

		return "sap.ui.halomoan.PoApproval.view.App";

	},

	

	createContent: function (oController) {

		

		var butUI5Save = new sap.m.Button({text:"Save",press: function(oEvent) {UI5LogonSave(oEvent);}});

		var butUI5Cancel = new sap.m.Button({text:"Cancel",press: function(oEvent) { oLogonDialog.close(); }});



		oLogonDialog = new sap.m.Dialog({title:"SAP Authentication",type:sap.m.DialogType.Message,leftButton:butUI5Save,rightButton:butUI5Cancel}); 

		var lblUserName = new sap.m.Label({text:"Username"});

		oLogonDialog.addContent(lblUserName); 

		inUserName = new sap.m.Input({});

		oLogonDialog.addContent(inUserName); 

		var lblPassword = new sap.m.Label({text:"Password"});

		oLogonDialog.addContent(lblPassword); 

		inPassword = new sap.m.Input({type:sap.m.InputType.Password});

		oLogonDialog.addContent(inPassword); 

		

		return this.oLogonDialog;

	}

});