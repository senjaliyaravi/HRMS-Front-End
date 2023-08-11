import React from "react";
// reactstrap components
import { Button, Container, Row, Col,Input,FormGroup,ModalFooter,Modal,ModalHeader,ModalBody,Card,CardBody,Form } from "reactstrap";

const UserHeader = () => {
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello Jesse</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
              <Button
                color="info"
               
                onClick={toggle}
                
              >
                Edit profile
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

{/* Edit Profile */}
<Modal isOpen={modal} toggle={toggle} size='xl'>
        <ModalHeader
          toggle={toggle}><h2>Edit Profile Details</h2></ModalHeader>
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
  );
};

export default UserHeader;
