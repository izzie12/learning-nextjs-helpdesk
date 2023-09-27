import { Suspense } from "react";
import TicketList from "../(dashboard)/TicketList";
import Loading from "../(dashboard)/Loading";

export const metadata = {
  title: "Dojo Helpdesk",
  description: "Learning Next JS",
};

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently Open Tickets</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
};

export default Tickets;
