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


const LeaveEmployee = () => {

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
                                        <h3 className="mb-0">Employee Leave List</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button color="danger"
                                            onClick={toggle}>Add Leave</Button>

                                    </div>
                                </Row>
                            </CardHeader>



                            

                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col" >Leave Type</th>
                                        <th scope="col">From</th>
                                        <th scope="col">To</th>
                                        <th scope="col">No of Days</th>
                                        <th scope="col">Reason</th>
                                        <th scope="col">Status</th>
                                        <th scope='col'> Approved By</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <th scope="row">

                                            <span className="mb-0 text-sm">
                                                Casual Leave
                                            </span>

                                        </th>
                                        <td>10 11 -2023</td>
                                        <td> 12 - 11 - 2023 </td>
                                        <td>2 Days</td>
                                        <td>Going To Hospital</td>
                                        <td>Approved</td>
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

                                            <span className="mb-0 text-sm">
                                                Casual Leave
                                            </span>

                                        </th>
                                        <td>10 11 -2023</td>
                                        <td> 12 - 11 - 2023 </td>
                                        <td>2 Days</td>
                                        <td>Going To Hospital</td>
                                        <td>Approved</td>
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

                                            <span className="mb-0 text-sm">
                                                Casual Leave
                                            </span>

                                        </th>
                                        <td>10 11 -2023</td>
                                        <td> 12 - 11 - 2023 </td>
                                        <td>2 Days</td>
                                        <td>Going To Hospital</td>
                                        <td>Approved</td>
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
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}>Add Leave</ModalHeader>
                <ModalBody>

                    <div className="pl-lg-12">

                        <Row>
                            <Col lg="12">

                                <FormGroup>

                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leavetype"
                                    >
                                        Leave Type *
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leavetype"
                                        placeholder="leavetype"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg="12">
                                <FormGroup>
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-fromdate"
                                    >
                                        From Date *
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-fromdate"
                                        placeholder="fromdate"
                                        type="date"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg="12">
                                <FormGroup>
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-todate"
                                    >
                                        To Date *
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-todate"
                                        placeholder="todate"
                                        type="date"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg="12">
                                <FormGroup>
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-numberofdays"
                                    >
                                        Number Of days *
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-numberofdays"
                                        placeholder="2"
                                        type="numer"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg="12">
                                <FormGroup>
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-rmdays"
                                    >
                                        Remaining Leaves *
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-rmdays"
                                        placeholder="12"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>

                            <Col lg="12">
                                <FormGroup>
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-leaverreasone"
                                    >
                                        Leave Reason *
                                    </label>
                                    <Input
                                        className="form-control-alternative"
                                        id="input-leaverreasone"
                                        placeholder="Leave for"
                                        type="textarea"
                                    />
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

export default LeaveEmployee; 