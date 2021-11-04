import { newSpecPage } from '@stencil/core/testing';
import { BrandFavicon } from '../brand-favicon';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [BrandFavicon],
    html: `<cds-brand-favicon size="large" variant="favicon">
           </cds-brand-favicon>`,
  });

  expect(page.root).toEqualHtml(`
    <cds-brand-favicon class="icon is-large" variant="favicon" size="large">
      <img class="cds-brand-favicon-img-svg" src="/assets/brand/favicon/favicon.svg">
    </cds-brand-favicon>
  `);
});
