import React,{useState} from 'react'
import Table from './Table'

function Profile() {
const [data, setData]=useState({})
const [username,setUsername]=useState('')
const [repos, setReposit]= useState([])

const changeHandler= e=>{
    setUsername(e.target.value)
}
const submitHandler=async e =>{
    e.preventDefault()
    const profile = await fetch(`https://api.github.com/users/${username}`)
    const profileJson = await profile.json()
    /* console.log(profileJson) */
    const repos=await fetch(profileJson.repos_url)
    const repojSON = await repos.json()
   /*  console.log(repojSON) */
   if(profileJson){
       setData(profileJson)
       setReposit(repojSON)
   }
} 
    
  return (
    <>
    <div style={{padding:20}}>
      <div className="ui search">
        <div className="ui icon input">
          <i className="search icon"></i>
          <input className="prompt" 
          placeholder='search users'
          type="text" value={username} onChange={changeHandler} />

        </div>
            <button className="ui primary button"
            type='submit' onClick={submitHandler}>
              <i className="github icon"></i>
              Search
            </button>
            <Table data={data} repos={repos} />

      </div>
        
    
    
    </div>
    </>
  )

}

export default Profile