/**
 * Created by marlena on 2/14/14.
 */

describe("Mindful Ipsum", function() {

  it("should return an empty array if given no words", function() {

    var numParagraphs = 0;
    var wordCollection = [];

    var subject = new Ipsum(numParagraphs, wordCollection);

    expect(subject.length).toBe(0);

  });

  it("should return one paragraph with no words", function() {

    var numParagraphs = 1;
    var wordCollection = [];

    var subject = new Ipsum(numParagraphs, wordCollection);

    expect(subject.length).toBe(0);
  });

  it("given one paragraph with one word it should return a paragraph", function() {
    var numParagraphs = 1;
    var wordCollection = ["apple", "banana", "kiwi", "grape", "cherry", "orange"];

    var counter = 5;
    spyOn(Ipsum.prototype, "getRandom").and.callFake(function() {
      return counter--;
    });

    var subject = new Ipsum(numParagraphs, wordCollection);

    expect(subject[0]).toBe('cherry grape kiwi banana apple');
  });

  it("given that two paragraphs are specified, two paragraphs are returned", function() {
    var numParagraphs = 2;
    var wordCollection = ["kangaroo", "wallaby", "platypus", "giraffe", "snake", "elephant", "lion", "husky"];

    var counter = 8;
    spyOn(Ipsum.prototype, "getRandom").and.callFake(function() {
      counter = counter < 0 ? 8 : counter;
      return counter--;
    });

    var subject = new Ipsum(numParagraphs, wordCollection);
    expect(subject.length).toBe(2);
    expect(subject[0]).toBe('husky lion elephant snake giraffe platypus wallaby kangaroo');
    expect(subject[1]).toBe('husky lion elephant snake giraffe platypus wallaby kangaroo');
  });


});

