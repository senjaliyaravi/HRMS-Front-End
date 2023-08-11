import Header from 'components/Headers/Header';


import React from 'react';
import {

  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table, Col, Input, FormGroup,
  Container,
  Media, Button, Modal, ModalFooter,
  ModalHeader, ModalBody,
  Row,

  
} from "reactstrap";

const EmployeeSalary = () => {
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  return (
    <>


     
            <Header />

            {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Leave Admin</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button color="danger"
                                            onClick={toggle}>Add Salary</Button>

                                    </div>
                                </Row>
                            </CardHeader>



                            <CardHeader className="border-0">
                                <Row>

                                    <Col lg="2">
                                        <Input
                                            className="form-control-alternative"
                                            id="input-leavetype"
                                            placeholder="Employee Name"
                                            type="text"
                                        />
                                    </Col>
                                    <Col lg="2">
                                        <Input type='select' className="form-control-alternative"  >
                                          
                                            <option>--Select--</option>
                                            <option>Emploayee</option>
                                            <option>Manager</option>
                                           

                                        </Input>
                                    </Col>
                                    <Col lg="2">
                                        
                                        <Input type='select'   className="form-control-alternative" >
                                            <option>--Select--</option>
                                            <option >Panding</option>
                                            <option>Approved</option>
                                            <option>Rejected</option>

                                        </Input>
                                    </Col>
                                    <Col lg="2">
                                        <Input
                                            className="form-control-alternative"
                                            id="input-holidaydate"
                                            placeholder="From"
                                            type="date"
                                        />
                                    </Col>
                                    <Col lg="2">
                                        <Input
                                        
                                            className="form-control-alternative"
                                            id="input-holidaydate"
                                            placeholder="To"
                                            type="date"
                                        />
                                    </Col>
                                    <Col lg="2">
                                        <Button className='col text-center' color="success">Search</Button>

                                    </Col>
                                </Row>
                            </CardHeader>

                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Employee</th>
                                        <th scope="col">Employee ID</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Join Date</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Salary</th>
                                        <th scope="col">Payslip</th>
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
                                                        Ravi Senjaliya<br/><p>Web Developer</p>
                                                    </span>
                                                    
                                                </Media>
                                            </Media>
                                        </th>
                                        <th scope="row">

                                            <span className="mb-0 text-sm">
                                                111213
                                            </span>

                                        </th>
                                        <td>test@gmail.com</td>
                                        <td> 12 - 11 - 2023 </td>
                                        <td><Input type='select'  className="leavestatus">
                                            <option>Web Developer</option>
                                            <option >Software Engineer</option>
                                            <option>Software Tester</option>
                                            <option>Frontend developer </option>
                                            <option>UI/UX Designer </option>

                                        </Input></td>
                                        <td>25000 INR</td>
                                        <td><Button>Generate Slip</Button></td>

                                        <td className="text-left">
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
                                                        Ravi Senjaliya<br/><p>Web Developer</p>
                                                    </span>
                                                    
                                                </Media>
                                            </Media>
                                        </th>
                                        <th scope="row">

                                            <span className="mb-0 text-sm">
                                                111213
                                            </span>

                                        </th>
                                        <td>test@gmail.com</td>
                                        <td> 12 - 11 - 2023 </td>
                                        <td><Input type='select'  className="leavestatus">
                                            <option>Web Developer</option>
                                            <option >Software Engineer</option>
                                            <option>Software Tester</option>
                                            <option>Frontend developer </option>
                                            <option>UI/UX Designer </option>

                                        </Input></td>
                                        <td>25000 INR</td>
                                        <td><Button>Generate Slip</Button></td>

                                        <td className="text-left">
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
                                                        Ravi Senjaliya<br/><p>Web Developer</p>
                                                    </span>
                                                    
                                                </Media>
                                            </Media>
                                        </th>
                                        <th scope="row">

                                            <span className="mb-0 text-sm">
                                                111213
                                            </span>

                                        </th>
                                        <td>test@gmail.com</td>
                                        <td> 12 - 11 - 2023 </td>
                                        <td><Input type='select'  className="leavestatus">
                                            <option>Web Developer</option>
                                            <option >Software Engineer</option>
                                            <option>Software Tester</option>
                                            <option>Frontend developer </option>
                                            <option>UI/UX Designer </option>

                                        </Input></td>
                                        <td>25000 INR</td>
                                        <td><Button>Generate Slip</Button></td>

                                        <td className="text-left">
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
                                                        Ravi Senjaliya<br/><p>Web Developer</p>
                                                    </span>
                                                    
                                                </Media>
                                            </Media>
                                        </th>
                                        <th scope="row">

                                            <span className="mb-0 text-sm">
                                                111213
                                            </span>

                                        </th>
                                        <td>test@gmail.com</td>
                                        <td> 12 - 11 - 2023 </td>
                                        <td><Input type='select'  className="leavestatus">
                                            <option>Web Developer</option>
                                            <option >Software Engineer</option>
                                            <option>Software Tester</option>
                                            <option>Frontend developer </option>
                                            <option>UI/UX Designer </option>

                                        </Input></td>
                                        <td>25000 INR</td>
                                        <td><Button>Generate Slip</Button></td>

                                        <td className="text-left">
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

            </Container>


            {/* add leave */}
            <Modal isOpen={modal} toggle={toggle} size='lg'>
                <ModalHeader
                    toggle={toggle}>Add Leave</ModalHeader>
                <ModalBody>

                    <div className="pl-lg-12">

                        <Row>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                        Select Staff *
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        placeholder="leavetype"
                                        type="select">
                                        <option>ravi</option>
                                    
                                    <option>bhargav</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                       Net Salary
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>
                                    <h3 className='text-red'>Earning</h3>
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                        Basic
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>
                                    <h3 className='text-red'>Deducations</h3>
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                        TDS
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                        DA(40%)
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                        ESI
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                     HRA(15%)
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                        PF
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                       Conveyence
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                        Leave
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                       Allowance
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                     Prof.Tex
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                        Medical Allowance
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                        LAbor Welfare
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                        OThers
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>
                            <Col lg="6">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                        Others
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        
                                        type="text"/>
                                      
                                </FormGroup>
                            </Col>

                            
                        </Row>
                        <ModalFooter>
                            <FormGroup>
                                <Button color="primary" onClick={toggle}>Submit</Button>
                            </FormGroup>
                        </ModalFooter>
                    </div>
                </ModalBody>
            </Modal>
        </>
  )
}

export default EmployeeSalary;