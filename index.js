function introduction(name) {
   return("Hi, my name is Samip.") //changed Aki to Samip in index.Test.js
}
function introductionWithLanguage(name, language) {
    return("Hi, my name is Aki and I am learning to program in Ember.js.") //changed Samip to Aki in index.Test.js
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
