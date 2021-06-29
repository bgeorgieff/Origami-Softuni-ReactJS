import React from 'react'
import PageWrapper from '../../components/page-wrapper';
import Title from '../../components/title'
import Origamis from '../../components/origamis'
import UserContext from '../../Context';

class Publications extends React.Component {
  static contextType = UserContext

  render() {
    // console.log(this.context);
    return (
      <PageWrapper>
        <Title title="Publications" />
        <Origamis />
      </PageWrapper>
    )
  }
}

export default Publications
