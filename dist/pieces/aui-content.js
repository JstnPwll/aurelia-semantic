System.register(['aurelia-framework', '../aui-base', '../decorators'], function (_export, _context) {
  "use strict";

  var inject, containerless, SemanticElementBase, bindableToggle, _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, AuiContentCustomElement;

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
    }, function (_decorators) {
      bindableToggle = _decorators.bindableToggle;
    }],
    execute: function () {
      _export('AuiContentCustomElement', AuiContentCustomElement = (_dec = containerless(), _dec(_class = (_class2 = function (_SemanticElementBase) {
        _inherits(AuiContentCustomElement, _SemanticElementBase);

        function AuiContentCustomElement() {
          var _temp, _this, _ret;

          _classCallCheck(this, AuiContentCustomElement);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _SemanticElementBase.call.apply(_SemanticElementBase, [this].concat(args))), _this), _initDefineProp(_this, 'visible', _descriptor, _this), _initDefineProp(_this, 'hidden', _descriptor2, _this), _temp), _possibleConstructorReturn(_this, _ret);
        }

        AuiContentCustomElement.prototype.attached = function attached() {};

        AuiContentCustomElement.prototype.detached = function detached() {};

        return AuiContentCustomElement;
      }(SemanticElementBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'visible', [bindableToggle], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'hidden', [bindableToggle], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class));

      _export('AuiContentCustomElement', AuiContentCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waWVjZXMvYXVpLWNvbnRlbnQuanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiY29udGFpbmVybGVzcyIsIlNlbWFudGljRWxlbWVudEJhc2UiLCJiaW5kYWJsZVRvZ2dsZSIsIkF1aUNvbnRlbnRDdXN0b21FbGVtZW50IiwiYXR0YWNoZWQiLCJkZXRhY2hlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsWSxxQkFBQUEsTTtBQUFRQyxtQixxQkFBQUEsYTs7QUFDUkMseUIsWUFBQUEsbUI7O0FBQ0FDLG9CLGVBQUFBLGM7Ozt5Q0FHSUMsdUIsV0FEWkgsZTs7Ozs7Ozs7Ozs7Ozs7OzBDQU1DSSxRLHVCQUFVLENBRVQsQzs7MENBRURDLFEsdUJBQVUsQ0FFVCxDOzs7UUFYMENKLG1CLDJFQUUxQ0MsYzs7O2lCQUF5QixJOztpRkFDekJBLGMiLCJmaWxlIjoiYXVpLWNvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBjb250YWluZXJsZXNzIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgU2VtYW50aWNFbGVtZW50QmFzZSB9IGZyb20gJy4uL2F1aS1iYXNlJztcbmltcG9ydCB7IGJpbmRhYmxlVG9nZ2xlIH0gZnJvbSAnLi4vZGVjb3JhdG9ycyc7XG5cbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBBdWlDb250ZW50Q3VzdG9tRWxlbWVudCBleHRlbmRzIFNlbWFudGljRWxlbWVudEJhc2Uge1xuXG4gIEBiaW5kYWJsZVRvZ2dsZSB2aXNpYmxlID0gdHJ1ZTtcbiAgQGJpbmRhYmxlVG9nZ2xlIGhpZGRlbjtcblxuICBhdHRhY2hlZCgpe1xuXG4gIH1cblxuICBkZXRhY2hlZCgpe1xuICAgIFxuICB9XG5cbn1cbiJdfQ==