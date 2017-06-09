System.register(['aurelia-framework', '../aui-base', '../constants', '../decorators'], function (_export, _context) {
  "use strict";

  var inject, bindable, bindingMode, containerless, SemanticElementBase, constants, bindableEnum, bindableToggle, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, AuiFormCustomElement;

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
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      containerless = _aureliaFramework.containerless;
    }, function (_auiBase) {
      SemanticElementBase = _auiBase.SemanticElementBase;
    }, function (_constants) {
      constants = _constants.constants;
    }, function (_decorators) {
      bindableEnum = _decorators.bindableEnum;
      bindableToggle = _decorators.bindableToggle;
    }],
    execute: function () {
      _export('AuiFormCustomElement', AuiFormCustomElement = (_dec = containerless(), _dec2 = bindableEnum(constants.formStates), _dec3 = bindableEnum(constants.sizes), _dec(_class = (_class2 = function (_SemanticElementBase) {
        _inherits(AuiFormCustomElement, _SemanticElementBase);

        function AuiFormCustomElement() {
          var _temp, _this, _ret;

          _classCallCheck(this, AuiFormCustomElement);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _SemanticElementBase.call.apply(_SemanticElementBase, [this].concat(args))), _this), _initDefineProp(_this, 'state', _descriptor, _this), _initDefineProp(_this, 'size', _descriptor2, _this), _initDefineProp(_this, 'loading', _descriptor3, _this), _initDefineProp(_this, 'behaviors', _descriptor4, _this), _initDefineProp(_this, 'equalWidth', _descriptor5, _this), _initDefineProp(_this, 'inverted', _descriptor6, _this), _temp), _possibleConstructorReturn(_this, _ret);
        }

        AuiFormCustomElement.prototype.attached = function attached() {
          var _this2 = this;

          this.behaviorsChanged();
          this.bindingSubscription = this.bindingEngine.propertyObserver(this.semanticElement, 'className').subscribe(function (newValue, oldValue) {
            return _this2.classChanged(newValue, oldValue);
          });
        };

        AuiFormCustomElement.prototype.detached = function detached() {
          this.bindingSubscription && this.bindingSubscription.dispose();
        };

        AuiFormCustomElement.prototype.behaviorsChanged = function behaviorsChanged() {
          if (Array.isArray(this.behaviors)) {
            var _$;

            (_$ = $(this.semanticElement)).form.apply(_$, this.behaviors);
          } else {
            $(this.semanticElement).form(this.behaviors);
          }
        };

        AuiFormCustomElement.prototype.classChanged = function classChanged(newValue, oldValue) {
          var classes = newValue.split(' ');
          var states = Array.isArray(this.state) ? this.state : [this.state];
          var statesChanged = false;
          states.slice().reverse().forEach(function (state, index, arry) {
            if (!classes.includes(state)) {
              states.splice(arry.length - 1 - index, 1);
              statesChanged = true;
            }
          });
          classes.forEach(function (clss) {
            if (!clss) return;
            if (constants.formStates.includes(clss) && !states.includes(clss)) {
              states.push(clss);
              statesChanged = true;
            }
          });
          if (states.length < 2) states = states.join('');
          if (statesChanged) this.state = states;
        };

        return AuiFormCustomElement;
      }(SemanticElementBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'state', [_dec2], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec3], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'loading', [bindableToggle], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'behaviors', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'equalWidth', [bindableToggle], {
        enumerable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'inverted', [bindableToggle], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class));

      _export('AuiFormCustomElement', AuiFormCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2xsZWN0aW9ucy9hdWktZm9ybS5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJiaW5kYWJsZSIsImJpbmRpbmdNb2RlIiwiY29udGFpbmVybGVzcyIsIlNlbWFudGljRWxlbWVudEJhc2UiLCJjb25zdGFudHMiLCJiaW5kYWJsZUVudW0iLCJiaW5kYWJsZVRvZ2dsZSIsIkF1aUZvcm1DdXN0b21FbGVtZW50IiwiZm9ybVN0YXRlcyIsInNpemVzIiwiYXR0YWNoZWQiLCJiZWhhdmlvcnNDaGFuZ2VkIiwiYmluZGluZ1N1YnNjcmlwdGlvbiIsImJpbmRpbmdFbmdpbmUiLCJwcm9wZXJ0eU9ic2VydmVyIiwic2VtYW50aWNFbGVtZW50Iiwic3Vic2NyaWJlIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNsYXNzQ2hhbmdlZCIsImRldGFjaGVkIiwiZGlzcG9zZSIsIkFycmF5IiwiaXNBcnJheSIsImJlaGF2aW9ycyIsImZvcm0iLCIkIiwiY2xhc3NlcyIsInNwbGl0Iiwic3RhdGVzIiwic3RhdGUiLCJzdGF0ZXNDaGFuZ2VkIiwic2xpY2UiLCJyZXZlcnNlIiwiZm9yRWFjaCIsImluZGV4IiwiYXJyeSIsImluY2x1ZGVzIiwic3BsaWNlIiwibGVuZ3RoIiwiY2xzcyIsInB1c2giLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxZLHFCQUFBQSxNO0FBQVFDLGMscUJBQUFBLFE7QUFBVUMsaUIscUJBQUFBLFc7QUFBYUMsbUIscUJBQUFBLGE7O0FBQy9CQyx5QixZQUFBQSxtQjs7QUFDQUMsZSxjQUFBQSxTOztBQUNBQyxrQixlQUFBQSxZO0FBQWNDLG9CLGVBQUFBLGM7OztzQ0FHVkMsb0IsV0FEWkwsZSxVQUdFRyxhQUFhRCxVQUFVSSxVQUF2QixDLFVBQ0FILGFBQWFELFVBQVVLLEtBQXZCLEM7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FNREMsUSx1QkFBVTtBQUFBOztBQUNSLGVBQUtDLGdCQUFMO0FBQ0EsZUFBS0MsbUJBQUwsR0FBMkIsS0FBS0MsYUFBTCxDQUFtQkMsZ0JBQW5CLENBQW9DLEtBQUtDLGVBQXpDLEVBQTBELFdBQTFELEVBQ3hCQyxTQUR3QixDQUNkLFVBQUNDLFFBQUQsRUFBV0MsUUFBWDtBQUFBLG1CQUF3QixPQUFLQyxZQUFMLENBQWtCRixRQUFsQixFQUE0QkMsUUFBNUIsQ0FBeEI7QUFBQSxXQURjLENBQTNCO0FBRUQsUzs7dUNBRURFLFEsdUJBQVU7QUFDUixlQUFLUixtQkFBTCxJQUE0QixLQUFLQSxtQkFBTCxDQUF5QlMsT0FBekIsRUFBNUI7QUFDRCxTOzt1Q0FFRFYsZ0IsK0JBQWtCO0FBQ2hCLGNBQUdXLE1BQU1DLE9BQU4sQ0FBYyxLQUFLQyxTQUFuQixDQUFILEVBQWlDO0FBQUE7O0FBQy9CLG9CQUFFLEtBQUtULGVBQVAsR0FBd0JVLElBQXhCLFdBQWdDLEtBQUtELFNBQXJDO0FBQ0QsV0FGRCxNQUVLO0FBQ0ZFLGNBQUUsS0FBS1gsZUFBUCxFQUF3QlUsSUFBeEIsQ0FBNkIsS0FBS0QsU0FBbEM7QUFDRjtBQUNGLFM7O3VDQU9ETCxZLHlCQUFhRixRLEVBQVVDLFEsRUFBUztBQUM5QixjQUFJUyxVQUFVVixTQUFTVyxLQUFULENBQWUsR0FBZixDQUFkO0FBQ0EsY0FBSUMsU0FBU1AsTUFBTUMsT0FBTixDQUFjLEtBQUtPLEtBQW5CLElBQTBCLEtBQUtBLEtBQS9CLEdBQXFDLENBQUMsS0FBS0EsS0FBTixDQUFsRDtBQUNBLGNBQUlDLGdCQUFnQixLQUFwQjtBQUNBRixpQkFBT0csS0FBUCxHQUFlQyxPQUFmLEdBQXlCQyxPQUF6QixDQUFpQyxVQUFTSixLQUFULEVBQWdCSyxLQUFoQixFQUF1QkMsSUFBdkIsRUFBNkI7QUFDNUQsZ0JBQUcsQ0FBQ1QsUUFBUVUsUUFBUixDQUFpQlAsS0FBakIsQ0FBSixFQUE2QjtBQUMzQkQscUJBQU9TLE1BQVAsQ0FBY0YsS0FBS0csTUFBTCxHQUFjLENBQWQsR0FBa0JKLEtBQWhDLEVBQXVDLENBQXZDO0FBQ0FKLDhCQUFnQixJQUFoQjtBQUNEO0FBQ0YsV0FMRDtBQU1BSixrQkFBUU8sT0FBUixDQUFnQixnQkFBUTtBQUN0QixnQkFBRyxDQUFDTSxJQUFKLEVBQVU7QUFDVixnQkFBR3BDLFVBQVVJLFVBQVYsQ0FBcUI2QixRQUFyQixDQUE4QkcsSUFBOUIsS0FBdUMsQ0FBQ1gsT0FBT1EsUUFBUCxDQUFnQkcsSUFBaEIsQ0FBM0MsRUFBaUU7QUFDL0RYLHFCQUFPWSxJQUFQLENBQVlELElBQVo7QUFDQVQsOEJBQWdCLElBQWhCO0FBQ0Q7QUFDRixXQU5EO0FBT0EsY0FBR0YsT0FBT1UsTUFBUCxHQUFnQixDQUFuQixFQUNFVixTQUFTQSxPQUFPYSxJQUFQLENBQVksRUFBWixDQUFUO0FBQ0YsY0FBR1gsYUFBSCxFQUNFLEtBQUtELEtBQUwsR0FBYUQsTUFBYjtBQUNILFM7OztRQXJEdUMxQixtQjs7Ozs7O2tGQUl2Q0csYzs7O2lCQUF5QixLOztvRkFDekJOLFE7OztxRkFDQU0sYzs7O21GQUNBQSxjIiwiZmlsZSI6ImF1aS1mb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBjb250YWluZXJsZXNzIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgU2VtYW50aWNFbGVtZW50QmFzZSB9IGZyb20gJy4uL2F1aS1iYXNlJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBiaW5kYWJsZUVudW0sIGJpbmRhYmxlVG9nZ2xlIH0gZnJvbSAnLi4vZGVjb3JhdG9ycyc7XG5cbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBBdWlGb3JtQ3VzdG9tRWxlbWVudCBleHRlbmRzIFNlbWFudGljRWxlbWVudEJhc2Uge1xuXG4gIEBiaW5kYWJsZUVudW0oY29uc3RhbnRzLmZvcm1TdGF0ZXMpIHN0YXRlO1xuICBAYmluZGFibGVFbnVtKGNvbnN0YW50cy5zaXplcykgc2l6ZTtcbiAgQGJpbmRhYmxlVG9nZ2xlIGxvYWRpbmcgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIGJlaGF2aW9ycztcbiAgQGJpbmRhYmxlVG9nZ2xlIGVxdWFsV2lkdGg7XG4gIEBiaW5kYWJsZVRvZ2dsZSBpbnZlcnRlZDtcblxuICBhdHRhY2hlZCgpe1xuICAgIHRoaXMuYmVoYXZpb3JzQ2hhbmdlZCgpO1xuICAgIHRoaXMuYmluZGluZ1N1YnNjcmlwdGlvbiA9IHRoaXMuYmluZGluZ0VuZ2luZS5wcm9wZXJ0eU9ic2VydmVyKHRoaXMuc2VtYW50aWNFbGVtZW50LCAnY2xhc3NOYW1lJylcbiAgICAgIC5zdWJzY3JpYmUoKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4gdGhpcy5jbGFzc0NoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSk7XG4gIH1cblxuICBkZXRhY2hlZCgpe1xuICAgIHRoaXMuYmluZGluZ1N1YnNjcmlwdGlvbiAmJiB0aGlzLmJpbmRpbmdTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICB9XG5cbiAgYmVoYXZpb3JzQ2hhbmdlZCgpe1xuICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy5iZWhhdmlvcnMpKXtcbiAgICAgICQodGhpcy5zZW1hbnRpY0VsZW1lbnQpLmZvcm0oLi4udGhpcy5iZWhhdmlvcnMpO1xuICAgIH1lbHNle1xuICAgICAgICQodGhpcy5zZW1hbnRpY0VsZW1lbnQpLmZvcm0odGhpcy5iZWhhdmlvcnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgc2VtYW50aWNFbGVtZW50J3MgY2xhc3MgY2hhbmdlcy4gVGhpcyBpcyB1c2VkIHRvIHVwZGF0ZSB0aGUgdHdvLXdheSBiaW5kYWJsZSBgc3RhdGVgIHByb3BlcnR5LCBzaW5jZSB0aGUgZm9ybSdzIHN0YXRlIG1heSBiZSBjaGFuZ2VkIGJ5IHRoZSBqUXVlcnkgcGx1Z2luLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5ld1ZhbHVlIE5ldyB2YWx1ZSBvZiBjbGFzcyBhdHRyaWJ1dGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBvbGRWYWx1ZSBPbGQgdmFsdWUgb2YgY2xhc3MgYXR0cmlidXRlXG4gICAqL1xuICBjbGFzc0NoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKXtcbiAgICBsZXQgY2xhc3NlcyA9IG5ld1ZhbHVlLnNwbGl0KCcgJyk7XG4gICAgbGV0IHN0YXRlcyA9IEFycmF5LmlzQXJyYXkodGhpcy5zdGF0ZSk/dGhpcy5zdGF0ZTpbdGhpcy5zdGF0ZV07XG4gICAgbGV0IHN0YXRlc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBzdGF0ZXMuc2xpY2UoKS5yZXZlcnNlKCkuZm9yRWFjaChmdW5jdGlvbihzdGF0ZSwgaW5kZXgsIGFycnkpIHtcbiAgICAgIGlmKCFjbGFzc2VzLmluY2x1ZGVzKHN0YXRlKSkge1xuICAgICAgICBzdGF0ZXMuc3BsaWNlKGFycnkubGVuZ3RoIC0gMSAtIGluZGV4LCAxKTtcbiAgICAgICAgc3RhdGVzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY2xhc3Nlcy5mb3JFYWNoKGNsc3MgPT4ge1xuICAgICAgaWYoIWNsc3MpIHJldHVybjtcbiAgICAgIGlmKGNvbnN0YW50cy5mb3JtU3RhdGVzLmluY2x1ZGVzKGNsc3MpICYmICFzdGF0ZXMuaW5jbHVkZXMoY2xzcykpe1xuICAgICAgICBzdGF0ZXMucHVzaChjbHNzKTtcbiAgICAgICAgc3RhdGVzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoc3RhdGVzLmxlbmd0aCA8IDIpXG4gICAgICBzdGF0ZXMgPSBzdGF0ZXMuam9pbignJyk7XG4gICAgaWYoc3RhdGVzQ2hhbmdlZClcbiAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZXM7XG4gIH1cblxufVxuIl19