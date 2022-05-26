import React from "react";
import '../components/style.css'
import { Speedometer2 } from "react-bootstrap-icons";
import { CameraVideo } from "react-bootstrap-icons";
import { Receipt } from "react-bootstrap-icons";
import { Bag } from "react-bootstrap-icons";
import { Activity } from "react-bootstrap-icons";

const Widget = ({ box }) => {
  let details;

  switch (box) {
    case "dashboard":
      details = {
        icon: <Speedometer2 />,
        title: "Dashboard",
      };
      break;

    case "videos":
      details = {
        icon: <CameraVideo />,
        title: "Videos",
      };
      break;

    case "orders":
      details = {
        icon: <Receipt />,
        title: "Orders",
      };
      break;

    case "purchases":
      details = {
        icon: <Bag />,
        title: "Purchases",
      };
      break;

    case "trends":
      details = {
        icon: <Activity />,
        title: "Trends",
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget-container">
      <p>{details.icon}</p>
      <p>{details.title}</p>
    </div>
  );
};

export default Widget;
