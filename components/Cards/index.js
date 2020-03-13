// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const containerlocation = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")

.then(response => {
    console.log(response.data.articles);
    const grabObject = Object.entries(response.data.articles);
/*
Object.entries() returns an array whose elements are arrays corresponding 
to the enumerable string-keyed property [key, value] pairs found directly 
upon object. The ordering of the properties is the same as that given by 
looping over the property values of the object manually.
   */
grabObject.forEach(subject => {

      subject[1].forEach(data => {

        const newCard = ArticleMaker(data);
        containerlocation.append(newCard);

      });
    });

})
  .catch(error => {
    console.log('not updateing' + error);
  });

function ArticleMaker(object) {

  const card = document.createElement("div"),
  headline = document.createElement("div"),
  author = document.createElement("div"),
  imgcontainer = document.createElement("div"),
  Imger = document.createElement("img"),
  span = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgcontainer.classList.add("img-container");

   headline.textContent = object.headline;
   Imger.src = object.authorPhoto;
   span.textContent = object.authorName;

  card.append(headline);
  card.append(author);

  author.append(imgcontainer);
 author.append(span);

 imgcontainer.append(Imger);

  return card;
}