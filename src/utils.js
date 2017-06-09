

export class Utils {
  /**
   * Converts camelCase into delimiter-separated
   * @param  {String} string The value to convert
   * @return {String}        The converted value
   */
  static dashify(string) {
    return string.toString().
      replace( /([a-z])([A-Z])/, (_,a,b) => `${a}-${b.toLowerCase()}` );
  }

  /**
   * Takes a class list string and converts it into an array
   * @param  {String} name The class string
   * @return {Map[String]}      A list of individual classes
   */
  static splitIntoClasses(name) {
    if (!name) return [];
    let dashified = this.dashify(name);
    return dashified.split(/[ ]+/);
  }

  /**
   * Expand all of the values in {cssClasses} so that `'equalWidth'`, `'equal width'`, and 
   * `'equal-width'` all result in `['equal', 'width']`. Also removes classes prefixed with
   * 'au-' to avoid messing with Aurelia's classes.
   * @return {Array[String]} the flattened list of CSS classes.
   */
  static expandCssClasses(...cssClasses) {
    let expanded = cssClasses.map((cl) => {
      if (Array.isArray(cl)) {
        return this.expandCssClasses(...cl);
      } else {
        return this.splitIntoClasses(cl);
      }
    });
    let flattened = [].concat.apply([], expanded);
    return flattened;
  }

  /**
   * Expand the classes in {cssClasses} with expandCssClasses() and then filter out 
   * non-classes and Aurelia-internal classes.
   */
  static normalizeCssClasses(...cssClasses) {
    let classList = this.expandCssClasses(...cssClasses);
    return classList.filter((cl) => {
      return cl !== '' &&
        cl !== 'true' &&
        cl !== 'false' &&
        !cl.startsWith('au-')
    });
  }

  /**
   * Splits a style string into its constiuent parts (key/value pairs)
   * @param  {String} style The style string to split
   * @return {Map<String,String>}       A map of key/value pairs for each style
   */
  static splitIntoStyles(style) {
    let styleMap = new Map();
    if (!style) return styleMap;
    let styles = style.split(/[ ]*;[ ]*/);
    console.log(styles)
    return styles.reduce((map, sty) => {
      console.log(sty)
      let keyValuePair = sty.split(':');
      if(keyValuePair.length != 2)
        return map;
      map.set(keyValuePair[0], keyValuePair[1]);
      return map;
    }, styleMap);
  }

  /**
   * Expand the styles in {cssStyles}
   */
  static normalizeCssStyles(cssStyles) {
    let styleMap = this.splitIntoStyles(cssStyles);
    return styleMap;
  }

  /**
   * Converts a style map into a style string
   * @param  {Map<String,String} stylesMap The map of styles
   * @return {String}           Final style string
   */
  static joinCssStyles(stylesMap) {
    let joined = [];
    for(let style of stylesMap){
      joined.push(style.join(':'));
    }
    return joined.join(';');
  }
}
