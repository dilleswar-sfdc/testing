({
	signUP : function(component, event, helper) {debugger;
		var action = component.get("c.signUpMethod");
        var singupData = component.get("v.data");
        action.setParams({'data':component.get("v.data")})
        action.setCallback(this,function(response){debugger;
            var state = response.getState();
            if(state === "SUCCESS"){
                var result = response.getReturnValue();
               
            }else if(state === "ERROR"){
                 var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    alert("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
        component.set("v.data",null);                                         
	},
    login : function(component,event,helper){debugger;
        component.set("v.openModal",true);
       	var modalId = component.find("modal");
        var modalbackdropId = component.find("modalbackdrop");
        $A.util.addClass(modalId,"slds-fade-in-open");
        $A.util.addClass(modalbackdropId,"slds-backdrop_open")
    },
    close : function(component,event,helper){
        component.set("v.openModal",false);
		var modalId = component.find("modal");
        var modalbackdropId = component.find("modalbackdrop");
        $A.util.removeClass(modalId,"slds-fade-in-open");
        $A.util.removeClass(modalbackdropId,"slds-backdrop_open")
    }
})