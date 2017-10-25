import React from "react";
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

  const NewEvent = () =>
          <Grid>
            <Row>
              <Col md={4}>
              <div>
                <h5> Event </h5>
                <Button bsStyle="primary" href="/brainStorm" block>BrainStorm</Button>
                </div>
              </Col>
            </Row>
        </Grid>
    
export default NewEvent;
