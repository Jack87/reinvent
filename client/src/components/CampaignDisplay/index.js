import React from 'react';
import Vote from "../Vote";

const CampaignDisplay = (props) => {
  const { title, author, synopsis, styles, onCreate, onUpvote,
    onClose, onReset, onDownvote, onExpand, onEdit, isAdmin,
    clientId, data, handleData } = props;
  return(
    <div onClick={handleData}>
      <div className="row">
        <section id="campaignDisplay" className="col s9">
          <h2>Title: {title}</h2>
          <h3>Author: {author}</h3>
          <p>{synopsis}</p>
        </section>
        <div className="col s3" id="voteDisplay">
            <Vote
              data={data}
              styles={styles}
              onCreate={onCreate}
              onUpvote={onUpvote}
              onClose={onClose}
              onReset={onReset}
              onDownvote={onDownvote}
              onExpand={onExpand}
              onEdit={onEdit}
              isAdmin={isAdmin}
              clientId={clientId}/>
          </div>
      </div>
      <div className="row">
        <div className="divider col s12"></div>
      </div>
    </div>
  );
};

export default CampaignDisplay;