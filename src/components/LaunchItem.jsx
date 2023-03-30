import {  Flex,  Spacer } from '@chakra-ui/react';
import { Box,  Text, Tag ,Button} from '@chakra-ui/react';
import { HiCalendar } from 'react-icons/hi';



export function LaunchItem(launch) {
  return (
    <Box
      bg='gray.100'
      p={4} m={4}
      borderRadius='lg'>
      <Flex display='flex'>
        <Text fontSize='2xl'>
          <strong>{launch.flight_number}</strong> -
          Mission <strong>{launch.mission_name}</strong>  ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"} >
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Flex align="center">
        {/**El icono de calendario se ha tomado de la libreria react icons -->https://react-icons.github.io/react-icons/ */}
        <HiCalendar />
        {/**Esto No Funcionó */}
        {/**Luego se ha cambiado a uno importado desde Chakra (ver los imports) para poder darle un tono gris */}
        {/** Notar que en el siguiente Tex se ha utilizado la propiedad ml=4 
       * que no es mas que un espaciador, utilizado de la 
       * libreria 'date-fns' -> https://date-fns.org/
       */}
        <Text fontSize='sm' ml={2} color='gray.500'>
           {launch.launch_date_local.split('T')[0]} <span>Rocket:<strong> {launch.rocket.rocket_name}</strong></span> 
          {/*dayjs(launch.launch_date_local).locale("es").format('D MMMM, YYYY')  */}
        </Text>
      </Flex>
      <Button mt={2} colorScheme='orange'>more details...</Button>
    </Box>
  )

}