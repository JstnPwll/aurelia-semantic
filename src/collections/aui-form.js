import { inject, bindable, bindingMode, containerless } from 'aurelia-framework';
import { SemanticElementBase } from '../aui-base';
import { constants } from '../constants';
import { bindableEnum, bindableToggle } from '../decorators';

@containerless()
export class AuiFormCustomElement extends SemanticElementBase {

  @bindableEnum(constants.formStates) state;
  @bindableEnum(constants.sizes) size;
  @bindableToggle loading = false;
  @bindable behaviors;
  @bindableToggle equalWidth;
  @bindableToggle inverted;

  attached(){
    this.behaviorsChanged();
    this.bindingSubscription = this.bindingEngine.propertyObserver(this.semanticElement, 'className')
      .subscribe((newValue, oldValue) => this.classChanged(newValue, oldValue));
  }

  detached(){
    this.bindingSubscription && this.bindingSubscription.dispose();
  }

  behaviorsChanged(){
    if(Array.isArray(this.behaviors)){
      $(this.semanticElement).form(...this.behaviors);
    }else{
       $(this.semanticElement).form(this.behaviors);
    }
  }

  /**
   * Triggered when the semanticElement's class changes. This is used to update the two-way bindable `state` property, since the form's state may be changed by the jQuery plugin.
   * @param  {String} newValue New value of class attribute
   * @param  {String} oldValue Old value of class attribute
   */
  classChanged(newValue, oldValue){
    let classes = newValue.split(' ');
    let states = Array.isArray(this.state)?this.state:[this.state];
    let statesChanged = false;
    states.slice().reverse().forEach(function(state, index, arry) {
      if(!classes.includes(state)) {
        states.splice(arry.length - 1 - index, 1);
        statesChanged = true;
      }
    });
    classes.forEach(clss => {
      if(!clss) return;
      if(constants.formStates.includes(clss) && !states.includes(clss)){
        states.push(clss);
        statesChanged = true;
      }
    });
    if(states.length < 2)
      states = states.join('');
    if(statesChanged)
      this.state = states;
  }

}
