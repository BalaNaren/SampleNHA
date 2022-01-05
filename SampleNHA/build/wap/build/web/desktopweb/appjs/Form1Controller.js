define("userForm1Controller", {
    //Type your controller code here 
});
define("Form1ControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_gac2c79beeec462d9033d4b2a912c677: function AS_Button_gac2c79beeec462d9033d4b2a912c677(eventobject) {
        var self = this;
        this.view.lblResult.text = "Success";
    }
});
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
