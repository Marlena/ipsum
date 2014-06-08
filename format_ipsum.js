function FormatIpsum(options) {

  this.numParagraphs = 4;
  this.el = (options || {}).el || $('<div/>')[0];

  var self = this;
  //event delegate pattern
  $(this.el).on('submit', 'form', function(e) {
    e.preventDefault();
    self.numParagraphs = +$('#num_paragraphs').val();  //plus sign casts the string to a number
    self.render();

  });
}

FormatIpsum.prototype.render = function() {
  var ipsum = new Ipsum(this.numParagraphs, words);
  var html = '';
  $('#errorText').text('');

  if (this.numParagraphs > 0 && this.numParagraphs <= 100 && (this.numParagraphs === parseInt(this.numParagraphs,10))){
    console.log(this.numParagraphs);
    $.each(ipsum, function() {
      html += '<p>' + this + '</p>';
    });
    $('#for-paragraphs', this.el).html(html);
  }
  else{

   $('#errorText').text("Please submit a number between 1 and 100.");

  }
    return this;

};

//putting this at the bottom as it will be large and full of strings
var words = ["Feelings come and go like clouds in a windy sky.",
  "Open your heart's eyes.",
  "Take a deep breath.",
  "It will be ok.",
  "Take a look around and notice what is really happening, right now, in this moment.",
  "Give yourself a break.",
  "May you be healthy.",
  "May you be safe.",
  "Impermanence and change is a powerful teacher and teaching.",
  "Who is really in pain when we hold on to resentments and grudges?",
  "May you be at peace.",
  "Live life one inhalation and one exhalation at a time.",
  "Bring love into your heart, into your breath and into your being.",
  "Reflect on the fragility and preciousness of life.",
  "Stop and focus on whatever is being carried within you and let be.",
  "Briefly notice any emotions, thoughts or sensations that may be driving fear and anxiety and let them be.",
  "This discomfort will pass.",
  "Slow down and ask yourself what is really happening.",
  "Feelings of panic are uncomfortable, but they will not harm you.",
  "Open your heart's eyes.",
  "Stop and take a slow breath.",
  "Inhale slowly and exhale slowly.",
  "Exhale and let the muscles in your shoulders drop and relax.",
  "Anxiety and panic will pass.",
  "Panic is your body revving up temporarily, but it will slow down.",
  "Let the muscles in your neck and shoulders relax.",
  "You can do this.",
  "You can get through this.",
  "You can do what you set out to do; yes, you can.",
  "Watch each breath appear and disappear, just breathing.",
  "Hear the internal and external sounds around you rise and fall.",
  "Open your heart to love as boundless as the sun, the moon, the stars.",
  "Open your heart to change, forgiveness and lovingkindness.",
  "Just acknowledge what's there and let be.",
  "Let go of the need to analyze and let be.",
  "Love is the first seed of the soul.",
  "Empty your mind; be formless, shapeless like water.",
  "Picture yourself releasing the burden you feel from sorrow, regret or resentment."];


