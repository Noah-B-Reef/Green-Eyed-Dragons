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
  "body": " Green-Eyed Dragons  Consider the following puzzle:    You visit a remote desert island inhabited by one hundred very friendly dragons, all of whom have green eyes. They haven’t seen a human for many centuries and are very excited about your visit. They show you around their island and tell you all about their dragon way of life (dragons can talk, of course). They seem to be quite normal, as far as dragons go, but then you find out something rather odd.    They have a rule on the island which states that if a dragon ever finds out that he\/she has green eyes, then at precisely midnight on the day of this discovery, he\/she must relinquish all dragon powers and transform into a long-tailed sparrow. However, there are no mirrors on the island, and they never talk about eye color, so the dragons have been living in blissful ignorance throughout the ages. Upon your departure, all the dragons get together to see you off, and in a tearful farewell you thank them for being such hospitable dragons. Then you decide to tell them something that they all already know (for each can see the colors of the eyes of the other dragons).    You tell them all that at least one of them has green eyes. Then you leave, not thinking of the consequences (if any). Assuming that the dragons are (of course) infallibly logical, what happens? If something interesting does happen, what exactly is the new information that you gave the dragons?    Open the tab below for the solution:   All dragons will transform into sparrows on the th day after the visitor's departure.   A more detailed explanation is as follows, first consider two key pieces of information that the dragons have to work with:    Let There is at least one dragon with green-eyes  Every dragon now knows     Case 1:  Let's first consider the case where there is a single dragon with green eyes, then you are effectively telling the single dragon it has green-eyes and so will turn into a long-tailed sparrow at midnight.    Case 2:  Now let's consider the case where there are two dragons with green eyes, say and . Then will see that has green eyes, and knows that if sees that doesn't have green-eyes then will conclude that it is the only green-eyed dragon and transform. will think the same. So on the second day and B will see each other, conclude that they are both green-eyed and thus transform on the nd night.    Case 3:  Now let's consider the case where there are three dragons with green eyes, say , and . Then will see that and have green eyes, and knows that if and see that doesn't have green-eyes then and will conclude that they are the only green-eyed dragons and transform on the nd night. and will think the same. So on the third day , and will see each other, conclude that they are all green-eyed and thus transform on the rd night.   This pattern continues for all dragons, where is the number of dragons with green eyes. So we have the following theorem:   If there are dragons with green eyes, then all dragons will transform into sparrows on the th day after the visitor's departure.   Thus on the th day after the visitor's departure, all dragons will transform into sparrows. The new piece of information you gave the dragons is that every dragon on the island knows there is at least one dragon with green eyes. This is the key piece of information that allows the dragons to deduce their own eye color.   Video Explaination  Here's a video explaination of a similar problem:    "
},
{
  "id": "def-dragon-terms",
  "level": "2",
  "url": "sec-section-name.html#def-dragon-terms",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  Let There is at least one dragon with green-eyes  Every dragon now knows   "
},
{
  "id": "sec-section-name-12",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-12",
  "type": "Theorem",
  "number": "1.1.2",
  "title": "",
  "body": " If there are dragons with green eyes, then all dragons will transform into sparrows on the th day after the visitor's departure.  "
},
{
  "id": "sec-weighted-coin",
  "level": "1",
  "url": "sec-weighted-coin.html",
  "type": "Section",
  "number": "1.2",
  "title": "A Weighted Coin",
  "body": " A Weighted Coin  Consider the following puzzle:    You are given twelve coins, eleven of which have the same weight, and one of which has a weight different from the others (either heavier or lighter, you do not know). You have a balance scale. What is the minimum number of weighings required in order to guarantee that you can determine which coin has the different weight, and also whether it is heavier or lighter than the rest?     Solution  Let's start by dividing the twelve coins into three sets of four coins each. next we weigh set A against set B. If the two sets have the same weight, then the odd coin is in set C. In this case, weigh against . If the two sets have the same weight, then the odd coin is . If the two sets have different weights, then the odd coin is one of . Weigh against . If they have the same weight, then the odd coin is . If they have different weights, then the odd coin is the lighter of the two.    Python Code    "
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
