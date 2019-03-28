import React, {Component} from "react";
import CampaignDisplay from "../../components/CampaignDisplay";
import API from "../../utils/API";
import voteAPI from "../../utils/API";

class ActiveVoteIdeas extends Component {

  state = {
    campaignsFromDB: [],
    userId: "1",
    campaignClicked: {},
    campaignExpand: false
  }

  voteId="";
  campaignId="";

  loadCampaigns = () => {
    const campaignArray = [];
    API.activeCampaignGet()
      .then(response => {
        campaignArray.push(response.data);
        this.setState({ campaignsFromDB: campaignArray });
        // console.log(response.data);
      });
  };

  updateVote = (data) => {
    setTimeout(()=>(
    console.log(this.voteId),
    console.log(data),
    voteAPI.updateVote(this.voteId, data).then(res =>{
        console.log(res.data);
    })),1
    )
};

  onCreate = (data) =>  {
    voteAPI.saveVote(data).then(res => {
        console.log(res.data._id);
        console.log(res.data);
        API.campaignPut(this.campaignId, {vote: res.data._id})
        .then(res=>console.log(res.data))
    });
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
    // this.setState({ campaignClicked: { expand: true }});
    API.campaignGet(campaignId)
      .then(response => {
        const resDat = response.data[0];
        this.setState({ campaignClicked: resDat, campaignExpand: true });
        console.log(resDat);
      });
  };

  componentDidMount = () => {
    this.loadCampaigns();
  };

  render(){
    const campaignsFromDB = this.state.campaignsFromDB;
    const campaignClicked = this.state.campaignClicked;
    console.log(this.state.campaignClicked);
    console.log(this.state.campaignExpand)
    return (
      !this.state.campaignExpand ? (
        <div>
          {campaignsFromDB.map(campaign =>
            campaign.map(campaign => (
              campaign.vote.length  !== 0 ? (
                console.log(campaign.vote[0]._id),
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
          {campaignClicked.vote.length  > 1 ? (
            console.log('campaign it' + campaignClicked.vote[0]._id),
            <CampaignDisplay
            // handleData={()=>this.handleData(campaign.vote[0]._id, campaign._id)}
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
          )}
        </div>
      )
    )
  }
}

export default ActiveVoteIdeas;