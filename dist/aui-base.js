System.register(['aurelia-framework', './utils'], function (_export, _context) {
  "use strict";

  var inject, BindingEngine, bindable, Utils, _typeof, _dec, _class, SemanticElementBase;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      BindingEngine = _aureliaFramework.BindingEngine;
      bindable = _aureliaFramework.bindable;
    }, function (_utils) {
      Utils = _utils.Utils;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      _export('SemanticElementBase', SemanticElementBase = (_dec = inject(Element, BindingEngine), _dec(_class = function () {
        function SemanticElementBase(element, bindingEngine) {
          _classCallCheck(this, SemanticElementBase);

          this.classList = [];
          this.classes = '';
          this.styleMap = new Map();
          this.styles = '';

          this.element = element;
          this.bindingEngine = bindingEngine;
        }

        SemanticElementBase.prototype.created = function created(owningView, myView) {
          this.semanticElement = this.getSemanticElement(this.element);
          this.initClasses();
          this.initStyles();
        };

        SemanticElementBase.prototype.initClasses = function initClasses() {
          this.addCssClasses(this.element.getAttribute('class'));
          if (this.element.removeAttribute) this.element.removeAttribute('class');
        };

        SemanticElementBase.prototype.initStyles = function initStyles() {
          this.addCssStyles(this.element.getAttribute('style'));
        };

        SemanticElementBase.prototype.addCssClasses = function addCssClasses(cssClasses) {
          var _this = this;

          var classList = Utils.normalizeCssClasses(cssClasses);
          classList.forEach(function (clss) {
            if (!_this.classList.includes(clss)) _this.classList.push(clss);
          });
          this.classes = this.classList.join(' ');
        };

        SemanticElementBase.prototype.removeCssClasses = function removeCssClasses(cssClasses) {
          var _this2 = this;

          var classList = Utils.normalizeCssClasses(cssClasses);
          if (classList.length) {
            classList.forEach(function (clss) {
              var index = _this2.classList.indexOf(clss);
              if (index > -1) _this2.classList.splice(index, 1);
            });
          }
          this.classes = this.classList.join(' ');
        };

        SemanticElementBase.prototype.addCssStyles = function addCssStyles(cssStyles) {
          var _this3 = this;

          if (cssStyles) {
            var newStyleList = void 0;
            if (typeof cssStyles == 'string') {
              newStyleList = Utils.normalizeCssStyles(cssStyles);
            } else {
              if ((typeof cssStyles === 'undefined' ? 'undefined' : _typeof(cssStyles)) == 'object') {
                newStyleList = new Map();
                for (var _iterator = Object.keys(cssStyles), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                  var _ref;

                  if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                  } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                  }

                  var style = _ref;

                  newStyleList.set(style, cssStyles[style]);
                }
              }
            }
            if (newStyleList) {
              newStyleList.forEach(function (v, k) {
                return _this3.styleMap.set(k, v);
              });
              this.styles = Utils.joinCssStyles(this.styleMap);
            }
          }
        };

        SemanticElementBase.prototype.removeCssStyles = function removeCssStyles(cssStyles) {
          var _this4 = this;

          cssStyles.forEach(function (stylekey) {
            _this4.styleMap.delete(stylekey);
          });
          this.styles = Utils.joinCssStyles(this.styleMap);
        };

        SemanticElementBase.prototype.getSemanticElement = function getSemanticElement(parentEl) {
          if (parentEl.nodeType === 8) {
            return parentEl.previousElementSibling;
          } else if (parentEl.nodeType === 1) {
            return parentEl.firstElementChild;
          } else {
            console.error("Can't find the semantic element of: ", parentEl);
            throw new Error('Can\'t find the semantic element of: ' + parentEl);
          }
        };

        return SemanticElementBase;
      }()) || _class));

      _export('SemanticElementBase', SemanticElementBase);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdWktYmFzZS5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJCaW5kaW5nRW5naW5lIiwiYmluZGFibGUiLCJVdGlscyIsIlNlbWFudGljRWxlbWVudEJhc2UiLCJFbGVtZW50IiwiZWxlbWVudCIsImJpbmRpbmdFbmdpbmUiLCJjbGFzc0xpc3QiLCJjbGFzc2VzIiwic3R5bGVNYXAiLCJNYXAiLCJzdHlsZXMiLCJjcmVhdGVkIiwib3duaW5nVmlldyIsIm15VmlldyIsInNlbWFudGljRWxlbWVudCIsImdldFNlbWFudGljRWxlbWVudCIsImluaXRDbGFzc2VzIiwiaW5pdFN0eWxlcyIsImFkZENzc0NsYXNzZXMiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRDc3NTdHlsZXMiLCJjc3NDbGFzc2VzIiwibm9ybWFsaXplQ3NzQ2xhc3NlcyIsImZvckVhY2giLCJpbmNsdWRlcyIsImNsc3MiLCJwdXNoIiwiam9pbiIsInJlbW92ZUNzc0NsYXNzZXMiLCJsZW5ndGgiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJjc3NTdHlsZXMiLCJuZXdTdHlsZUxpc3QiLCJub3JtYWxpemVDc3NTdHlsZXMiLCJPYmplY3QiLCJrZXlzIiwic3R5bGUiLCJzZXQiLCJ2IiwiayIsImpvaW5Dc3NTdHlsZXMiLCJyZW1vdmVDc3NTdHlsZXMiLCJkZWxldGUiLCJzdHlsZWtleSIsInBhcmVudEVsIiwibm9kZVR5cGUiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFTQSxZLHFCQUFBQSxNO0FBQVFDLG1CLHFCQUFBQSxhO0FBQWVDLGMscUJBQUFBLFE7O0FBQ3ZCQyxXLFVBQUFBLEs7Ozs7Ozs7OztxQ0FJSUMsbUIsV0FEWkosT0FBT0ssT0FBUCxFQUFnQkosYUFBaEIsQztBQVdBLHFDQUFZSyxPQUFaLEVBQXFC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LENBQWtCRSxDQUFsQixFQUFvQkQsQ0FBcEIsQ0FBVjtBQUFBLGVBQXJCO0FBQ0EsbUJBQUsvQixNQUFMLEdBQWNULE1BQU0wQyxhQUFOLENBQW9CLEtBQUtuQyxRQUF6QixDQUFkO0FBQ0Q7QUFDRjtBQUNGLFM7O3NDQUVEb0MsZSw0QkFBZ0JWLFMsRUFBVztBQUFBOztBQUN6QkEsb0JBQVVWLE9BQVYsQ0FBa0Isb0JBQVk7QUFDNUIsbUJBQUtoQixRQUFMLENBQWNxQyxNQUFkLENBQXFCQyxRQUFyQjtBQUNELFdBRkQ7QUFHQSxlQUFLcEMsTUFBTCxHQUFjVCxNQUFNMEMsYUFBTixDQUFvQixLQUFLbkMsUUFBekIsQ0FBZDtBQUNELFM7O3NDQUVGTyxrQiwrQkFBbUJnQyxRLEVBQVU7QUFFNUIsY0FBS0EsU0FBU0MsUUFBVCxLQUFzQixDQUEzQixFQUErQjtBQUM5QixtQkFBT0QsU0FBU0Usc0JBQWhCO0FBQ0EsV0FGRCxNQUVNLElBQUtGLFNBQVNDLFFBQVQsS0FBc0IsQ0FBM0IsRUFBK0I7QUFDcEMsbUJBQU9ELFNBQVNHLGlCQUFoQjtBQUNBLFdBRkssTUFFQTtBQUNMQyxvQkFBUUMsS0FBUixDQUFlLHNDQUFmLEVBQXVETCxRQUF2RDtBQUNBLGtCQUFNLElBQUlNLEtBQUosMkNBQWtETixRQUFsRCxDQUFOO0FBQ0E7QUFDRCxTIiwiZmlsZSI6ImF1aS1iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgQmluZGluZ0VuZ2luZSwgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuXG5cbkBpbmplY3QoRWxlbWVudCwgQmluZGluZ0VuZ2luZSlcbmV4cG9ydCBjbGFzcyBTZW1hbnRpY0VsZW1lbnRCYXNlIHtcblxuXHRlbGVtZW50O1xuXHRzZW1hbnRpY0VsZW1lbnQ7XG5cbiAgY2xhc3NMaXN0ID0gW107XG4gIGNsYXNzZXMgPSAnJztcbiAgc3R5bGVNYXAgPSBuZXcgTWFwKCk7XG4gIHN0eWxlcyA9ICcnO1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIGJpbmRpbmdFbmdpbmUpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuYmluZGluZ0VuZ2luZSA9IGJpbmRpbmdFbmdpbmU7XG5cdH1cblxuXHRjcmVhdGVkKG93bmluZ1ZpZXcsIG15Vmlldykge1xuXHRcdHRoaXMuc2VtYW50aWNFbGVtZW50ID0gdGhpcy5nZXRTZW1hbnRpY0VsZW1lbnQodGhpcy5lbGVtZW50KTtcbiAgICB0aGlzLmluaXRDbGFzc2VzKCk7XG4gICAgdGhpcy5pbml0U3R5bGVzKCk7XG5cdH1cblxuICBpbml0Q2xhc3Nlcygpe1xuICAgIHRoaXMuYWRkQ3NzQ2xhc3Nlcyh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpKTtcbiAgICBpZih0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKXRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gIH1cblxuICBpbml0U3R5bGVzKCl7XG4gICAgdGhpcy5hZGRDc3NTdHlsZXModGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSk7XG4gICAgLy9pZih0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKXRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gIH1cblxuICBhZGRDc3NDbGFzc2VzKGNzc0NsYXNzZXMpIHtcbiAgICBsZXQgY2xhc3NMaXN0ID0gVXRpbHMubm9ybWFsaXplQ3NzQ2xhc3Nlcyhjc3NDbGFzc2VzKTtcbiAgICBjbGFzc0xpc3QuZm9yRWFjaChjbHNzID0+IHtcbiAgICAgIGlmKCF0aGlzLmNsYXNzTGlzdC5pbmNsdWRlcyhjbHNzKSlcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucHVzaChjbHNzKTtcbiAgICB9KTtcbiAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLmNsYXNzTGlzdC5qb2luKCcgJyk7XG4gIH1cblxuICByZW1vdmVDc3NDbGFzc2VzKGNzc0NsYXNzZXMpIHtcbiAgICBsZXQgY2xhc3NMaXN0ID0gVXRpbHMubm9ybWFsaXplQ3NzQ2xhc3Nlcyhjc3NDbGFzc2VzKTtcbiAgICBpZiAoY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgY2xhc3NMaXN0LmZvckVhY2goY2xzcyA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuY2xhc3NMaXN0LmluZGV4T2YoY2xzcyk7XG4gICAgICAgIGlmKGluZGV4ID4gLTEpXG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNsYXNzZXMgPSB0aGlzLmNsYXNzTGlzdC5qb2luKCcgJyk7XG4gIH1cblxuICBhZGRDc3NTdHlsZXMoY3NzU3R5bGVzKSB7XG4gICAgaWYoY3NzU3R5bGVzKXtcbiAgICAgIGxldCBuZXdTdHlsZUxpc3Q7XG4gICAgICBpZih0eXBlb2YgY3NzU3R5bGVzID09ICdzdHJpbmcnKXtcbiAgICAgICAgbmV3U3R5bGVMaXN0ID0gVXRpbHMubm9ybWFsaXplQ3NzU3R5bGVzKGNzc1N0eWxlcyk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYodHlwZW9mIGNzc1N0eWxlcyA9PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgbmV3U3R5bGVMaXN0ID0gbmV3IE1hcCgpO1xuICAgICAgICAgIGZvcihsZXQgc3R5bGUgb2YgT2JqZWN0LmtleXMoY3NzU3R5bGVzKSl7XG4gICAgICAgICAgICBuZXdTdHlsZUxpc3Quc2V0KHN0eWxlLCBjc3NTdHlsZXNbc3R5bGVdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKG5ld1N0eWxlTGlzdCl7XG4gICAgICAgIG5ld1N0eWxlTGlzdC5mb3JFYWNoKCh2LCBrKSA9PiB0aGlzLnN0eWxlTWFwLnNldChrLHYpKTtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBVdGlscy5qb2luQ3NzU3R5bGVzKHRoaXMuc3R5bGVNYXApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNzc1N0eWxlcyhjc3NTdHlsZXMpIHtcbiAgICBjc3NTdHlsZXMuZm9yRWFjaChzdHlsZWtleSA9PiB7XG4gICAgICB0aGlzLnN0eWxlTWFwLmRlbGV0ZShzdHlsZWtleSk7XG4gICAgfSk7XG4gICAgdGhpcy5zdHlsZXMgPSBVdGlscy5qb2luQ3NzU3R5bGVzKHRoaXMuc3R5bGVNYXApO1xuICB9XG5cblx0Z2V0U2VtYW50aWNFbGVtZW50KHBhcmVudEVsKSB7XG5cdFx0Ly8gQ29udGFpbmVybGVzcyBlbGVtZW50cyBnZXQgcGFzc2VkIGEgY29tbWVudCBhbmNob3IgZWxlbWVudFxuXHRcdGlmICggcGFyZW50RWwubm9kZVR5cGUgPT09IDggKSB7XG5cdFx0XHRyZXR1cm4gcGFyZW50RWwucHJldmlvdXNFbGVtZW50U2libGluZztcblx0XHR9ZWxzZSBpZiAoIHBhcmVudEVsLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0cmV0dXJuIHBhcmVudEVsLmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdH1lbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoIFwiQ2FuJ3QgZmluZCB0aGUgc2VtYW50aWMgZWxlbWVudCBvZjogXCIsIHBhcmVudEVsICk7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBDYW4ndCBmaW5kIHRoZSBzZW1hbnRpYyBlbGVtZW50IG9mOiAke3BhcmVudEVsfWAgKTtcblx0XHR9XG5cdH1cblxufVxuIl19