import { bindable } from 'aurelia-framework';
import { constants } from './constants';

/**
 * Marks a particular element's property as bindable, using a value from a list of valid values as the class name
 * @param  {Array[String]} validValues An array of valid values for the property
 */
export function bindableEnum(validValues, options) {
    options = Object.assign({}, options);
    return function (target, name, descriptor) {
        let changedMethodName = `${name}Changed`;
        if(typeof target[changedMethodName] == 'function')
          return;

        target[changedMethodName] = function(newValue, oldValue) {
            this.removeCssClasses(oldValue);
            if(options.includeName)
              this.removeCssClasses(name);
            if(!validValues||validValues.includes(newValue)){
              this.addCssClasses(newValue);
              if(options.includeName)
                this.addCssClasses(name);
            }
        };

        let originalBind = target.bind;
        target.bind = function(...args){
            if (originalBind) {
                Reflect.apply(originalBind, this, args);
            }
            if ((this[name] || this[name] === '') && (!validValues||validValues.includes(this[name]))) {
                this.addCssClasses(this[name]);
                if(options.includeName)
                  this.addCssClasses(name);
            }
        };

        return bindable(target, name, descriptor);
    };
}

/**
 * Marks a particular element's property as bindable, using the property name as the element's class name
 */
export function bindableToggle(target, name, descriptor) {
    let changedMethodName = `${name}Changed`;
    if(typeof target[changedMethodName] == 'function')
          return;
    target[changedMethodName] = function(newValue){
        if (newValue) { this.addCssClasses(name); }
        else { this.removeCssClasses(name); }
    };

    let originalBind = target.bind;
    target.bind = function(...args){
        if (originalBind) {
            Reflect.apply( originalBind, this, args);
        }
        if (this[name] !== null && this[name] !== false && typeof this[name] != 'undefined') {
            this.addCssClasses(name);
        }
    };

    return bindable(target, name, descriptor);
}
