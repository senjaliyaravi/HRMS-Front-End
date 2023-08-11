import Header from 'components/Headers/Header';
import React from 'react'
import { Row,Container,Card,CardHeader } from 'reactstrap';

const EmployeeDashboard = () => {
  return (
    <>
    <Header/>
    <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col align-items-center">
                    <h3 className="align-items-center">

                      Employee Deshboard Details will Add soon
                    </h3>
                  </div>
                </Row>
              </CardHeader>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default EmployeeDashboard;