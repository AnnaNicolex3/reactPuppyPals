import { puppyList } from './data.js'
import{ useState } from 'react'




function App() {
const [puppies, setPuppies] =useState(puppyList)
const [featPupId, setFeatPupId] = useState(null)
  console.log(puppyList, featPupId)

  return (
    <>
   {puppies.map((puppy,i)=> <p key ={puppy.id} onClick={()=>setFeatPupId(puppy.id)}>{puppy.name}</p>)}
   
    </>
  )
}

export default App
