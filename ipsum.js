/**
 * Created by marlena on 2/14/14.
 */



var Ipsum = function(numberParagraphs, wordCollection) {


  var paragraphArray = [];
  var numberWordsInParagraph;
  var randomString;

  if (wordCollection.length) {

    for (var i = 0; i < numberParagraphs; i++) {
      numberWordsInParagraph = getRandom(5, 10);
      randomString = [];
      for (var j = 0; j < numberWordsInParagraph; j++) {
        randomString.push(wordCollection[getRandom(1, wordCollection.length)]);
      }

      if (randomString.length) {
        paragraphArray.push(randomString.join(' '));
      }
    }

  }

  return paragraphArray;
};

// Returns a random number between min and max
var getRandom = function(min, max) {
  return (Math.round(Math.random() * (max - min) + min)) - 1;
};

var isDigitsOnly = function(test_string) {

  var regex = /\D/;
  if (test_string.search(regex) >= 0 || Math.floor(test_string) <= 0 || Math.floor(test_string) > 20) {
    return false;
  }
  return true;
};


