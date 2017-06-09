import { inject, containerless } from 'aurelia-framework';
import { SemanticElementBase } from '../aui-base';
import { bindableToggle } from '../decorators';

@containerless()
export class AuiContentCustomElement extends SemanticElementBase {

  @bindableToggle visible = true;
  @bindableToggle hidden;

  attached(){

  }

  detached(){
    
  }

}
