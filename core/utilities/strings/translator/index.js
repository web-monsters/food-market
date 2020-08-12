import Translator from "./Translator";

let translator = new Translator();

export default {
  stringKeys: translator.getStringKeys(),
  getInstance() {
    return translator;
  }
};
