import React from 'react';
import './App.css';

function App() {
    const [nameMessageValue, setnameMessageValue] = React.useState('');
    const [ageNumberValue, setageNumberValue] = React.useState(0);
    const [commentMessageValue, setcommentMessageValue] = React.useState('');
    const [newsletterSubscription, togglenewsletterSubscription] = React.useState(false);
    const [clicked, toggleClicked] = React.useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(commentMessageValue, nameMessageValue, ageNumberValue, newsletterSubscription);
    }
  return (
      <form onSubmit={handleSubmit}>
      <fieldset>
          <legend><strong>Gegevens</strong></legend>
              <label htmlFor="name-message"> Naam:
                  <input
                      type="text"
                      placeholder="Type hier uw naam"
                      name="name"
                      value={nameMessageValue}
                      onChange={(e)=>setnameMessageValue(e.target.value)}
                  />
                  <br/><br/>
              </label>
              <label htmlFor="leeftijd-message"> Leeftijd:
                  <input
                      type="number"
                      placeholder="Type hier uw leeftijd"
                      name="leeftijd"
                      value={ageNumberValue}
                      onChange={(e)=>setageNumberValue(parseInt(e.target.value))}
                  />
              </label>
      </fieldset>
          <fieldset>
              <legend><strong>Jouw review</strong></legend>

                  <label htmlFor="comment-message"> Opmerkingen:
                      <textarea
                          placeholder="Wat vond je van het recept?"
                          id="comment-message"
                          name="comment"
                          rows = "4"
                          cols = "40"
                          value={commentMessageValue}
                          onChange={(e)=>setcommentMessageValue(e.target.value)}
                      >
                      </textarea>
                  </label>
                  <label htmlFor="newsletter-subscription">
                      <input
                          type="checkbox"
                          name="newsletter-subscription"
                          id="newsletter-subscription"
                          checked={newsletterSubscription}
                          onChange={()=>togglenewsletterSubscription(!newsletterSubscription)}
                      />
                      Ik schrijf me in voor de nieuwsbrief
                  </label>
              <button
                  type="submit"
              >
                  Verstuur
              </button>
          </fieldset>
      </form>
  );
}

export default App;
