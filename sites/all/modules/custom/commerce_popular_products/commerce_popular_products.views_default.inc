<?php
/**
 * @file
 * Defines the default View to display popular products.
 */

/**
 * Implements hook_views_default_views().
 */
function commerce_popular_products_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'popular_commerce_products';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'commerce_order';
  $view->human_name = 'Popular Commerce Products';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially. */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
$handler->display->display_options['group_by'] = TRUE;
$handler->display->display_options['access']['type'] = 'none';
$handler->display->display_options['cache']['type'] = 'none';
$handler->display->display_options['query']['type'] = 'views_query';
$handler->display->display_options['query']['options']['query_comment'] = FALSE;
$handler->display->display_options['exposed_form']['type'] = 'basic';
$handler->display->display_options['pager']['type'] = 'none';
$handler->display->display_options['pager']['options']['offset'] = '0';
$handler->display->display_options['style_plugin'] = 'default';
$handler->display->display_options['row_plugin'] = 'fields';
/* Relationship: Commerce Order: Referenced line item */
$handler->display->display_options['relationships']['commerce_line_items_line_item_id']['id'] = 'commerce_line_items_line_item_id';
$handler->display->display_options['relationships']['commerce_line_items_line_item_id']['table'] = 'field_data_commerce_line_items';
$handler->display->display_options['relationships']['commerce_line_items_line_item_id']['field'] = 'commerce_line_items_line_item_id';
$handler->display->display_options['relationships']['commerce_line_items_line_item_id']['required'] = 1;
/* Relationship: Commerce Line item: Referenced product */
$handler->display->display_options['relationships']['commerce_product_product_id']['id'] = 'commerce_product_product_id';
$handler->display->display_options['relationships']['commerce_product_product_id']['table'] = 'field_data_commerce_product';
$handler->display->display_options['relationships']['commerce_product_product_id']['field'] = 'commerce_product_product_id';
$handler->display->display_options['relationships']['commerce_product_product_id']['relationship'] = 'commerce_line_items_line_item_id';
$handler->display->display_options['relationships']['commerce_product_product_id']['required'] = 1;
/* Relationship: Commerce Product: Node referencing products from field_product */
$handler->display->display_options['relationships']['field_product']['id'] = 'field_product';
$handler->display->display_options['relationships']['field_product']['table'] = 'commerce_product';
$handler->display->display_options['relationships']['field_product']['field'] = 'field_product';
$handler->display->display_options['relationships']['field_product']['relationship'] = 'commerce_product_product_id';
$handler->display->display_options['relationships']['field_product']['label'] = 'Node';
$handler->display->display_options['relationships']['field_product']['required'] = 0;
/* Field: Content: Title */
$handler->display->display_options['fields']['title_1']['id'] = 'title_1';
$handler->display->display_options['fields']['title_1']['table'] = 'node';
$handler->display->display_options['fields']['title_1']['field'] = 'title';
$handler->display->display_options['fields']['title_1']['relationship'] = 'field_product';
$handler->display->display_options['fields']['title_1']['label'] = '';
$handler->display->display_options['fields']['title_1']['alter']['alter_text'] = 0;
$handler->display->display_options['fields']['title_1']['alter']['make_link'] = 0;
$handler->display->display_options['fields']['title_1']['alter']['absolute'] = 0;
$handler->display->display_options['fields']['title_1']['alter']['external'] = 0;
$handler->display->display_options['fields']['title_1']['alter']['replace_spaces'] = 0;
$handler->display->display_options['fields']['title_1']['alter']['trim_whitespace'] = 0;
$handler->display->display_options['fields']['title_1']['alter']['nl2br'] = 0;
$handler->display->display_options['fields']['title_1']['alter']['word_boundary'] = 1;
$handler->display->display_options['fields']['title_1']['alter']['ellipsis'] = 1;
$handler->display->display_options['fields']['title_1']['alter']['more_link'] = 0;
$handler->display->display_options['fields']['title_1']['alter']['strip_tags'] = 0;
$handler->display->display_options['fields']['title_1']['alter']['trim'] = 0;
$handler->display->display_options['fields']['title_1']['alter']['html'] = 0;
$handler->display->display_options['fields']['title_1']['element_label_colon'] = FALSE;
$handler->display->display_options['fields']['title_1']['element_default_classes'] = 1;
$handler->display->display_options['fields']['title_1']['hide_empty'] = 0;
$handler->display->display_options['fields']['title_1']['empty_zero'] = 0;
$handler->display->display_options['fields']['title_1']['hide_alter_empty'] = 1;
$handler->display->display_options['fields']['title_1']['link_to_node'] = 0;
/* Field: Content: Link */
$handler->display->display_options['fields']['view_node']['id'] = 'view_node';
$handler->display->display_options['fields']['view_node']['table'] = 'views_entity_node';
$handler->display->display_options['fields']['view_node']['field'] = 'view_node';
$handler->display->display_options['fields']['view_node']['relationship'] = 'field_product';
$handler->display->display_options['fields']['view_node']['label'] = '';
$handler->display->display_options['fields']['view_node']['alter']['alter_text'] = 0;
$handler->display->display_options['fields']['view_node']['alter']['make_link'] = 0;
$handler->display->display_options['fields']['view_node']['alter']['absolute'] = 0;
$handler->display->display_options['fields']['view_node']['alter']['replace_spaces'] = 0;
$handler->display->display_options['fields']['view_node']['alter']['trim_whitespace'] = 0;
$handler->display->display_options['fields']['view_node']['alter']['nl2br'] = 0;
$handler->display->display_options['fields']['view_node']['alter']['word_boundary'] = 1;
$handler->display->display_options['fields']['view_node']['alter']['ellipsis'] = 1;
$handler->display->display_options['fields']['view_node']['alter']['more_link'] = 0;
$handler->display->display_options['fields']['view_node']['alter']['strip_tags'] = 0;
$handler->display->display_options['fields']['view_node']['alter']['trim'] = 0;
$handler->display->display_options['fields']['view_node']['alter']['html'] = 0;
$handler->display->display_options['fields']['view_node']['element_label_colon'] = FALSE;
$handler->display->display_options['fields']['view_node']['element_default_classes'] = 1;
$handler->display->display_options['fields']['view_node']['hide_empty'] = 0;
$handler->display->display_options['fields']['view_node']['empty_zero'] = 0;
$handler->display->display_options['fields']['view_node']['hide_alter_empty'] = 1;
$handler->display->display_options['fields']['view_node']['text'] = 'view details';
/* Sort criterion: COUNT(Commerce Product: Title) */
$handler->display->display_options['sorts']['title']['id'] = 'title';
$handler->display->display_options['sorts']['title']['table'] = 'commerce_product';
$handler->display->display_options['sorts']['title']['field'] = 'title';
$handler->display->display_options['sorts']['title']['relationship'] = 'commerce_product_product_id';
$handler->display->display_options['sorts']['title']['group_type'] = 'count';
$handler->display->display_options['sorts']['title']['order'] = 'DESC';
/* Filter criterion: Commerce Line Item: Type */
$handler->display->display_options['filters']['type']['id'] = 'type';
$handler->display->display_options['filters']['type']['table'] = 'commerce_line_item';
$handler->display->display_options['filters']['type']['field'] = 'type';
$handler->display->display_options['filters']['type']['relationship'] = 'commerce_line_items_line_item_id';
$handler->display->display_options['filters']['type']['value'] = array(
'product' => 'product',
);
/* Filter criterion: Commerce Product: Type */
$handler->display->display_options['filters']['type_1']['id'] = 'type_1';
$handler->display->display_options['filters']['type_1']['table'] = 'commerce_product';
$handler->display->display_options['filters']['type_1']['field'] = 'type';
$handler->display->display_options['filters']['type_1']['relationship'] = 'commerce_product_product_id';
$handler->display->display_options['filters']['type_1']['value'] = array(
'product' => 'product',
); 

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'popular_products_block');
  $handler->display->display_options['block_description'] = 'Popular Commerce Products Block';

  $export['popular_commerce_products'] = $view;

  return $export;
}
