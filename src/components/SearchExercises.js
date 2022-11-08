import React, { useEffect, useState } from 'react'
import { Box, Button, TextFieled, Stack, Typography, TextField } from '@mui/material'
import { borderRadius, height, width } from '@mui/system'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar  from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
const [search, setSearch] = useState('')
const [bodyParts, setBodyParts] = useState([])

useEffect(()=>{
  const fetchExercisesData = async () => {
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

    setBodyParts(['all', ...bodyPartsData])
  }
  fetchExercisesData();
}, [])


const handleSearch = async () => {
  if(search){
    const exerciseData = await fetchData ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);                  //to get all of the exercises

    const searchExercises = exerciseData.filter(
      (exercise) => exercise.name.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
    )

setSearch('');
setExercises(searchExercises)
  }

}

  return (
    <Stack justifyContent="center" alignItems="center" mt="37px" p="20px"> 
<Typography fontWeight={700} sx={{fontSize: { lg: '44px', xs: '30px'}}} textAlign="center" mb="50px">
  Awesome Exercies You <br /> Should Know
</Typography>
<Box position="relative" mb="72px">
  <TextField
  sx={{ input: {fontWeight: '700',
   border: 'none',
    borderRadius: '4px'},
  width: { lg: "1170px", xs:"350px"},
  backgroundColor: "#fff",
  borderRadius: "40px"
  }}
  value={search}
  height="76px"
  onChange={(e) => setSearch(e.target.value.toLowerCase())}
  placeholder="Search Exercises"
  type="text"
  />
  <Button className="search-btn"
  sx={{bgcolor:"#ff2625",
textTransform: "none",
color:"#fff",
width: { lg: '175px', xs: '80px'},
fontSize: { lg: '20px', xs: '14px'},
height: "56px",
position: "absolute",
right: "0"
}}
onClick={handleSearch}
  >
    Search
  </Button>
</Box>
<Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
<HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
</Box>
    </Stack>
  )
}

export default SearchExercises