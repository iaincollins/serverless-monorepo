import React from "react";
import Page from "../components/page";
import 'isomorphic-unfetch'

async function callApi(url) {
  const request = await fetch(url)
  return await request.json()
}

export default class extends React.Component {
  // getInitialProps() runs server side on first run and client side on subsequent page loads
  static async getInitialProps({ req }) {
    // The request object `req` only exists server side and `window` is only client side
    // When in development mode, host is always http://localhost:3001
    const server = (process.env.NODE_ENV === 'production') 
      ? (req) ? `https://${req.headers.host}` : `https://${window.location.host}`
      : 'http://localhost:3001'

    const apiData = await callApi(`${server}/api/test`)
    return { message: apiData.testMessage }
  }

  constructor(props) {
    super(props)
    this.state = {
      message: props.message
    }
    this.onUpdateMessage = this.onUpdateMessage.bind(this)
  }

  async onUpdateMessage() {
    // This function is bound to a button onClick and can only be called client side
    const server = (process.env.NODE_ENV === 'production') 
    ? `https://${window.location.host}`
    : 'http://localhost:3001'
    const apiData = await callApi(`${server}/api/test`)
    this.setState({ message: apiData.testMessage })
  }

  render() {
    const { message } = this.state;
    return (
      <Page>
        <h1>Serverless Monorepo</h1>
        <p>This is an example of a monorepo with a React frontend and a backend API, where both are serverless.</p>
        <h3>Example</h3>
        <p>Data from the endpoint at /api/test :</p>
        <pre style={{border: '1px solid black', padding: 5, display: 'inline-block'}}>
          {message}
        </pre>
        <p>On initial page render the data is fetched using server side logic.</p>
        <p>If you click the button below, it will call the API from the browser (client side).</p>
        <button onClick={this.onUpdateMessage}>Call API From Client</button>
        <hr/>
        <p>
          View source on <a href="https://github.com/iaincollins/serverless-monorepo">github.com/iaincollins/serverless-monorepo</a>
        </p>
      </Page>
    );
  }
}