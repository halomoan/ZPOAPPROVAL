sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.halomoan.PoApproval.view.AttachmentPreview", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.ui.halomoan.PoApproval.WebContent.view.AttachmentPreview
		 */
			onInit: function() {
				
			var oViewData = {
			
			};
			
			var oViewModelJson = new JSONModel(oViewData);
			this.getView().setModel(oViewModelJson, "detailView");
			
			
			 var oView = this.getView();
			 oView.addEventDelegate({
			           onAfterShow: function(oEvent){
			           		var filename = this.byId("filename");
			           		var sPath = filename.getBindingContext().getPath() ;
			           		var sURI = "html\\FileEmpty.html";
			           		
			           		var oFile = filename.getModel().getProperty(sPath);
			           		
							if (parseFloat(oFile.Size) > 0){          		
								//sURI = "https://jack.uol.com.sg:8094/sap/opu/odata/sap/ZPOAPPROVAL_SRV/" + sPath + "/$value";
								sURI = "/sap/opu/odata/sap/ZPOAPPROVAL_SRV/" + sPath + "/$value";
							}
							var oHtml = oView.byId("idPreviewFrame");
				           	oHtml.setContent("<iframe src="+ sURI +" height='80%' width='100%'></iframe>");
			           		
			          }
			     }, oView);
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.ui.halomoan.PoApproval.WebContent.view.AttachmentPreview
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.ui.halomoan.PoApproval.WebContent.view.AttachmentPreview
		 */
		//	onAfterRendering: function() {
		//	
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.ui.halomoan.PoApproval.WebContent.view.AttachmentPreview
		 */
		//	onExit: function() {
		//
		//	}
		onClose: function(evt) {
			this.nav.back("Detail");
		}

	});

});