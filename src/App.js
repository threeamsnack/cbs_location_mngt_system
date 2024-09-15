import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "./App.css";
import RequestCard from "./components/RequestCard";
import TicCard from "./components/TicCard";
import SocCard from "./components/SocCard";
import BookingCalendar from "./components/Calendar";

export default function App() {
  return (
    <>
      <div className="nav-bar">
        <img
          src="/logo-transparent.png"
          className="college-logo"
          alt="sscbs-logo"
        ></img>
        <h1 className="title">College Location Management System</h1>
        <img className="user-img" src="/yuva.png"></img>
      </div>

      <div className="section-parent">
        <div className="section-left">
          <div className="nav-cont">
            <div className="nav-opt-active">Raise Request</div>
            <div className="nav-opt">Track Request</div>
          </div>

          <div>
            <RequestCard />
            <RequestCard />
            <RequestCard />
            <RequestCard />
          </div>
        </div>

        <div className="section-right">
          <TicCard />
          <SocCard />
          <BookingCalendar />
        </div>
      </div>
    </>
  );
}
