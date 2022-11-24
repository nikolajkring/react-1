import './App.css';
import { useState, useEffect } from "react";
// import { getSuggestedQuery } from '@testing-library/react';
import { db } from "./firebase-config";
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { HomeLayout } from "./HomeLayout";
import {Settings} from "./Settings";
import {Booking} from "./Booking";
import {NyBooking} from "./NyBooking";



export default function App() {

  return (
    <>
    {/* <h1>babs</h1> */}
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/NyBooking" element={<NyBooking />} />

        </Route>

      </Routes>

      
    </>
  )
}



