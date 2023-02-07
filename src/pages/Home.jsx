import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  const posts = [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      }
    ]

  return (
    <div className='home'>
      <div className='posts'>

        {posts.map(el =>(
          
          <div className='post'
          key={el.id}
          >
            <div className='img' >
              <img src={el.img}/>
            </div>

            <div className='content'>
              <Link className='link' to={`/post/${el.id}`}>
                <h1>{el.title}</h1>
                <p>{el.desc}</p>
                <button>READ MORE</button>
              </Link>
            </div>

          </div>

        ))}
      </div>
    </div>
  )
}

export default Home