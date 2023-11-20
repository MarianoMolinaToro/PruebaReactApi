import React, { Component } from "react";

const CLIENT_ID = "b7fbb42aeaaa483ea112dd12a26252e8";
const CLIENT_SECRET = "2e4c90ca7bde4b819160bd18bfc0b65e";

class MiApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: ""
    };
  }

  componentDidMount() {
    this.fetchAccessToken();
  }

  fetchAccessToken = () => {
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }; 


    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json()) 
      .then(data => {
        this.setState({ accessToken: data.access_token });
        this.props.onTokenChange(data.access_token);
      })
      .catch(error => console.error("Error al obtener el token de acceso", error));
  };

  render() {  
    return null; 
  }
}

export default MiApi;
