import React from 'react'
import { Link } from 'react-router-dom'

function Single() {
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://www.scuba.com/blog/wp-content/uploads/2020/04/shutterstock_46566328.jpg"/>
        
        <div className='user'>
          <img src="https://www.scuba.com/blog/wp-content/uploads/2020/04/shutterstock_46566328.jpg"/>
           
        <div className='info'>
          <span>Momonga</span>
          <p>posted 2 days ago</p>
        </div>
        <div className='edit'>
          <Link to="/write?edit=2">
            <button>EDIT</button>
          </Link>
          <button>DELETE</button>
        </div>

        </div>
      </div>
      <div className='menue'>m</div>
    </div>
  )
}

export default Single