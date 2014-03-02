function FormatIpsum(options) {
  this.el = (options || {}).el || $('<div/>')[0];

  //event delegate pattern
  $(this.el).on('submit', 'form', function(e) {
    e.preventDefault();

  });
}

FormatIpsum.prototype.render = function() {
  var ipsum = new Ipsum(4, ['apple', 'banna', 'pear', 'pineapple']);
  var html = '';
  $.each(ipsum, function() {
    html += '<p>' + this + '</p>'
  });
  $('#for-paragraphs', this.el).html(html);

  return this;
};