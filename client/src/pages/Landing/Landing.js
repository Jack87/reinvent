import React from "react";
import lightbulbCutout from "../../images/lightbulbCutout.png";
import "./style.css";



const Landing = (props) => {
	
	return (
		
		<div className="landing-page-container">

			{/* Splash Page */}
			<div className="background-container">
				{/* Animated Background */}
				<div className="background-image">

					{/* Logo, Links, UI, etc. */}
					<div className="container valign-wrapper splash-container">
						<div className="row">
							<div className="col s12 center-align">
								<h1 className="logo-text">Re:invent</h1>
							</div>
							
								<div className="col s12 center-align links-container">
									<a className="auth-links button" href="/register"
											style={{
												width: "150px",
												borderRadius: "3px",
												letterSpacing: "1.5px"
											}}
										>
											Register
										</a>

										<a className="auth-links button" href="/login"
											style={{
												marginLeft: "5rem",
												width: "150px",
												borderRadius: "3px",
												letterSpacing: "1.5px"
											}}
										>
											Log In
										</a>
								</div>
					
						</div>
						
					</div>

								

				
				</div>
				<div className="ripple-background">
					<div className="circle xxlarge shade1"></div>
					<div className="circle xlarge shade2"></div>
					<div className="circle large shade3"></div>
					<div className="circle medium shade4"></div>
					<div className="circle small shade5"></div>
				</div>

				
			</div>

			

		</div>

		
		
	);

}


export default Landing;