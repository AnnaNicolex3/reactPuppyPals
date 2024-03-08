import { puppyList } from './data.js'
import{ useState } from 'react'




function App() {
const [puppies, setPuppies] =useState(puppyList)
const [featPupId, setFeatPupId] = useState(null)
const featPup = puppies.find(puppy=>puppy.id === featuredPupId)
  console.log(puppyList, featPupId)

  return (
    <>
   {puppies.map((puppy,i)=> <p key ={puppy.id} onClick={()=>setFeatPupId(puppy.id)}>{puppy.name}</p>)}
   {featuredPupId ?
    <div>
    <h2>{featuredPup.name}</h2>
    <ul>
      <li>Age: {featuredPup.age}</li>
      <li>Email: {featuredPup.email}</li>
    </ul>
  </div>
   :
   <p>Please select a puppy!</p>
   }
    </>
  )
}

export default App
