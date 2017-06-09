import { inject, containerless } from 'aurelia-framework';
import { SemanticElementBase } from '../aui-base';
import { constants } from '../constants';
import { bindableEnum, bindableToggle } from '../decorators';

@containerless()
export class AuiLabelCustomElement extends SemanticElementBase {

  @bindableEnum(constants.colors) color;
  @bindableEnum(constants.directions, {includeName:true}) pointing;

  attached(){

  }

  detached(){
    
  }

}
