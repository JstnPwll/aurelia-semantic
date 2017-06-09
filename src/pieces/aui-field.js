import { bindable, containerless, children } from 'aurelia-framework';
import { SemanticElementBase } from '../aui-base';
import { bindableToggle } from '../decorators';
import { constants } from '../constants';

@containerless()
export class AuiFieldCustomElement extends SemanticElementBase {

  @bindableToggle inline;
  @bindableToggle required;
  @bindable label;
  @bindable width;
  for = "";
  labelAfter = false;

  inputTypes = ['input','select','textarea','aui-input','aui-checkbox','aui-radio','aui-textarea','aui-dropdown'];

  /**
   * Check if there is a child input with an ID and assign the 'for' attribute
   */
  attached(){
    if(!this.for){
      let input = $(this.semanticElement).find(this.inputTypes.join(',')).filter((i, el) => {
        return el.id;
      });
      if(input.length){
        this.for = input[0].id;
      }
    }
  }

  bind(){
    this.label = this.label||this.element.getAttribute('label');
    this.width = this.width||this.element.getAttribute('width');
    this.setWidth();
  }

  /**
   * Sets the width to either a semantic grid width class, or a raw style
   */
  setWidth(){
    if(!this.width)
      return;
    if(constants.gridWidths.includes(this.width)){
      this.addCssClasses(this.width+' wide');
    }else{
      this.addCssStyles({'width':this.width});
    }
  }
}
