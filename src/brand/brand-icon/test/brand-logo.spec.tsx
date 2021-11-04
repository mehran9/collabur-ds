import { newSpecPage } from '@stencil/core/testing';
import { BrandIcon } from '../brand-icon';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [BrandIcon],
    html: `<cds-brand-icon size="large" variant="primary-logo">
           </cds-brand-icon>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-brand-icon class="icon is-large" variant="primary-logo" size="large">
      <img class="cds-brand-icon-img-svg" src="/assets/brand/icons/primary-logo.svg">
    </cds-brand-icon>
  `);
});
