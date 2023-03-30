import { useState, useEffect } from "react";
import * as API from "./services/launches";
import logo from "./assets/logo.png";
import { Heading, } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { LaunchItem } from "./components/LaunchItem";

{/*El diseño se ha realizado con la libreria ChaKra ->> 'https://chakra-ui.com/'*/ }
export function App() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image src={logo} width="300" m={4} />
      <Heading as='h1' size='xl' m={4}>SpaceX Launches</Heading>
      <section>
        <ul>
          {launches.map((launch) => (

            <div>
              {/** En esta expresion el launches.map necesita la Key 
               * que se ha tomado del fligh number. 
               * luego como el componente LaunchItem no tiene acceso
               * a los datos se envian todos en la expresion {...launch}
               * que prácticamente envia todos los parametros (Props)
               * 
              */}
              <LaunchItem key={launch.flight_number} {...launch}/>
            </div>

          ))}
        </ul>
      </section>
    </>
  );
}
