import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../../../images/avatar/1.jpg";
import avatar1 from "../../../images/avatar/2.jpg";
import avatar2 from "../../../images/avatar/3.jpg";
import avatar3 from "../../../images/avatar/4.jpg";
import avatar4 from "../../../images/avatar/5.jpg";
import avatar5 from "../../../images/avatar/6.jpg";
import Timeline from "./Timeline";

const RecoveredChart = loadable(() =>
  pMinDelay(import("./charts/home/RecoveredChart"), 1000)
);

const VisitorChart = loadable(() =>
  pMinDelay(import("./charts/home/VisitorChart"), 1000)
);
const ChartCircle = loadable(() =>
  pMinDelay(import("./charts/home/ChartCircle"), 1000)
);
const RevenueChart = loadable(() =>
  pMinDelay(import("./charts/home/RevenueChart"), 1000)
);

class Home extends Component {
  render() {
    return (
      <>
        <div className="form-head d-flex mb-3 mb-md-5 align-items-start">
          <div className="mr-auto d-none d-lg-block">
            <h3 className="text-primary font-w600">Welcome to Mediqu!</h3>
            <p className="mb-0">Hospital Admin Dashboard Template</p>
          </div>

          <div className="input-group search-area ml-auto d-inline-flex">
            <input type="text" className="form-control" placeholder="Search here" />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="flaticon-381-search-2"></i>
              </span>
            </div>
          </div>
          <Link to={"#"} className="btn btn-primary ml-3">
            <i className="flaticon-381-settings-2 mr-0"></i>
          </Link>
        </div>
        <div className="row">
          <div className="col-xl-6 col-xxl-12">
            <div className="row">
              {/* <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12"> */}
              <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h4 className="card-title">Recovered</h4>
                    <Dropdown className="ml-auto no-carat">
                      <Dropdown.Toggle
                        as="div"
                        variant=""
                        id="dropdown-basic"
                        className="p-0 i-false btn-link"
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-menu-right">
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pb-0">
                    <div className="recovered-chart-deta d-flex">
                      <div className="col">
                        <span className="bg-danger"></span>
                        <div>
                          <p>New</p>
                          <h5>451</h5>
                        </div>
                      </div>
                      <div className="col">
                        <span className="bg-success"></span>
                        <div>
                          <p>Recovered</p>
                          <h5>623</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0 px-3 pb-3">
                    <div id="chartTimeline">
                      <RecoveredChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h4 className="card-title">Visitors</h4>
                    <Dropdown className="ml-auto no-carat">
                      <Dropdown.Toggle
                        variant=""
                        as="div"
                        id="dropdown-basic"
                        className="p-0 i-false btn-link"
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-menu-right">
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body px-3 pt-2">
                    <div id="chartStrock">
                      <VisitorChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h4 className="card-title">Patients (%)</h4>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="dark"
                        id="dropdown-basic"
                        className="light form-control style-1 default-select"
                      >
                        Weekly
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-menu-right">
                        <Dropdown.Item href="#">Daily</Dropdown.Item>
                        <Dropdown.Item href="#">Weekly</Dropdown.Item>
                        <Dropdown.Item href="#">Monthly</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pt-2">
                    <h4 className="text-dark font-w400">Total Patient</h4>
                    <h3 className="text-primary font-w600">562,084 People</h3>
                    <div className="row mx-0 align-items-center">
                      <div className="col-sm-8 col-md-7  px-0">
                        <div id="chartCircle">
                          <ChartCircle />
                        </div>
                      </div>
                      <div className="col-sm-4 col-md-5 px-0">
                        <div className="patients-chart-deta">
                          <div className="col px-0">
                            <span className="bg-danger"></span>
                            <div>
                              <p>New</p>
                              <h3>64%</h3>
                            </div>
                          </div>
                          <div className="col px-0">
                            <span className="bg-success"></span>
                            <div>
                              <p>Recovered</p>
                              <h3>73%</h3>
                            </div>
                          </div>
                          <div className="col px-0">
                            <span className="bg-warning"></span>
                            <div>
                              <p>In Treatment</p>
                              <h3>48%</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h4 className="card-title">Recent Patient Activity</h4>
                    <Dropdown className="ml-auto no-carat">
                      <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic"
                        className="p-0 i-false btn-link"
                      >
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle
                              fill="#000000"
                              cx="5"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="12"
                              cy="12"
                              r="2"
                            ></circle>
                            <circle
                              fill="#000000"
                              cx="19"
                              cy="12"
                              r="2"
                            ></circle>
                          </g>
                        </svg>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-menu-right">
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <Dropdown.Item href="#">Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive ">
                      <table className="table patient-activity">
                        <tbody>
                          <tr>
                            <td>
                              <div className="media align-items-center">
                                <img
                                  className="mr-3 img-fluid rounded"
                                  src={avatar}
                                  width={78}
                                  alt
                                />
                                <div className="media-body">
                                  <h5 className="mt-0 mb-1">Media heading</h5>
                                  <p className="mb-0">41 Years Old</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0">Disease</p>
                              <h5 className="my-0 text-primary">
                                Allergies & Asthma
                              </h5>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div>
                                  <p className="mb-1">Status</p>
                                  <h5 className="mt-0 mb-1 text-success">
                                    Recovered
                                  </h5>
                                  <small>22/03/2020 12:34 AM</small>
                                </div>
                                <Dropdown className="ml-auto no-carat">
                                  <Dropdown.Toggle
                                    variant=""
                                    as="div"
                                    id="dropdown-basic"
                                    className="p-0 i-false btn-link"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsxlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                      >
                                        <rect
                                          x="0"
                                          y="0"
                                          width="24"
                                          height="24"
                                        ></rect>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="5"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="19"
                                          r="2"
                                        ></circle>
                                      </g>
                                    </svg>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media align-items-center">
                                <img
                                  className="mr-3 img-fluid rounded"
                                  src={avatar1}
                                  width={78}
                                  alt
                                />
                                <div className="media-body">
                                  <h5 className="mt-0 mb-1">Angela Nurhayati</h5>
                                  <p className="mb-0">21 Years Old</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0">Disease</p>
                              <h5 className="my-0 text-primary">Sleep Problem</h5>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div>
                                  <p className="mb-1">Status</p>
                                  <h5 className="mt-0 mb-1 text-danger">
                                    New Patient
                                  </h5>
                                  <small>22/03/2020 12:34 AM</small>
                                </div>
                                <Dropdown className="ml-auto no-carat">
                                  <Dropdown.Toggle
                                    variant=""
                                    id="dropdown-basic"
                                    className="p-0 i-false btn-link"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsxlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                      >
                                        <rect
                                          x="0"
                                          y="0"
                                          width="24"
                                          height="24"
                                        ></rect>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="5"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="19"
                                          r="2"
                                        ></circle>
                                      </g>
                                    </svg>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr className="active">
                            <td>
                              <div className="media align-items-center">
                                <img
                                  className="mr-3 img-fluid rounded"
                                  src={avatar2}
                                  width={78}
                                  alt
                                />
                                <div className="media-body">
                                  <h5 className="mt-0 mb-1">James Robinson</h5>
                                  <p className="mb-0">25 Years Old</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0">Disease</p>
                              <h5 className="my-0 text-primary">Dental Care</h5>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div>
                                  <p className="mb-1">Status</p>
                                  <h5 className="mt-0 mb-1 text-warning">
                                    In Treatment
                                  </h5>
                                  <small>22/03/2020 12:34 AM</small>
                                </div>
                                <Dropdown className="ml-auto no-carat">
                                  <Dropdown.Toggle
                                    variant=""
                                    id="dropdown-basic"
                                    className="p-0 i-false btn-link"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsxlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                      >
                                        <rect
                                          x="0"
                                          y="0"
                                          width="24"
                                          height="24"
                                        ></rect>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="5"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="19"
                                          r="2"
                                        ></circle>
                                      </g>
                                    </svg>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media align-items-center">
                                <img
                                  className="mr-3 img-fluid rounded"
                                  src={avatar3}
                                  width={78}
                                  alt
                                />
                                <div className="media-body">
                                  <h5 className="mt-0 mb-1">Thomas Jaja</h5>
                                  <p className="mb-0">7 Years Old</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0">Disease</p>
                              <h5 className="my-0 text-primary">Diabetes</h5>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div>
                                  <p className="mb-1">Status</p>
                                  <h5 className="mt-0 mb-1 text-danger">
                                    New Patient
                                  </h5>
                                  <small>22/03/2020 12:34 AM</small>
                                </div>
                                <Dropdown className="ml-auto no-carat">
                                  <Dropdown.Toggle
                                    variant=""
                                    id="dropdown-basic"
                                    className="p-0 i-false btn-link"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsxlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                      >
                                        <rect
                                          x="0"
                                          y="0"
                                          width="24"
                                          height="24"
                                        ></rect>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="5"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="19"
                                          r="2"
                                        ></circle>
                                      </g>
                                    </svg>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media align-items-center">
                                <img
                                  className="mr-3 img-fluid rounded"
                                  src={avatar4}
                                  width={78}
                                  alt
                                />
                                <div className="media-body">
                                  <h5 className="mt-0 mb-1">Cindy Brownleee</h5>
                                  <p className="mb-0">71 Years Old</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0">Disease</p>
                              <h5 className="my-0 text-primary">
                                Covid-19 Suspect
                              </h5>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div>
                                  <p className="mb-1">Status</p>
                                  <h5 className="mt-0 mb-1 text-success">
                                    Recovered
                                  </h5>
                                  <small>22/03/2020 12:34 AM</small>
                                </div>
                                <Dropdown className="ml-auto no-carat">
                                  <Dropdown.Toggle
                                    variant=""
                                    id="dropdown-basic"
                                    className="p-0 i-false btn-link"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsxlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                      >
                                        <rect
                                          x="0"
                                          y="0"
                                          width="24"
                                          height="24"
                                        ></rect>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="5"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="19"
                                          r="2"
                                        ></circle>
                                      </g>
                                    </svg>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media align-items-center">
                                <img
                                  className="mr-3 img-fluid rounded"
                                  src={avatar5}
                                  width={78}
                                  alt
                                />
                                <div className="media-body">
                                  <h5 className="mt-0 mb-1">Oconner Jr.</h5>
                                  <p className="mb-0">17 Years Old</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0">Disease</p>
                              <h5 className="my-0 text-primary">Dental Care</h5>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div>
                                  <p className="mb-1">Status</p>
                                  <h5 className="mt-0 mb-1 text-warning">
                                    In Treatment
                                  </h5>
                                  <small>22/03/2020 12:34 AM</small>
                                </div>
                                <Dropdown className="ml-auto no-carat">
                                  <Dropdown.Toggle
                                    variant=""
                                    id="dropdown-basic"
                                    className="p-0 i-false btn-link"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsxlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                      >
                                        <rect
                                          x="0"
                                          y="0"
                                          width="24"
                                          height="24"
                                        ></rect>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="5"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="12"
                                          r="2"
                                        ></circle>
                                        <circle
                                          fill="#000000"
                                          cx="12"
                                          cy="19"
                                          r="2"
                                        ></circle>
                                      </g>
                                    </svg>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item href="#">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#">
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer border-0 pt-0 text-center">
                    <Link to={"#"} className="btn-link">
                      See More <span>&#187;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-xxl-12">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-sm-6">
                <div className="widget-stat card bg-danger">
                  <div className="card-body  p-4">
                    <div className="media">
                      <span className="mr-3">
                        <i className="flaticon-381-calendar-1"></i>
                      </span>
                      <div className="media-body text-white text-right">
                        <p className="mb-1">Appointment</p>
                        <h3 className="text-white">76</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-sm-6">
                <div className="widget-stat card bg-success">
                  <div className="card-body p-4">
                    <div className="media">
                      <span className="mr-3">
                        <i className="flaticon-381-diamond"></i>
                      </span>
                      <div className="media-body text-white text-right">
                        <p className="mb-1">Hospital Earning</p>
                        <h3 className="text-white">$56K</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-sm-6">
                <div className="widget-stat card bg-info">
                  <div className="card-body p-4">
                    <div className="media">
                      <span className="mr-3">
                        <i className="flaticon-381-heart"></i>
                      </span>
                      <div className="media-body text-white text-right">
                        <p className="mb-1">Total Patient</p>
                        <h3 className="text-white">783K</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-sm-6">
                <div className="widget-stat card bg-primary">
                  <div className="card-body p-4">
                    <div className="media">
                      <span className="mr-3">
                        <i className="flaticon-381-user-7"></i>
                      </span>
                      <div className="media-body text-white text-right">
                        <p className="mb-1">Doctor</p>
                        <h3 className="text-white">$76</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <h4 className="card-title">Revenue</h4>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="dark"
                        id="dropdown-basic"
                        className="light"
                      >
                        2020
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-menu-right">
                        <Dropdown.Item href="#">2020</Dropdown.Item>
                        <Dropdown.Item href="#">2019</Dropdown.Item>
                        <Dropdown.Item href="#">2018</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="card-body pt-2">
                    <h3 className="text-primary font-w600">
                      $41,512k <small className="text-dark ml-2">$25,612k</small>
                    </h3>
                    <div id="chartBar">
                      <RevenueChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <Timeline />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
