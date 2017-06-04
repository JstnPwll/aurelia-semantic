import { bindable, bindingMode, containerless } from 'aurelia-framework';
import $ from 'jquery';

@containerless()
@inject(Element)
export class AuiFormCustomElement {

  @bindable({defaultBindingMode: bindingMode.twoWay}) size;
  @bindable({defaultBindingMode: bindingMode.twoWay}) state;
  @bindable equalWidth;
  @bindable inverted;
  @bindable behaviors;

  sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'];
  states = ['loading', 'success', 'error', 'warning'];

  constructor(element){
    this.element = element;
  }

  bind() {
    this.setSize(this.size || this.element.getAttribute('size'));
    this.setState(this.state || this.element.getAttribute('state'));
  }

  attached(){
    if(this.behaviors)
      $(this.element).form(this.behaviors);
  }

  setSize(size){
    this.size = sizes.includes(size) ? size : '';
  }

  setState(state){
    this.state = states.includes(state) ? state : '';
  }

  getModifiers(){
    let modifiers = [];
    if(this.size)
      modifiers.push(this.size);
    if(this.state)
      modifiers.push(this.state);
    if(this.equalWidth)
      modifiers.push('equal width');
    if(this.inverted)
      modifiers.push('inverted');
    return modifiers.join(' ');
  }

  behaviorsChanged(){
    $(this.element).form(this.behaviors);
  }

}
