({
	login : function(component, event, helper) {debugger;
       var action = component.get("c.loginMethod");
        
        action.setParams({ "email":component.get("v.email"),
                          "pwd":component.get("v.pwd")})
        action.setCallback(this,function(res){debugger;
            var state = res.getState();
            if(state === "SUCCESS"){
                alert(res.getReturnValue());
                if(res.getReturnValue() == 'Login Successfully'){
                     component.set("v.modalOpen",true);
                    var modalId = component.find("modal");
                    var modalbackdropId = component.find("modalbackdrop");
                    $A.util.addClass(modalId,"slds-fade-in-open");
                    $A.util.addClass(modalbackdropId,"slds-backdrop_open");
                }
            }
        });
       $A.enqueueAction(action);
       component.set('v.email',null);
       component.set("v.pwd",null);
      
       
	},
     close : function(component,event,helper){
        //component.set("v.openModal",false);
		var modalId = component.find("modal");
        var modalbackdropId = component.find("modalbackdrop");
        $A.util.removeClass(modalId,"slds-fade-in-open");
        $A.util.removeClass(modalbackdropId,"slds-backdrop_open")
    }
})