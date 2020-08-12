import Strings from "~/core/utilites/strings";

class Translator {
  constructor() {
    this.helperText = {
      plural: {
        review: ["отзыв", "отзыва", "отзывов"],
        days: ['день', 'дня', 'дней'],
        hours: ['час', 'часа', 'часов'],
        minutes: ['минута', 'минуты', 'минут'],
        seconds: ['секунд', 'секунд', 'секунд']
      }
    };

    /**
     * @property strings
     * @type {Strings}
     */
    this.strings = Strings.getInstance();
  }

  /**
   * @public
   * @method getStringKeys
   * @returns {Object}
   */
  getStringKeys() {
    let result = {};

    Object.keys(this.helperText.plural).forEach(function (key) {
      result[key] = key;
    });

    return result;
  }

  /**
   * @public
   * @method plural
   * @param count {number}
   * @param stringKey {string}
   * @returns {string}
   */
  plural(count, stringKey) {
    return this.strings.plural(count, this.helperText.plural[stringKey] || []);
  }
}

export default Translator;
