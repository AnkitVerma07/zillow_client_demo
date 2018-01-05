/**
 * Created by Ankit Verma <ankit@medlmobile.com> on 1/3/18.
 */
import React, {Component} from 'react';
import {
    Card,
    Col,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Row,
    Button
} from 'reactstrap';

class Amoeba extends Component {

    constructor() {
        super();
        this.state = {
            adults: 0,
            kids: 0
        }
    }

    componentDidMount() {

    }

    populationGrowth(length) {
        let adults = this.state.adults;
        let kids = this.state.kids;
        for (let i = 0; i <= length; i++) {
            if (i === 0) {
                adults = 0;
                kids = 1;
            } else if (i === 1) {
                adults = kids;
                kids = 0;
            } else {
                const oldKids = kids;
                kids = adults;
                adults = adults + oldKids;
            }
        }
        this.setState({
            adults, kids
        });
    }


    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <h1>Amoeba Feature</h1>
                </Row>
                <Row className="amoeba_row">
                    <Col>
                        <Card>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon><i className="fa fa-pencil"></i></InputGroupAddon>
                                    <Input type="text"
                                           id="length"
                                           name="length"
                                           ref="lengthRef"
                                           getRef={(input) => {
                                               this.lengthRef = input;
                                           }}
                                           placeholder="Length of simulations"/>
                                </InputGroup>
                            </FormGroup>
                            <Button
                                id="populationGrowth"
                                color="success"
                                className="amoeba_btn"
                                onClick={() => {
                                    this.populationGrowth(this.lengthRef.value);
                                }}>Calculate</Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="amoeba_row">
                    <Col>
                        <Row className="amoeba_card"><h3>Adults: </h3><h3>{this.state.adults}</h3></Row>
                        <Row className="amoeba_card"><h3>Kids: </h3><h3>{this.state.kids}</h3></Row>
                        <Row className="amoeba_card"><h3>Total Amoeba: </h3>
                            <h3>{this.state.kids + this.state.adults}</h3></Row>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Amoeba;
