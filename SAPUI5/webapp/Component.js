sap.ui.define([
   "sap/ui/core/UIComponent",
   "dtt/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
], 
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
function(UIComponent, Models, ResourceModel) {
    return UIComponent.extend("dtt.SAPUI5.Component", {
        
        metadata: {
            manifest : "json"
            // "rootView": {
            //     "viewName" : "dtt.SAPUI5.view.App",
            //     "type" : 'XML',
            //     "async" : true,
            //     "id" : "app"
            // }
        },
        init: function() {   
            UIComponent.prototype.init.apply(this, arguments);  //call the init function of the parent
            this.setModel(Models.createRecipient()); //set data model on the view
            var i18nModel = new ResourceModel({ bundleName: "dtt.SAPUI5.i18n.i18n" }); //set i18n model on the view
            this.setModel(i18nModel, "i18n");
        }
    });
});