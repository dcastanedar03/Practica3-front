import { FunctionComponent } from "preact";
import { useSignal } from "@preact/signals";
import Shower from "../components/Shower.tsx";
import HiButton from "./HiButton.tsx";

const Ticket: FunctionComponent = () => {
  const SayHi = useSignal("");
  const nombre = useSignal("");
  const apellido = useSignal("");

  return (
    <div class="formBody">
      <form class="formBox" method="get" target="/hihihi">
        <h3>Say hi hi hi</h3>
        <input type="text" name="nombre" placeholder={"Name"} value = {nombre}
        onInput={(e) => nombre.value = e.currentTarget.value}
        />
        <br />
        <input type="text" name="apellido" placeholder={"Last name"} value = {apellido}
        onInput={(e) => apellido.value = e.currentTarget.value}
        />
        <br />
        <HiButton nombre={nombre} apellido={apellido} SayHi={SayHi}>
          Hi!
        </HiButton>
      </form>
      <Shower
        text={SayHi}
      />
    </div>
  );
};

export default Ticket;