import React from "react";
import Page from "../components/page";
import 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const server = (process.env.NODE_ENV === 'production') 
      // When running on server get hostname from `req` when in client use `window`
      ? (req) ? `https://${req.headers.host}` : `https://${window.location.host}`
      // Development is always http://localhost:3001
      : 'http://localhost:3001'

    const request = await fetch(`${server}/api/test`)
    const json = await request.json()
    return { message: json.testMessage }
  }

  constructor(props) {
    super(props)
    this.state = {
      message: props.message
    }
    this.onCallApiEndpoint = this.onCallApiEndpoint.bind(this)
  }

  async onCallApiEndpoint() {
    // This can only be called from client side
    const server = (process.env.NODE_ENV === 'production') 
    ? `https://${window.location.host}`
    : 'http://localhost:3001'
    const request = await fetch(`${server}/api/test`)
    const json = await request.json()
    this.setState({
      message: json.testMessage
    })
  }

  render() {
    const { message } = this.state;
    return (
      <Page>
        <h1>Serverless Monorepo</h1>
        <p>This is an example of a React frontend (using 'Next.js') and an API (using 'micro') where both the frontend and backend are serverless.</p>
        <h3>Data from the endpoint /api/test</h3>
        <pre style={{border: '1px solid black', padding: 5, display: 'inline-block'}}>
          {message}
        </pre>
        <p>On initial page render the data is fetched using server side logic.</p>
        <p>If you click the button below, it will be fetched client side.</p>
        <button onClick={this.onCallApiEndpoint}>Call API From Client</button>
        <p>
          View source on <a href="https://github.com/iaincollins/serverless-monorepo">github.com/iaincollins/serverless-monorepo</a>
        </p>
      </Page>
    );
  }
}