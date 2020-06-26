import Layout from "../components/Layout";
import { getUserProfile, authInitialProps } from "../lib/auth";

export default class Profile extends React.Component {
  state = {
    user: "Loading profile..."
  };

  componentDidMount() {
    getUserProfile().then(user => this.setState({ user }));
  }

  render() {
    return (
      <Layout title="Profile" {...this.props}>
        <pre>{JSON.stringify(this.state.user, null, 2)}</pre>
      </Layout>
    );
  }
}

Profile.getInitialProps = authInitialProps(true);
