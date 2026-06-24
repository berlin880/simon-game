"use client";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Siemreap } from "next/font/google";
import SimonGame from "./components/SimonGame";




export default function Home() {

  return (
    <div>
     <SimonGame />
    </div>
  );
}
