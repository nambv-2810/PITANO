import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardTitle
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Dashboard = (props) => {
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="bg-gradient-dark home-conent" fluid>
         <div className="home">
            <h1>PITANO</h1>
            <h6>
              Auto-staking protocol with investment insurance has the highest APY
            </h6>
            <span>
              * Highest Fixed APY – 281,563.89%%<br></br>
              * The first platform to feature investment insurance<br></br>
              * Pays out every 10 minutes/144 times a day<br></br>

            </span>
          </div>
        <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                        Market Cap
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                         $0.00
                        </span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                        PITANO Price
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                       $0.0000
                        </span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
               <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                       Next Rebase
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                      00:00:00
                        </span>
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
      </Container>
    </>
  );
};

Dashboard.layout = Admin;

export default Dashboard;
