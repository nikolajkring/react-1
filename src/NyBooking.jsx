import { useState } from "react";
import { db } from "./firebase-config";
import { HjemKnap } from "./HjemKnap";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import './nybooking.css';
import { Link } from "react-router-dom";

export function NyBooking() {
  console.log("nybbokingkører")
  const [time, setTime] = useState();
  const [roomNumber, setRoomNumber] = useState();
  const [date, setDate] = useState();


  



  const handleRoomNumber = (e) => {
    var select = document.getElementById('roomNumberSelect');
    var value = select.options[select.selectedIndex].value;
    const input = e.target.value;
    setRoomNumber(value);
  };

  const handleDate = (e) => {
    const input = e.target.value;
    setDate(input);
  };

  const handleTime = (e) => {
    var select = document.getElementById('timeSelect');
    var value = select.options[select.selectedIndex].value;
    setTime(value);
  };
  // const handleRoom = (e) => {
  //   setRoom(e.target.value);
  // };
  // const handleDate = (e) => {
  //   setDate(e.target.value);
  // };
  // const handleTime = (e) => {
  //   setTime(e.target.value);
  // };
  


 const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("You Clicked!");
    console.log("test6")
    const refreshPage = ()=>{
      window.location.reload();
   }
    

    const data = {
      roomNumber: roomNumber,
      date: date,
      time: time,
      id: `${date}${roomNumber}${time}`

      // fetch id
      // if ikke finder så addDoc, hvis den finder ikke addDoc




    }
    // let dbRef = collection(db, "lokaler");

    const dataRef = doc(db, "lokaler", data.id);
    
    
    // console.log(data.id);
    const docSnap = await getDoc(dataRef);


    // const findDato = () => {
    //   let newDate = new Date();
    //   let year = newDate.getFullYear();
    //   let month  = newDate.getMonth() + 1;
    //   let d = newDate.getDate();
  

    //   return `${year}-${month.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;

    // }


    if (docSnap.exists()) {
      alert("Denne dato er allerede booked");
    console.log("testaaaa")
    } else {
      await setDoc(dataRef, data)
      console.log("test4")
      alert("Den blev booked")
      refreshPage()
      console.log("testyes")
      .then(() => {
        console.log(dataRef.id)
        console.log("test3")
       
        
      })
      .catch(error => {
        console.log(error);
        console.log("test5")
      });


      // addDoc(dbRef, data)
      //   .then(docRef => {
      //     console.log(dbRef.id);
      //     // setTime(""); etc

      //     // resetBoxes();
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })
    }
    refreshPage();
  };

 

  // kalender tid value 
  

  return (
    <>
    <div className="nybooking-div bg-color-white">
      <br />
      <h2 className="bg-color-white pad-no">Vælg et rum</h2>
      <br />
      <label htmlFor="roomNumberSelect"></label>
      <select  required onChange={handleRoomNumber} id="roomNumberSelect"   name="roomNumber" >
        <option selected disabled hidden value="">Vælg lokale</option>
        <option defaultValue="1.02" >1.02</option>
        <option value="1.84">1.84</option>
        <option value="2.09">2.09</option>
        <option value="1.03">1.03</option>
      </select>
      <br /> <br />
      <h2 className="bg-color-white pad-no">Vælg et tidspunkt</h2>
      <label htmlFor="timeSelect"></label>
      <br />
      <select required onChange={handleTime} id="timeSelect" name="time"  >
      <option selected disabled hidden value="">Vælg tid</option>
        <option value="8:30-12:30">8.30-12.30</option>
        <option value="12:30-16:00">12.30-16.00</option>
        <option value="16:00-21:00">16.00-21.00</option>

      </select>
      <br /> <br />
      <h2 className="bg-color-white pad-no">Dato</h2>
      <label htmlFor="dateSelect"></label>
      <br />
      <input required onChange={handleDate} type="date" id="dateSelect" name="date"  />


    </div>
    
    <Link className="bg-color-white pos-fix-2" to="/NyBooking">
    <button className="booking-knap" onClick={handleSubmit} >Book</button>
    </Link>

    <HjemKnap />

    </>
  );

}


