System.register(['aurelia-framework', '../aui-base', '../constants', '../decorators'], function (_export, _context) {
  "use strict";

  var inject, containerless, SemanticElementBase, constants, bindableEnum, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, AuiIconCustomElement;

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
      containerless = _aureliaFramework.containerless;
    }, function (_auiBase) {
      SemanticElementBase = _auiBase.SemanticElementBase;
    }, function (_constants) {
      constants = _constants.constants;
    }, function (_decorators) {
      bindableEnum = _decorators.bindableEnum;
    }],
    execute: function () {
      _export('AuiIconCustomElement', AuiIconCustomElement = (_dec = containerless(), _dec2 = bindableEnum(), _dec3 = bindableEnum(constants.colors), _dec(_class = (_class2 = function (_SemanticElementBase) {
        _inherits(AuiIconCustomElement, _SemanticElementBase);

        function AuiIconCustomElement() {
          var _temp, _this, _ret;

          _classCallCheck(this, AuiIconCustomElement);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _SemanticElementBase.call.apply(_SemanticElementBase, [this].concat(args))), _this), _initDefineProp(_this, 'icon', _descriptor, _this), _initDefineProp(_this, 'color', _descriptor2, _this), _temp), _possibleConstructorReturn(_this, _ret);
        }

        AuiIconCustomElement.prototype.attached = function attached() {};

        AuiIconCustomElement.prototype.detached = function detached() {};

        return AuiIconCustomElement;
      }(SemanticElementBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec2], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec3], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class));

      _export('AuiIconCustomElement', AuiIconCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50cy9hdWktaWNvbi5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJjb250YWluZXJsZXNzIiwiU2VtYW50aWNFbGVtZW50QmFzZSIsImNvbnN0YW50cyIsImJpbmRhYmxlRW51bSIsIkF1aUljb25DdXN0b21FbGVtZW50IiwiY29sb3JzIiwiYXR0YWNoZWQiLCJkZXRhY2hlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsWSxxQkFBQUEsTTtBQUFRQyxtQixxQkFBQUEsYTs7QUFDUkMseUIsWUFBQUEsbUI7O0FBQ0FDLGUsY0FBQUEsUzs7QUFDQUMsa0IsZUFBQUEsWTs7O3NDQUdJQyxvQixXQURaSixlLFVBR0VHLGMsVUFDQUEsYUFBYUQsVUFBVUcsTUFBdkIsQzs7Ozs7Ozs7Ozs7Ozs7O3VDQUVEQyxRLHVCQUFVLENBRVQsQzs7dUNBRURDLFEsdUJBQVUsQ0FFVCxDOzs7UUFYdUNOLG1CIiwiZmlsZSI6ImF1aS1pY29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgY29udGFpbmVybGVzcyB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IFNlbWFudGljRWxlbWVudEJhc2UgfSBmcm9tICcuLi9hdWktYmFzZSc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgYmluZGFibGVFbnVtIH0gZnJvbSAnLi4vZGVjb3JhdG9ycyc7XG5cbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBBdWlJY29uQ3VzdG9tRWxlbWVudCBleHRlbmRzIFNlbWFudGljRWxlbWVudEJhc2Uge1xuXG4gIEBiaW5kYWJsZUVudW0oKSBpY29uO1xuICBAYmluZGFibGVFbnVtKGNvbnN0YW50cy5jb2xvcnMpIGNvbG9yO1xuXG4gIGF0dGFjaGVkKCl7XG5cbiAgfVxuXG4gIGRldGFjaGVkKCl7XG4gICAgXG4gIH1cblxufVxuIl19