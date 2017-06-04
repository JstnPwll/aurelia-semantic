System.register(['aurelia-framework', 'jquery'], function (_export, _context) {
  "use strict";

  var bindable, bindingMode, containerless, $, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, AuiFormCustomElement;

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
      bindingMode = _aureliaFramework.bindingMode;
      containerless = _aureliaFramework.containerless;
    }, function (_jquery) {
      $ = _jquery.default;
    }],
    execute: function () {
      _export('AuiFormCustomElement', AuiFormCustomElement = (_dec = containerless(), _dec2 = inject(Element), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
        function AuiFormCustomElement(element) {
          _classCallCheck(this, AuiFormCustomElement);

          _initDefineProp(this, 'size', _descriptor, this);

          _initDefineProp(this, 'state', _descriptor2, this);

          _initDefineProp(this, 'equalWidth', _descriptor3, this);

          _initDefineProp(this, 'inverted', _descriptor4, this);

          _initDefineProp(this, 'behaviors', _descriptor5, this);

          this.sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'];
          this.states = ['loading', 'success', 'error', 'warning'];

          this.element = element;
        }

        AuiFormCustomElement.prototype.bind = function bind() {
          this.setSize(this.size || this.element.getAttribute('size'));
          this.setState(this.state || this.element.getAttribute('state'));
        };

        AuiFormCustomElement.prototype.attached = function attached() {
          if (this.behaviors) $(this.element).form(this.behaviors);
        };

        AuiFormCustomElement.prototype.setSize = function setSize(size) {
          this.size = sizes.includes(size) ? size : '';
        };

        AuiFormCustomElement.prototype.setState = function setState(state) {
          this.state = states.includes(state) ? state : '';
        };

        AuiFormCustomElement.prototype.getModifiers = function getModifiers() {
          var modifiers = [];
          if (this.size) modifiers.push(this.size);
          if (this.state) modifiers.push(this.state);
          if (this.equalWidth) modifiers.push('equal width');
          if (this.inverted) modifiers.push('inverted');
          return modifiers.join(' ');
        };

        AuiFormCustomElement.prototype.behaviorsChanged = function behaviorsChanged() {
          $(this.element).form(this.behaviors);
        };

        return AuiFormCustomElement;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec3], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'state', [_dec4], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'equalWidth', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'inverted', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'behaviors', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('AuiFormCustomElement', AuiFormCustomElement);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2xsZWN0aW9ucy9hdWktZm9ybS5qcyJdLCJuYW1lcyI6WyJiaW5kYWJsZSIsImJpbmRpbmdNb2RlIiwiY29udGFpbmVybGVzcyIsIiQiLCJBdWlGb3JtQ3VzdG9tRWxlbWVudCIsImluamVjdCIsIkVsZW1lbnQiLCJkZWZhdWx0QmluZGluZ01vZGUiLCJ0d29XYXkiLCJlbGVtZW50Iiwic2l6ZXMiLCJzdGF0ZXMiLCJiaW5kIiwic2V0U2l6ZSIsInNpemUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRTdGF0ZSIsInN0YXRlIiwiYXR0YWNoZWQiLCJiZWhhdmlvcnMiLCJmb3JtIiwiaW5jbHVkZXMiLCJnZXRNb2RpZmllcnMiLCJtb2RpZmllcnMiLCJwdXNoIiwiZXF1YWxXaWR0aCIsImludmVydGVkIiwiam9pbiIsImJlaGF2aW9yc0NoYW5nZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLGMscUJBQUFBLFE7QUFBVUMsaUIscUJBQUFBLFc7QUFBYUMsbUIscUJBQUFBLGE7O0FBQ3pCQyxPOzs7c0NBSU1DLG9CLFdBRlpGLGUsVUFDQUcsT0FBT0MsT0FBUCxDLFVBR0VOLFNBQVMsRUFBQ08sb0JBQW9CTixZQUFZTyxNQUFqQyxFQUFULEMsVUFDQVIsU0FBUyxFQUFDTyxvQkFBb0JOLFlBQVlPLE1BQWpDLEVBQVQsQztBQVFELHNDQUFZQyxPQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsZUFIcEJDLEtBR29CLEdBSFosQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixPQUFqQixFQUEwQixPQUExQixFQUFtQyxLQUFuQyxFQUEwQyxNQUExQyxFQUFrRCxTQUFsRCxDQUdZO0FBQUEsZUFGcEJDLE1BRW9CLEdBRlgsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixPQUF2QixFQUFnQyxTQUFoQyxDQUVXOztBQUNsQixlQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDRDs7dUNBRURHLEksbUJBQU87QUFDTCxlQUFLQyxPQUFMLENBQWEsS0FBS0MsSUFBTCxJQUFhLEtBQUtMLE9BQUwsQ0FBYU0sWUFBYixDQUEwQixNQUExQixDQUExQjtBQUNBLGVBQUtDLFFBQUwsQ0FBYyxLQUFLQyxLQUFMLElBQWMsS0FBS1IsT0FBTCxDQUFhTSxZQUFiLENBQTBCLE9BQTFCLENBQTVCO0FBQ0QsUzs7dUNBRURHLFEsdUJBQVU7QUFDUixjQUFHLEtBQUtDLFNBQVIsRUFDRWhCLEVBQUUsS0FBS00sT0FBUCxFQUFnQlcsSUFBaEIsQ0FBcUIsS0FBS0QsU0FBMUI7QUFDSCxTOzt1Q0FFRE4sTyxvQkFBUUMsSSxFQUFLO0FBQ1gsZUFBS0EsSUFBTCxHQUFZSixNQUFNVyxRQUFOLENBQWVQLElBQWYsSUFBdUJBLElBQXZCLEdBQThCLEVBQTFDO0FBQ0QsUzs7dUNBRURFLFEscUJBQVNDLEssRUFBTTtBQUNiLGVBQUtBLEtBQUwsR0FBYU4sT0FBT1UsUUFBUCxDQUFnQkosS0FBaEIsSUFBeUJBLEtBQXpCLEdBQWlDLEVBQTlDO0FBQ0QsUzs7dUNBRURLLFksMkJBQWM7QUFDWixjQUFJQyxZQUFZLEVBQWhCO0FBQ0EsY0FBRyxLQUFLVCxJQUFSLEVBQ0VTLFVBQVVDLElBQVYsQ0FBZSxLQUFLVixJQUFwQjtBQUNGLGNBQUcsS0FBS0csS0FBUixFQUNFTSxVQUFVQyxJQUFWLENBQWUsS0FBS1AsS0FBcEI7QUFDRixjQUFHLEtBQUtRLFVBQVIsRUFDRUYsVUFBVUMsSUFBVixDQUFlLGFBQWY7QUFDRixjQUFHLEtBQUtFLFFBQVIsRUFDRUgsVUFBVUMsSUFBVixDQUFlLFVBQWY7QUFDRixpQkFBT0QsVUFBVUksSUFBVixDQUFlLEdBQWYsQ0FBUDtBQUNELFM7O3VDQUVEQyxnQiwrQkFBa0I7QUFDaEJ6QixZQUFFLEtBQUtNLE9BQVAsRUFBZ0JXLElBQWhCLENBQXFCLEtBQUtELFNBQTFCO0FBQ0QsUzs7Ozs7Ozs7O3FGQTVDQW5CLFE7OzttRkFDQUEsUTs7O29GQUNBQSxRIiwiZmlsZSI6ImF1aS1mb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgY29udGFpbmVybGVzcyB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbkBjb250YWluZXJsZXNzKClcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBBdWlGb3JtQ3VzdG9tRWxlbWVudCB7XG5cbiAgQGJpbmRhYmxlKHtkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheX0pIHNpemU7XG4gIEBiaW5kYWJsZSh7ZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXl9KSBzdGF0ZTtcbiAgQGJpbmRhYmxlIGVxdWFsV2lkdGg7XG4gIEBiaW5kYWJsZSBpbnZlcnRlZDtcbiAgQGJpbmRhYmxlIGJlaGF2aW9ycztcblxuICBzaXplcyA9IFsnbWluaScsICd0aW55JywgJ3NtYWxsJywgJ2xhcmdlJywgJ2JpZycsICdodWdlJywgJ21hc3NpdmUnXTtcbiAgc3RhdGVzID0gWydsb2FkaW5nJywgJ3N1Y2Nlc3MnLCAnZXJyb3InLCAnd2FybmluZyddO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpe1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMuc2V0U2l6ZSh0aGlzLnNpemUgfHwgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnc2l6ZScpKTtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUgfHwgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnc3RhdGUnKSk7XG4gIH1cblxuICBhdHRhY2hlZCgpe1xuICAgIGlmKHRoaXMuYmVoYXZpb3JzKVxuICAgICAgJCh0aGlzLmVsZW1lbnQpLmZvcm0odGhpcy5iZWhhdmlvcnMpO1xuICB9XG5cbiAgc2V0U2l6ZShzaXplKXtcbiAgICB0aGlzLnNpemUgPSBzaXplcy5pbmNsdWRlcyhzaXplKSA/IHNpemUgOiAnJztcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKXtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGVzLmluY2x1ZGVzKHN0YXRlKSA/IHN0YXRlIDogJyc7XG4gIH1cblxuICBnZXRNb2RpZmllcnMoKXtcbiAgICBsZXQgbW9kaWZpZXJzID0gW107XG4gICAgaWYodGhpcy5zaXplKVxuICAgICAgbW9kaWZpZXJzLnB1c2godGhpcy5zaXplKTtcbiAgICBpZih0aGlzLnN0YXRlKVxuICAgICAgbW9kaWZpZXJzLnB1c2godGhpcy5zdGF0ZSk7XG4gICAgaWYodGhpcy5lcXVhbFdpZHRoKVxuICAgICAgbW9kaWZpZXJzLnB1c2goJ2VxdWFsIHdpZHRoJyk7XG4gICAgaWYodGhpcy5pbnZlcnRlZClcbiAgICAgIG1vZGlmaWVycy5wdXNoKCdpbnZlcnRlZCcpO1xuICAgIHJldHVybiBtb2RpZmllcnMuam9pbignICcpO1xuICB9XG5cbiAgYmVoYXZpb3JzQ2hhbmdlZCgpe1xuICAgICQodGhpcy5lbGVtZW50KS5mb3JtKHRoaXMuYmVoYXZpb3JzKTtcbiAgfVxuXG59XG4iXX0=