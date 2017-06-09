System.register(['aurelia-framework', '../aui-base', '../constants', '../decorators'], function (_export, _context) {
  "use strict";

  var inject, children, SemanticElementBase, constants, bindableEnum, bindableToggle, _dec, _dec2, _dec3, _dec4, _dec5, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, AuiButtonCustomElement;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      children = _aureliaFramework.children;
    }, function (_auiBase) {
      SemanticElementBase = _auiBase.SemanticElementBase;
    }, function (_constants) {
      constants = _constants.constants;
    }, function (_decorators) {
      bindableEnum = _decorators.bindableEnum;
      bindableToggle = _decorators.bindableToggle;
    }],
    execute: function () {
      _export('AuiButtonCustomElement', AuiButtonCustomElement = (_dec = bindableEnum(constants.sizes), _dec2 = bindableEnum(constants.emphases), _dec3 = bindableEnum(constants.buttonAnimations), _dec4 = bindableEnum(constants.colors), _dec5 = children('*'), (_class = function (_SemanticElementBase) {
        _inherits(AuiButtonCustomElement, _SemanticElementBase);

        function AuiButtonCustomElement() {
          var _temp, _this, _ret;

          _classCallCheck(this, AuiButtonCustomElement);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _SemanticElementBase.call.apply(_SemanticElementBase, [this].concat(args))), _this), _initDefineProp(_this, 'size', _descriptor, _this), _initDefineProp(_this, 'emphasis', _descriptor2, _this), _initDefineProp(_this, 'animation', _descriptor3, _this), _initDefineProp(_this, 'animated', _descriptor4, _this), _initDefineProp(_this, 'icon', _descriptor5, _this), _initDefineProp(_this, 'basic', _descriptor6, _this), _initDefineProp(_this, 'inverted', _descriptor7, _this), _initDefineProp(_this, 'color', _descriptor8, _this), _initDefineProp(_this, 'childLabelElements', _descriptor9, _this), _initDefineProp(_this, 'labeled', _descriptor10, _this), _this.showInnerButton = false, _temp), _possibleConstructorReturn(_this, _ret);
        }

        AuiButtonCustomElement.prototype.childLabelElementsChanged = function childLabelElementsChanged() {
          this.updateLabel();
          this.updateAnimated();
        };

        AuiButtonCustomElement.prototype.updateAnimated = function updateAnimated() {
          var content = this.childLabelElements.filter(function (el) {
            var classes = el.className ? el.className.split(/[ ]+/) : [];
            return classes.includes('content') && (classes.includes('visible') || classes.includes('hidden'));
          });
          if (content.length == 2) {
            this.animation = this.animation || '';
            this.animated = true;
          }
        };

        AuiButtonCustomElement.prototype.updateLabel = function updateLabel() {
          var labelElement = this.childLabelElements.find(function (el) {
            var classes = el.className ? el.className.split(/[ ]+/) : [];
            return classes.includes('ui') && classes.includes('label') || el.element && el.element.tagName == 'AUI-LABEL';
          });
          if (labelElement && !labelElement.tagName) labelElement = labelElement.element;
          this.labeled = labelElement != null;
          if (this.labeled) {
            var innerButton = this.childLabelElements.find(function (el) {
              var classes = el.className ? el.className.split(/[ ]+/) : [];
              return classes.includes('ui') && classes.includes('button') && !classes.includes('__aui-button');
            });
            if (!innerButton) {
              var _innerButton = labelElement.parentNode.querySelector('.__aui-button');
              var el = labelElement.parentNode.firstChild;
              while (el) {
                if (!el.isSameNode(labelElement) && !el.isSameNode(_innerButton)) {
                  el.parentNode.removeChild(el);
                  _innerButton.appendChild(el);
                  el = labelElement.parentNode.firstChild;
                } else {
                  el = el.nextSibling;
                }
              }
              this.showInnerButton = true;
            }
          }
        };

        AuiButtonCustomElement.prototype.attached = function attached() {
          this.animated = this.animation != false && this.animation != null && typeof this.animation != 'undefined';
        };

        AuiButtonCustomElement.prototype.detached = function detached() {};

        return AuiButtonCustomElement;
      }(SemanticElementBase), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'size', [_dec], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'emphasis', [_dec2], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'animation', [_dec3], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'animated', [bindableToggle], {
        enumerable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'icon', [bindableToggle], {
        enumerable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'basic', [bindableToggle], {
        enumerable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'inverted', [bindableToggle], {
        enumerable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'color', [_dec4], {
        enumerable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'childLabelElements', [_dec5], {
        enumerable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'labeled', [bindableToggle], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class)));

      _export('AuiButtonCustomElement', AuiButtonCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50cy9hdWktYnV0dG9uLmpzIl0sIm5hbWVzIjpbImluamVjdCIsImNoaWxkcmVuIiwiU2VtYW50aWNFbGVtZW50QmFzZSIsImNvbnN0YW50cyIsImJpbmRhYmxlRW51bSIsImJpbmRhYmxlVG9nZ2xlIiwiQXVpQnV0dG9uQ3VzdG9tRWxlbWVudCIsInNpemVzIiwiZW1waGFzZXMiLCJidXR0b25BbmltYXRpb25zIiwiY29sb3JzIiwic2hvd0lubmVyQnV0dG9uIiwiY2hpbGRMYWJlbEVsZW1lbnRzQ2hhbmdlZCIsInVwZGF0ZUxhYmVsIiwidXBkYXRlQW5pbWF0ZWQiLCJjb250ZW50IiwiY2hpbGRMYWJlbEVsZW1lbnRzIiwiZmlsdGVyIiwiY2xhc3NlcyIsImVsIiwiY2xhc3NOYW1lIiwic3BsaXQiLCJpbmNsdWRlcyIsImxlbmd0aCIsImFuaW1hdGlvbiIsImFuaW1hdGVkIiwibGFiZWxFbGVtZW50IiwiZmluZCIsImVsZW1lbnQiLCJ0YWdOYW1lIiwibGFiZWxlZCIsImlubmVyQnV0dG9uIiwicGFyZW50Tm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdENoaWxkIiwiaXNTYW1lTm9kZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJuZXh0U2libGluZyIsImF0dGFjaGVkIiwiZGV0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLFkscUJBQUFBLE07QUFBUUMsYyxxQkFBQUEsUTs7QUFDUkMseUIsWUFBQUEsbUI7O0FBQ0FDLGUsY0FBQUEsUzs7QUFDQUMsa0IsZUFBQUEsWTtBQUFjQyxvQixlQUFBQSxjOzs7d0NBRVZDLHNCLFdBRVZGLGFBQWFELFVBQVVJLEtBQXZCLEMsVUFDQUgsYUFBYUQsVUFBVUssUUFBdkIsQyxVQUNBSixhQUFhRCxVQUFVTSxnQkFBdkIsQyxVQUtBTCxhQUFhRCxVQUFVTyxNQUF2QixDLFVBR0FULFNBQVMsR0FBVCxDOzs7Ozs7Ozs7Ozs7NHRCQUVEVSxlLEdBQWtCLEs7Ozt5Q0FLbEJDLHlCLHdDQUEyQjtBQUN6QixlQUFLQyxXQUFMO0FBQ0EsZUFBS0MsY0FBTDtBQUNELFM7O3lDQUVEQSxjLDZCQUFnQjtBQUNkLGNBQUlDLFVBQVUsS0FBS0Msa0JBQUwsQ0FBd0JDLE1BQXhCLENBQStCLGNBQU07QUFDakQsZ0JBQUlDLFVBQVVDLEdBQUdDLFNBQUgsR0FBYUQsR0FBR0MsU0FBSCxDQUFhQyxLQUFiLENBQW1CLE1BQW5CLENBQWIsR0FBd0MsRUFBdEQ7QUFDQSxtQkFBUUgsUUFBUUksUUFBUixDQUFpQixTQUFqQixNQUE4QkosUUFBUUksUUFBUixDQUFpQixTQUFqQixLQUE2QkosUUFBUUksUUFBUixDQUFpQixRQUFqQixDQUEzRCxDQUFSO0FBQ0QsV0FIYSxDQUFkO0FBSUEsY0FBR1AsUUFBUVEsTUFBUixJQUFrQixDQUFyQixFQUF1QjtBQUNyQixpQkFBS0MsU0FBTCxHQUFpQixLQUFLQSxTQUFMLElBQWtCLEVBQW5DO0FBQ0EsaUJBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDRDtBQUNGLFM7O3lDQUVEWixXLDBCQUFhO0FBQ1gsY0FBSWEsZUFBZSxLQUFLVixrQkFBTCxDQUF3QlcsSUFBeEIsQ0FBNkIsY0FBTTtBQUNwRCxnQkFBSVQsVUFBVUMsR0FBR0MsU0FBSCxHQUFhRCxHQUFHQyxTQUFILENBQWFDLEtBQWIsQ0FBbUIsTUFBbkIsQ0FBYixHQUF3QyxFQUF0RDtBQUNBLG1CQUFRSCxRQUFRSSxRQUFSLENBQWlCLElBQWpCLEtBQXdCSixRQUFRSSxRQUFSLENBQWlCLE9BQWpCLENBQXpCLElBQXNESCxHQUFHUyxPQUFILElBQVlULEdBQUdTLE9BQUgsQ0FBV0MsT0FBWCxJQUFzQixXQUEvRjtBQUNELFdBSGtCLENBQW5CO0FBSUEsY0FBR0gsZ0JBQWdCLENBQUNBLGFBQWFHLE9BQWpDLEVBQ0VILGVBQWVBLGFBQWFFLE9BQTVCO0FBQ0YsZUFBS0UsT0FBTCxHQUFlSixnQkFBZ0IsSUFBL0I7QUFDQSxjQUFHLEtBQUtJLE9BQVIsRUFBZ0I7QUFDZCxnQkFBSUMsY0FBYyxLQUFLZixrQkFBTCxDQUF3QlcsSUFBeEIsQ0FBNkIsY0FBTTtBQUNuRCxrQkFBSVQsVUFBVUMsR0FBR0MsU0FBSCxHQUFhRCxHQUFHQyxTQUFILENBQWFDLEtBQWIsQ0FBbUIsTUFBbkIsQ0FBYixHQUF3QyxFQUF0RDtBQUNBLHFCQUFPSCxRQUFRSSxRQUFSLENBQWlCLElBQWpCLEtBQXdCSixRQUFRSSxRQUFSLENBQWlCLFFBQWpCLENBQXhCLElBQW9ELENBQUNKLFFBQVFJLFFBQVIsQ0FBaUIsY0FBakIsQ0FBNUQ7QUFDRCxhQUhpQixDQUFsQjtBQUlBLGdCQUFHLENBQUNTLFdBQUosRUFBZ0I7QUFDZCxrQkFBSUEsZUFBY0wsYUFBYU0sVUFBYixDQUF3QkMsYUFBeEIsQ0FBc0MsZUFBdEMsQ0FBbEI7QUFDQSxrQkFBSWQsS0FBS08sYUFBYU0sVUFBYixDQUF3QkUsVUFBakM7QUFDQSxxQkFBTWYsRUFBTixFQUFTO0FBQ1Asb0JBQUcsQ0FBQ0EsR0FBR2dCLFVBQUgsQ0FBY1QsWUFBZCxDQUFELElBQWdDLENBQUNQLEdBQUdnQixVQUFILENBQWNKLFlBQWQsQ0FBcEMsRUFBK0Q7QUFDN0RaLHFCQUFHYSxVQUFILENBQWNJLFdBQWQsQ0FBMEJqQixFQUExQjtBQUNBWSwrQkFBWU0sV0FBWixDQUF3QmxCLEVBQXhCO0FBQ0FBLHVCQUFLTyxhQUFhTSxVQUFiLENBQXdCRSxVQUE3QjtBQUNELGlCQUpELE1BSUs7QUFDSGYsdUJBQUtBLEdBQUdtQixXQUFSO0FBQ0Q7QUFDRjtBQUNELG1CQUFLM0IsZUFBTCxHQUF1QixJQUF2QjtBQUNEO0FBQ0Y7QUFDRixTOzt5Q0FFRDRCLFEsdUJBQVU7QUFDUixlQUFLZCxRQUFMLEdBQWdCLEtBQUtELFNBQUwsSUFBa0IsS0FBbEIsSUFBMkIsS0FBS0EsU0FBTCxJQUFrQixJQUE3QyxJQUFxRCxPQUFPLEtBQUtBLFNBQVosSUFBeUIsV0FBOUY7QUFDRCxTOzt5Q0FFRGdCLFEsdUJBQVUsQ0FFVCxDOzs7UUF2RXlDdEMsbUI7Ozs7Ozs7OztrRkFLekNHLGM7Ozs4RUFDQUEsYzs7OytFQUNBQSxjOzs7a0ZBQ0FBLGM7Ozs7Ozs7OztrRkFLQUEsYzs7O2lCQUF5QixLIiwiZmlsZSI6ImF1aS1idXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBjaGlsZHJlbiB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IFNlbWFudGljRWxlbWVudEJhc2UgfSBmcm9tICcuLi9hdWktYmFzZSc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgYmluZGFibGVFbnVtLCBiaW5kYWJsZVRvZ2dsZSB9IGZyb20gJy4uL2RlY29yYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgQXVpQnV0dG9uQ3VzdG9tRWxlbWVudCBleHRlbmRzIFNlbWFudGljRWxlbWVudEJhc2Uge1xuXG4gIEBiaW5kYWJsZUVudW0oY29uc3RhbnRzLnNpemVzKSBzaXplO1xuICBAYmluZGFibGVFbnVtKGNvbnN0YW50cy5lbXBoYXNlcykgZW1waGFzaXM7XG4gIEBiaW5kYWJsZUVudW0oY29uc3RhbnRzLmJ1dHRvbkFuaW1hdGlvbnMpIGFuaW1hdGlvbjtcbiAgQGJpbmRhYmxlVG9nZ2xlIGFuaW1hdGVkO1xuICBAYmluZGFibGVUb2dnbGUgaWNvbjtcbiAgQGJpbmRhYmxlVG9nZ2xlIGJhc2ljO1xuICBAYmluZGFibGVUb2dnbGUgaW52ZXJ0ZWQ7XG4gIEBiaW5kYWJsZUVudW0oY29uc3RhbnRzLmNvbG9ycykgY29sb3I7XG5cbiAgLy8gTGFiZWxlZCBidXR0b25cbiAgQGNoaWxkcmVuKCcqJykgY2hpbGRMYWJlbEVsZW1lbnRzO1xuICBAYmluZGFibGVUb2dnbGUgbGFiZWxlZCA9IGZhbHNlO1xuICBzaG93SW5uZXJCdXR0b24gPSBmYWxzZTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgY2hpbGQgZWxlbWVudHMgYXJlIGFzc2lnbmVkIGFuZCBsb29rcyBmb3IgYSBsYWJlbCBlbGVtZW50LiBJZiBmb3VuZCBhbmQgdGhlcmUgaXNuJ3QgYWxyZWFkeSBhbiBpbm5lciBidXR0b24sIGF0dGFjaCBub24tbGFiZWwgY29udGVudCB0byBhbiBpbm5lciBidXR0b24uXG4gICAqL1xuICBjaGlsZExhYmVsRWxlbWVudHNDaGFuZ2VkKCl7XG4gICAgdGhpcy51cGRhdGVMYWJlbCgpO1xuICAgIHRoaXMudXBkYXRlQW5pbWF0ZWQoKTtcbiAgfVxuXG4gIHVwZGF0ZUFuaW1hdGVkKCl7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmNoaWxkTGFiZWxFbGVtZW50cy5maWx0ZXIoZWwgPT4ge1xuICAgICAgbGV0IGNsYXNzZXMgPSBlbC5jbGFzc05hbWU/ZWwuY2xhc3NOYW1lLnNwbGl0KC9bIF0rLyk6W107XG4gICAgICByZXR1cm4gKGNsYXNzZXMuaW5jbHVkZXMoJ2NvbnRlbnQnKSYmKGNsYXNzZXMuaW5jbHVkZXMoJ3Zpc2libGUnKXx8Y2xhc3Nlcy5pbmNsdWRlcygnaGlkZGVuJykpKTtcbiAgICB9KTtcbiAgICBpZihjb250ZW50Lmxlbmd0aCA9PSAyKXtcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb24gfHwgJyc7XG4gICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVMYWJlbCgpe1xuICAgIGxldCBsYWJlbEVsZW1lbnQgPSB0aGlzLmNoaWxkTGFiZWxFbGVtZW50cy5maW5kKGVsID0+IHtcbiAgICAgIGxldCBjbGFzc2VzID0gZWwuY2xhc3NOYW1lP2VsLmNsYXNzTmFtZS5zcGxpdCgvWyBdKy8pOltdO1xuICAgICAgcmV0dXJuIChjbGFzc2VzLmluY2x1ZGVzKCd1aScpJiZjbGFzc2VzLmluY2x1ZGVzKCdsYWJlbCcpKXx8KGVsLmVsZW1lbnQmJmVsLmVsZW1lbnQudGFnTmFtZSA9PSAnQVVJLUxBQkVMJyk7XG4gICAgfSk7XG4gICAgaWYobGFiZWxFbGVtZW50ICYmICFsYWJlbEVsZW1lbnQudGFnTmFtZSlcbiAgICAgIGxhYmVsRWxlbWVudCA9IGxhYmVsRWxlbWVudC5lbGVtZW50O1xuICAgIHRoaXMubGFiZWxlZCA9IGxhYmVsRWxlbWVudCAhPSBudWxsO1xuICAgIGlmKHRoaXMubGFiZWxlZCl7XG4gICAgICBsZXQgaW5uZXJCdXR0b24gPSB0aGlzLmNoaWxkTGFiZWxFbGVtZW50cy5maW5kKGVsID0+IHtcbiAgICAgICAgbGV0IGNsYXNzZXMgPSBlbC5jbGFzc05hbWU/ZWwuY2xhc3NOYW1lLnNwbGl0KC9bIF0rLyk6W107XG4gICAgICAgIHJldHVybiBjbGFzc2VzLmluY2x1ZGVzKCd1aScpJiZjbGFzc2VzLmluY2x1ZGVzKCdidXR0b24nKSYmIWNsYXNzZXMuaW5jbHVkZXMoJ19fYXVpLWJ1dHRvbicpO1xuICAgICAgfSk7XG4gICAgICBpZighaW5uZXJCdXR0b24pe1xuICAgICAgICBsZXQgaW5uZXJCdXR0b24gPSBsYWJlbEVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuX19hdWktYnV0dG9uJyk7XG4gICAgICAgIGxldCBlbCA9IGxhYmVsRWxlbWVudC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHdoaWxlKGVsKXtcbiAgICAgICAgICBpZighZWwuaXNTYW1lTm9kZShsYWJlbEVsZW1lbnQpICYmICFlbC5pc1NhbWVOb2RlKGlubmVyQnV0dG9uKSl7XG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgICAgIGlubmVyQnV0dG9uLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgIGVsID0gbGFiZWxFbGVtZW50LnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGVsID0gZWwubmV4dFNpYmxpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd0lubmVyQnV0dG9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhdHRhY2hlZCgpe1xuICAgIHRoaXMuYW5pbWF0ZWQgPSB0aGlzLmFuaW1hdGlvbiAhPSBmYWxzZSAmJiB0aGlzLmFuaW1hdGlvbiAhPSBudWxsICYmIHR5cGVvZiB0aGlzLmFuaW1hdGlvbiAhPSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIGRldGFjaGVkKCl7XG4gICAgXG4gIH1cblxufVxuIl19