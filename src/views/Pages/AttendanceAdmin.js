import Header from 'components/Headers/Header';
import React from 'react'

import { Row, Col, CardHeader, Container, Button, Input, Media, Table, PaginationItem, PaginationLink, CardFooter, Pagination, } from "reactstrap";

const AttendanceAdmin = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col>

            <CardHeader className="attandeancehrd">
              <Row>
                <Col lg="3">
                  <Input
                    className="form-control-alternative"
                    id="input-leavetype"
                    placeholder="Employee Name"
                    type="text"
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
                  <th scope="col">Employee</th>
                  <th scope="col">1</th>
                  <th scope="col">2</th>
                  <th scope="col">3</th>
                  <th scope="col">4</th>
                  <th scope="col">5</th>
                  <th scope="col">6</th>
                  <th scope="col">7</th>
                  <th scope="col">8</th>
                  <th scope="col">9</th>
                  <th scope="col">10</th>
                  <th scope="col">11</th>
                  <th scope="col">12</th>
                  <th scope="col">13</th>
                  <th scope="col">14</th>
                  <th scope="col">15</th>
                  <th scope="col">16</th>
                  <th scope="col">17</th>
                  <th scope="col">18</th>
                  <th scope="col">19</th>
                  <th scope="col">20</th>
                  <th scope="col">21</th>
                  <th scope="col">22</th>
                  <th scope="col">23</th>
                  <th scope="col">24</th>
                  <th scope="col">25</th>
                  <th scope="col">26</th>
                  <th scope="col">27</th>
                  <th scope="col">28</th>
                  <th scope="col">29</th>
                  <th scope="col">30</th>
                  <th scope="col">31</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          Ravi Senjaliya
                        </span>
                      </Media>
                    </Media>
                  </th>

                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>

                </tr>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          Ravi Senjaliya
                        </span>
                      </Media>
                    </Media>
                  </th>

                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>

                </tr>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          Ravi Senjaliya
                        </span>
                      </Media>
                    </Media>
                  </th>

                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td> <i className='ni ni-fat-remove text-red' /></td>
                  <td> <i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td> <i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td> <i className='ni ni-fat-remove text-red' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>

                </tr>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/bootstrap.jpg")}
                        />
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          Ravi Senjaliya
                        </span>
                      </Media>
                    </Media>
                  </th>

                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td>
                    <i className='ni ni-check-bold text-green' /><br />
                    <i className='ni ni-fat-remove text-red' />
                  </td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>
                  <td><i className='ni ni-check-bold text-green' /></td>

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

export default AttendanceAdmin;