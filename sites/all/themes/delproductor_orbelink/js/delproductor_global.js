jQuery.noConflict(); 
jQuery(document).ready(function(){
	 var submenuopen = 0; var med = 0;
	 var mactiv = jQuery('#zone-menu-wrapper #block-system-main-menu .menu .active-trail');
	 var sbm = mactiv.find(".menu");
	 if(mactiv.length > 0){
		submenuopen = 1;
		if(mactiv.hasClass('menu-expandido-doble')){
			jQuery('body').addClass('mopen2');
		}
		jQuery('body').addClass('mopen');
		var subm2 = mactiv.find(".menu");
		subm2.show('slow');				 
	 }	
	
	jQuery('#zone-menu-wrapper #block-system-main-menu .menu .mp').hover(
         function () {
		 	var subm = jQuery(this).find(".menu");
			if(subm[0] != undefined){
				if(jQuery(this).hasClass('menu-expandido-doble')){
					jQuery('body').addClass('mopen2');
				}				
				jQuery('body').addClass('mopen');
				if(submenuopen==1){
					sbm.hide('slow');
				}				
				subm.show('slow');
			}
			//console.log(subm[0]);
         }, 
         function () {
		 	var subm = jQuery(this).find(".menu");
			if(subm[0] != undefined){ console.log(submenuopen);
			
				if(jQuery(this).hasClass('menu-expandido-doble')){
					
				}			
				if(submenuopen==0){
					jQuery('body').removeClass('mopen2');
					jQuery('body').removeClass('mopen');
					
				}	
				subm.hide('slow');
				if(submenuopen==1){
					sbm.show('slow');
				}
				
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

