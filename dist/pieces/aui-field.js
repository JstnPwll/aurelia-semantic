System.register(['aurelia-framework', '../aui-base', '../decorators', '../constants'], function (_export, _context) {
  "use strict";

  var bindable, containerless, children, SemanticElementBase, bindableToggle, constants, _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, AuiFieldCustomElement;

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
      bindable = _aureliaFramework.bindable;
      containerless = _aureliaFramework.containerless;
      children = _aureliaFramework.children;
    }, function (_auiBase) {
      SemanticElementBase = _auiBase.SemanticElementBase;
    }, function (_decorators) {
      bindableToggle = _decorators.bindableToggle;
    }, function (_constants) {
      constants = _constants.constants;
    }],
    execute: function () {
      _export('AuiFieldCustomElement', AuiFieldCustomElement = (_dec = containerless(), _dec(_class = (_class2 = function (_SemanticElementBase) {
        _inherits(AuiFieldCustomElement, _SemanticElementBase);

        function AuiFieldCustomElement() {
          var _temp, _this, _ret;

          _classCallCheck(this, AuiFieldCustomElement);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _SemanticElementBase.call.apply(_SemanticElementBase, [this].concat(args))), _this), _initDefineProp(_this, 'inline', _descriptor, _this), _initDefineProp(_this, 'required', _descriptor2, _this), _initDefineProp(_this, 'label', _descriptor3, _this), _initDefineProp(_this, 'width', _descriptor4, _this), _this.for = "", _this.labelAfter = false, _this.inputTypes = ['input', 'select', 'textarea', 'aui-input', 'aui-checkbox', 'aui-radio', 'aui-textarea', 'aui-dropdown'], _temp), _possibleConstructorReturn(_this, _ret);
        }

        AuiFieldCustomElement.prototype.attached = function attached() {
          if (!this.for) {
            var input = $(this.semanticElement).find(this.inputTypes.join(',')).filter(function (i, el) {
              return el.id;
            });
            if (input.length) {
              this.for = input[0].id;
            }
          }
        };

        AuiFieldCustomElement.prototype.bind = function bind() {
          this.label = this.label || this.element.getAttribute('label');
          this.width = this.width || this.element.getAttribute('width');
          this.setWidth();
        };

        AuiFieldCustomElement.prototype.setWidth = function setWidth() {
          if (!this.width) return;
          if (constants.gridWidths.includes(this.width)) {
            this.addCssClasses(this.width + ' wide');
          } else {
            this.addCssStyles({ 'width': this.width });
          }
        };

        return AuiFieldCustomElement;
      }(SemanticElementBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'inline', [bindableToggle], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'required', [bindableToggle], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'label', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'width', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class));

      _export('AuiFieldCustomElement', AuiFieldCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waWVjZXMvYXVpLWZpZWxkLmpzIl0sIm5hbWVzIjpbImJpbmRhYmxlIiwiY29udGFpbmVybGVzcyIsImNoaWxkcmVuIiwiU2VtYW50aWNFbGVtZW50QmFzZSIsImJpbmRhYmxlVG9nZ2xlIiwiY29uc3RhbnRzIiwiQXVpRmllbGRDdXN0b21FbGVtZW50IiwiZm9yIiwibGFiZWxBZnRlciIsImlucHV0VHlwZXMiLCJhdHRhY2hlZCIsImlucHV0IiwiJCIsInNlbWFudGljRWxlbWVudCIsImZpbmQiLCJqb2luIiwiZmlsdGVyIiwiaSIsImVsIiwiaWQiLCJsZW5ndGgiLCJiaW5kIiwibGFiZWwiLCJlbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwid2lkdGgiLCJzZXRXaWR0aCIsImdyaWRXaWR0aHMiLCJpbmNsdWRlcyIsImFkZENzc0NsYXNzZXMiLCJhZGRDc3NTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLGMscUJBQUFBLFE7QUFBVUMsbUIscUJBQUFBLGE7QUFBZUMsYyxxQkFBQUEsUTs7QUFDekJDLHlCLFlBQUFBLG1COztBQUNBQyxvQixlQUFBQSxjOztBQUNBQyxlLGNBQUFBLFM7Ozt1Q0FHSUMscUIsV0FEWkwsZTs7Ozs7Ozs7Ozs7O2lZQU9DTSxHLEdBQU0sRSxRQUNOQyxVLEdBQWEsSyxRQUViQyxVLEdBQWEsQ0FBQyxPQUFELEVBQVMsUUFBVCxFQUFrQixVQUFsQixFQUE2QixXQUE3QixFQUF5QyxjQUF6QyxFQUF3RCxXQUF4RCxFQUFvRSxjQUFwRSxFQUFtRixjQUFuRixDOzs7d0NBS2JDLFEsdUJBQVU7QUFDUixjQUFHLENBQUMsS0FBS0gsR0FBVCxFQUFhO0FBQ1gsZ0JBQUlJLFFBQVFDLEVBQUUsS0FBS0MsZUFBUCxFQUF3QkMsSUFBeEIsQ0FBNkIsS0FBS0wsVUFBTCxDQUFnQk0sSUFBaEIsQ0FBcUIsR0FBckIsQ0FBN0IsRUFBd0RDLE1BQXhELENBQStELFVBQUNDLENBQUQsRUFBSUMsRUFBSixFQUFXO0FBQ3BGLHFCQUFPQSxHQUFHQyxFQUFWO0FBQ0QsYUFGVyxDQUFaO0FBR0EsZ0JBQUdSLE1BQU1TLE1BQVQsRUFBZ0I7QUFDZCxtQkFBS2IsR0FBTCxHQUFXSSxNQUFNLENBQU4sRUFBU1EsRUFBcEI7QUFDRDtBQUNGO0FBQ0YsUzs7d0NBRURFLEksbUJBQU07QUFDSixlQUFLQyxLQUFMLEdBQWEsS0FBS0EsS0FBTCxJQUFZLEtBQUtDLE9BQUwsQ0FBYUMsWUFBYixDQUEwQixPQUExQixDQUF6QjtBQUNBLGVBQUtDLEtBQUwsR0FBYSxLQUFLQSxLQUFMLElBQVksS0FBS0YsT0FBTCxDQUFhQyxZQUFiLENBQTBCLE9BQTFCLENBQXpCO0FBQ0EsZUFBS0UsUUFBTDtBQUNELFM7O3dDQUtEQSxRLHVCQUFVO0FBQ1IsY0FBRyxDQUFDLEtBQUtELEtBQVQsRUFDRTtBQUNGLGNBQUdwQixVQUFVc0IsVUFBVixDQUFxQkMsUUFBckIsQ0FBOEIsS0FBS0gsS0FBbkMsQ0FBSCxFQUE2QztBQUMzQyxpQkFBS0ksYUFBTCxDQUFtQixLQUFLSixLQUFMLEdBQVcsT0FBOUI7QUFDRCxXQUZELE1BRUs7QUFDSCxpQkFBS0ssWUFBTCxDQUFrQixFQUFDLFNBQVEsS0FBS0wsS0FBZCxFQUFsQjtBQUNEO0FBQ0YsUzs7O1FBMUN3Q3RCLG1CLDBFQUV4Q0MsYzs7O21GQUNBQSxjOzs7Z0ZBQ0FKLFE7OztnRkFDQUEsUSIsImZpbGUiOiJhdWktZmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGNvbnRhaW5lcmxlc3MsIGNoaWxkcmVuIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgU2VtYW50aWNFbGVtZW50QmFzZSB9IGZyb20gJy4uL2F1aS1iYXNlJztcbmltcG9ydCB7IGJpbmRhYmxlVG9nZ2xlIH0gZnJvbSAnLi4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgQXVpRmllbGRDdXN0b21FbGVtZW50IGV4dGVuZHMgU2VtYW50aWNFbGVtZW50QmFzZSB7XG5cbiAgQGJpbmRhYmxlVG9nZ2xlIGlubGluZTtcbiAgQGJpbmRhYmxlVG9nZ2xlIHJlcXVpcmVkO1xuICBAYmluZGFibGUgbGFiZWw7XG4gIEBiaW5kYWJsZSB3aWR0aDtcbiAgZm9yID0gXCJcIjtcbiAgbGFiZWxBZnRlciA9IGZhbHNlO1xuXG4gIGlucHV0VHlwZXMgPSBbJ2lucHV0Jywnc2VsZWN0JywndGV4dGFyZWEnLCdhdWktaW5wdXQnLCdhdWktY2hlY2tib3gnLCdhdWktcmFkaW8nLCdhdWktdGV4dGFyZWEnLCdhdWktZHJvcGRvd24nXTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlcmUgaXMgYSBjaGlsZCBpbnB1dCB3aXRoIGFuIElEIGFuZCBhc3NpZ24gdGhlICdmb3InIGF0dHJpYnV0ZVxuICAgKi9cbiAgYXR0YWNoZWQoKXtcbiAgICBpZighdGhpcy5mb3Ipe1xuICAgICAgbGV0IGlucHV0ID0gJCh0aGlzLnNlbWFudGljRWxlbWVudCkuZmluZCh0aGlzLmlucHV0VHlwZXMuam9pbignLCcpKS5maWx0ZXIoKGksIGVsKSA9PiB7XG4gICAgICAgIHJldHVybiBlbC5pZDtcbiAgICAgIH0pO1xuICAgICAgaWYoaW5wdXQubGVuZ3RoKXtcbiAgICAgICAgdGhpcy5mb3IgPSBpbnB1dFswXS5pZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBiaW5kKCl7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMubGFiZWx8fHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2xhYmVsJyk7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMud2lkdGh8fHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgdGhpcy5zZXRXaWR0aCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHdpZHRoIHRvIGVpdGhlciBhIHNlbWFudGljIGdyaWQgd2lkdGggY2xhc3MsIG9yIGEgcmF3IHN0eWxlXG4gICAqL1xuICBzZXRXaWR0aCgpe1xuICAgIGlmKCF0aGlzLndpZHRoKVxuICAgICAgcmV0dXJuO1xuICAgIGlmKGNvbnN0YW50cy5ncmlkV2lkdGhzLmluY2x1ZGVzKHRoaXMud2lkdGgpKXtcbiAgICAgIHRoaXMuYWRkQ3NzQ2xhc3Nlcyh0aGlzLndpZHRoKycgd2lkZScpO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5hZGRDc3NTdHlsZXMoeyd3aWR0aCc6dGhpcy53aWR0aH0pO1xuICAgIH1cbiAgfVxufVxuIl19