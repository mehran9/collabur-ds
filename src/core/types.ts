import { generatedIconListType } from './generated/icons-type';

export type notificationTypeProp = 'primary' | 'info' | 'danger' | 'warning' | 'success' | 'link';

export type notificationPositionProp = 'default' | 'bottom' | 'top';

export type positionLocationsProp = 't' | 'tl' | 'tr' | 'b' | 'bl' | 'br';

export type tooltipPlacementProp = 'top' | 'right' | 'bottom' | 'left' | 'auto';

export type tooltipTriggerProp = 'hover' | 'click';

export type standardSizeProp = 'is-small' | '' | 'is-medium' | 'is-large';

export type tooltipColorProp =
  | ''
  | 'is-primary'
  | 'is-success'
  | 'is-warning'
  | 'is-danger'
  | 'is-info';

export type headingSizeProp = '1' | '2' | '3' | '4' | '5' | '6';

export type iconProp = generatedIconListType;

export type colorProp =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'link'
  | 'black'
  | 'white'
  | 'light'
  | 'dark';

export type textColorProp =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'link'
  | 'black'
  | 'white'
  | 'light'
  | 'dark'
  | 'grey'
  | 'grey-light';

export type textAlignmentProp = 'left' | 'right' | 'justified' | 'centered';

export type textTransformationProp = 'capitalized' | 'lowercase' | 'uppercase' | 'italic';

export type textWeightProp = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export type textFontFamilieProp = 'sans-serif' | 'monospace' | 'primary' | 'secondary' | 'code';

export type buttonColorProp =
  | 'primary'
  | 'secondary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'white'
  | 'light'
  | 'dark'
  | 'black'
  | 'text';

export type heroSizeProps = 'medium' | 'large' | 'fullheight';

export type imageRatioProps =
  | 'square'
  | '5by4'
  | '4by3'
  | '3by2'
  | '5by3'
  | '16by9'
  | '2by1'
  | '3by1'
  | '4by5'
  | '3by4'
  | '2by3'
  | '3by5'
  | '9by16'
  | '1by2'
  | '1by3';

export type heroOverlayProps =
  | 'lighten-light'
  | 'lighten-normal'
  | 'lighten-medium'
  | 'lighten-strong'
  | 'darken-light'
  | 'darken-normal'
  | 'darken-medium'
  | 'darken-strong';

export type backToTopFloatProps = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export type footerLayoutProps =
  | 'content-left'
  | 'content-right'
  | 'simple-center'
  | 'social-link-only';
export type footerDisclaimerPositionProps = 'left' | 'right' | 'center';
export type imageSizeProps = '16x16' | '24x24' | '32x32' | '48x48' | '64x64' | '96x96' | '128x128';
export type signInBoxSizeProps = 'small' | 'normal' | 'medium' | 'large';
export type typographySizeProp = '1' | '2' | '3' | '4' | '5' | '6' | '7';
export type columnSizes =
  | 'three-quarters'
  | 'two-thirds'
  | 'half'
  | 'one-third'
  | 'one-quarter'
  | 'full'
  | 'four-fifths'
  | 'three-fifths'
  | 'two-fifths'
  | 'one-fifth'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';
export type columnGapProps = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
