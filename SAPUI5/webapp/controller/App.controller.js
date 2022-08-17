// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",  /**Utilizar instanacia de la vista */ /** representan los módulos (Asynchronal Module Definition) */
    /** se definen para poder utilizarse dentro de los controladores */
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.mvc.MessageToast} MessageToast
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict";
        return Controller.extend("dtt.SAPUI5.controller.App", {
            onInit: function () { /** función que se llama cuando se instancie el objeto */

            },
            onShowHello: function () {
                //lee texto del modelo i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle(); //Obtener el modelo i18n
                var sRecipient = this.getView().getModel().getProperty("/recipient/name"); //Obtener texto ingresado
                var sMsg = oBundle.getText("helloMsg", [sRecipient]); //Concatenar i18n>helloMsg + texto ingresado
                MessageToast.show(sMsg);
            }
        });
    });