//import { boolean, object } from '@storybook/addon-knobs';
import notes from './readme.md';
import { select, number } from '@storybook/addon-knobs';
import { generatedBrands } from '../../core/generated/brands';

export default {
  title: 'Brand|Icon',
};

export const story1 = () => {
  return `<table class="table">
    
    <tbody>
      <tr>
        <td>
          <cds-brand-icon variant="${select(
            'Variant',
            generatedBrands.icons,
            'primary-icon'
          )}" size="small" 
          width="${number('Width', undefined)}" 
          height="${number('Height', undefined)}">
          </cds-brand-icon>
        </td>
        <td>
          <code>small</code>
        </td>
      </tr>
          
      <tr>
        <td><cds-brand-icon variant="${select('Variant', generatedBrands.icons, 'primary-icon')}"
        width="${number('Width', undefined)}" 
        height="${number('Height', undefined)}">
        </cds-brand-icon></td>
        <td>     
        <code>Regular</code>           
        </td>
      </tr>
          
      <tr>
        <td><cds-brand-icon variant="${select(
          'Variant',
          generatedBrands.icons,
          'primary-icon'
        )}"  size="medium"
        width="${number('Width', undefined)}" 
        height="${number('Height', undefined)}">
        </cds-brand-icon></td>
        <td>
          <code>medium</code>
        </td>
      </tr>
      
      <tr>
        <td><cds-brand-icon variant="${select(
          'Variant',
          generatedBrands.icons,
          'primary-icon'
        )}"  size="large"
        width="${number('Width', undefined)}" 
        height="${number('Height', undefined)}">
        </cds-brand-icon></td>
        <td>
          <code>large</code>
        </td>
      </tr>    
      
    </tbody>
</table>`;
};

story1.story = {
  name: 'Sizes',
  parameters: {
    notes: notes,
  },
};
