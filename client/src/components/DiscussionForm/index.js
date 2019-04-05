import React from 'react';

const DiscussionForm = ({ discussionSubmit, discussionFormChange, discussionAuthorInput, discussInputArea }) => {
  let buttonText;
  (function noEmptyForms() {
    const submitButton = document.getElementById('submitDiscussion');
    if (submitButton === null) {
      return "Waiting for button"
    } else if (discussInputArea === "") {
      buttonText = "Please Enter all Information"
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
      buttonText = "Submit"
    };
  })();

  return(
    <div>
      <header>Discussion</header>
        <section id="discussionEntry">
          <form id="newDiscussion">
            <section id="newDiscAuthor">
              <label htmlFor="authorDiscIt">Author</label>
              <h6 id="authorDiscIt" name="discussionAuthorInput">{discussionAuthorInput}</h6>
            </section>
            <section id="newCampSynop">
              <label htmlFor="discussIt">New Discussion Here</label>
              <textarea id="discussIt" name="discussInputArea" value={discussInputArea} onChange={discussionFormChange}></textarea>
            </section>
              <button className="btn btn-dark" id="submitDiscussion" type="submit" onClick = {discussionSubmit}>{buttonText}</button>
            </form>
          </section>
    </div>
  );
};

export default DiscussionForm;