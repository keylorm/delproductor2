jQuery.noConflict(); 
jQuery(document).ready(function(){
	
	jQuery('#zone-menu-wrapper #block-system-main-menu .menu .mp').hover(
         function () {
		 	var subm = jQuery(this).find(".menu");
			if(subm[0] != undefined){
				if(jQuery(this).hasClass('menu-expandido-doble')){
					jQuery('body').addClass('mopen2');
				}				
				jQuery('body').addClass('mopen');
				subm.show('slow');
			}
			//console.log(subm[0]);
         }, 
         function () {
		 	var subm = jQuery(this).find(".menu");
			if(subm[0] != undefined){
				jQuery('body').removeClass('mopen');
				jQuery('body').removeClass('mopen2');
				subm.hide('slow');
			}			
			//console.log(subm[0]);
         }
     );

	jQuery("#edit-field-caracteristica-del-product-tid input").click(function(){
			jQuery("#edit-submit-p-gina-de-productores").click();
		}
	);
	
	jQuery(".page-recetas .receta").addClass("hidden").css({'display':'none'});
	
		
});

var ordenid = 1;
var cantv = 5;	
function masRecetas(){
	var divs = jQuery(".page-recetas .recetas .receta");
	var c = ordenid + cantv;
	
	for(i=ordenid;i<=c;i++){
		var div = jQuery(".page-recetas .recetas .row_"+i).css({'display':'block'});
		ordenid = ordenid + 1	
	}

}	
jQuery(".more-link a").click();


jQuery( document ).ajaxComplete(function() {
	jQuery("#edit-field-caracteristica-del-product-tid input").click(function(){
			jQuery("#edit-submit-p-gina-de-productores").click();
		}
	);
});

