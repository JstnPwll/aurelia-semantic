System.register([], function (_export, _context) {
  "use strict";

  var Utils;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Utils', Utils = function () {
        function Utils() {
          _classCallCheck(this, Utils);
        }

        Utils.dashify = function dashify(string) {
          return string.toString().replace(/([a-z])([A-Z])/, function (_, a, b) {
            return a + '-' + b.toLowerCase();
          });
        };

        Utils.splitIntoClasses = function splitIntoClasses(name) {
          if (!name) return [];
          var dashified = this.dashify(name);
          return dashified.split(/[ ]+/);
        };

        Utils.expandCssClasses = function expandCssClasses() {
          var _this = this;

          for (var _len = arguments.length, cssClasses = Array(_len), _key = 0; _key < _len; _key++) {
            cssClasses[_key] = arguments[_key];
          }

          var expanded = cssClasses.map(function (cl) {
            if (Array.isArray(cl)) {
              return _this.expandCssClasses.apply(_this, cl);
            } else {
              return _this.splitIntoClasses(cl);
            }
          });
          var flattened = [].concat.apply([], expanded);
          return flattened;
        };

        Utils.normalizeCssClasses = function normalizeCssClasses() {
          var classList = this.expandCssClasses.apply(this, arguments);
          return classList.filter(function (cl) {
            return cl !== '' && cl !== 'true' && cl !== 'false' && !cl.startsWith('au-');
          });
        };

        Utils.splitIntoStyles = function splitIntoStyles(style) {
          var styleMap = new Map();
          if (!style) return styleMap;
          var styles = style.split(/[ ]*;[ ]*/);
          console.log(styles);
          return styles.reduce(function (map, sty) {
            console.log(sty);
            var keyValuePair = sty.split(':');
            if (keyValuePair.length != 2) return map;
            map.set(keyValuePair[0], keyValuePair[1]);
            return map;
          }, styleMap);
        };

        Utils.normalizeCssStyles = function normalizeCssStyles(cssStyles) {
          var styleMap = this.splitIntoStyles(cssStyles);
          return styleMap;
        };

        Utils.joinCssStyles = function joinCssStyles(stylesMap) {
          var joined = [];
          for (var _iterator = stylesMap, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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

            joined.push(style.join(':'));
          }
          return joined.join(';');
        };

        return Utils;
      }());

      _export('Utils', Utils);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJVdGlscyIsImRhc2hpZnkiLCJzdHJpbmciLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJfIiwiYSIsImIiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0SW50b0NsYXNzZXMiLCJuYW1lIiwiZGFzaGlmaWVkIiwic3BsaXQiLCJleHBhbmRDc3NDbGFzc2VzIiwiY3NzQ2xhc3NlcyIsImV4cGFuZGVkIiwibWFwIiwiY2wiLCJBcnJheSIsImlzQXJyYXkiLCJmbGF0dGVuZWQiLCJjb25jYXQiLCJhcHBseSIsIm5vcm1hbGl6ZUNzc0NsYXNzZXMiLCJjbGFzc0xpc3QiLCJmaWx0ZXIiLCJzdGFydHNXaXRoIiwic3BsaXRJbnRvU3R5bGVzIiwic3R5bGUiLCJzdHlsZU1hcCIsIk1hcCIsInN0eWxlcyIsImNvbnNvbGUiLCJsb2ciLCJyZWR1Y2UiLCJzdHkiLCJrZXlWYWx1ZVBhaXIiLCJsZW5ndGgiLCJzZXQiLCJub3JtYWxpemVDc3NTdHlsZXMiLCJjc3NTdHlsZXMiLCJqb2luQ3NzU3R5bGVzIiwic3R5bGVzTWFwIiwiam9pbmVkIiwicHVzaCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O3VCQUVhQSxLOzs7OztjQU1KQyxPLG9CQUFRQyxNLEVBQVE7QUFDckIsaUJBQU9BLE9BQU9DLFFBQVAsR0FDTEMsT0FESyxDQUNJLGdCQURKLEVBQ3NCLFVBQUNDLENBQUQsRUFBR0MsQ0FBSCxFQUFLQyxDQUFMO0FBQUEsbUJBQWNELENBQWQsU0FBbUJDLEVBQUVDLFdBQUYsRUFBbkI7QUFBQSxXQUR0QixDQUFQO0FBRUQsUzs7Y0FPTUMsZ0IsNkJBQWlCQyxJLEVBQU07QUFDNUIsY0FBSSxDQUFDQSxJQUFMLEVBQVcsT0FBTyxFQUFQO0FBQ1gsY0FBSUMsWUFBWSxLQUFLVixPQUFMLENBQWFTLElBQWIsQ0FBaEI7QUFDQSxpQkFBT0MsVUFBVUMsS0FBVixDQUFnQixNQUFoQixDQUFQO0FBQ0QsUzs7Y0FRTUMsZ0IsK0JBQWdDO0FBQUE7O0FBQUEsNENBQVpDLFVBQVk7QUFBWkEsc0JBQVk7QUFBQTs7QUFDckMsY0FBSUMsV0FBV0QsV0FBV0UsR0FBWCxDQUFlLFVBQUNDLEVBQUQsRUFBUTtBQUNwQyxnQkFBSUMsTUFBTUMsT0FBTixDQUFjRixFQUFkLENBQUosRUFBdUI7QUFDckIscUJBQU8sTUFBS0osZ0JBQUwsY0FBeUJJLEVBQXpCLENBQVA7QUFDRCxhQUZELE1BRU87QUFDTCxxQkFBTyxNQUFLUixnQkFBTCxDQUFzQlEsRUFBdEIsQ0FBUDtBQUNEO0FBQ0YsV0FOYyxDQUFmO0FBT0EsY0FBSUcsWUFBWSxHQUFHQyxNQUFILENBQVVDLEtBQVYsQ0FBZ0IsRUFBaEIsRUFBb0JQLFFBQXBCLENBQWhCO0FBQ0EsaUJBQU9LLFNBQVA7QUFDRCxTOztjQU1NRyxtQixrQ0FBbUM7QUFDeEMsY0FBSUMsWUFBWSxLQUFLWCxnQkFBTCx1QkFBaEI7QUFDQSxpQkFBT1csVUFBVUMsTUFBVixDQUFpQixVQUFDUixFQUFELEVBQVE7QUFDOUIsbUJBQU9BLE9BQU8sRUFBUCxJQUNMQSxPQUFPLE1BREYsSUFFTEEsT0FBTyxPQUZGLElBR0wsQ0FBQ0EsR0FBR1MsVUFBSCxDQUFjLEtBQWQsQ0FISDtBQUlELFdBTE0sQ0FBUDtBQU1ELFM7O2NBT01DLGUsNEJBQWdCQyxLLEVBQU87QUFDNUIsY0FBSUMsV0FBVyxJQUFJQyxHQUFKLEVBQWY7QUFDQSxjQUFJLENBQUNGLEtBQUwsRUFBWSxPQUFPQyxRQUFQO0FBQ1osY0FBSUUsU0FBU0gsTUFBTWhCLEtBQU4sQ0FBWSxXQUFaLENBQWI7QUFDQW9CLGtCQUFRQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxpQkFBT0EsT0FBT0csTUFBUCxDQUFjLFVBQUNsQixHQUFELEVBQU1tQixHQUFOLEVBQWM7QUFDakNILG9CQUFRQyxHQUFSLENBQVlFLEdBQVo7QUFDQSxnQkFBSUMsZUFBZUQsSUFBSXZCLEtBQUosQ0FBVSxHQUFWLENBQW5CO0FBQ0EsZ0JBQUd3QixhQUFhQyxNQUFiLElBQXVCLENBQTFCLEVBQ0UsT0FBT3JCLEdBQVA7QUFDRkEsZ0JBQUlzQixHQUFKLENBQVFGLGFBQWEsQ0FBYixDQUFSLEVBQXlCQSxhQUFhLENBQWIsQ0FBekI7QUFDQSxtQkFBT3BCLEdBQVA7QUFDRCxXQVBNLEVBT0phLFFBUEksQ0FBUDtBQVFELFM7O2NBS01VLGtCLCtCQUFtQkMsUyxFQUFXO0FBQ25DLGNBQUlYLFdBQVcsS0FBS0YsZUFBTCxDQUFxQmEsU0FBckIsQ0FBZjtBQUNBLGlCQUFPWCxRQUFQO0FBQ0QsUzs7Y0FPTVksYSwwQkFBY0MsUyxFQUFXO0FBQzlCLGNBQUlDLFNBQVMsRUFBYjtBQUNBLCtCQUFpQkQsU0FBakIsa0hBQTJCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnQkFBbkJkLEtBQW1COztBQUN6QmUsbUJBQU9DLElBQVAsQ0FBWWhCLE1BQU1pQixJQUFOLENBQVcsR0FBWCxDQUFaO0FBQ0Q7QUFDRCxpQkFBT0YsT0FBT0UsSUFBUCxDQUFZLEdBQVosQ0FBUDtBQUNELFMiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBjYW1lbENhc2UgaW50byBkZWxpbWl0ZXItc2VwYXJhdGVkXG4gICAqIEBwYXJhbSAge1N0cmluZ30gc3RyaW5nIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAgICovXG4gIHN0YXRpYyBkYXNoaWZ5KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcudG9TdHJpbmcoKS5cbiAgICAgIHJlcGxhY2UoIC8oW2Etel0pKFtBLVpdKS8sIChfLGEsYikgPT4gYCR7YX0tJHtiLnRvTG93ZXJDYXNlKCl9YCApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIGEgY2xhc3MgbGlzdCBzdHJpbmcgYW5kIGNvbnZlcnRzIGl0IGludG8gYW4gYXJyYXlcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lIFRoZSBjbGFzcyBzdHJpbmdcbiAgICogQHJldHVybiB7TWFwW1N0cmluZ119ICAgICAgQSBsaXN0IG9mIGluZGl2aWR1YWwgY2xhc3Nlc1xuICAgKi9cbiAgc3RhdGljIHNwbGl0SW50b0NsYXNzZXMobmFtZSkge1xuICAgIGlmICghbmFtZSkgcmV0dXJuIFtdO1xuICAgIGxldCBkYXNoaWZpZWQgPSB0aGlzLmRhc2hpZnkobmFtZSk7XG4gICAgcmV0dXJuIGRhc2hpZmllZC5zcGxpdCgvWyBdKy8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cGFuZCBhbGwgb2YgdGhlIHZhbHVlcyBpbiB7Y3NzQ2xhc3Nlc30gc28gdGhhdCBgJ2VxdWFsV2lkdGgnYCwgYCdlcXVhbCB3aWR0aCdgLCBhbmQgXG4gICAqIGAnZXF1YWwtd2lkdGgnYCBhbGwgcmVzdWx0IGluIGBbJ2VxdWFsJywgJ3dpZHRoJ11gLiBBbHNvIHJlbW92ZXMgY2xhc3NlcyBwcmVmaXhlZCB3aXRoXG4gICAqICdhdS0nIHRvIGF2b2lkIG1lc3Npbmcgd2l0aCBBdXJlbGlhJ3MgY2xhc3Nlcy5cbiAgICogQHJldHVybiB7QXJyYXlbU3RyaW5nXX0gdGhlIGZsYXR0ZW5lZCBsaXN0IG9mIENTUyBjbGFzc2VzLlxuICAgKi9cbiAgc3RhdGljIGV4cGFuZENzc0NsYXNzZXMoLi4uY3NzQ2xhc3Nlcykge1xuICAgIGxldCBleHBhbmRlZCA9IGNzc0NsYXNzZXMubWFwKChjbCkgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2wpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4cGFuZENzc0NsYXNzZXMoLi4uY2wpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaXRJbnRvQ2xhc3NlcyhjbCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IGZsYXR0ZW5lZCA9IFtdLmNvbmNhdC5hcHBseShbXSwgZXhwYW5kZWQpO1xuICAgIHJldHVybiBmbGF0dGVuZWQ7XG4gIH1cblxuICAvKipcbiAgICogRXhwYW5kIHRoZSBjbGFzc2VzIGluIHtjc3NDbGFzc2VzfSB3aXRoIGV4cGFuZENzc0NsYXNzZXMoKSBhbmQgdGhlbiBmaWx0ZXIgb3V0IFxuICAgKiBub24tY2xhc3NlcyBhbmQgQXVyZWxpYS1pbnRlcm5hbCBjbGFzc2VzLlxuICAgKi9cbiAgc3RhdGljIG5vcm1hbGl6ZUNzc0NsYXNzZXMoLi4uY3NzQ2xhc3Nlcykge1xuICAgIGxldCBjbGFzc0xpc3QgPSB0aGlzLmV4cGFuZENzc0NsYXNzZXMoLi4uY3NzQ2xhc3Nlcyk7XG4gICAgcmV0dXJuIGNsYXNzTGlzdC5maWx0ZXIoKGNsKSA9PiB7XG4gICAgICByZXR1cm4gY2wgIT09ICcnICYmXG4gICAgICAgIGNsICE9PSAndHJ1ZScgJiZcbiAgICAgICAgY2wgIT09ICdmYWxzZScgJiZcbiAgICAgICAgIWNsLnN0YXJ0c1dpdGgoJ2F1LScpXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3BsaXRzIGEgc3R5bGUgc3RyaW5nIGludG8gaXRzIGNvbnN0aXVlbnQgcGFydHMgKGtleS92YWx1ZSBwYWlycylcbiAgICogQHBhcmFtICB7U3RyaW5nfSBzdHlsZSBUaGUgc3R5bGUgc3RyaW5nIHRvIHNwbGl0XG4gICAqIEByZXR1cm4ge01hcDxTdHJpbmcsU3RyaW5nPn0gICAgICAgQSBtYXAgb2Yga2V5L3ZhbHVlIHBhaXJzIGZvciBlYWNoIHN0eWxlXG4gICAqL1xuICBzdGF0aWMgc3BsaXRJbnRvU3R5bGVzKHN0eWxlKSB7XG4gICAgbGV0IHN0eWxlTWFwID0gbmV3IE1hcCgpO1xuICAgIGlmICghc3R5bGUpIHJldHVybiBzdHlsZU1hcDtcbiAgICBsZXQgc3R5bGVzID0gc3R5bGUuc3BsaXQoL1sgXSo7WyBdKi8pO1xuICAgIGNvbnNvbGUubG9nKHN0eWxlcylcbiAgICByZXR1cm4gc3R5bGVzLnJlZHVjZSgobWFwLCBzdHkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHN0eSlcbiAgICAgIGxldCBrZXlWYWx1ZVBhaXIgPSBzdHkuc3BsaXQoJzonKTtcbiAgICAgIGlmKGtleVZhbHVlUGFpci5sZW5ndGggIT0gMilcbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgIG1hcC5zZXQoa2V5VmFsdWVQYWlyWzBdLCBrZXlWYWx1ZVBhaXJbMV0pO1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9LCBzdHlsZU1hcCk7XG4gIH1cblxuICAvKipcbiAgICogRXhwYW5kIHRoZSBzdHlsZXMgaW4ge2Nzc1N0eWxlc31cbiAgICovXG4gIHN0YXRpYyBub3JtYWxpemVDc3NTdHlsZXMoY3NzU3R5bGVzKSB7XG4gICAgbGV0IHN0eWxlTWFwID0gdGhpcy5zcGxpdEludG9TdHlsZXMoY3NzU3R5bGVzKTtcbiAgICByZXR1cm4gc3R5bGVNYXA7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSBzdHlsZSBtYXAgaW50byBhIHN0eWxlIHN0cmluZ1xuICAgKiBAcGFyYW0gIHtNYXA8U3RyaW5nLFN0cmluZ30gc3R5bGVzTWFwIFRoZSBtYXAgb2Ygc3R5bGVzXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICAgIEZpbmFsIHN0eWxlIHN0cmluZ1xuICAgKi9cbiAgc3RhdGljIGpvaW5Dc3NTdHlsZXMoc3R5bGVzTWFwKSB7XG4gICAgbGV0IGpvaW5lZCA9IFtdO1xuICAgIGZvcihsZXQgc3R5bGUgb2Ygc3R5bGVzTWFwKXtcbiAgICAgIGpvaW5lZC5wdXNoKHN0eWxlLmpvaW4oJzonKSk7XG4gICAgfVxuICAgIHJldHVybiBqb2luZWQuam9pbignOycpO1xuICB9XG59XG4iXX0=