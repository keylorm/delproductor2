jQuery.noConflict(); 
jQuery(document).ready(function(){
	
	
	/* FUNCIONALIDAD MENÚ PRINCIPAL */
	 var submenuopen = 0; var open2 = 0;
	 var mactiv = jQuery('#zone-menu-wrapper #block-system-main-menu .menu .active-trail');
	 var sbm = mactiv.find(".menu");
	 if(mactiv.length > 0){
		submenuopen = 1;
		if(mactiv.hasClass('menu-expandido-doble')){
			jQuery('body').addClass('mopen2');
			var open2 = 1;
		}
		jQuery('body').addClass('mopen');
		//var subm2 = mactiv.find(".menu");
		sbm.show('slow');				 
	 }	
	
	jQuery('#zone-menu-wrapper #block-system-main-menu .menu .mp').hover(
         function () {
		 	var subm = jQuery(this).find(".menu");
			if(subm[0] != undefined){
				if(jQuery(this).hasClass('menu-expandido-doble')){
					jQuery('body').addClass('mopen2');
				}else{
					jQuery('body').removeClass('mopen2');
				}				
				jQuery('body').addClass('mopen');
				if(submenuopen==1){
					//sbm.hide('slow');
					sbm.css({display:'none'});
				}				
				//subm.show('slow');
				subm.css({display:'block'});
			}
         }, 
         function () {
		 	var subm = jQuery(this).find(".menu");
			if(subm[0] != undefined){
			
				/*if(jQuery(this).hasClass('menu-expandido-doble')){
					//jQuery('body').removeClass('mopen2');
				}	*/		
				if(submenuopen==0){
					jQuery('body').removeClass('mopen2');
					jQuery('body').removeClass('mopen');
					
				}	
				//subm.hide('slow');
				subm.css({display:'none'});
				if(open2==1){
					jQuery('body').addClass('mopen2');
				}else{
					jQuery('body').removeClass('mopen2');
				}				
				if(submenuopen==1){
					//sbm.show('slow');
					sbm.css({display:'block'});
				}
				
			}			
			//console.log(subm[0]);
         }
     );
	 /*************************/

	jQuery("#edit-field-caracteristica-del-product-tid input").click(function(){
			jQuery("#edit-submit-p-gina-de-productores").click();
		}
	);
	
	jQuery(".page-recetas .receta").css({'display':'none'});

	/* FUNCIONALIDAD MENÚ SIDEBAR */
	 var m1 = jQuery('.menu-block-4 > ul > .active-trail');
	 
	 var sm1 = m1.find(".menu:first");
	 sm1.prev().addClass('acti1');
	 
	 var sm2 = sm1.find(".menu:first");
	 sm2.prev().addClass('acti2');
	 
	 sm1.css({display: 'block'});
	 sm2.css({display: 'block'});

	jQuery('.menu-block-4 > ul > .lim').click(function(event){
		jQuery(".menu-block-4 .menu").find('span').removeClass('acti1');
		jQuery(this).find('span').addClass('acti1');
		var elem = jQuery(this).find('.menu:first');
		if(elem.is('ul')){
			jQuery('.lim').find('.menu:first').not(elem).slideUp();
			elem.slideDown('slow');
		}
	});

	jQuery('.menu-block-4 > .menu > li > ul > li').click(function(event){
		jQuery(".menu-block-4 .menu li ul").find('span').removeClass('acti2');
		jQuery(this).find('span').addClass('acti2');
		var elem = jQuery(this).find('.menu:first');
		if(elem.is('ul')){
			jQuery('.menu-block-4 .menu > li > ul > li > ul:visible').not(elem).slideUp();
			elem.slideDown('slow')
		}
	});	
	/***************************/
	
		
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

