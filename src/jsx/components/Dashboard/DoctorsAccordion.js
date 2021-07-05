import React, { Fragment, useState} from "react";
import { Link } from 'react-router-dom';
import { Dropdown, Row, Col, Card, Accordion } from "react-bootstrap";
import PageTitle from "../../layouts/PageTitle";

//import Images:
import avatar from "../../../images/avatar/1.jpg";
import avatar1 from "../../../images/avatar/2.jpg";
import avatar2 from "../../../images/avatar/3.jpg";
import avatar3 from "../../../images/avatar/4.jpg";
import avatar4 from "../../../images/avatar/5.jpg";

const UiAccordion = () => {
   const [active, setActive] = useState(0);

   return (
      <Fragment>
         <Row>
            <Col xl="col-xl-12 col-12">
               {/* <Card>
                  <Card.Body> */}
               <Accordion
                  className="accordion doctor-list"
                  defaultActiveKey="1"
               >
                  <div className="accordion__item">
                     <Accordion.Toggle
                        as={Card.Text}
                        eventKey="1"
                        className={`accordion__header rounded-lg  ${active === 1 ? "collapsed" : ""
                           }`}
                        onClick={() => setActive(1)}
                     >
                        <span className="accordion__header-alphabet">A</span>
                        <span className="accordion__header-line flex-grow-1"></span>
                        <span className="accordion__header--text">5 Doctors</span>
                        <span className="accordion__header--indicator style_two"></span>
                        <span className="accordion__header--indicator style_two"></span>
                     </Accordion.Toggle>

                     <Accordion.Collapse eventKey="1">
                     <div className="widget-media best-doctor pt-4">
										<div className="timeline row">
											<div className="col-lg-6">
												<div className="timeline-panel bg-white p-4 mb-4">
													<div className="media mr-4">
														<img src={avatar} width={90} alt />
													</div>
													<div className="media-body">
														<h4 className="mb-2">Dr. Samantha Queque</h4>
														<p className="mb-2 text-primary">Gynecologist</p>
														<div className="star-review">
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-gray mr-1"></i>
															<i className="fa fa-star text-gray mr-1"></i>
															<span className="ml-3">451 reviews</span>
														</div>
													</div>
													<div className="social-media">
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-instagram btn-sm mr-1"></Link>
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-twitter btn-sm mr-1"></Link>
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-facebook btn-sm mr-1"></Link>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="timeline-panel active bg-white p-4  mb-4" >
													<div className="media mr-4">
														<img src={avatar1} width={90} alt />
													</div>
													<div className="media-body">
														<h4 className="mb-2">Dr. Abdul Aziz Lazis</h4>
														<p className="mb-2 text-primary">Physical Therapy</p>
														<div className="star-review">
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-gray mr-1"></i>
															<span className="ml-3">238 reviews</span>
														</div>
													</div>
													<div className="social-media">
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-instagram btn-sm mr-1"></Link>
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-twitter btn-sm mr-1"></Link>
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-facebook btn-sm mr-1"></Link>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="timeline-panel bg-white p-4 mb-4">
													<div className="media mr-4">
														<img src={avatar2} width={90} alt />
													</div>
													<div className="media-body">
														<h4 className="mb-2">Dr. Samuel Jr.</h4>
														<p className="mb-2 text-primary">Dentist</p>
														<div className="star-review">
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-gray mr-1"></i>
															<i className="fa fa-star text-gray mr-1"></i>
															<span className="ml-3">300 reviews</span>
														</div>
													</div>
													<div className="social-media">
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-instagram btn-sm mr-1"></Link>
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-twitter btn-sm mr-1"></Link>
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-facebook btn-sm mr-1"></Link>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="timeline-panel bg-white p-4 mb-4">
													<div className="media mr-4">
														<img src={avatar3} width={90} alt />
													</div>
													<div className="media-body">
														<h4 className="mb-2">Dr. Alex Siauw</h4>
														<p className="mb-2 text-primary">Physical Therapy</p>
														<div className="star-review">
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-gray mr-1"></i>
															<i className="fa fa-star text-gray mr-1"></i>
															<span className="ml-3">451 reviews</span>
														</div>
													</div>
													<div className="social-media">
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-instagram btn-sm mr-1"></Link>
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-twitter btn-sm mr-1"></Link>
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-facebook btn-sm mr-1"></Link>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="timeline-panel bg-white p-4 mb-4">
													<div className="media mr-4">
														<img src={avatar4} width={90} alt />
													</div>
													<div className="media-body">
														<h4 className="mb-2">Dr. Jennifer Ruby</h4>
														<p className="mb-2 text-primary">Nursingc</p>
														<div className="star-review">
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<i className="fa fa-star text-orange mr-1"></i>
															<span className="ml-3">700 reviews</span>
														</div>
													</div>
													<div className="social-media">
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-instagram btn-sm mr-1"></Link>
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-twitter btn-sm mr-1"></Link>
														<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-facebook btn-sm mr-1"></Link>
													</div>
												</div>
											</div>
										</div>
									</div>
                     </Accordion.Collapse>
                  </div>
                  <div className="accordion__item">
                     <Accordion.Toggle
                        as={Card.Text}
                        eventKey="2"
                        className={`accordion__header  ${active === 2 ? "collapsed" : ""
                           }`}
                        onClick={() => setActive(2)}
                     >
                        <span className="accordion__header-alphabet">B</span>
                        <span className="accordion__header-line flex-grow-1"></span>
                        <span className="accordion__header--text">3 Doctors</span>
                        <span className="accordion__header--indicator style_two"></span>
                     </Accordion.Toggle>

                     <Accordion.Collapse eventKey="2">
                     <div className="widget-media best-doctor pt-4">
									<div className="timeline row">
										<div className="col-lg-6">
											<div className="timeline-panel bg-white p-4 mb-4">
												<div className="media mr-4">
													<img src={avatar} width={90} alt />
												</div>
												<div className="media-body">
													<h4 className="mb-2">Dr. Samantha Queque</h4>
													<p className="mb-2 text-primary">Gynecologist</p>
													<div className="star-review">
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-gray mr-1"></i>
														<i className="fa fa-star text-gray mr-1"></i>
														<span className="ml-3">451 reviews</span>
													</div>
												</div>
												<div className="social-media">
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-instagram btn-sm mr-1"></Link>
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-twitter btn-sm mr-1"></Link>
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-facebook btn-sm mr-1"></Link>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="timeline-panel active bg-white p-4  mb-4" >
												<div className="media mr-4">
													<img src={avatar1} width={90} alt />
												</div>
												<div className="media-body">
													<h4 className="mb-2">Dr. Abdul Aziz Lazis</h4>
													<p className="mb-2 text-primary">Physical Therapy</p>
													<div className="star-review">
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-gray mr-1"></i>
														<span className="ml-3">238 reviews</span>
													</div>
												</div>
												<div className="social-media">
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-instagram btn-sm mr-1"></Link>
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-twitter btn-sm mr-1"></Link>
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-facebook btn-sm mr-1"></Link>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="timeline-panel bg-white p-4 mb-4">
												<div className="media mr-4">
													<img src={avatar2} width={90} alt />
												</div>
												<div className="media-body">
													<h4 className="mb-2">Dr. Samuel Jr.</h4>
													<p className="mb-2 text-primary">Dentist</p>
													<div className="star-review">
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-gray mr-1"></i>
														<i className="fa fa-star text-gray mr-1"></i>
														<span className="ml-3">300 reviews</span>
													</div>
												</div>
												<div className="social-media">
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-instagram btn-sm mr-1"></Link>
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-twitter btn-sm mr-1"></Link>
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-facebook btn-sm mr-1"></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
                     </Accordion.Collapse>
                  </div>
                  <div className="accordion__item">
                     <Accordion.Toggle
                        as={Card.Text}
                        eventKey="3"
                        className={`accordion__header  ${active === 3 ? "collapsed" : ""
                           }`}
                        onClick={() => setActive(3)}
                     >
                        <span className="accordion__header-alphabet">C</span>
                        <span className="accordion__header-line flex-grow-1"></span>
                        <span className="accordion__header--text">2 Doctors</span>
                        <span className="accordion__header--indicator style_two"></span>
                     </Accordion.Toggle>

                     <Accordion.Collapse eventKey="3">
                     <div className="widget-media best-doctor pt-4">
									<div className="timeline row">
										<div className="col-lg-6">
											<div className="timeline-panel active bg-white p-4  mb-4" >
												<div className="media mr-4">
													<img src={avatar1} width={90} alt />
												</div>
												<div className="media-body">
													<h4 className="mb-2">Dr. Abdul Aziz Lazis</h4>
													<p className="mb-2 text-primary">Physical Therapy</p>
													<div className="star-review">
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-gray mr-1"></i>
														<span className="ml-3">238 reviews</span>
													</div>
												</div>
												<div className="social-media">
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-instagram btn-sm mr-1"></Link>
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-twitter btn-sm mr-1"></Link>
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-facebook btn-sm mr-1"></Link>
												</div>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="timeline-panel bg-white p-4 mb-4">
												<div className="media mr-4">
													<img src={avatar2} width={90} alt />
												</div>
												<div className="media-body">
													<h4 className="mb-2">Dr. Samuel Jr.</h4>
													<p className="mb-2 text-primary">Dentist</p>
													<div className="star-review">
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-orange mr-1"></i>
														<i className="fa fa-star text-gray mr-1"></i>
														<i className="fa fa-star text-gray mr-1"></i>
														<span className="ml-3">300 reviews</span>
													</div>
												</div>
												<div className="social-media">
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-instagram btn-sm mr-1"></Link>
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-twitter btn-sm mr-1"></Link>
													<Link href="#" className="btn btn-outline-primary btn-rounded fa fa-facebook btn-sm mr-1"></Link>
												</div>
											</div>
										</div>
									</div>
								</div>
                     </Accordion.Collapse>
                  </div>
               </Accordion>
               {/* </Card.Body>
               </Card> */}
            </Col>
            {/* <!-- Column ends --> */}
         </Row>{" "}
      </Fragment>
   );
};

export default UiAccordion;
