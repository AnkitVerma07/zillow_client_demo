import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col , CardBlock, CardHeader} from 'reactstrap';

class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      activitiesArray: []
    }
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col >
            <Card>
              <CardHeader>
                Children Activities
              </CardHeader>
              <CardBlock>
                <Card block>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


export default Dashboard;
