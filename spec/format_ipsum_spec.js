describe("Format Ipsum takes an array of paragraphs and formats them for html", function() {
  var subject;
  beforeEach(function() {
    jasmine.content().append('<form name="submit_ipsum" method="POST" class="blah"> <div> How many paragraphs? <input id="num_paragraphs" name="num_paragraphs" type="text" size="5" value="1"  /> <input type="submit" value="Breathe"/> <span id="errorText"></span> <div id="for-paragraphs"></div> </div> </form>');

    subject = new FormatIpsum({el: jasmine.content()[0]});
    subject.render();
  });

  it("should draw some paragraphs", function() {
    expect($('#for-paragraphs p').length).toEqual(4);
  });

  describe('when the form is submitted', function() {
    beforeEach(function() {
      $('#num_paragraphs').val(3);
      $('form').submit();
    });

    it('should change the paragraph count', function() {
      expect($('#for-paragraphs p').length).toEqual(3);
    });

    describe('when an invalid value is submitted,', function(){


      it ('should return an error message if the value is less than 1', function(){
        submitForm(0);
        expect($('#errorText').text()).toBe("Please submit a number between 1 and 100.");
      });
    });

      it ('should return an error message if the value is greater than 100', function(){
        submitForm(101);
        expect($('#errorText').text()).toBe("Please submit a number between 1 and 100.");

      });

      it ('should return an error message if the value is not whole digits', function(){
        submitForm(3.14);
        expect($('#errorText').text()).toBe("Please submit a number between 1 and 100.");

      });

      it ('should return an error message if the value is not a number' , function(){
        submitForm("blah");
        expect($('#errorText').text()).toBe("Please submit a number between 1 and 100.");

      });

    it ('should return an error message if the value is not a number' , function(){
      submitForm("abc");
      expect($('#errorText').text()).toBe("Please submit a number between 1 and 100.");

    });


      var submitForm = function (numParagraphs){
        $('#num_paragraphs').val(numParagraphs);
        $('form').submit();
      };


  });






});