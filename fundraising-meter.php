<?php
/*
 * Plugin Name: Fundraising Meter
 * Author: C. Skyler Young
 * Description: Simple widget, displayed via shortcode, that displays a fundraising meter pulling data from HTML attributes.
 */

namespace sv;

function fundraising_meter_init( $atts ) {

    // Add script
    wp_enqueue_script( 'sv-fundraising-meter', plugin_dir_url( __FILE__ ) . 'fundraising-meter.min.js', Array(), false, true );

    // Define Attributes
    $a = shortcode_atts( array(
        'goal' => '',
        'raised' => '',
        'color' => '',
        'height' => '',
        'width' => '',
	), $atts );

    $html = '<div id="fundraising-meter"';

    foreach($a as $att => $val) {
        if ( ! empty($val) ) {
            $html .= ' data-' . $att . '="' . $val . '"';
        }
    }

    $html .= '></div>';

	return $html;
}

add_shortcode( 'fundraising_meter', 'sv\fundraising_meter_init' );