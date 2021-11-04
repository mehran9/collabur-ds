import { newSpecPage } from '@stencil/core/testing';
import { BrandLogo } from '../brand-logo';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [BrandLogo],
    html: `<cds-brand-logo size="large" variant="primary-logo">
           </cds-brand-logo>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-brand-logo class="icon is-large" variant="primary-logo" size="large">
      <img class="cds-brand-logo-img-svg" src="/assets/brand/logos/primary-logo.svg">
    </cds-brand-logo>
  `);
});
