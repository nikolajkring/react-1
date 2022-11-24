import './App.css';
import { useState, useEffect } from "react";
// import { getSuggestedQuery } from '@testing-library/react';
import { db } from "./firebase-config";
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { async } from '@firebase/util';
import furniture from "./img/furniture.jpg";
import light from "./img/light.jpg";
import projector from "./img/projector.jpg";
import size from "./img/size.jpg";





export function App() {
  const [rooms, setRooms] = useState([]);
  const roomsColRef = collection(db, "lokaler")


  const deleteBooking = async (id) => {
    const roomDoc = doc(db, "lokaler", id);
    await deleteDoc(roomDoc);
  }



  useEffect(() => {
    const getRooms = async () => {
      const data = await getDocs(roomsColRef);
      setRooms(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };


    getRooms();
  }, []
  );

  return <div className='App'>{rooms.map((room) => {
    return (
      <div>
        {/* kalender */}


        {/* mine bookinger */}
        <h2>Mine bookninger</h2>

        {/* andres bookinger */}
        <h2>Andres bookninger</h2>

        {/* ny booking knap */}
        <button class="ny-booking-knap">Ny Booking</button> 
        {/* ny hjem knap */}
        <button class="hjem-knap">Hjem</button> 
        {/* copy right */}
        <p>copyright © Bookin</p>





        <h1>{room.number}</h1>
        <h1>{room.size}
          {<img src={size} alt="size" height="25" />}
        </h1>
        {rooms[0].light && <img src={light} alt="light" height="25" />}
        {rooms[0].projector && <img src={projector} alt="projector" height="25" />}
        {rooms[0].furniture && <img src={furniture} alt="furniture" height="25" />}
        <button>Edit</button>
        <button onClick={() => { deleteBooking(room.id) }}>Deleted</button>
      </div>
    );
  })}</div>
}


