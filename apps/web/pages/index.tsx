import dayjs from 'dayjs'

import { 
  Box, 
  chakra, 
  SimpleGrid,
  Center,
  useColorModeValue, } from "@chakra-ui/react";
import { Button, Sidebar } from "ui";
import { useState } from 'react';
import { useRouter } from 'next/router';

// export default function

const Web = ({data}) => {
  const router = useRouter();
  const [results, setResults] = useState(data);

  const onChange = (e) => {
  }

  const getDataForPreviousDay = async () => {
    let currentDate = dayjs(results.date);
    let newDate = currentDate.subtract(1, 'day').format('YYYY-MM-DDTHH:mm:ss')
    const res = await fetch('http://localhost:3000/api/events?date=' + newDate)
    const json = await res.json()

    setResults(json);
  }

  const getDataForNextDay = async () => {
    let currentDate = dayjs(results.date);
    let newDate = currentDate.add(1, 'day').format('YYYY-MM-DDTHH:mm:ss')
    const res = await fetch('http://localhost:3000/api/events?date=' + newDate)
    const json = await res.json()

    setResults(json);
  }

  const openNewEvent = async (e) => {
    
    e.preventDefault()
    router.push("/events/add")
  }

  return (
    <div>
      <Sidebar >
        <Button onClick={openNewEvent} >Add New</Button>
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          {/* <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            py={10}
            fontWeight={'bold'}>
            Select a day
          </chakra.h1> */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <Center>
              <Button 
                onClick={getDataForPreviousDay}  
                _hover={{
                  bg: 'cyan.400',
                  color: 'white',
                }}>Previous Day
              </Button>
            </Center>
            <Center>{dayjs(results.date).format('MM/DD/YYYY')}</Center>
            <Center>
              <Button 
                onClick={getDataForNextDay}  
                _hover={{
                  bg: 'cyan.400',
                  color: 'white',
                }}>Next Day
              </Button>
            </Center>
          </SimpleGrid>
        </Box>
      </Sidebar >
    </div>
  );
}


Web.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/events')
  const json =  [{ "_id": 10, "date": "2020-01-23T08:00:00.000+00:00", "calories": { "label": "Calories", "total": 1840, "target": 1850, "variant": 150 }, "carbs": { "label": "Carbs", "total": 190, "target": 150, "variant": 15 }, "fat": { "label" : "Fat", "total": 54, "target": 50, "variant": 10 }, "protein": { "label" : "Protein", "total": 120, "target": 160, "variant": 10 }}, { "_id": 9, "date": "2020-01-22T08:00:00.000+00:00", "calories": { "label": "Calories", "total": 1740, "target": 1850, "variant": 150 }, "carbs": { "label": "Carbs", "total": 120, "target": 150, "variant": 15 }, "fat": { "label" : "Fat", "total": 51, "target": 50, "variant": 10 }, "protein": { "label" : "Protein", "total": 140, "target": 160, "variant": 10 } }, { "_id": 8, "date": "2020-01-21T08:00:00.000+00:00", "calories": { "label": "Calories", "total": 1900, "target": 1850, "variant": 100 }, "carbs": { "label": "Carbs", "total": 120, "target": 150, "variant": 15 }, "fat": { "label" : "Fat", "total": 71, "target": 50, "variant": 10 }, "protein": { "label" : "Protein", "total": 110, "target": 160, "variant": 10 } }, { "_id": 7, "date": "2020-01-20T08:00:00.000+00:00", "calories": { "label": "Calories", "total": 1940, "target": 1850, "variant": 150 }, "carbs": { "label": "Carbs", "total": 150, "target": 150, "variant": 15 }, "fat": { "label" : "Fat", "total": 55, "target": 50, "variant": 10 }, "protein": { "label" : "Protein", "total": 140, "target": 160, "variant": 10 } }, { "_id": 6, "date": "2020-01-19T08:00:00.000+00:00", "calories": { "label": "Calories", "total": 1400, "target": 1850, "variant": 150 }, "carbs": { "label": "Carbs", "total": 100, "target": 150, "variant": 15 }, "fat": { "label" : "Fat", "total": 80, "target": 50, "variant": 10 }, "protein": { "label" : "Protein", "total": 150, "target": 160, "variant": 10 } }, { "_id": 5, "date": "2020-01-18T08:00:00.000+00:00", "calories": { "label": "Calories", "total": 1440, "target": 1850, "variant": 150 }, "carbs": { "label": "Carbs", "total": 93, "target": 150, "variant": 15 }, "fat": { "label" : "Fat", "total": 71, "target": 50, "variant": 10 }, "protein": { "label" : "Protein", "total": 150, "target": 160, "variant": 10 } }, { "_id": 4, "date": "2020-01-17T08:00:00.000+00:00", "calories": { "label": "Calories", "total": 2300, "target": 2000, "variant": 100 }, "carbs": { "label": "Carbs", "total": 249, "target": 150, "variant": 15 }, "fat": { "label" : "Fat", "total": 84, "target": 50, "variant": 10 }, "protein": { "label" : "Protein", "total": 120, "target": 160, "variant": 10 } }, { "_id": 3, "date": "2020-01-16T08:00:00.000+00:00", "calories": { "label": "Calories", "total": 1840, "target": 1850, "variant": 150 }, "carbs": { "label": "Carbs", "total": 190, "target": 150, "variant": 15 }, "fat": { "label" : "Fat", "total": 54, "target": 50, "variant": 10 }, "protein": { "label" : "Protein", "total": 189, "target": 160, "variant": 10 } }, { "_id": 2, "date": "2020-01-15T08:00:00.000+00:00", "calories": { "label": "Calories", "total": 1540, "target": 1850, "variant": 150 }, "carbs": { "label": "Carbs", "total": 150, "target": 150, "variant": 15 }, "fat": { "label" : "Fat", "total": 64, "target": 50, "variant": 10 }, "protein": { "label" : "Protein", "total": 120, "target": 160, "variant": 10 } }, { "_id": 1, "date": "2020-01-14T08:00:00.000+00:00", "calories": { "label": "Calories", "total": 1945, "target": 1850, "variant": 150 }, "carbs": { "label": "Carbs", "total": 150, "target": 150, "variant": 15 }, "fat": { "label" : "Fat", "total": 32, "target": 50, "variant": 10 }, "protein": { "label" : "Protein", "total": 155, "target": 160, "variant": 10 } }, { "_id": 11, "date": "2020-01-13T08:00:00.000+00:00", "calories": { "label": "Calories", "total": 1540, "target": 1850, "variant": 150 }, "carbs": { "label": "Carbs", "total": 140, "target": 150, "variant": 15 }, "fat": { "label" : "Fat", "total": 54, "target": 50, "variant": 10 }, "protein": { "label" : "Protein", "total": 120, "target": 160, "variant": 10 } } ]
  // (await res.json())
  return { data: json }
}

export default Web


{/* <div className="flex text-center">
<div className="w-1/3 bg-gray-200 p-4"><button onClick={getDataForPreviousDay}>Previous Day</button></div>
<div className="w-1/3 p-4">{dayjs(results.date).format('MM/DD/YYYY')}</div>
<div className="w-1/3 bg-gray-200 p-4"><button onClick={getDataForNextDay}>Next Day</button></div>
</div> */}

