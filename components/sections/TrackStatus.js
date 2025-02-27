import React from "react";
import { FaCheck } from "react-icons/fa"; 

const TrackStatus = () => {
  const styles = {
    hhGrayBox: {
      marginBottom: "20px",
      padding: "35px",
      marginTop: "20px",
    },
    pt45: {
      paddingTop: "45px",
    },
    orderTracking: {
      textAlign: "center",
      width: "15.15%",
      position: "relative",
      display: "block",
    },
    isComplete: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      borderRadius: "50%",
      height: "30px",
      width: "30px",
      border: "0px solid #AFAFAF",
      backgroundColor: "#f7be16",
      margin: "0 auto",
      transition: "background 0.25s linear",
      WebkitTransition: "background 0.25s linear",
      zIndex: 2,
    },
    completed: {
      borderColor: "#27aa80",
      borderWidth: "0px",
      backgroundColor: "#27aa80",
    },
    orderTrackingP: {
      color: "#A4A4A4",
      fontSize: "16px",
      marginTop: "8px",
      marginBottom: "0",
      lineHeight: "20px",
    },
    orderTrackingSpan: {
      fontSize: "14px",
    },
    completedP: {
      color: "#000",
    },
    orderTrackingAfter: {
      content: '""',
      display: "block",
      height: "3px",
      width: "calc(100% - 40px)",
      backgroundColor: "#4d17b",
      top: "13px",
      position: "absolute",
      left: "calc(50% + 20px)",
      zIndex: 0,
    },
    firstChildAfter: {
      display: "none",
    },
    completedAfter: {
      backgroundColor: "#27aa80",
    },
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-lg-12 col-md-12"
          style={{ ...styles.hhGrayBox, ...styles.pt45, paddingBottom: "20px" }}
        >
          <div className="row justify-content-between">
            <div
              className="order-tracking completed"
              style={styles.orderTracking}
            >
              <span
                className="is-complete"
                style={{ ...styles.isComplete, ...styles.completed }}
              >
                <FaCheck style={{ color: "#fff", fontSize: "14px" }} />{" "}
                {/* Check icon */}
              </span>
              <p style={{ ...styles.orderTrackingP, ...styles.completedP }}>
                Review
                <br />
                <span style={styles.orderTrackingSpan}>
                  {" "}
                  Quote is being <br />
                  reviewed (1-15 hours)
                </span>
              </p>
              <div
                style={{
                  ...styles.orderTrackingAfter,
                  ...styles.completedAfter,
                }}
              ></div>
            </div>

            <div
              className="order-tracking completed"
              style={styles.orderTracking}
            >
              <span
                className="is-complete"
                style={{ ...styles.isComplete, ...styles.completed }}
              >
                <FaCheck style={{ color: "#fff", fontSize: "14px" }} />{" "}
              </span>
              <p style={{ ...styles.orderTrackingP, ...styles.completedP }}>
                Approved
                <br />
                <span style={styles.orderTrackingSpan}>
                  Quote approved, <br />
                  payment processed
                </span>
              </p>
              <div
                style={{
                  ...styles.orderTrackingAfter,
                  ...styles.completedAfter,
                }}
              ></div>
            </div>
            <div
              className="order-tracking completed"
              style={styles.orderTracking}
            >
              <span
                className="is-complete"
                style={{ ...styles.isComplete, ...styles.completed }}
              >
                <FaCheck style={{ color: "#fff", fontSize: "14px" }} />{" "}
              </span>
              <p style={{ ...styles.orderTrackingP, ...styles.completedP }}>
                Pick Up
                <br />
                <span style={styles.orderTrackingSpan}>
                  Package picked up,
                  <br /> en route to aircraft.
                </span>
              </p>
              <div
                style={{
                  ...styles.orderTrackingAfter,
                  ...styles.completedAfter,
                }}
              ></div>
            </div>
            <div
              className="order-tracking completed"
              style={styles.orderTracking}
            >
              <span
                className="is-complete"
                style={{ ...styles.isComplete, ...styles.completed }}
              >
                <FaCheck style={{ color: "#fff", fontSize: "14px" }} />{" "}
              </span>
              <p style={{ ...styles.orderTrackingP, ...styles.completedP }}>
                Transit
                <br />
                <span style={styles.orderTrackingSpan}>
                  Package in aircraft <br />
                  transit
                </span>
              </p>
              <div
                style={{
                  ...styles.orderTrackingAfter,
                  ...styles.completedAfter,
                }}
              ></div>
            </div>
            <div
              className="order-tracking completed"
              style={styles.orderTracking}
            >
              <span
                className="is-complete"
                style={{ ...styles.isComplete, ...styles.completed }}
              >
                <FaCheck style={{ color: "#fff", fontSize: "14px" }} />{" "}
              </span>
              <p style={{ ...styles.orderTrackingP, ...styles.completedP }}>
                On Its Way
                <br />
                <span style={styles.orderTrackingSpan}>
                  Package arrived in
                  <br />
                  the destination city.
                </span>
              </p>
              <div
                style={{
                  ...styles.orderTrackingAfter,
                  ...styles.completedAfter,
                }}
              ></div>
            </div>
            <div className="order-tracking" style={styles.orderTracking}>
              <span className="is-complete" style={styles.isComplete}></span>
              <p style={styles.orderTrackingP}>
                Delivered
                <br />
                <span style={styles.orderTrackingSpan}>Package delivered</span>
              </p>
              <div
                style={{
                  ...styles.orderTrackingAfter,
                  backgroundColor: "#f7be16",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackStatus;
