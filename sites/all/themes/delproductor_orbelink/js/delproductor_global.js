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
			//alert(jQuery(this).val());
			//jQuery("#edit-submit-p-gina-de-productores").click();
			jQuery("#edit-submit-p-gina-de-productores").click();
		}
	);
		
});

jQuery( document ).ajaxComplete(function() {
	jQuery("#edit-field-caracteristica-del-product-tid input").click(function(){
			//alert(jQuery(this).val());
			//jQuery("#edit-submit-p-gina-de-productores").click();
			jQuery("#edit-submit-p-gina-de-productores").click();
		}
	);
});