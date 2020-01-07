({
	loadJquery : function(component, event, helper) {
		debugger
        $(".test").hover(
            function (event) {debugger
                if(event.type== "mouseleave")
                {
                $("#help-x").addClass("slds-hide");
                }
                else if(event.type== "mouseenter"){
                $("#help-x").removeClass("slds-hide");
                }
                //$(this).removeClass("slds-hide");
            });
	},
	logout : function(component, event, helper) {
		//alert("logout");
	},
	accordionOpen : function(component, event, helper) {
		
		debugger
        
       if($("ul li:nth-child(2)").find("section").hasClass("slds-is-open")){
           var addclas = $("ul li:nth-child(2)").find("section").removeClass("slds-is-open");
           var attr = $("#accordion-details-02").attr( "hidden",""); 
      }else{
          var addclas = $("ul li:nth-child(2)").find("section").addClass("slds-is-open");
          var attr = $("#accordion-details-02").removeAttr( "hidden");                                           
       }
	}
})