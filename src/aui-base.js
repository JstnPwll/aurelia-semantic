import { inject, BindingEngine, bindable } from 'aurelia-framework';
import { Utils } from './utils';


@inject(Element, BindingEngine)
export class SemanticElementBase {

	element;
	semanticElement;

  classList = [];
  classes = '';
  styleMap = new Map();
  styles = '';

	constructor(element, bindingEngine) {
		this.element = element;
    this.bindingEngine = bindingEngine;
	}

	created(owningView, myView) {
		this.semanticElement = this.getSemanticElement(this.element);
    this.initClasses();
    this.initStyles();
	}

  initClasses(){
    this.addCssClasses(this.element.getAttribute('class'));
    if(this.element.removeAttribute)this.element.removeAttribute('class');
  }

  initStyles(){
    this.addCssStyles(this.element.getAttribute('style'));
    //if(this.element.removeAttribute)this.element.removeAttribute('style');
  }

  addCssClasses(cssClasses) {
    let classList = Utils.normalizeCssClasses(cssClasses);
    classList.forEach(clss => {
      if(!this.classList.includes(clss))
        this.classList.push(clss);
    });
    this.classes = this.classList.join(' ');
  }

  removeCssClasses(cssClasses) {
    let classList = Utils.normalizeCssClasses(cssClasses);
    if (classList.length) {
      classList.forEach(clss => {
        let index = this.classList.indexOf(clss);
        if(index > -1)
          this.classList.splice(index, 1);
      });
    }
    this.classes = this.classList.join(' ');
  }

  addCssStyles(cssStyles) {
    if(cssStyles){
      let newStyleList;
      if(typeof cssStyles == 'string'){
        newStyleList = Utils.normalizeCssStyles(cssStyles);
      }else{
        if(typeof cssStyles == 'object'){
          newStyleList = new Map();
          for(let style of Object.keys(cssStyles)){
            newStyleList.set(style, cssStyles[style]);
          }
        }
      }
      if(newStyleList){
        newStyleList.forEach((v, k) => this.styleMap.set(k,v));
        this.styles = Utils.joinCssStyles(this.styleMap);
      }
    }
  }

  removeCssStyles(cssStyles) {
    cssStyles.forEach(stylekey => {
      this.styleMap.delete(stylekey);
    });
    this.styles = Utils.joinCssStyles(this.styleMap);
  }

	getSemanticElement(parentEl) {
		// Containerless elements get passed a comment anchor element
		if ( parentEl.nodeType === 8 ) {
			return parentEl.previousElementSibling;
		}else if ( parentEl.nodeType === 1 ) {
			return parentEl.firstElementChild;
		}else {
			console.error( "Can't find the semantic element of: ", parentEl );
			throw new Error( `Can't find the semantic element of: ${parentEl}` );
		}
	}

}
