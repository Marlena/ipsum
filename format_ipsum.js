function FormatIpsum(options) {

  this.numParagraphs = 4;
  this.el = (options || {}).el || $('<div/>')[0];

  var self = this;
  //event delegate pattern
  $(this.el).on('submit', 'form', function(e) {
    e.preventDefault();
    self.numParagraphs = $('#num_paragraphs').val();
    self.render();

  });
}

FormatIpsum.prototype.render = function() {
  var ipsum = new Ipsum(this.numParagraphs, ['apple', 'banna', 'pear', 'pineapple']);
  var html = '';
  $.each(ipsum, function() {
    html += '<p>' + this + '</p>'
  });
  $('#for-paragraphs', this.el).html(html);

  return this;
};