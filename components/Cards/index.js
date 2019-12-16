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

const addArticle = document.querySelector(".cards-container");
// const TopicArray = [];
// axios
//   .get("https://lambda-times-backend.herokuapp.com/topics")
//   .then(response => {
//     response.data.topics.forEach(item => {
//       TopicArray.push(item);
//     });
//     TopicArray[4] = "node";
//     axios
//       .get("https://lambda-times-backend.herokuapp.com/articles")
//       .then(response => {
//         for (let i = 0; i < TopicArray.length; i++) {
//           //console.log(TopicArray[0]);
//           let currRecord = TopicArray[i];
//           let n = currRecord.toString();
//           console.log("This is n:" + n);
//           console.log(currRecord);
//           // console.log(response.data.articles.TopicArray[i]);
//           console.log(response.data.articles.TopicArray[i]);
//           response.data.articles.n.forEach(item => {
//             const CreateNewCard = createCard(item);
//             addArticle.appendChild(CreateNewCard);
//           });
//         }
//       })

//       .catch(err => {
//         console.log("You hit an error; ", err);
//       });
//   })

//   .catch(err => {
//     console.log("You hit an error; ", err);
//   });

// console.log(TopicArray);

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    response.data.articles.javascript.forEach(item => {
      const CreateNewCard = createCard(item);
      addArticle.appendChild(CreateNewCard);
    });
    axios
      .get("https://lambda-times-backend.herokuapp.com/articles")
      .then(response => {
        response.data.articles.bootstrap.forEach(item => {
          const CreateNewCard = createCard(item);
          addArticle.appendChild(CreateNewCard);
        });
        axios
          .get("https://lambda-times-backend.herokuapp.com/articles")
          .then(response => {
            response.data.articles.technology.forEach(item => {
              const CreateNewCard = createCard(item);
              addArticle.appendChild(CreateNewCard);
            });
            axios
              .get("https://lambda-times-backend.herokuapp.com/articles")
              .then(response => {
                response.data.articles.jquery.forEach(item => {
                  const CreateNewCard = createCard(item);
                  addArticle.appendChild(CreateNewCard);
                });
                axios
                  .get("https://lambda-times-backend.herokuapp.com/articles")
                  .then(response => {
                    response.data.articles.node.forEach(item => {
                      const CreateNewCard = createCard(item);
                      addArticle.appendChild(CreateNewCard);
                    });
                  })

                  .catch(err => {
                    console.log("You hit an error; ", err);
                  });
              })

              .catch(err => {
                console.log("You hit an error; ", err);
              });
          })

          .catch(err => {
            console.log("You hit an error; ", err);
          });
      })

      .catch(err => {
        console.log("You hit an error; ", err);
      });
  })

  .catch(err => {
    console.log("You hit an error; ", err);
  });

function createCard(element) {
  const newCard = document.createElement("div");
  const newHeadline = document.createElement("div");
  newHeadline.textContent = element.headline;
  const newAuthor = document.createElement("div");
  const newImgDiv = document.createElement("div");
  const newImg = document.createElement("img");
  newImg.src = element.authorPhoto;
  const newSpan = document.createElement("span");
  newCard.classList.add("card");
  newHeadline.classList.add("headline");
  newAuthor.classList.add("author");
  newSpan.textContent = element.authorName;
  newImgDiv.classList.add("img-container");

  // need to append items here
  newCard.appendChild(newHeadline);
  newCard.appendChild(newAuthor);
  newAuthor.appendChild(newImgDiv);
  newImgDiv.appendChild(newImg);
  newAuthor.appendChild(newSpan);

  return newCard;
}
