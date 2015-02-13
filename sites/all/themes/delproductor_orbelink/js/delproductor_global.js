  jQuery(function() {
    jQuery( document ).tooltip();
  });

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
	
	jQuery(".page-recetas .receta").css({'display':'none'});
	
		
});

var ordenid = 1;
var cantv = 5;	
function masRecetas(){
	var divs = jQuery(".page-recetas .recetas .receta");
	var c = ordenid + cantv;
	
	for(i=ordenid;i<=c;i++){
		//jQuery(".page-recetas .recetas .row_"+i).css({'display':'block'});
		jQuery(".page-recetas .recetas .row_"+i).fadeIn('slow');
		ordenid = ordenid + 1
		if(ordenid == 49){  jQuery(".page-recetas .more-link a").attr("href","http://comaorganico.com").attr('target','_blank'); }
	}

}	
setTimeout('masRecetas()', 1000);
setTimeout('masRecetas()', 2000);


jQuery( document ).ajaxComplete(function() {
	jQuery("#edit-field-caracteristica-del-product-tid input").click(function(){
			jQuery("#edit-submit-p-gina-de-productores").click();
		}
	);
});

