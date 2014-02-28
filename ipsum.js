/**
 * Created by marlena on 2/14/14.
 */



var Ipsum = function(num_paragraph_form, word_collection=words){

    var random_string = "<p>";
    var numWords = getRandom(5,30);
    var i = 0;

    if(isDigitsOnly(num_paragraph_form["num_paragraphs"].value)){

        for(i; i<= numWords; i++){
            random_string +=   word_collection[getRandom(1,word_collection.length)] + " ";
        }

        //lop off the space at the end
        random_string = random_string.slice(0,random_string.length-1);
        random_string += "</p>";

        return random_string;
    }



};

// Returns a random number between min and max
var getRandom = function (min, max) {
    return (Math.round(Math.random() * (max - min) + min)) - 1;
};

var isDigitsOnly = function(test_string){

   var regex = /\D/;
   if (test_string.search(regex) >= 0 || Math.floor(test_string) <= 0 || Math.floor(test_string) > 20){
       return false;
   }
  return true;
};



//putting this at the bottom as it will be large and full of strings
var words = ["Open your heart's eyes.",
    "Take a deep breath.",
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


