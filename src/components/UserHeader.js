import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    const { user } = this.props;
    if (!user) {
    }
    return <div className="header">USER NAME</div>;
  }
}

const mapStateToProps = (state, ownprops) => {
  console.log(ownprops);
  console.log(state.users);
  return { user: null };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
