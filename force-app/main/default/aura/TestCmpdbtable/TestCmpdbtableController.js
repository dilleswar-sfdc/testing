({
	doInit : function(component, event, helper) {
		var action = component.get("c.retriveFrmDb");
        action.setCallback(this,function(a){debugger;
            var state = a.getState();
            if(state === "SUCCESS"){
                component.set("v.data",a.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	},
    onDelete : function(component,event,helper){debugger;
        var action = component.get("c.deleteMethod");
        action.setParams({
            "selectedId": component.get("v.recordId")

                        })
        action.setCallback(this,function(a){debugger;
            var state = a.getState();
            if(state === "SUCCESS"){
                alert("successfully deleted");
            }
        });
        $A.enqueueAction(action);
    }
})