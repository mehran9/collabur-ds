import { newSpecPage } from '@stencil/core/testing';
import { Pagination } from '../pagination';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Pagination],
    html: `
      <cds-pagination>
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>

        <ul class="pagination-list">
          <li>
            <a class="pagination-link" aria-label="Goto page 1">
              1
            </a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 45">
              45
            </a>
          </li>
          <li>
            <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">
              46
            </a>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 47">
              47
            </a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 86">
              86
            </a>
          </li>
        </ul>
      </cds-pagination>
    `,
  });

  expect(page.root).toEqualHtml(`
    <cds-pagination>
      <nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>

        <ul class="pagination-list">
          <li>
            <a class="pagination-link" aria-label="Goto page 1">
              1
            </a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 45">
              45
            </a>
          </li>
          <li>
            <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">
              46
            </a>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 47">
              47
            </a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 86">
              86
            </a>
          </li>
        </ul>
      </nav>
    </cds-pagination>
  `);
});
