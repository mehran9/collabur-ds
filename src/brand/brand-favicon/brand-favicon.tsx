import { Component, Prop, h, JSX, ComponentInterface, Host, getAssetPath } from '@stencil/core';
import SVGInject from '@iconfu/svg-inject';
import { generatedBrands } from '../../core/generated/brands';

/**
 * Icon
 * @category Brand
 * @subCategory Sub-category
 * @icon check.svg
 */
@Component({
  tag: 'cds-brand-favicon',
  styleUrls: ['brand-favicon.scss'],
  assetsDirs: ['assets'],
})
export class BrandFavicon implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Size
   */
  @Prop() size: 'small' | 'medium' | 'large';

  /**
   * Width (px)
   */
  @Prop() width?: number;

  /**
   * Height (px)
   */
  @Prop() height?: number;

  /**
   * Variant
   */
  @Prop() variant: typeof generatedBrands.favicon[number];

  imgSvgEl: HTMLElement;

  componentDidLoad() {
    SVGInject(this.imgSvgEl);
  }

  render(): JSX.Element {
    const iconSrc = `/assets/brand/favicon/${this.variant}.svg`;
    const style: { [key: string]: string } = {};
    if (this.width) {
      style.width = `${this.width}px`;
    }
    if (this.height) {
      style.height = `${this.height}px`;
    }
    return (
      <Host
        class={{
          icon: true,
          [`is-${this.size}`]: Boolean(this.size),
          [this.class]: Boolean(this.class),
        }}
        style={style}
      >
        {this.variant && (
          <img
            ref={(el) => (this.imgSvgEl = el as HTMLElement)}
            class="cds-brand-favicon-img-svg"
            src={getAssetPath(iconSrc)}
          />
        )}
      </Host>
    );
  }
}
