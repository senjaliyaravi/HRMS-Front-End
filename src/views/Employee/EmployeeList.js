import React from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Col, Input, Modal, FormGroup, ModalFooter, ModalHeader, ModalBody, CardBody, Form,

} from "reactstrap";


// core components
import Header from "components/Headers/Header.js";

// import { Link } from 'react-router-dom';
const EmployeeList = () => {


  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Employee List</h3>
                  </div>
                  <div className="col text-right">
                    {/* <Button
                    //   color="primary"
                    //   href="/admin/addemployee"
                    // //   onClick={(e) => e.preventDefault()}
                    //   size="sm"
                    ><Link to={'/admin/addemployee'}>
                        Add Employee</Link>
                    </Button> */}
                    <Button color="danger"
                      onClick={toggle}>Add Employee</Button>
                  </div>
                </Row>
              </CardHeader>
              <CardHeader className="border-0">
                <Row>
                  <Col lg="3">
                    <Input
                      className="form-control-alternative"
                      id="input-leavetype"
                      placeholder="Employee ID"
                      type="text"
                    />
                  </Col>
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
                      <option>Web Designer</option>
                      <option>Web Developer</option>
                      <option>Python Developer</option>
                      <option>Mobile App Developer</option>

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
                    <th scope="col">Name</th>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile No</th>
                    <th scope="col">Joining Date</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
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
                    <td>172022</td>
                    <td>Test@gmail.com</td>
                    <td>+9 9876543210</td>
                    <td>25/04/2023</td>
                    <td>web Designer</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
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
                    <td>172022</td>
                    <td>Test@gmail.com</td>
                    <td>+9 9876543210</td>
                    <td>25/04/2023</td>
                    <td>web Designer</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
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
                    <td>172022</td>
                    <td>Test@gmail.com</td>
                    <td>+9 9876543210</td>
                    <td>25/04/2023</td>
                    <td>web Designer</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
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
                    <td>172022</td>
                    <td>Test@gmail.com</td>
                    <td>+9 9876543210</td>
                    <td>25/04/2023</td>
                    <td>web Designer</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
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
                    <td>172022</td>
                    <td>Test@gmail.com</td>
                    <td>+9 9876543210</td>
                    <td>25/04/2023</td>
                    <td>web Designer</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
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
                    <td>172022</td>
                    <td>Test@gmail.com</td>
                    <td>+9 9876543210</td>
                    <td>25/04/2023</td>
                    <td>web Designer</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Delete
                          </DropdownItem>

                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
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
            </Card>
          </div>
        </Row>
        {/* Dark table */}

      </Container>


      {/* add employee */}
      <Modal isOpen={modal} toggle={toggle} size='xl'>
        <ModalHeader
          toggle={toggle}><h2>Add New Employee</h2></ModalHeader>
        <ModalBody>

          <div className="pl-lg-12">

            <Row>
              <Col lg="12"><Row>
                <Col className="order-xl-1" xl="12">
                  <Card className="bg-secondary shadow">
                    
                    <CardBody>
                      <Form>
                        <h6 className="heading-small text-muted mb-4">
                          User information
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  First name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-first-name"
                                  placeholder="First name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  Middle name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-first-name"
                                  placeholder="First name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Last name
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-last-name"
                                  placeholder="Last name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-gender"
                                >
                                  Gender
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-gender"
                                  placeholder="gender"
                                  type="select"
                                >
                                  <option>Male</option>
                                  <option>Female</option>
                                  <option>optional</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  Phone No
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-first-name"
                                  placeholder="9876543210"
                                  type="number"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Email address
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-email"
                                  placeholder="jesse@example.com"
                                  type="email"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  PassWord
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-first-name"
                                  placeholder="password"
                                  type="Password"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Conform PassWord
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-last-name"
                                  placeholder="conformpassword"
                                  type="Password"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  Birth Date
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-birthdate"
                                  placeholder="dd/mm/yy"
                                  type="date"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  Addar Number
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-first-name"
                                  placeholder="9876543210"
                                  type="number"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Joining Date
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-last-name"
                                  placeholder="01-june/2022"
                                  type="Date"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-Position"
                                >
                                  Position
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-Position"
                                  placeholder="Position"
                                  type="select"
                                >
                                  <option>Sr. Backend Developer</option>
                                  <option>Jr. Backend Developer</option>
                                  <option>Sr. Web designer</option>
                                  <option>Jr. Web designer</option>
                                  <option>Project Manager</option>
                                  <option>Team Lead</option>
                                  <option>HR</option>
                                  <option>Hr recruiter</option>
                                  <option>Receptionist</option>
                                  <option>BDE</option>
                                  <option>Tech Lead</option>
                                  <option>trainee </option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-Department"
                                >
                                  Department
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-Department"
                                  placeholder="Department"
                                  type="select"
                                >
                                  <option>Web Development</option>
                                  <option>Marketing</option>
                                  <option>Hr Department</option>
                                  <option>Admin Department</option>
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-technology"
                                >
                                  technology
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-technology"
                                  placeholder="technology"
                                  type="select"
                                >
                                  <option>Python</option>
                                  <option>ReactJs</option>
                                  <option>Django</option>
                                  <option>Odoo</option>
                                  <option>Flutter</option>
                                  <option>React Native</option>
                                  <option>PHP</option>
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-Designation"
                                >
                                  Designation
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-designation"
                                  placeholder="Designation"
                                  type="select"
                                >
                                  <option>Web Designer</option>
                                  <option>Web Developer</option>
                                  <option>Android Developer</option>
                                  <option>Ios Developer</option>
                                  <option>Graphic Designer</option>

                                </Input>
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Upload Photo
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="file"
                                  placeholder="Upload Photo"
                                  type="file"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                        <hr className="my-4" />
                        {/* family details */}
                        <h6 className="heading-small text-muted mb-4">
                          Family Details
                        </h6>
                        <div className="pl-lg-4">

                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  Father/Husband  FirstName
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-city"
                                  placeholder="Firstname"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Father/Husband  MiddleName
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-country"
                                  placeholder="middelname"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Father/Husband  LastName
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-postal-code"
                                  placeholder="lastname"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>

                          </Row>
                          <Row>
                            <Col md="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Famil Contact Number
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-address"
                                  placeholder="Home contact"
                                  type="number"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Famil Contact Number 2
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-address"
                                  placeholder="Home contact"
                                  type="number"
                                />
                              </FormGroup>
                            </Col>
                          </Row>

                        </div>

                        <hr className="my-4" />
                        {/* Address */}
                        <h6 className="heading-small text-muted mb-4">
                          Address information
                        </h6>
                        <div className="pl-lg-4">
                          <Row>
                            <Col md="12">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Address
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-address"
                                  placeholder="Home Address"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="3">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  City
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-city"
                                  placeholder="City"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="3">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-state"
                                >
                                  State
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-state"
                                  placeholder="State"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="3">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Country
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-country"
                                  placeholder="Country"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="3">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Postal code
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-postal-code"
                                  placeholder="Postal code"
                                  type="number"
                                />
                              </FormGroup>
                            </Col>

                          </Row>

                        </div>

                        <hr className="my-4" />
                        {/* Documents */}
                        <h6 className="heading-small text-muted mb-4">
                          Documnets Upload
                        </h6>
                        <div className="pl-lg-4">

                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  Aadhar Card/Passport/Driving License
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-file"
                                  placeholder="file"
                                  type="File"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  Last Passing marksheet
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-file"
                                  placeholder="file"
                                  type="File"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  Experience Letter/Training Certificate
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-file"
                                  placeholder="file"
                                  type="File"
                                />
                              </FormGroup>
                            </Col>



                          </Row>
                          <Row>
                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  Salary Slip Last Month
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-file"
                                  placeholder="file"
                                  type="File"
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  Salary Slip second last Month
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-file"
                                  placeholder="file"
                                  type="File"
                                />
                              </FormGroup>
                            </Col>

                            <Col lg="4">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  Salary Slip Third Last Month
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-file"
                                  placeholder="file"
                                  type="File"
                                />
                              </FormGroup>
                            </Col>
                          </Row>

                        </div>

                        <hr className="my-4" />
                        {/* Bank  details */}
                        <h6 className="heading-small text-muted mb-4">
                          Bank Details
                        </h6>
                        <div className="pl-lg-4">

                          <Row>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-bankname
                            "
                                >
                                  BankName
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-bankname"
                                  placeholder="bank name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-acnumber"
                                >
                                  Account Number
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-acnumber"
                                  placeholder="Account number"
                                  type="number"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-ifsccode"
                                >
                                  IfSC Code
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-ifsc-code"
                                  placeholder="ifsccode"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>


                            <Col md="6">
                              <FormGroup>
                                <label
                                  className="form-control-label"
                                  htmlFor="input-bbaddress"
                                >
                                  Bank Branch Address
                                </label>
                                <Input
                                  className="form-control-alternative"
                                  id="input-address"
                                  placeholder="bank Address"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>

                          </Row>

                        </div>

                        <hr className="my-4" />
                        {/* submit button */}
                        <ModalFooter>
                        <div className="pl-lg-4">

                          <Button type='submit'>Click to submit</Button>
                          <Button type='reset'>Reset</Button>


                        </div>
                        </ModalFooter>

                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>


              </Col>

            </Row>
          
          </div>
        </ModalBody>
      </Modal>
    </>

  )
}

export default EmployeeList;