import React, { Component } from 'react';
import { connect } from 'react-redux';
import { staticFiles } from '../../helpers/constants';
import Hello from '../../components/translation/hello';
import Thank from '../../components/translation/thank-you';
import Form from '../../modules/form';
import { fetchData } from './services/action';

class Home extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        {this.props.data.map(element => {
          return (
            <div key={element._id}>
              <img src={`${staticFiles}${element.path}`} alt="" />
            </div>
          );
        })}
        Home
        <hr />
        <Form />
        <Hello />
        <Thank />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.homeReducer.data
  };
};

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
