import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <main>
      <nav>
        <h1>Izzie's Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </main>
  );
};

export default Navbar;
