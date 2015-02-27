<?php

/**
 * @file
 * Default implementation of a line item summary template.
 *
 * Available variables:
 * - $quantity_raw: The number of items in the cart.
 * - $quantity_label: The quantity appropriate label to use for the number of
 *   items in the shopping cart; "item" or "items" by default.
 * - $quantity: A single string containing the number and label.
 * - $total_raw: The raw numeric value of the total value of items in the cart.
 * - $total_label: A text label for the total value; "Total:" by default.
 * - $total: The currency formatted total value of items in the cart.
 * - $links: A rendered links array with cart and checkout links.
 *
 * Helper variables:
 * - $view: The View the line item summary is attached to.
 *
 * @see template_preprocess()
 * @see template_process()
 */
?>
<div class="selector-fecha-entrega">
  <select id="select-fecha-entrega">
    <?php 
      for($i=0;$i<3;$i++){
        setlocale(LC_ALL, 'es_CR');
        $nextTuesday = strtotime('next tuesday');
        $nextFriday = strtotime('next friday');
        $nextTuesday2 = strtotime('next week tuesday');
        $nextFriday2 = strtotime('next week friday');
        $weekNo = date('W');
        $weekNoNextTuesday = date('W', $nextTuesday);
        $weekNoNextFriday = date('W', $nextFriday);
        $weekNoNextTuesday2 = date('W', $nextTuesday2);
        $weekNoNextFriday2 = date('W', $nextFriday2);
        $nextTuesday3 = strtotime('next week+1 tuesday');

        switch ($i) {
            case 0: 
              if ($weekNoNextTuesday == $weekNo) {
                  
                  print '<option value="martes '.date('D,j M',$nextTuesday).'"><b>Comprando para </b>'.date('D,j M',$nextTuesday).'</option>';
              
              } elseif($weekNoNextFriday == $weekNo){
                  
                  print '<option value="viernes '.date('D,j M',$nextFriday).'"><b>Comprando para </b>'.date('D,j M',$nextFriday).'</option>';
              }else{
                  print '<option value="martes '.date('D,j M',$nextTuesday).'"><b>Comprando para </b>'.date('D,j M',$nextTuesday).'</option>';
              }
              break;

            case 1:
              if(($weekNoNextTuesday == $weekNo)&&($weekNoNextFriday == $weekNo)){
                
                  print '<option value="viernes '.date('D,j M',$nextFriday).'"><b>Comprando para </b>'.date('D,j M',$nextFriday).'</option>';
              }elseif($weekNoNextFriday == $weekNo){
                   print '<option value="martes '.date('D,j M',$nextTuesday).'"><b>Comprando para </b>'.date('D,j M',$nextTuesday).'</option>';
              }else{
                  print '<option value="viernes '.date('D,j M',$nextFriday2).'"><b>Comprando para </b>'.date('D,j M',$nextFriday2).'</option>';
              }
              break;

            
            case 2:
              if (($weekNoNextTuesday == $weekNo)&&($weekNoNextFriday == $weekNo)) {
                
                  print '<option value="martes '.date('D,j M',$nextTuesday2).'"><b>Comprando para </b>'.date('D,j M',$nextTuesday2).'</option>';
              
              } elseif($weekNoNextFriday == $weekNo){
                
                  print '<option value="viernes '.date('D,j M',$nextFriday2).'"><b>Comprando para </b>'.date('D,j M',$nextFriday2).'</option>';
              } else{
                  print '<option value="martes '.date('D,j M',$nextTuesday3).'"><b>Comprando para </b>'.date('D,j M',$nextTuesday3).'</option>';
              }
              break;
          }  
        
      }
    ?>
  </select>
</div>
<div class="line-item-summary">
  
  <?php if ($total): ?>
  <div class="line-item-total">
    <span class="line-item-total-label"><?php print $total_label; ?></span> <span class="line-item-total-raw"><?php print $total; ?></span>
  </div>
  <?php endif; ?>
  
  <div class="line-item-quantity">
      <?php if ($quantity_raw): ?>
          <span class="line-item-quantity-raw"><?php print $quantity_raw; ?></span> <!--<span class="line-item-quantity-label"><?php print $quantity_label; ?></span>-->
        
      <?php else: ?>
        
          <span class="line-item-quantity-raw">0</span> <!--<span class="line-item-quantity-label"><?php print $quantity_label; ?></span>-->
        
      <?php endif; ?>
  </div>
  <?php print $links; ?>
</div>
