(function() {
  'use strict';

  function Ipsum(numberParagraphs, wordCollection) {
    var paragraphArray = [];
    var numberWordsInParagraph;
    var randomString;

    if (wordCollection.length) {

      for (var i = 0; i < numberParagraphs; i++) {
        numberWordsInParagraph = this.getRandom(5, 10);
        randomString = [];
        for (var j = 0; j < numberWordsInParagraph; j++) {
          randomString.push(wordCollection[this.getRandom(1, wordCollection.length)]);
        }

        if (randomString.length) {
          paragraphArray.push(randomString.join(' '));
        }
      }

    }

    return paragraphArray;
  }

  // Returns a random number between min and max
  Ipsum.prototype.getRandom = function(min, max) {
    return (Math.round(Math.random() * (max - min) + min)) - 1;
  };

  window.Ipsum = Ipsum;
})();