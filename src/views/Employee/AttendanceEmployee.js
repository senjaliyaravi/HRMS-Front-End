import Header from 'components/Headers/Header';
import React from 'react'

import { Card, Row, Col, CardHeader, Container, CardBody, Button, Input, Table,  PaginationItem, PaginationLink,  CardFooter, Pagination, } from "reactstrap";

const AttendanceEmployee = () => {
    return (
        <>
            <Header />
            <Container className="mt--7" fluid>
                <Row>
                    <Col xl="4">
                        <Card className="shadow">
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <CardBody>
                                        <div className="text-center ">
                                            <h6 className="text-uppercase text-muted ls-1 mb-1">
                                                Performance
                                            </h6>
                                            <h2 className="mb-0">Today Activity</h2>
                                        </div>
                                        <div className="punch-det text-center">
                                            <h5>Punch In at</h5>
                                            <h3>Wed 11th Mar 2019 10.00 AM</h3>
                                        </div>
                                        <div className="punch-info">
                                            <div className="punch-hours">
                                                <span>3.45 hrs</span>
                                            </div>
                                        </div>
                                        <div className="punch-btn-section">
                                            <Button type="button" className="btn btn-primary punch-btn">Punch Out</Button>
                                        </div>
                                        <div className="statistics">
                                            <div className="row">
                                                <div className="col-md-6 col-6  text-center">
                                                    <h4>Break</h4>
                                                    <h5>1.21 hrs</h5>

                                                </div>
                                                <div className="col-md-6 col-6 text-center">

                                                    <h4>Overtime</h4>
                                                    <h5>3 hrs</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Row>
                            </CardHeader>
                        </Card>
                    </Col>
                    <Col xl="4">
                        <Card className="shadow">
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">

                                    <CardBody>
                                        <div className="text-center">
                                            <h6 className="text-uppercase text-muted ls-1 mb-1">
                                                Performance
                                            </h6>
                                            <h2 className="mb-0">Today Activity</h2>
                                        </div>
                                        <div>

                                            <div className="stats-list">
                                                <div className="stats-info">
                                                    <h4>Today <strong>3.45 <small>/ 8 hrs</small></strong></h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "40%" }} aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="stats-info">
                                                    <h4>This Week <strong>28 <small>/ 40 hrs</small></strong></h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: "60%" }} aria-valuenow="31" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="stats-info">
                                                    <h4>This Month <strong>90 <small>/ 160 hrs</small></strong></h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: "30%" }} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="stats-info">
                                                    <h4>Remaining <strong>90 <small>/ 160 hrs</small></strong></h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "44%" }} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="stats-info">
                                                    <h4>Overtime <strong>4</strong></h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: "10%" }} aria-valuenow="22" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Row>
                            </CardHeader>
                        </Card>
                    </Col>
                    <Col xl="4">
                        <Card className="shadow">
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">

                                    <CardBody>
                                        <div className="text-center">
                                            <h6 className="text-uppercase text-muted ls-1 mb-1">
                                                Performance
                                            </h6>
                                            <h2 className="mb-0">Today Activity</h2>
                                        </div>
                                        <div>

                                            <ul className="res-activity-list">
                                                <li>
                                                    <h3 className="mb-0">Punch In at</h3>
                                                    <h5 className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        10.00 AM.
                                                    </h5>
                                                </li>
                                                <li>
                                                    <h3 className="mb-0">Punch Out at</h3>
                                                    <h5 className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        11.00 AM.
                                                    </h5>
                                                </li>
                                                <li>
                                                    <h3 className="mb-0">Punch In at</h3>
                                                    <h5 className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        11.15 AM.
                                                    </h5>
                                                </li>
                                                <li>
                                                    <h3 className="mb-0">Punch Out at</h3>
                                                    <h3 className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        1.30 PM.
                                                    </h3>
                                                </li>
                                                <li>
                                                    <h3 className="mb-0">Punch In at</h3>
                                                    <h5 className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        2.00 PM.
                                                    </h5>
                                                </li>
                                                <li>
                                                    <h3 className="mb-0">Punch Out at</h3>
                                                    <h5 className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        7.30 PM.
                                                    </h5>
                                                </li>
                                                <li>
                                                    <h3 className="mb-0">Punch Out at</h3>
                                                    <h5 className="res-activity-time">
                                                        <i className="fa fa-clock-o"></i>
                                                        7.30 PM.
                                                    </h5>
                                                </li>
                                            </ul>
                                        </div>

                                    </CardBody>
                                </Row>
                            </CardHeader>
                        </Card>
                    </Col>
                    
                    <Col>
                        
                        <CardHeader className="attandeancehrd">
                            <Row>
                                <Col lg="3">
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        placeholder="Select"
                                        type="Date"
                                    />
                                </Col>
                                <Col lg="3">
                                <Input type='select' className="form-control-alternative">
                                        <option>--Month--</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>Octomber</option>


                                    </Input>
                                </Col>
                                <Col lg="3">
                                <Input type='select' className="form-control-alternative">
                                        <option>--Year--</option>
                                        <option>2023</option>
                                        <option>2022</option>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                     </Input>
                                </Col>
                                <Col lg="3">
                                    <Button className='col text-center' color="success">Search</Button>

                                </Col>
                            </Row>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">PunchIn</th>
                                    <th scope="col">PunchOut</th>
                                    <th scope="col">Production</th>
                                    <th scope="col">Break</th>
                                    <th scope="col">Overtime</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>01 Jan 2022</td>
                                    <td>10 AM</td>
                                    <td>07 PM</td>
                                    <td>9 hrs</td>
                                    <td>1 hrs</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>01 Jan 2022</td>
                                    <td>10 AM</td>
                                    <td>07 PM</td>
                                    <td>9 hrs</td>
                                    <td>1 hrs</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>01 Jan 2022</td>
                                    <td>10 AM</td>
                                    <td>07 PM</td>
                                    <td>9 hrs</td>
                                    <td>1 hrs</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>01 Jan 2022</td>
                                    <td>10 AM</td>
                                    <td>07 PM</td>
                                    <td>9 hrs</td>
                                    <td>1 hrs</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>01 Jan 2022</td>
                                    <td>10 AM</td>
                                    <td>07 PM</td>
                                    <td>9 hrs</td>
                                    <td>1 hrs</td>
                                    <td>0</td>
                                </tr>
                                

                            </tbody>
                        </Table>
                        <CardFooter className="py-4">
                            <nav aria-label="...">
                                <Pagination
                                    className="pagination justify-content-end mb-0"
                                    listClassName="justify-content-end mb-0"
                                >
                                    <PaginationItem className="disabled">
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            tabIndex="-1"
                                        >
                                            <i className="fas fa-angle-left" />
                                            <span className="sr-only">Previous</span>
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem className="active">
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            2 <span className="sr-only">(current)</span>
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fas fa-angle-right" />
                                            <span className="sr-only">Next</span>
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </nav>
                        </CardFooter>

                    </Col>
                </Row>
                {/* Dark table */}
            </Container >

        </>
    )
}

export default AttendanceEmployee;