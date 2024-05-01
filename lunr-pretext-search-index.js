var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Green-Eyed Dragons",
  "body": " Green-Eyed Dragons  Consider the following puzzle:    You visit a remote desert island inhabited by one hundred very friendly dragons, all of whom have green eyes. They haven’t seen a human for many centuries and are very excited about your visit. They show you around their island and tell you all about their dragon way of life (dragons can talk, of course). They seem to be quite normal, as far as dragons go, but then you find out something rather odd.    They have a rule on the island which states that if a dragon ever finds out that he\/she has green eyes, then at precisely midnight on the day of this discovery, he\/she must relinquish all dragon powers and transform into a long-tailed sparrow. However, there are no mirrors on the island, and they never talk about eye color, so the dragons have been living in blissful ignorance throughout the ages. Upon your departure, all the dragons get together to see you off, and in a tearful farewell you thank them for being such hospitable dragons. Then you decide to tell them something that they all already know (for each can see the colors of the eyes of the other dragons).    You tell them all that at least one of them has green eyes. Then you leave, not thinking of the consequences (if any). Assuming that the dragons are (of course) infallibly logical, what happens? If something interesting does happen, what exactly is the new information that you gave the dragons?    In order to solve this problem let's start off by defining some notation:    Let be the indexing set for the dragons who have green-eyes  Let be the indexing set for the dragons who have brown-eyes  Let be the total number of dragons of the population  Let be the number of green-eyed dragons observed by dragon  Let be the number of brown-eyed dragons observed by dragon    Since the dragons are equipped with the knowledge that there is at least one dragon with green eyes, we have .  The total number of dragons is .   and for all and .   Case 1:  Let's first consider the case where there is a single dragon with green eyes, then and for all . This leds to a contradiction since , and thus the dragon must belong to that is it must have green eyes and will turn into a sparrow at midnight.  Now presumably the other brown-eyed dragons are unaware of the true number of green-eyed dragons, and thus will need to determine whether or not their eye color is green (which of course it is not!). Since and for , they understand that if the green-eyed dragon also sees brown-eyed dragons, then there would not exist sufficient information for the green-eyed dragon to deduce that their eyes are green and hence would not transform into a swallow. Thus if the green-eyed dragon does not transform into a swallow at midnight, then there are truly brown-eyed dragons, however since the dragon does transform then there are actually brown-eyed dragons. This means that in this case all remaining dragons will be able to deduce that they have brown eyes.    Case 2:  Now let's consider the case where there are two dragons with green eyes, then and for all . This leds to a contradiction since , and thus the dragon must belong to that is it must have green eyes and will turn into a sparrow at midnight.   "
},
{
  "id": "def-dragon-terms",
  "level": "2",
  "url": "sec-section-name.html#def-dragon-terms",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  Let be the indexing set for the dragons who have green-eyes  Let be the indexing set for the dragons who have brown-eyes  Let be the total number of dragons of the population  Let be the number of green-eyed dragons observed by dragon  Let be the number of brown-eyed dragons observed by dragon   "
},
{
  "id": "sec-section-name-7",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-7",
  "type": "Remark",
  "number": "1.1.2",
  "title": "",
  "body": "The total number of dragons is . "
},
{
  "id": "sec-section-name-8",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-8",
  "type": "Remark",
  "number": "1.1.3",
  "title": "",
  "body": " and for all and . "
},
{
  "id": "sec-weighted-coin",
  "level": "1",
  "url": "sec-weighted-coin.html",
  "type": "Section",
  "number": "1.2",
  "title": "A Weighted Coin",
  "body": " A Weighted Coin  Consider the following puzzle:    You are given twelve coins, eleven of which have the same weight, and one of which has a weight different from the others (either heavier or lighter, you do not know). You have a balance scale. What is the minimum number of weighings required in order to guarantee that you can determine which coin has the different weight, and also whether it is heavier or lighter than the rest?     Python Tutorial    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
