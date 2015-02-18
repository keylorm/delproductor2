<?php

/**
 * Preprocess variables for html.tpl.php
 *
 * @see system_elements()
 * @see html.tpl.php
 */
function delproductor_orbelink_preprocess_html(&$variables) {
  // Add conditional stylesheets for IE
  drupal_add_css(path_to_theme() . '/css/commerce-kickstart-theme-ie-lte-8.css', array('group' => CSS_THEME, 'weight' => 23, 'browsers' => array('IE' => 'lte IE 8', '!IE' => FALSE), 'preprocess' => FALSE));
  drupal_add_css(path_to_theme() . '/css/commerce-kickstart-theme-ie-lte-7.css', array('group' => CSS_THEME, 'weight' => 24, 'browsers' => array('IE' => 'lte IE 7', '!IE' => FALSE), 'preprocess' => FALSE));


  // Add external libraries.
  drupal_add_library('delproductor_orbelink', 'selectnav');
}

/**
 * Implements hook_library().
 */
function delproductor_orbelink_library() {
  $libraries['selectnav'] = array(
    'title' => 'Selectnav',
    'version' => '',
    'js' => array(
      libraries_get_path('selectnav.js') . '/selectnav.min.js' => array(),
    ),
  );
  return $libraries;
}

/**
 * Override the submitted variable.
 */
function delproductor_orbelink_preprocess_node(&$variables) {
  $variables['submitted'] = $variables['date'] . ' - ' . $variables['name'];
  if ($variables['type'] == 'blog_post') {
    $variables['submitted'] = t('By') . ' ' . $variables['name'] . ', ' . $variables['date'];
  }
}

/**
 * Override the submitted variable.
 */
function delproductor_orbelink_preprocess_page(&$variables) {
    $variables['page']['content']['preface']['#grid_container'] = 0;
    $variables['page']['content']['content']['#grid_container'] = 0;
    $variables['page']['content']['content_below']['#grid_container'] = 0;
    $variables['page']['content']['postscript']['#grid_container'] = 0;
  
}

function delproductor_orbelink_form_alter(&$form, &$form_state, $form_id){
/*  if($form_id=='views_exposed_form'){
    $form['field_caracteristica_del_product_tid']['#options']['All'] = "Todos";
  }*/
  if($form_id=='views_exposed_form'){
    $form['submit']['#value'] = "Buscar";
  }
}


function delproductor_orbelink_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];

  if (!empty($breadcrumb)) {
    // Provide a navigational heading to give context for breadcrumb links to
    // screen-reader users. Make the heading invisible with .element-invisible.
    $output = '<h2 class="element-invisible">' . t('You are here') . '</h2>';

    $output .= '<div class="breadcrumb">' . implode(' ', $breadcrumb) . '</div>';
    return $output;
  }
}

function delproductor_orbelink_menu_tree__menu_block(&$variables) {
  
  return '<ul class="primer-nivel-menu menu">' . $variables['tree'] . '</ul>';
}

/**
 * Implements theme_menu_link().
 */
function delproductor_orbelink_menu_link(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';

  if ($element['#below']) {
    // Wrap in dropdown-menu.
    unset($element['#below']['#theme_wrappers']);
    $sub_menu = '<ul class="nivel-interno-menu menu">' . drupal_render($element['#below']) . '</ul>';
  }
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}