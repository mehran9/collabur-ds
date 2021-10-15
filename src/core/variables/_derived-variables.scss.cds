/** This file contains:
 * 1) a copy of the Bulma's default _derived-variables.scss
 * 2) custom colors
 *
 *  Any Bulma overrides should be added below the commented out line
 */

$primary: ###colour.core.primary.hex### !default;
$secondary: ###colour.core.secondary.hex### !default;

$info: $cyan !default;
$success: $green !default;
$warning: $yellow !default;
$danger: $red !default;

$light: $white-ter !default;
$dark: $grey-darker !default;

// Invert colors
$orange-invert: findColorInvert($orange) !default;
$yellow-invert: findColorInvert($yellow) !default;
$green-invert: findColorInvert($green) !default;
$turquoise-invert: findColorInvert($turquoise) !default;
$cyan-invert: findColorInvert($cyan) !default;
$blue-invert: findColorInvert($blue) !default;
$purple-invert: findColorInvert($purple) !default;
$red-invert: findColorInvert($red) !default;

$primary-invert: findColorInvert($primary) !default;
$primary-light: findLightColor($primary) !default;
$primary-dark: findDarkColor($primary) !default;
$secondary-invert: findColorInvert($secondary) !default;
$secondary-light: findLightColor($secondary) !default;
$secondary-dark: findDarkColor($secondary) !default;
$info-invert: findColorInvert($info) !default;
$info-light: findLightColor($info) !default;
$info-dark: findDarkColor($info) !default;
$success-invert: findColorInvert($success) !default;
$success-light: findLightColor($success) !default;
$success-dark: findDarkColor($success) !default;
$warning-invert: findColorInvert($warning) !default;
$warning-light: findLightColor($warning) !default;
$warning-dark: findDarkColor($warning) !default;
$danger-invert: findColorInvert($danger) !default;
$danger-light: findLightColor($danger) !default;
$danger-dark: findDarkColor($danger) !default;
$light-invert: findColorInvert($light) !default;
$dark-invert: findColorInvert($dark) !default;

// General colors
$background: $white-ter !default;

$border: $grey-lighter !default;
$border-hover: $grey-light !default;

// Text colors
$text: $grey-dark !default;
$text-invert: findColorInvert($text) !default;
$text-light: $grey !default;
$text-strong: $grey-darker !default;

// Code colors
$code: $red !default;
$code-background: $background !default;

$pre: $text !default;
$pre-background: $background !default;

// Link colors
$link: $blue !default;
$link-invert: $blue-invert !default;
$link-light: findLightColor($link) !default;
$link-dark: findDarkColor($link) !default;
$link-visited: $purple !default;

$link-hover: $grey-darker !default;
$link-hover-border: $grey-light !default;

$link-focus: $grey-darker !default;
$link-focus-border: $blue !default;

$link-active: $grey-darker !default;
$link-active-border: $grey-dark !default;

// Typography
$family-primary: $family-sans-serif !default;
$family-secondary: $family-sans-serif !default;
$family-code: $family-monospace !default;

$size-small: $size-7 !default;
$size-normal: $size-6 !default;
$size-medium: $size-5 !default;
$size-large: $size-4 !default;

// Lists and maps
$custom-colors: ('secondary': ($secondary, $secondary-invert, $secondary-light, $secondary-dark),
) !default;
$custom-shades: null !default;

$colors: mergeColorMaps(("white": ($white, $black), "black": ($black, $white), "light": ($light, $light-invert), "dark": ($dark, $dark-invert), "primary": ($primary, $primary-invert, $primary-light, $primary-dark), "link": ($link, $link-invert, $link-light, $link-dark), "info": ($info, $info-invert, $info-light, $info-dark), "success": ($success, $success-invert, $success-light, $success-dark), "warning": ($warning, $warning-invert, $warning-light, $warning-dark), "danger": ($danger, $danger-invert, $danger-light, $danger-dark)), $custom-colors) !default;
$shades: mergeColorMaps(('black-bis': $black-bis,
    'black-ter': $black-ter,
    'grey-darker': $grey-darker,
    'grey-dark': $grey-dark,
    'grey': $grey,
    'grey-light': $grey-light,
    'grey-lighter': $grey-lighter,
    'white-ter': $white-ter,
    'white-bis': $white-bis,
  ),
  $custom-shades) !default;

// Type Sizes
$sizes: $size-1 $size-2 $size-3 $size-4 $size-5 $size-6 $size-7 $size-8 $size-9 $size-10 !default;

// Spacing Scale
$spacing-scales: (xxxs: $spacing-xxxs,
  xxs: $spacing-xxs,
  xs: $spacing-xs,
  sm: $spacing-sm,
  md: $spacing-md,
  lg: $spacing-lg,
  xl: $spacing-xl,
  xxl: $spacing-xxl,
  xxxl: $spacing-xxxl,
  xxxxl: $spacing-xxxxl,
) !default;

// Layout Scale
$layout-scales: (xxs: $layout-xxs,
  xs: $layout-xs,
  sm: $layout-sm,
  md: $layout-md,
  lg: $layout-lg,
  xl: $layout-xl,
  xxl: $layout-xxl,
) !default;