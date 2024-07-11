// import React from "react";
// import { Modal } from "antd"; // Assuming you're using Ant Design for modal

// const RoomCard = ({ room }) => {
//   const [visible, setVisible] = React.useState(false);

//   const showModal = () => {
//     setVisible(true);
//   };

//   const handleCancel = () => {
//     setVisible(false);
//   };

//   return (
//     <>
//       <div className="room-card" onClick={showModal}>
//         <h3>{room.name}</h3>
//         console.log("Room Card")
//         {/* Add other room details here */}
//       </div>
//       <Modal
//         title={`Room ${room.name} Details`}
//         visible={visible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <p>Tenant details:</p>
//         {/* Add tenant details here */}
//       </Modal>
//     </>
//   );
// };

// export default RoomCard;
import React from "react";
import { Card } from "antd"; // Assuming you're using Ant Design for card layout

const RoomCard = ({ room, onClick }) => {
  return (
    <Card
      hoverable
      onClick={onClick}
      style={{ cursor: "pointer" }}
      cover={<img alt="room" src={room.image} />} // Assuming room has an image property
    >
      <Card.Meta title={room.name} description={`Type: ${room.type}`} />
    </Card>
  );
};

export default RoomCard;
