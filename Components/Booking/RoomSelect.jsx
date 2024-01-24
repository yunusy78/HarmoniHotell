import React, { useState, useEffect } from 'react';
import { getRooms } from '../../pages/api/room';

const RoomSelect = () => {
    const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRooms();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    }

    fetchData();
  }, []);

  const handleRoomSelect = (event) => {
    setSelectedRoom(event.target.value);
  };

  return (
    <div className="col-md-6">
      <div className="form-floating">
        <select
          className="form-control"
          id="roomId1"
          placeholder="Velg Rom"
          onChange={handleRoomSelect}
          value={selectedRoom}
        >
          <option value="">Velg et rom</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.title}
            </option>
          ))}
        </select>
        <label htmlFor="roomId">Velg Rom</label>

      </div>
    </div>
  );
};
 
export default RoomSelect
