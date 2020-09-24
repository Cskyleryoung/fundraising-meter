# Fundraising Meter

A simple, embeddable meter widget that display progress for a fundraising campaign.

## How to use

1. Add the `fundraising-meter.min.js` script just before the closing `body` tag.
2. Add `<div id="kindful-meter"></div>` to your page where you want the meter to appear.
3. Use optional `data` attributes to customize the meter (see below).

## Available data attributes

### data-title

An optional title to display under the meter.

### data-goal

The goal amount you are trying to raise.

### data-raised

The actual amount raised to date.

### data-color

The background color of your meter in RGB, for example: `35, 207, 130` (which is also the default). Will be displayed as gradient.

### data-height

The height of your meter in pixels. Defaults to `300`.

### data-width

The width of your meter in pixels. Defaults to `60`.

## Misc Notes

Feel free to override other styles with CSS. You may need to use the `!important` override for some as they are inline.

## Use in Wordpress

This file can also be used as a Wordpress plugin. Simply ZIP and upload like any other local plugin. Use the short code `[kindful-meter]`. Pass in data attributes to the short code minus the `data-` string. For example, the bare minimum short code would be `[kindful-meter kindful-url="YOUR_URL_HERE"]`.