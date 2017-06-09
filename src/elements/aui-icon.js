import { inject, containerless } from 'aurelia-framework';
import { SemanticElementBase } from '../aui-base';
import { constants } from '../constants';
import { bindableEnum } from '../decorators';

@containerless()
export class AuiIconCustomElement extends SemanticElementBase {

  @bindableEnum() icon;
  @bindableEnum(constants.colors) color;

  attached(){

  }

  detached(){
    
  }

}
