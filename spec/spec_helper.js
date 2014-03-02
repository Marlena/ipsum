jasmine.content = function() {
  return $('#jasmine_content');
};

beforeEach(function() {
  jasmine.content().replaceWith('<div id="jasmine_content"></div>');
});