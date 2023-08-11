import {

  Card,
   CardBody,


  Container,
  Row,
  Col,
  CardHeader,

} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { Link } from "react-router-dom";



const Profile = () => {
 
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>




          <Col xl="12">

            <Col className="order-xl-2 mb-5 mb-xl-0" xl="12">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../../assets/img/theme/team-4-800x800.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>

                <CardBody className="pt-0 pt-md-6">
                  <div className="text-center pt-md-6">
                    <h3>
                      Jessica Jones
                    </h3>
                    <div className="h5 font-weight-300">
                      Bucharest, Romania
                    </div>
                    <Col>
                      <ul class="personal-info">
                        <li>
                          <div class="title">Phone :</div>
                          <div class="text">9876543210</div>
                        </li>
                        <hr className="my-1" />
                        <li>
                          <div class="title">Email :</div>
                          <div class="text">johndoe@example.com</div>
                        </li>
                        <hr className="my-1" />
                        <li>
                          <div class="title">Birthday :</div>
                          <div class="text">24th July</div>
                        </li>
                        <hr className="my-1" />
                        <li>
                          <div class="title">Address :</div>
                          <div class="text">1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
                        </li>
                        <hr className="my-1" />
                        <li>

                          <div class="title">Gender :</div>

                          <div class="text">Male</div>
                        </li>
                        <hr className="my-1" />
                        <li>
                          <div class="title">Reports to :</div>
                          <div class="text">

                            <Link to="profile.html">
                              Jeffery Lalor
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </Col>

                  </div>
                </CardBody>
              </Card>
            </Col>






          </Col>






        </Row>

        <Row className="my-4">
          <Col xl="6">
            <Card className="card-profile shadow">
              <Row className="justify-content-left">
                <Col className="order-lg-12" lg="12">
                <CardHeader className="text-center">Family Details</CardHeader>
                  <ul class="personal-info">
                    <li>
                      <div class="title">Phone :</div>
                      <div class="text">9876543210</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Email :</div>
                      <div class="text">johndoe@example.com</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Birthday :</div>
                      <div class="text">24th July</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Address :</div>
                      <div class="text">1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
                    </li>
                    <hr className="my-1" />
                    <li>

                      <div class="title">Gender :</div>

                      <div class="text">Male</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Reports to :</div>
                      <div class="text">

                        <Link to="profile.html">
                          Jeffery Lalor
                        </Link>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xl="6">
            <Card className="card-profile shadow">
              <Row className="justify-content-left">
                
                <Col className="order-lg-12" lg="12">
                <CardHeader className="text-center">This is Header</CardHeader>
                  <ul class="personal-info">
                    <li>
                      <div class="title">Phone :</div>
                      <div class="text">9876543210</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Email :</div>
                      <div class="text">johndoe@example.com</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Birthday :</div>
                      <div class="text">24th July</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Address :</div>
                      <div class="text">1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
                    </li>
                    <hr className="my-1" />
                    <li>

                      <div class="title">Gender :</div>

                      <div class="text">Male</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Reports to :</div>
                      <div class="text">

                        <Link to="profile.html">
                          Jeffery Lalor
                        </Link>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>


        <Row className="my-4">
          <Col xl="6">
            <Card className="card-profile shadow">
              <Row className="justify-content-left">
                <Col className="order-lg-12" lg="12">
                <CardHeader className="text-center">Bank Details</CardHeader>
                  <ul class="personal-info">
                    <li>
                      <div class="title">Phone :</div>
                      <div class="text">9876543210</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Email :</div>
                      <div class="text">johndoe@example.com</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Birthday :</div>
                      <div class="text">24th July</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Address :</div>
                      <div class="text">1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
                    </li>
                    <hr className="my-1" />
                    <li>

                      <div class="title">Gender :</div>

                      <div class="text">Male</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Reports to :</div>
                      <div class="text">

                        <Link to="profile.html">
                          Jeffery Lalor
                        </Link>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xl="6">
            <Card className="card-profile shadow">
              <Row className="justify-content-left">
                <Col className="order-lg-12" lg="12">
                <CardHeader className="text-center">Address Details</CardHeader>
                  <ul class="personal-info">
                    <li>
                      <div class="title">Phone :</div>
                      <div class="text">9876543210</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Email :</div>
                      <div class="text">johndoe@example.com</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Birthday :</div>
                      <div class="text">24th July</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Address :</div>
                      <div class="text">1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
                    </li>
                    <hr className="my-1" />
                    <li>

                      <div class="title">Gender :</div>

                      <div class="text">Male</div>
                    </li>
                    <hr className="my-1" />
                    <li>
                      <div class="title">Reports to :</div>
                      <div class="text">

                        <Link to="profile.html">
                          Jeffery Lalor
                        </Link>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;