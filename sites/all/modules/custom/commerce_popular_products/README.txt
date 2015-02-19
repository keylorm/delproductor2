Commerce Popular Products
+++++++++++++++++++++++++++

Commerce Popular Projects looks through your Drupal Commerce orders and figures
out the most popular products for a given timeframe. You can include/exclude
product node types, set the timeframe for your popularity ranking and calls a
View to display your Commerce products.

The settings screen is found in the main Commerce store settings.

Popular products are displayed using a View which pulls in title only by
default. The View can be overridden through the Views UI. The View is displayed
in a block.
On install the module attempts to place the block in the main content area, but
if it cannot, you must set the block location manually. Obviously, because it
is a block, you can use Context to control positioning.

When the block is viewed, the module attempts to retrieve cached data about
product popularity. If no cached data is available, it generates data, keeping
its calculations within the timeframe as defined by the module settings, e.g.
the last month. In parallel to this, the data is refreshed every time a
customer completes checkout.

All the settings are stored in the Variable table and are prepended by the
module name.

Installation:

Install Views
Install Commerce (& commerce modules).
Commerce Popular Modules depends on the following Commerce modules:
commerce_ui
commerce_cart
commerce_checkout
commerce_customer
commerce_line_item
commerce_order
commerce_payment
commerce_price
commerce_product
commerce_product_reference
commerce_product_pricing

Install Commerce Popular Products
Place the block wherever you want it
Set up your products & product displays.
Customize the view as you see fit.
The default settings are sensible, but if you want them they live at
admin/commerce/config/popular-products.
