System.register(['aurelia-framework', '../aui-base', '../constants', '../decorators'], function (_export, _context) {
  "use strict";

  var inject, containerless, SemanticElementBase, constants, bindableEnum, bindableToggle, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, AuiLabelCustomElement;

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
      bindableToggle = _decorators.bindableToggle;
    }],
    execute: function () {
      _export('AuiLabelCustomElement', AuiLabelCustomElement = (_dec = containerless(), _dec2 = bindableEnum(constants.colors), _dec3 = bindableEnum(constants.directions, { includeName: true }), _dec(_class = (_class2 = function (_SemanticElementBase) {
        _inherits(AuiLabelCustomElement, _SemanticElementBase);

        function AuiLabelCustomElement() {
          var _temp, _this, _ret;

          _classCallCheck(this, AuiLabelCustomElement);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _SemanticElementBase.call.apply(_SemanticElementBase, [this].concat(args))), _this), _initDefineProp(_this, 'color', _descriptor, _this), _initDefineProp(_this, 'pointing', _descriptor2, _this), _temp), _possibleConstructorReturn(_this, _ret);
        }

        AuiLabelCustomElement.prototype.attached = function attached() {};

        AuiLabelCustomElement.prototype.detached = function detached() {};

        return AuiLabelCustomElement;
      }(SemanticElementBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec2], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'pointing', [_dec3], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class));

      _export('AuiLabelCustomElement', AuiLabelCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50cy9hdWktbGFiZWwuanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiY29udGFpbmVybGVzcyIsIlNlbWFudGljRWxlbWVudEJhc2UiLCJjb25zdGFudHMiLCJiaW5kYWJsZUVudW0iLCJiaW5kYWJsZVRvZ2dsZSIsIkF1aUxhYmVsQ3VzdG9tRWxlbWVudCIsImNvbG9ycyIsImRpcmVjdGlvbnMiLCJpbmNsdWRlTmFtZSIsImF0dGFjaGVkIiwiZGV0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLFkscUJBQUFBLE07QUFBUUMsbUIscUJBQUFBLGE7O0FBQ1JDLHlCLFlBQUFBLG1COztBQUNBQyxlLGNBQUFBLFM7O0FBQ0FDLGtCLGVBQUFBLFk7QUFBY0Msb0IsZUFBQUEsYzs7O3VDQUdWQyxxQixXQURaTCxlLFVBR0VHLGFBQWFELFVBQVVJLE1BQXZCLEMsVUFDQUgsYUFBYUQsVUFBVUssVUFBdkIsRUFBbUMsRUFBQ0MsYUFBWSxJQUFiLEVBQW5DLEM7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FFREMsUSx1QkFBVSxDQUVULEM7O3dDQUVEQyxRLHVCQUFVLENBRVQsQzs7O1FBWHdDVCxtQiIsImZpbGUiOiJhdWktbGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBjb250YWluZXJsZXNzIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgU2VtYW50aWNFbGVtZW50QmFzZSB9IGZyb20gJy4uL2F1aS1iYXNlJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBiaW5kYWJsZUVudW0sIGJpbmRhYmxlVG9nZ2xlIH0gZnJvbSAnLi4vZGVjb3JhdG9ycyc7XG5cbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBBdWlMYWJlbEN1c3RvbUVsZW1lbnQgZXh0ZW5kcyBTZW1hbnRpY0VsZW1lbnRCYXNlIHtcblxuICBAYmluZGFibGVFbnVtKGNvbnN0YW50cy5jb2xvcnMpIGNvbG9yO1xuICBAYmluZGFibGVFbnVtKGNvbnN0YW50cy5kaXJlY3Rpb25zLCB7aW5jbHVkZU5hbWU6dHJ1ZX0pIHBvaW50aW5nO1xuXG4gIGF0dGFjaGVkKCl7XG5cbiAgfVxuXG4gIGRldGFjaGVkKCl7XG4gICAgXG4gIH1cblxufVxuIl19