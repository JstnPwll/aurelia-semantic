import { inject, children } from 'aurelia-framework';
import { SemanticElementBase } from '../aui-base';
import { constants } from '../constants';
import { bindableEnum, bindableToggle } from '../decorators';

export class AuiButtonCustomElement extends SemanticElementBase {

  @bindableEnum(constants.sizes) size;
  @bindableEnum(constants.emphases) emphasis;
  @bindableEnum(constants.buttonAnimations) animation;
  @bindableToggle animated;
  @bindableToggle icon;
  @bindableToggle basic;
  @bindableToggle inverted;
  @bindableEnum(constants.colors) color;

  // Labeled button
  @children('*') childLabelElements;
  @bindableToggle labeled = false;
  showInnerButton = false;

  /**
   * Fires when the child elements are assigned and looks for a label element. If found and there isn't already an inner button, attach non-label content to an inner button.
   */
  childLabelElementsChanged(){
    this.updateLabel();
    this.updateAnimated();
  }

  updateAnimated(){
    let content = this.childLabelElements.filter(el => {
      let classes = el.className?el.className.split(/[ ]+/):[];
      return (classes.includes('content')&&(classes.includes('visible')||classes.includes('hidden')));
    });
    if(content.length == 2){
      this.animation = this.animation || '';
      this.animated = true;
    }
  }

  updateLabel(){
    let labelElement = this.childLabelElements.find(el => {
      let classes = el.className?el.className.split(/[ ]+/):[];
      return (classes.includes('ui')&&classes.includes('label'))||(el.element&&el.element.tagName == 'AUI-LABEL');
    });
    if(labelElement && !labelElement.tagName)
      labelElement = labelElement.element;
    this.labeled = labelElement != null;
    if(this.labeled){
      let innerButton = this.childLabelElements.find(el => {
        let classes = el.className?el.className.split(/[ ]+/):[];
        return classes.includes('ui')&&classes.includes('button')&&!classes.includes('__aui-button');
      });
      if(!innerButton){
        let innerButton = labelElement.parentNode.querySelector('.__aui-button');
        let el = labelElement.parentNode.firstChild;
        while(el){
          if(!el.isSameNode(labelElement) && !el.isSameNode(innerButton)){
            el.parentNode.removeChild(el);
            innerButton.appendChild(el);
            el = labelElement.parentNode.firstChild;
          }else{
            el = el.nextSibling;
          }
        }
        this.showInnerButton = true;
      }
    }
  }

  attached(){
    this.animated = this.animation != false && this.animation != null && typeof this.animation != 'undefined';
  }

  detached(){
    
  }

}
