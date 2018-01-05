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
import {
    BootstrapTable, TableHeaderColumn
} from 'react-bootstrap-table';

import {getAllPeople} from '../../utils/api_helper';

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
            typeValue: '',
            people: []
        };
        this.changeAscending = this.changeAscending.bind(this);
        this.fetchPeople = this.fetchPeople.bind(this);
        this.selectSortField = this.selectSortField.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    componentDidMount() {
        getAllPeople(this.state.typeValue,this.state.ascending).then( (response) => {
            this.setState({
                people: response.data.people
            });
        });
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
        getAllPeople(this.state.typeValue,this.state.ascending).then( (response) => {
            this.setState({
                people: response.data.people
            });
        });
    }

    handleTypeChange(value) {
        this.setState({typeValue: value});
    }


    render() {
        const options = {
            sizePerPage: 10,
            noDataText: 'There are no people in our db to show.'
        };
        return (
            <div className="animated fadeIn">
                <Row>
                    <h1>People Look Up</h1>
                </Row>
                <Row className="amoeba_row">
                    <Col>
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
                <Row>
                    <Col>
                        <Card>
                            <BootstrapTable
                                            data={this.state.people}
                                            key={0}
                                            options={options}
                                            striped
                                            hover
                                            bordered
                                            pagination
                                            version="4"
                                            trStyle={{cursor: 'pointer'}}>
                                <TableHeaderColumn width="100" dataField="id" isKey>
                                    News Id
                                </TableHeaderColumn>
                                <TableHeaderColumn width="100" dataField="firstName" dataSort>
                                    First Name
                                </TableHeaderColumn>
                                <TableHeaderColumn width="100" dataField="lastName" dataSort>
                                    Last Name
                                </TableHeaderColumn>
                                <TableHeaderColumn width="100" dataField="ssn" dataSort>
                                    SSN
                                </TableHeaderColumn>
                                <TableHeaderColumn width="100" dataField="dateOfBirth" dataSort>
                                    Date Of Birth
                                </TableHeaderColumn>
                                <TableHeaderColumn width="100" dataField="heightIn" dataSort>
                                    Height (in inches)
                                </TableHeaderColumn>
                                <TableHeaderColumn width="100" dataField="heightIn" dataSort>
                                    Weight (in lbs)
                                </TableHeaderColumn>
                            </BootstrapTable>
                        </Card>
                    </Col>
                </Row>
            </div>
    )
    }
    }


    export default Dashboard;
