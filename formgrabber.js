/**
*	Author: 	 Harry Ho
*	Date: 		 May 13, 2014
*	Description: Simple jQuery plugin to pull data off of a form or inputs in general
*/

//I like sandwhiches and cheese
(function($){
	$.fn.grab = function(options){
		var element = this;
		var grabber = element.grab;
		if(options !== undefined){
			console.log(options);
			for(key in options){
				console.log(key);
				grabber.options[key] = options[key];
			}
		}
		var data = {};
		//Finds all inputs,selects, and textareas
		$(this).find('input,select,textarea').each(function(){
			//Uses the attr as the object key
			var hasAttr = $(this).attr(grabber.options.findBy);
			if(hasAttr !== null && hasAttr !== undefined){
				if($(this).val() !== '' && $(this).val() !== null && $(this).val() !== undefined){
	     			data[$(this).attr(grabber.options.findBy)] = $(this).val();
				}//If the value is blank, checks if allowing empty inputs
				else if($(this).val() == '' && grabber.options.allowBlank){
					data[$(this).attr(grabber.options.findBy)] = $(this).val();
				}
	    	}
	    });
	    //Checks the format that needs to be returned
	    switch(grabber.options.format.toLowerCase()){
	    	case 'object': return data;
	    		break;
	    	case 'json': return JSON.stringify(data);
	    		break;
	    	case 'default': return data;
	    		break;
	    }
	}	
	//Sets the base options
	$.fn.grab.options = {
		allowBlank: false,
		findBy: 'name',
		format: 'object'
	};
}(jQuery));
