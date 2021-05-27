import React from "react";
import { Accordion, Card } from "react-bootstrap";
import Otp from "./Otp";
import EditIcon from "@material-ui/icons/Edit";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import DatePickerTab from "./DatePickerTab";

export default function Verification() {
  return (
    <div>
      <div className="collapse-bg">
        <div className="collapse-cnt">
          <div className="row">
            <div className="col-lg-8">
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h2 className="mb-0 btn-in-blk">
                      <span className="clpsd-dis-blck rund-nmbr">1 </span>
                      Phone number Verification
                      <br></br>
                      <span className="mbl-nmbr-txt"> +9876543210</span>
                    </h2>

                    <button class="clpsd-btn-fl-rgt mbl-nmbr-edit-txt edit-btn">
                      Edit
                    </button>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="collapse-body-txt">
                      <h4>
                        We need your phone number so that we can update you
                        about your order.
                      </h4>
                      <h5>
                        Enter your 4 digit Code sent to the phone +91 -
                        9876543210{" "}
                        <span className="mbl-nmbr-edit-txt">( Edit )</span>
                      </h5>
                      <div className="otp-btn-dis-flx">
                        <Otp />
                        <button type="submit" className="otp-sub-btn">
                          Next
                        </button>
                      </div>

                      <h6>Resend Code in 25secs</h6>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <h2 className="mb-0 btn-in-blk">
                      <span className="clpsd-dis-blck rund-nmbr">2 </span>
                      Delivery Address
                      <br></br>
                      <span className="mbl-nmbr-txt"> Address</span>
                    </h2>

                    <button className="clpsd-btn-fl-rgt mbl-nmbr-edit-txt edit-btn">
                      Change
                    </button>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                    <Card.Body className="collapse-body-txt">
                      <div className="new-add-red-txt">
                        <h5>
                          <span>
                            <ControlPointIcon></ControlPointIcon>{" "}
                          </span>
                          Add New Delivery Address
                        </h5>
                      </div>
                      <div className="add-shdw-box">
                        <div className="mb-0">
                          <h5 className="btn-in-blk">Home</h5>
                          <EditIcon className="clpsd-btn-fl-rgt"></EditIcon>
                        </div>
                        <h4>Mrs. Leon</h4>
                        <h4>No. 10, Ground Floor, 2nd St...</h4>
                        <h4>Kodambakkam, Chennai, Tam..</h4>
                        <button type="submit" className="dlvr-btn">
                          Deliver Here
                        </button>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <h2 className="mb-0 btn-in-blk">
                      <span className="clpsd-dis-blck rund-nmbr">3 </span>
                      Delivery Date & Time
                    </h2>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="2" className="dptab">
                    <Card.Body className="collapse-body-txt">
                      <div className="date-pick-tab">
                        <DatePickerTab />
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    <h2 className="mb-0 btn-in-blk">
                      <span className="clpsd-dis-blck rund-nmbr">4 </span>
                      Payment
                    </h2>
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="3">
                    <Card.Body>This is second tab body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
