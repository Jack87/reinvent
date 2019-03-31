import React, {Component} from "react";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import IdeasNavBar from "../../components/IdeasNavBar";
import ActiveVoteIdeas from "../ActiveVoteIdeas";
import ClosedVoteIdeas from "../ClosedVoteIdeas"
import { BrowserRouter as Router, Route } from "react-router-dom";
import CampaignForm from "../../components/CampaignForm";

class Ideas extends Component {

  state = {
    titleInput: '',
    authorInput: '',
    campaignInputArea: '',
    userId: '',
    campaignExpand: false,
    focusedCampaign: {}
  };

  loadUser = () => {
    let authenticatedUserId = this.props.auth.user.id
    console.log(this.props.auth.user.id);
		API.getUserById(authenticatedUserId)
			.then(response => {
        let userData = response.data[0]
        console.log(userData);
				this.setState({
					userId: userData._id,
					authorInput: `${userData.username}`,
				});
			});
	};

  handleFormSubmit = (event) => {
    event.preventDefault()
    const campaignForm = document.getElementById('newCampaign');
    API.campaignPost({
      title: this.state.titleInput,
      author: this.state.authorInput,
      userId: this.state.userId,
      synopsis: this.state.campaignInputArea})
      .then(response => {
        (console.log(`You successfully uploaded: ${response.data.title}`));
      });
    this.setState({
      titleInput: '',
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

  componentDidMount =() => {
      this.loadUser()
      window.$('.modal').modal();
  };

  render(){ 

    return (
      <div>
        <IdeasNavBar/>
        <CampaignForm
          titleInput={this.state.titleInput}
          authorInput={this.state.authorInput}
          campaignInput={this.state.campaignInputArea}
          handleFormSubmit={this.handleFormSubmit}
          handleChange={this.handleChange}/>
        <Router>
          <Route exact path="/ideas/active" component={ActiveVoteIdeas} />
          <Route exact path="/ideas/closed" component={ClosedVoteIdeas} />
        </Router>
      </div>
    )
  }
}

Ideas.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  	auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Ideas);