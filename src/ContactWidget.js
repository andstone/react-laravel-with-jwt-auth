"use strict";

import React, { Component } from "react";
import LeadForm from "./LeadForm";
import Modal from 'react-modal';

import {
  Button,
  Card,
  CardText,
  CardTitle,
  CardActions,
  CardMenu,
  IconButton
} from "react-mdl";


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


export default class ContactWidget extends Component {
  render() {
    return (
      <div>
        <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://ameritechfinancial.com/wp-content/uploads/2017/01/young-operator.jpg) center / cover"
            }}
          >
            Ameritech Financial
          </CardTitle>
          <CardText>
            Need help with your student loans? We can help!
          </CardText>
          <CardActions border>
            <Button colored>Schedule a Call</Button>
            <Button colored>Start Application</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="information" />
          </CardMenu>
        </Card>
        <LeadForm />
      </div>
    );
  }
}
