import React from 'react'

const Table=({data,repos})=> {
  return (
    <table className="ui celled table">
  <thead>
    <tr><th>Name</th>
    <th>Avatar</th>
    <th>Location</th>
    <th>Bio</th>
    <th>Repositories</th>
  </tr></thead>
  <tbody>
    <tr>
      <td >{data.name}</td>
      <td>{!data.avatar_url? " ":(
        <img className="ui small circular image" src={data.avatar_url}
        alt={data.avatar_url}/>)}</td>
      <td>{data.location}</td> 
      <td>{data.bio}</td> 
      <td>
          {repos.map(rep=>(
              <div className="ui relaxed divided list" key={rep.name}>
                  <div className="item">
                      <i className="large github middle aligned icon">

                      </i>
                      <div className="content">
                          <a href={rep.html_url} terget="blank" className="header">
                              {rep.name}
                          </a>
                      </div>
                  </div>
              </div>
          ))}
          </td>
    </tr>
    </tbody>
    </table>

  )
}

export default Table