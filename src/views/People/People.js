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

/* Select includes */
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      ascending: false,
      types: [
        {label: 'SSN', value: 'ssn'},
        {label: 'Date Of Birth', value: 'dateOfBirth'},
        {label: 'First Name', value: 'firstName'},
        {label: 'Last Name', value: 'lastName'},
        {label: 'Height', value: 'heightIn'},
        {label: 'Weight', value: 'weightLb'}
      ],
      typeValue: ''
    };
    this.changeAscending = this.changeAscending.bind(this);
    this.fetchPeople = this.fetchPeople.bind(this);
    this.selectSortField = this.selectSortField.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  componentDidMount() {

  }

  changeAscending() {
    this.setState({
      ascending: !this.state.ascending
    });
  }

  selectSortField(value) {
    this.setState({
      sortField: value
    });
  }

  fetchPeople() {
    console.log(this.state.typeValue);
    console.log(this.state.ascending);
  }

  handleTypeChange(value) {
    this.setState({typeValue: value});
  }


  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <h1>People Look Up</h1>
        </Row>
        <Row className="amoeba_row">
          <Col >
            <Card>
              <Row>
                <Col>
                  <FormGroup>
                    <InputGroup>
                      <Select
                        simpleValue
                        value={this.state.typeValue}
                        placeholder="Select One"
                        options={this.state.types}
                        onChange={this.handleTypeChange}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <InputGroup>
                      <p>Ascending</p>
                      <Input
                        onChange={this.changeAscending}
                        type="checkbox"
                        id="Ascending"
                        name="Ascending"/>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Button
                id="fetchPeople"
                color="success"
                className="amoeba_btn"
                onClick={this.fetchPeople}>Fetch</Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


export default Dashboard;
