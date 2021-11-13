import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui negative button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderConfig() {
    if (!this.props.stream) {
      return {
        title: "Delete Stream",
        description: "Are you sure you want to delete this stream?",
      };
    } else {
      return {
        title: "Delete Stream",
        description: "Are you sure you want to delete this stream?",
        streamTitle: this.props.stream.title,
        streamDescription: this.props.stream.description,
      };
    }
  }

  render() {
    return (
      <Modal
        config={this.renderConfig()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
