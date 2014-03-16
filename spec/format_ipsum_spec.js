describe("Format Ipsum takes an array of paragraphs and formats them for html", function() {
  var subject;
  beforeEach(function() {
    jasmine.content().append('<form name="submit_ipsum" method="POST" class="blah"> <div> How many paragraphs? <input id="num_paragraphs" name="num_paragraphs" type="text" size="5" value="1"  /> <input type="submit" value="Breathe"/> <div id="for-paragraphs"></div> </div> </form>');

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
  });
});