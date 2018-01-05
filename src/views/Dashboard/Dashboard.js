import React, {Component} from 'react';
import {Card, Button, CardTitle, CardText, Row, Col, CardBlock, CardHeader} from 'reactstrap';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            tabSelected: '1'
        };
        this.renderATab = this.renderATab.bind(this);
    }

    openTab(tab) {
        this.setState({
            tabSelected: tab
        });
    }


    renderATab() {
        if (this.state.tabSelected === '1') {
            return (
                <div>
                    <Row>
                        <Col>
                            <Row>
                                <h4>INTERNATIONAL REAL ESTATE</h4>
                            </Row>
                            <Row>
                                <h3 className="color_blue">House Hunting in London</h3>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Despite the slump after the 2008 housing crash, prices in London have rebounded
                                        to their highest levels ever.</p>
                                </Col>
                                <Col>
                                    <div className="image"/>
                                </Col>
                            </Row>
                            <Row>
                                <Row>
                                    <div className="icon-camera"/>
                                    <div className="color_blue">
                                        Slide Show
                                    </div>
                                </Row>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <h4>FIND PROPERTIES</h4>
                            </Row>
                            <Row>
                                <ul>
                                    <li className="color_blue">Go to Real Estate Section</li>
                                    <li className="color_blue">Search for Properties</li>
                                    <li className="color_blue">Download the Real Estate App</li>
                                    <li className="color_blue">Commercial Real Estate</li>
                                    <li className="color_blue">Video Showcase: Real Estate</li>
                                    <li className="color_blue">Post an Ad</li>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                    <div className="mb-3 py-2 text-muted text-uppercase b-b-1"/>
                    <Row>
                        <Col>
                            <div className="bigger_image"/>
                        </Col>
                        <Col>
                            <Row>
                                <ul>
                                    <li className="color_blue nostyle">NoMads newest condos</li>
                                    <li className="color_blue nostyle">2 BRs starting $2.0.0 M</li>
                                    <li className="color_blue nostyle">3 BRs starting $2.9 M</li>
                                </ul>
                            </Row>
                            <Row className="display_block">
                                <div className="image"/>
                            </Row>
                        </Col>
                    </Row>
                    <div className="mb-3 py-2 text-muted text-uppercase b-b-1"/>
                    <Row>
                        <h5 className="ad_h5">Place a classified Ad >></h5>
                    </Row>
                </div>
            );
        }
        if (this.state.tabSelected === '2') {
            return (
                <div>
                    <Row>
                        <Col>
                            <Row>
                                <h4>AUTOS SECTION</h4>
                            </Row>
                            <Row>
                                <h3 className="color_blue">House Hunting in London</h3>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Despite the slump after the 2008 housing crash, prices in London have rebounded
                                        to their highest levels ever.</p>
                                </Col>
                                <Col>
                                    <div className="image"/>
                                </Col>
                            </Row>
                            <Row>
                                <Row>
                                    <div className="icon-camera"/>
                                    <div className="color_blue">
                                        Slide Show
                                    </div>
                                </Row>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <h4>FIND PROPERTIES</h4>
                            </Row>
                            <Row>
                                <ul>
                                    <li className="color_blue">Go to Real Estate Section</li>
                                    <li className="color_blue">Search for Properties</li>
                                    <li className="color_blue">Download the Real Estate App</li>
                                    <li className="color_blue">Commercial Real Estate</li>
                                    <li className="color_blue">Video Showcase: Real Estate</li>
                                    <li className="color_blue">Post an Ad</li>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                    <div className="mb-3 py-2 text-muted text-uppercase b-b-1"/>
                    <Row>
                        <Col>
                            <div className="bigger_image"/>
                        </Col>
                        <Col>
                            <Row>
                                <ul>
                                    <li className="color_blue nostyle">NoMads newest condos</li>
                                    <li className="color_blue nostyle">2 BRs starting $2.0.0 M</li>
                                    <li className="color_blue nostyle">3 BRs starting $2.9 M</li>
                                </ul>
                            </Row>
                            <Row className="display_block">
                                <div className="image"/>
                            </Row>
                        </Col>
                    </Row>
                    <div className="mb-3 py-2 text-muted text-uppercase b-b-1"/>
                    <Row>
                        <h5 className="ad_h5">Place a classified Ad >></h5>
                    </Row>
                </div>
            );
        }
        if (this.state.tabSelected === '3') {
            return (
                <div>
                    <Row>
                        <Col>
                            <Row>
                                <h4>JOBS SECTION</h4>
                            </Row>
                            <Row>
                                <h3 className="color_blue">House Hunting in London</h3>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Despite the slump after the 2008 housing crash, prices in London have rebounded
                                        to their highest levels ever.</p>
                                </Col>
                                <Col>
                                    <div className="image"/>
                                </Col>
                            </Row>
                            <Row>
                                <Row>
                                    <div className="icon-camera"/>
                                    <div className="color_blue">
                                        Slide Show
                                    </div>
                                </Row>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <h4>FIND PROPERTIES</h4>
                            </Row>
                            <Row>
                                <ul>
                                    <li className="color_blue">Go to Real Estate Section</li>
                                    <li className="color_blue">Search for Properties</li>
                                    <li className="color_blue">Download the Real Estate App</li>
                                    <li className="color_blue">Commercial Real Estate</li>
                                    <li className="color_blue">Video Showcase: Real Estate</li>
                                    <li className="color_blue">Post an Ad</li>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                    <div className="mb-3 py-2 text-muted text-uppercase b-b-1"/>
                    <Row>
                        <Col>
                            <div className="bigger_image"/>
                        </Col>
                        <Col>
                            <Row>
                                <ul>
                                    <li className="color_blue nostyle">NoMads newest condos</li>
                                    <li className="color_blue nostyle">2 BRs starting $2.0.0 M</li>
                                    <li className="color_blue nostyle">3 BRs starting $2.9 M</li>
                                </ul>
                            </Row>
                            <Row className="display_block">
                                <div className="image"/>
                            </Row>
                        </Col>
                    </Row>
                    <div className="mb-3 py-2 text-muted text-uppercase b-b-1"/>
                    <Row>
                        <h5 className="ad_h5">Place a classified Ad >></h5>
                    </Row>
                </div>
            );
        }
        if (this.state.tabSelected === '4') {
            return (
                <div>
                    <Row>
                        <Col>
                            <Row>
                                <h4>ALL CLASSIFIEDS</h4>
                            </Row>
                            <Row>
                                <h3 className="color_blue">House Hunting in London</h3>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Despite the slump after the 2008 housing crash, prices in London have rebounded
                                        to their highest levels ever.</p>
                                </Col>
                                <Col>
                                    <div className="image"/>
                                </Col>
                            </Row>
                            <Row>
                                <Row>
                                    <div className="icon-camera"/>
                                    <div className="color_blue">
                                        Slide Show
                                    </div>
                                </Row>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <h4>FIND PROPERTIES</h4>
                            </Row>
                            <Row>
                                <ul>
                                    <li className="color_blue">Go to Real Estate Section</li>
                                    <li className="color_blue">Search for Properties</li>
                                    <li className="color_blue">Download the Real Estate App</li>
                                    <li className="color_blue">Commercial Real Estate</li>
                                    <li className="color_blue">Video Showcase: Real Estate</li>
                                    <li className="color_blue">Post an Ad</li>
                                </ul>
                            </Row>
                        </Col>
                    </Row>
                    <div className="mb-3 py-2 text-muted text-uppercase b-b-1"/>
                    <Row>
                        <Col>
                            <div className="bigger_image"/>
                        </Col>
                        <Col>
                            <Row>
                                <ul>
                                    <li className="color_blue nostyle">NoMads newest condos</li>
                                    <li className="color_blue nostyle">2 BRs starting $2.0.0 M</li>
                                    <li className="color_blue nostyle">3 BRs starting $2.9 M</li>
                                </ul>
                            </Row>
                            <Row className="display_block">
                                <div className="image"/>
                            </Row>
                        </Col>
                    </Row>
                    <div className="mb-3 py-2 text-muted text-uppercase b-b-1"/>
                    <Row>
                        <h5 className="ad_h5">Place a classified Ad >></h5>
                    </Row>
                </div>
            );
        }
    }


    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Row>
                            <div className="tab">
                                <button className="tablinks" onClick={() => this.openTab('1')}>REAL ESTATE</button>
                                <button className="tablinks" onClick={() => this.openTab('2')}>AUTOS</button>
                                <button className="tablinks" onClick={() => this.openTab('3')}>JOBS</button>
                                <button className="tablinks" onClick={() => this.openTab('4')}>ALL CLASSIFIEDS</button>
                            </div>
                        </Row>
                        <Row className="tab_section_row">
                            <Col>
                                {this.renderATab()}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Dashboard;
