import { PageProps } from "$fresh/server.ts";
import { useSignal } from "@preact/signals";
import Ticket from "../islands/Ticket.tsx";


const Hihihi = (props: PageProps) => {
  const SayHi = useSignal("");

  return (
    <Ticket/>
  );
};
export default Hihihi;
