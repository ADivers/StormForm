import React from "react";
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import NewEvent from "../../components/NewEvent";
// import { MenuItem } from 'react-bootstrap';

class createEvent extends React.Component {

        state = {
          numChildren: 0
        }
    
    render() {
      const children = [];
      
        for (var i = 0; i < this.state.numChildren; i += 1) {
          children.push(<ChildComponent />);
        };
    
      return (
        <ParentComponent addChild={this.onAddChild}>
          {children}
        </ParentComponent>
      )};
    }

  const onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }

    const ParentComponent = props => (
    <div>
      <Grid>
        <Row>
          <Col md={12}>
          <Button onClick={props.addChild} bsStyle="success" bsSize="large" block>Create New Event!</Button>
          </Col>
        </Row>
      </Grid>
        <div id="children-pane">
          {props.children}
        </div>
    </div>
    );
    
    const ChildComponent = props => <div>{<NewEvent/>}</div>;

    export default createEvent;




