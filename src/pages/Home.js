import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../components/style.css'
import Widget from "../components/Widget.js";
import Navbar from "../components/Navbar.js";
import Chart from "../components/Chart.js";
import OrderCard from "../components/orderCard.js";
import Bchart from "../components/Bchart.js";
import Map from "../components/Map.js";

const Home = () => {

  return (
    <div className="home">
      <div>
        <div>
          <Navbar />
        </div>

        <div className="home-layout">

          <div className="first-col">

            <div>
              <div className="widget">
                <Widget box="dashboard" />
                <Widget box="videos" />
                <Widget box="orders" />
                <Widget box="purchases" />
                <Widget box="trends" />
              </div>
              <Chart />
              <div className="widget">
                <OrderCard card="google" />
                <OrderCard card="scrum" />
                <OrderCard card="cabin" />
                <OrderCard card="scrum" />
              </div>
            </div>

          </div>

          <div className="second-col">
            <div>
              <div>
                <Bchart />
              </div>
              <div>
                <Map />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
