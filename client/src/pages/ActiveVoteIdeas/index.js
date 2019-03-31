import React, {Component} from "react";
import CampaignDisplay from "../../components/CampaignDisplay";
import API from "../../utils/API";
import voteAPI from "../../utils/API";
import DiscussionForm from '../../components/DiscussionForm';
import DiscussionDisplay from "../../components/DiscussionDisplay";

class ActiveVoteIdeas extends Component {

  state = {
    campaignsFromDB: [],
    userId: "1",
    campaignClicked: {},
    campaignExpand: false,
    discussionAuthorInput: '',
    discussInputArea: ''
  }

  voteId="";
  campaignId="";

  loadCampaigns = () => {
    const campaignArray = [];
    API.activeCampaignGet()
      .then(response => {
        campaignArray.push(response.data);
        this.setState({ campaignsFromDB: campaignArray });
      });
  };

  updateVote = (data) => {
    setTimeout(()=>(
    voteAPI.updateVote(this.voteId, data).then(res =>{
        return res.data;
    })),1)
};

onCreate = (data) =>  {
  setTimeout(() =>{
    data.campaign =[this.campaignId];
    voteAPI.saveVote(data).then(res => {
        console.log(res.data._id);
        console.log(res.data);
        API.campaignPut(this.campaignId, {vote: res.data._id})
        .then(res=>console.log(res.data))
    });
  },1);
};

  onUpvote = (data, voteId) => {
    this.updateVote(data, voteId);
  };

  onDownvote = (data, voteId) => {
    this.updateVote(data, voteId);
  };  

  onClose = (data, voteId) => {
    this.updateVote(data, voteId);
  };

  onReset = (data, voteId) => {
    this.updateVote(data, voteId);
  };

  onExpand = (data, voteId) => {
    this.updateVote(data, voteId);
  };

  onEdit = (data, voteId) => {
    this.updateVote(data, voteId);
  };

  handleData = (voteId, campaignId) => {
    this.voteId = voteId;
    this.campaignId = campaignId;
    // console.log(this.voteId, this.campaignId);
  };

  // Getting closer, but needs more work
  campaignExpand = (campaignId) => {
    API.campaignGet(campaignId)
      .then(response => {
        const resDat = response.data[0];
        this.setState({ campaignClicked: resDat, campaignExpand: true });
      });
  };

  componentDidMount = () => {
    this.loadCampaigns();
  };

  // All the discussion stuff

  handleDiscussionSubmit = (event) => {
    event.preventDefault()
    const discussionForm = document.getElementById('newDiscussion');
    API.discussionPost({
      id: this.state.campaignClicked._id,
      author: this.state.discussionAuthorInput,
      body: this.state.discussInputArea})
      .then(response => {
        (console.log(response.status));
      });
    this.setState({
      discussionAuthorInput: '',
      discussInputArea: ''
    });
    discussionForm.reset();
    this.campaignExpand(this.state.campaignClicked._id);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });
  };

  unFocusCampaign = () => {
    this.loadCampaigns();
    this.setState({ campaignExpand: false });
  };

  render(){
    const campaignsFromDB = this.state.campaignsFromDB;
    const campaignClicked = this.state.campaignClicked;
    console.log(campaignClicked)
    return (
      !this.state.campaignExpand ? (
        <div>
          {campaignsFromDB.map(campaign =>
            campaign.map(campaign => (
              campaign.vote.length  !== 0 ? (
                <CampaignDisplay
                handleData={()=>this.handleData(campaign.vote[0]._id, campaign._id)}
                campaignExpand={() => this.campaignExpand(campaign._id)}
                data={campaign.vote}
                title={campaign.title}
                author={campaign.author}
                synopsis={campaign.synopsis}
                key={campaign._id}
                styles={{opacity:1}}
                // text={customText}
                onCreate={this.onCreate}
                onUpvote={this.onUpvote}
                onClose={this.onClose}
                onReset={this.onReset}
                onDownvote={this.onDownvote}
                onExpand={this.onExpand}
                onEdit={this.onEdit}
                isAdmin={true}
                clientId={"1"}
                />
              ):(
                <CampaignDisplay
                handleData={()=>this.handleData(campaign.vote._id, campaign._id)}
                campaignExpand={() => this.campaignExpand(campaign._id)}
                data={campaign.vote}
                title={campaign.title}
                author={campaign.author}
                synopsis={campaign.synopsis}
                key={campaign._id}
                styles={{opacity:1}}
                // text={customText}
                onCreate={this.onCreate}
                onUpvote={this.onUpvote}
                onClose={this.onClose}
                onReset={this.onReset}
                onDownvote={this.onDownvote}
                onExpand={this.onExpand}
                onEdit={this.onEdit}
                isAdmin={true}
                clientId={"1"}
                />
              ) 
            ))
          )}
        </div>
      ) : (
        <div>
          {campaignClicked.vote.length  !== 0 ? (
            console.log(campaignClicked.vote),
            <CampaignDisplay
            handleData={()=>this.handleData(campaignClicked.vote[0], campaignClicked._id)}
            // campaignExpand={() => this.campaignExpand(campaign._id)}
            data={campaignClicked.vote}
            title={campaignClicked.title}
            author={campaignClicked.author}
            synopsis={campaignClicked.synopsis}
            key={campaignClicked._id}
            styles={{opacity:1}}
            // text={customText}
            onCreate={this.onCreate}
            onUpvote={this.onUpvote}
            onClose={this.onClose}
            onReset={this.onReset}
            onDownvote={this.onDownvote}
            onExpand={this.onExpand}
            onEdit={this.onEdit}
            isAdmin={true}
            clientId={"1"}
            />
          ):(
            <div>
              <button onClick={this.unFocusCampaign}>Back</button>
              <CampaignDisplay
              // handleData={()=>this.handleData(campaign.vote._id, campaign._id)}
              // campaignExpand={() => this.campaignExpand(campaign._id)}
              data={campaignClicked.vote}
              title={campaignClicked.title}
              author={campaignClicked.author}
              synopsis={campaignClicked.synopsis}
              key={campaignClicked._id}
              styles={{opacity:1}}
              // text={customText}
              onCreate={this.onCreate}
              onUpvote={this.onUpvote}
              onClose={this.onClose}
              onReset={this.onReset}
              onDownvote={this.onDownvote}
              onExpand={this.onExpand}
              onEdit={this.onEdit}
              isAdmin={true}
              clientId={"1"}
              />
              {campaignClicked.comments.map((discussion, index) => 
                <DiscussionDisplay
                key={index}
                discussionData={discussion}
                />
              )}
              <DiscussionForm 
              discussionSubmit={this.handleDiscussionSubmit}
              discussionFormChange={this.handleChange}
              discussionTitleInput={this.state.discussionTitleInput}
              discussionAuthorInput={this.state.discussionAuthorInput}
              discussInputArea={this.state.discussInputArea}/>
            </div>
          )}
        </div>
      )
    )
  }
}

export default ActiveVoteIdeas;