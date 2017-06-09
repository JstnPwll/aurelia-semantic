System.register(['aurelia-framework', './constants'], function (_export, _context) {
    "use strict";

    var bindable, constants;
    function bindableEnum(validValues, options) {
        options = Object.assign({}, options);
        return function (target, name, descriptor) {
            var changedMethodName = name + 'Changed';
            if (typeof target[changedMethodName] == 'function') return;

            target[changedMethodName] = function (newValue, oldValue) {
                this.removeCssClasses(oldValue);
                if (options.includeName) this.removeCssClasses(name);
                if (!validValues || validValues.includes(newValue)) {
                    this.addCssClasses(newValue);
                    if (options.includeName) this.addCssClasses(name);
                }
            };

            var originalBind = target.bind;
            target.bind = function () {
                if (originalBind) {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    Reflect.apply(originalBind, this, args);
                }
                if ((this[name] || this[name] === '') && (!validValues || validValues.includes(this[name]))) {
                    this.addCssClasses(this[name]);
                    if (options.includeName) this.addCssClasses(name);
                }
            };

            return bindable(target, name, descriptor);
        };
    }

    _export('bindableEnum', bindableEnum);

    function bindableToggle(target, name, descriptor) {
        var changedMethodName = name + 'Changed';
        if (typeof target[changedMethodName] == 'function') return;
        target[changedMethodName] = function (newValue) {
            if (newValue) {
                this.addCssClasses(name);
            } else {
                this.removeCssClasses(name);
            }
        };

        var originalBind = target.bind;
        target.bind = function () {
            if (originalBind) {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                Reflect.apply(originalBind, this, args);
            }
            if (this[name] !== null && this[name] !== false && typeof this[name] != 'undefined') {
                this.addCssClasses(name);
            }
        };

        return bindable(target, name, descriptor);
    }

    _export('bindableToggle', bindableToggle);

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
        }, function (_constants) {
            constants = _constants.constants;
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNvcmF0b3JzLmpzIl0sIm5hbWVzIjpbImJpbmRhYmxlRW51bSIsInZhbGlkVmFsdWVzIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsIm5hbWUiLCJkZXNjcmlwdG9yIiwiY2hhbmdlZE1ldGhvZE5hbWUiLCJuZXdWYWx1ZSIsIm9sZFZhbHVlIiwicmVtb3ZlQ3NzQ2xhc3NlcyIsImluY2x1ZGVOYW1lIiwiaW5jbHVkZXMiLCJhZGRDc3NDbGFzc2VzIiwib3JpZ2luYWxCaW5kIiwiYmluZCIsImFyZ3MiLCJSZWZsZWN0IiwiYXBwbHkiLCJiaW5kYWJsZSIsImJpbmRhYmxlVG9nZ2xlIiwiY29uc3RhbnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBT08sYUFBU0EsWUFBVCxDQUFzQkMsV0FBdEIsRUFBbUNDLE9BQW5DLEVBQTRDO0FBQy9DQSxrQkFBVUMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLE9BQWxCLENBQVY7QUFDQSxlQUFPLFVBQVVHLE1BQVYsRUFBa0JDLElBQWxCLEVBQXdCQyxVQUF4QixFQUFvQztBQUN2QyxnQkFBSUMsb0JBQXVCRixJQUF2QixZQUFKO0FBQ0EsZ0JBQUcsT0FBT0QsT0FBT0csaUJBQVAsQ0FBUCxJQUFvQyxVQUF2QyxFQUNFOztBQUVGSCxtQkFBT0csaUJBQVAsSUFBNEIsVUFBU0MsUUFBVCxFQUFtQkMsUUFBbkIsRUFBNkI7QUFDckQscUJBQUtDLGdCQUFMLENBQXNCRCxRQUF0QjtBQUNBLG9CQUFHUixRQUFRVSxXQUFYLEVBQ0UsS0FBS0QsZ0JBQUwsQ0FBc0JMLElBQXRCO0FBQ0Ysb0JBQUcsQ0FBQ0wsV0FBRCxJQUFjQSxZQUFZWSxRQUFaLENBQXFCSixRQUFyQixDQUFqQixFQUFnRDtBQUM5Qyx5QkFBS0ssYUFBTCxDQUFtQkwsUUFBbkI7QUFDQSx3QkFBR1AsUUFBUVUsV0FBWCxFQUNFLEtBQUtFLGFBQUwsQ0FBbUJSLElBQW5CO0FBQ0g7QUFDSixhQVREOztBQVdBLGdCQUFJUyxlQUFlVixPQUFPVyxJQUExQjtBQUNBWCxtQkFBT1csSUFBUCxHQUFjLFlBQWlCO0FBQzNCLG9CQUFJRCxZQUFKLEVBQWtCO0FBQUEsc0RBRElFLElBQ0o7QUFESUEsNEJBQ0o7QUFBQTs7QUFDZEMsNEJBQVFDLEtBQVIsQ0FBY0osWUFBZCxFQUE0QixJQUE1QixFQUFrQ0UsSUFBbEM7QUFDSDtBQUNELG9CQUFJLENBQUMsS0FBS1gsSUFBTCxLQUFjLEtBQUtBLElBQUwsTUFBZSxFQUE5QixNQUFzQyxDQUFDTCxXQUFELElBQWNBLFlBQVlZLFFBQVosQ0FBcUIsS0FBS1AsSUFBTCxDQUFyQixDQUFwRCxDQUFKLEVBQTJGO0FBQ3ZGLHlCQUFLUSxhQUFMLENBQW1CLEtBQUtSLElBQUwsQ0FBbkI7QUFDQSx3QkFBR0osUUFBUVUsV0FBWCxFQUNFLEtBQUtFLGFBQUwsQ0FBbUJSLElBQW5CO0FBQ0w7QUFDSixhQVREOztBQVdBLG1CQUFPYyxTQUFTZixNQUFULEVBQWlCQyxJQUFqQixFQUF1QkMsVUFBdkIsQ0FBUDtBQUNILFNBN0JEO0FBOEJIOzs0QkFoQ2VQLFk7O0FBcUNULGFBQVNxQixjQUFULENBQXdCaEIsTUFBeEIsRUFBZ0NDLElBQWhDLEVBQXNDQyxVQUF0QyxFQUFrRDtBQUNyRCxZQUFJQyxvQkFBdUJGLElBQXZCLFlBQUo7QUFDQSxZQUFHLE9BQU9ELE9BQU9HLGlCQUFQLENBQVAsSUFBb0MsVUFBdkMsRUFDTTtBQUNOSCxlQUFPRyxpQkFBUCxJQUE0QixVQUFTQyxRQUFULEVBQWtCO0FBQzFDLGdCQUFJQSxRQUFKLEVBQWM7QUFBRSxxQkFBS0ssYUFBTCxDQUFtQlIsSUFBbkI7QUFBMkIsYUFBM0MsTUFDSztBQUFFLHFCQUFLSyxnQkFBTCxDQUFzQkwsSUFBdEI7QUFBOEI7QUFDeEMsU0FIRDs7QUFLQSxZQUFJUyxlQUFlVixPQUFPVyxJQUExQjtBQUNBWCxlQUFPVyxJQUFQLEdBQWMsWUFBaUI7QUFDM0IsZ0JBQUlELFlBQUosRUFBa0I7QUFBQSxtREFESUUsSUFDSjtBQURJQSx3QkFDSjtBQUFBOztBQUNkQyx3QkFBUUMsS0FBUixDQUFlSixZQUFmLEVBQTZCLElBQTdCLEVBQW1DRSxJQUFuQztBQUNIO0FBQ0QsZ0JBQUksS0FBS1gsSUFBTCxNQUFlLElBQWYsSUFBdUIsS0FBS0EsSUFBTCxNQUFlLEtBQXRDLElBQStDLE9BQU8sS0FBS0EsSUFBTCxDQUFQLElBQXFCLFdBQXhFLEVBQXFGO0FBQ2pGLHFCQUFLUSxhQUFMLENBQW1CUixJQUFuQjtBQUNIO0FBQ0osU0FQRDs7QUFTQSxlQUFPYyxTQUFTZixNQUFULEVBQWlCQyxJQUFqQixFQUF1QkMsVUFBdkIsQ0FBUDtBQUNIOzs4QkFwQmVjLGM7Ozs7QUE1Q1BELG9CLHFCQUFBQSxROztBQUNBRSxxQixjQUFBQSxTIiwiZmlsZSI6ImRlY29yYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBjb25zdGFudHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogTWFya3MgYSBwYXJ0aWN1bGFyIGVsZW1lbnQncyBwcm9wZXJ0eSBhcyBiaW5kYWJsZSwgdXNpbmcgYSB2YWx1ZSBmcm9tIGEgbGlzdCBvZiB2YWxpZCB2YWx1ZXMgYXMgdGhlIGNsYXNzIG5hbWVcbiAqIEBwYXJhbSAge0FycmF5W1N0cmluZ119IHZhbGlkVmFsdWVzIEFuIGFycmF5IG9mIHZhbGlkIHZhbHVlcyBmb3IgdGhlIHByb3BlcnR5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kYWJsZUVudW0odmFsaWRWYWx1ZXMsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgbGV0IGNoYW5nZWRNZXRob2ROYW1lID0gYCR7bmFtZX1DaGFuZ2VkYDtcbiAgICAgICAgaWYodHlwZW9mIHRhcmdldFtjaGFuZ2VkTWV0aG9kTmFtZV0gPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdGFyZ2V0W2NoYW5nZWRNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDc3NDbGFzc2VzKG9sZFZhbHVlKTtcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuaW5jbHVkZU5hbWUpXG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ3NzQ2xhc3NlcyhuYW1lKTtcbiAgICAgICAgICAgIGlmKCF2YWxpZFZhbHVlc3x8dmFsaWRWYWx1ZXMuaW5jbHVkZXMobmV3VmFsdWUpKXtcbiAgICAgICAgICAgICAgdGhpcy5hZGRDc3NDbGFzc2VzKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgaWYob3B0aW9ucy5pbmNsdWRlTmFtZSlcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENzc0NsYXNzZXMobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IG9yaWdpbmFsQmluZCA9IHRhcmdldC5iaW5kO1xuICAgICAgICB0YXJnZXQuYmluZCA9IGZ1bmN0aW9uKC4uLmFyZ3Mpe1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsQmluZCkge1xuICAgICAgICAgICAgICAgIFJlZmxlY3QuYXBwbHkob3JpZ2luYWxCaW5kLCB0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgodGhpc1tuYW1lXSB8fCB0aGlzW25hbWVdID09PSAnJykgJiYgKCF2YWxpZFZhbHVlc3x8dmFsaWRWYWx1ZXMuaW5jbHVkZXModGhpc1tuYW1lXSkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDc3NDbGFzc2VzKHRoaXNbbmFtZV0pO1xuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuaW5jbHVkZU5hbWUpXG4gICAgICAgICAgICAgICAgICB0aGlzLmFkZENzc0NsYXNzZXMobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGJpbmRhYmxlKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBNYXJrcyBhIHBhcnRpY3VsYXIgZWxlbWVudCdzIHByb3BlcnR5IGFzIGJpbmRhYmxlLCB1c2luZyB0aGUgcHJvcGVydHkgbmFtZSBhcyB0aGUgZWxlbWVudCdzIGNsYXNzIG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRhYmxlVG9nZ2xlKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIGxldCBjaGFuZ2VkTWV0aG9kTmFtZSA9IGAke25hbWV9Q2hhbmdlZGA7XG4gICAgaWYodHlwZW9mIHRhcmdldFtjaGFuZ2VkTWV0aG9kTmFtZV0gPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICByZXR1cm47XG4gICAgdGFyZ2V0W2NoYW5nZWRNZXRob2ROYW1lXSA9IGZ1bmN0aW9uKG5ld1ZhbHVlKXtcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7IHRoaXMuYWRkQ3NzQ2xhc3NlcyhuYW1lKTsgfVxuICAgICAgICBlbHNlIHsgdGhpcy5yZW1vdmVDc3NDbGFzc2VzKG5hbWUpOyB9XG4gICAgfTtcblxuICAgIGxldCBvcmlnaW5hbEJpbmQgPSB0YXJnZXQuYmluZDtcbiAgICB0YXJnZXQuYmluZCA9IGZ1bmN0aW9uKC4uLmFyZ3Mpe1xuICAgICAgICBpZiAob3JpZ2luYWxCaW5kKSB7XG4gICAgICAgICAgICBSZWZsZWN0LmFwcGx5KCBvcmlnaW5hbEJpbmQsIHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzW25hbWVdICE9PSBudWxsICYmIHRoaXNbbmFtZV0gIT09IGZhbHNlICYmIHR5cGVvZiB0aGlzW25hbWVdICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENzc0NsYXNzZXMobmFtZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGJpbmRhYmxlKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG59XG4iXX0=