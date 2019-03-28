import React, {Component} from "react";
import IdeasNavBar from "../../components/IdeasNavBar";
import API from "../../utils/API";
import ActiveVoteIdeas from "../ActiveVoteIdeas";
import ClosedVoteIdeas from "../ClosedVoteIdeas"
import PrivateRoute from "../../components/private-route/PrivateRoute";
import CampaignForm from "../../components/CampaignForm";

class Ideas extends Component {

  state = {
    titleInput: '',
    authorInput: '',
    campaignInputArea: '',
    userId: "1",
    campaignExpand: false,
    focusedCampaign: {}
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const campaignForm = document.getElementById('newCampaign');
    API.campaignPost({
      title: this.state.titleInput,
      author: this.state.authorInput,
      synopsis: this.state.campaignInputArea})
      .then(response => {
        (console.log(`You successfully uploaded: ${response.data.title}`));
      });
    this.setState({
      titleInput: '',
      authorInput: '',
      campaignInputArea: ''
    });
    campaignForm.reset();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value 
    });
  };

<<<<<<< HEAD
  // This will grab the correct campaign, and expand it.
  campaignClick = (id) => {
    this.setState({ campaignExpand: true });
    console.log(id);
  };

  loadCampaigns = () => {
    const campaignArray = [];
    API.campaignGet()
      .then(response => {
        campaignArray.push(response.data);
        this.setState({ campaignsFromDB: campaignArray });
      });
  };

  updateVote = (data) => {
    setTimeout(()=>(
    voteAPI.updateVote(this.voteId, data).then(res =>{
        return res.data;
    })),1
    )
  };

  onCreate = (data) =>  {
    voteAPI.saveVote(data).then(res => {
        API.campaignPut(this.campaignId, {vote: res.data._id})
        .then(res=> res.data)
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
  };

  componentDidMount = () => {
    this.loadCampaigns();
=======
  componentDidMount =() => {
      window.$('.modal').modal();
>>>>>>> master
  };

  render(){ 
    return (
      <div>
<<<<<<< HEAD
        <CampaignForm/>
        {this.state.campaignsFromDB.map(campaign =>
          campaign.map(campaign => (
            campaign.vote.length  !== 0 ? (
              <CampaignDisplay
              handleData={()=>this.handleData(campaign.vote[0]._id, campaign._id)}
              campaignExpand={() => this.campaignClick(campaign._id)}
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
              campaignExpand={() => this.campaignClick(campaign._id)}
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
=======
        <IdeasNavBar/>
        <CampaignForm
          titleInput={this.state.titleInput}
          authorInput={this.state.authorInput}
          campaignInput={this.state.campaignInputArea}
          handleFormSubmit={this.handleFormSubmit}
          handleChange={this.handleChange}/>
        <PrivateRoute exact path="/ideas/active" component={ActiveVoteIdeas} />
				<PrivateRoute exact path="/ideas/closed" component={ClosedVoteIdeas} />
>>>>>>> master
      </div>
    )
  }
}

export default Ideas;