import { AuiFormCustomElement } from './collections/aui-form';

import { AuiButtonCustomElement } from './elements/aui-button';
import { AuiLabelCustomElement } from './elements/aui-label';
import { AuiIconCustomElement } from './elements/aui-icon';

import { AuiContentCustomElement } from './pieces/aui-content';
import { AuiFieldCustomElement } from './pieces/aui-field';

export function configure(config, options) {
  config.globalResources(
    './collections/aui-form',

    './elements/aui-button',
    './elements/aui-label',
    './elements/aui-icon',

    './pieces/aui-content',
    './pieces/aui-field'
  );
}

export {
  AuiFormCustomElement,
  
  AuiButtonCustomElement,
  AuiLabelCustomElement,
  AuiIconCustomElement,

  AuiContentCustomElement,
  AuiFieldCustomElement
};
