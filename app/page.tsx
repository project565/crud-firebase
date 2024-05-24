"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig"
import Loginwindow from "./components/Loginwindow";

export default function Home() {
  return (
    <main>
      <Loginwindow />
    </main>
  );
}
