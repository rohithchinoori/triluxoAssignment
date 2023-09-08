import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/signup" />
  }

  return (
    <div className="home-bg">
      <div className="home-desc">
        <h1 className="head">Create and Publish Your Blog </h1>
        <img
          src="https://img.freepik.com/free-vector/search-concept-landing-page_52683-18617.jpg?w=996&t=st=1694102085~exp=1694102685~hmac=76670aceff511d0a8e18480635cdefb6b2af86f5cfc0d54ebad5b6e3e654a692"
          alt="blog"
          className="blog-img"
        />
        <div>
          <Link to="/blog">
            <button type="button" className="blog-but">
              CREATE A BLOG
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
