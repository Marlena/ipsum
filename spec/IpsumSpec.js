/**
 * Created by marlena on 2/14/14.
 */

describe("Mindful Ipsum", function(){

    beforeEach(function(){
        theForm = "<form><input id='num_paragraphs' name='num_paragraphs' type='text' size='2'/></form>";
        test_word_collection = ['orange','banana'];
        orange_word_collection = ['orange'];
    });

    it("should generate two different strings", function(){

        ipsum1 = new Ipsum();
        ipsum2 = new Ipsum();
        isEqual = true;
        if (ipsum1 != ipsum2){
            isEqual = false;
        }
        expect(ipsum1).not.toBe(ipsum2);
    });

    it("should generate a string of random words", function(){
        var myString = Ipsum(theForm, test_word_collection);

        //matches orange or banana followed by orange or banana
        var regularExpression = /banana (?=(orange|banana))|orange (?=(banana|orange))/;

        expect(myString).toMatch(regularExpression);

    });


    it("should return a string with between 41 and 90 words", function(){

        var myString = Ipsum(theForm,test_word_collection);
        var myArray = myString.split(" ");
        expect(myArray.length).toBeGreaterThan(5);
        expect(myArray.length).toBeLessThan(40);

    });

    it ("should use the default word collection if none is provided to it", function(){
        var myString = Ipsum();
        expect(myString.length).toBeGreaterThan(100);
    });

    it("should not have an extra whitespace at the beginning or end of the string", function(){

       var myString = Ipsum(theForm, orange_word_collection);
       var beginning = /^<p>orange/;
       var ending = /orange<\/p>$/;
       expect(myString).toMatch(beginning);
       expect(myString).toMatch(ending);

    });

    it("should wrap the text string in paragraph tags", function(){
        var myString = Ipsum(theForm, orange_word_collection);
        var beginning = /^<p>/;
        var ending = /<\/p>/;

        expect(myString).toMatch(beginning);
        expect(myString).toMatch(ending);
    });


    describe("checking that isDigitsOnly returns true only for integers between 1 and 20", function(){
        var error_string = "Please submit a number between 1 and 20";

        it ("should return true if a valid integer is input", function(){
          expect(isDigitsOnly("14")).toBe(true);
        });

        it ("should return false if input is 0 or less", function(){
            expect(isDigitsOnly("0")).toBe(false);
            expect(isDigitsOnly("-1")).toBe(false);
        });

        it ("should return false if input is xss", function(){
            expect(isDigitsOnly("<script>alert('blah');</script>")).toBe(false);
        });

        it ("should return false if input is a string", function(){
            expect(isDigitsOnly("blah")).toBe(false);
            expect(isDigitsOnly("38.33")).toBe(false);
            expect(isDigitsOnly("$@@#")).toBe(false);
            expect(isDigitsOnly("2929d322")).toBe(false);
        });


    });



    ///^^^^MUST-HAVE^^^^  VVVEXTRASVVV

    it("should return the number of characters in each paragraph", function(){

    });

    it ("should return the total number of characters in all paragraphs", function(){

    });



});

