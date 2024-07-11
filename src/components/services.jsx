// import React from "react";

// export const Services = (props) => {
//   return (
//     <div id="services" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <h2>Manage Hostel</h2>
//           <p>
//             Our Hostel Management Software is designed to streamline all aspects
//             of managing your hostel. With integrated services for Room
//             Management, Tenant Management, and Rent Management, you can
//             efficiently handle room assignments, tenant records, and rent
//             payments.
//           </p>
//         </div>
//         <div className="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-4">
//                   {" "}
//                   <i className={d.icon}></i>
//                   <div className="service-desc">
//                     <h3>{d.name}</h3>
//                     <p>{d.text}</p>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import RoomManagement from "./RoomManagement";
import TenantManagement from "./TenantManagement";
import RentManagement from "./RentManagement";

export const Services = (props) => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleIconClick = (index) => {
    // Logic to set active component based on index or icon clicked
    switch (index) {
      case 0:
        setActiveComponent("RoomManagement");
        break;
      case 1:
        setActiveComponent("TenantManagement");
        break;
      case 2:
        setActiveComponent("RentManagement");
        break;
      default:
        setActiveComponent(null);
        break;
    }
  };
  const roomsData = [
    { id: 1, name: "Room 101", type: "2 sharings", tenants: [] },
    { id: 2, name: "Room 102", type: "3 sharings", tenants: [] },
    // Add more rooms as needed
  ];
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Manage Hostel</h2>
          <p>
            Our Hostel Management Software is designed to streamline all aspects
            of managing your hostel. With integrated services for Room
            Management, Tenant Management, and Rent Management, you can
            efficiently handle room assignments, tenant records, and rent
            payments.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                  onClick={() => handleIconClick(i)}
                >
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
      {activeComponent === "RoomManagement" && (
        <RoomManagement rooms={roomsData} />
      )}
      {activeComponent === "TenantManagement" && <TenantManagement />}
      {activeComponent === "RentManagement" && <RentManagement />}
    </div>
  );
};
