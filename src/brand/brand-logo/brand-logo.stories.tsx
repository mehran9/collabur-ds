//import { boolean, object } from '@storybook/addon-knobs';
import notes from './readme.md';
import { select, number } from '@storybook/addon-knobs';
import { generatedBrands } from '../../core/generated/brands';

export default {
  title: 'Brand|Logo',
};

export const story1 = () => {
  return `<table class="table">
    
    <tbody>
      <tr>
        <td>
          <cds-brand-logo variant="${select(
            'Variant',
            generatedBrands.logos,
            'primary-logo'
          )}" size="small" 
          width="${number('Width', undefined)}" 
          height="${number('Height', undefined)}">
          </cds-brand-logo>
        </td>
        <td>
          <code>small</code>
        </td>
      </tr>
          
      <tr>
        <td><cds-brand-logo variant="${select('Variant', generatedBrands.logos, 'primary-logo')}"
        width="${number('Width', undefined)}" 
        height="${number('Height', undefined)}">
        </cds-brand-logo></td>
        <td>     
        <code>Regular</code>           
        </td>
      </tr>
          
      <tr>
        <td><cds-brand-logo variant="${select(
          'Variant',
          generatedBrands.logos,
          'primary-logo'
        )}"  size="medium"
        width="${number('Width', undefined)}" 
        height="${number('Height', undefined)}">
        </cds-brand-logo></td>
        <td>
          <code>medium</code>
        </td>
      </tr>
      
      <tr>
        <td><cds-brand-logo variant="${select(
          'Variant',
          generatedBrands.logos,
          'primary-logo'
        )}"  size="large"
        width="${number('Width', undefined)}" 
        height="${number('Height', undefined)}">
        </cds-brand-logo></td>
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
