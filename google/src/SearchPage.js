import React from 'react';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
//   const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="sarchPage">
      <div className="sarchPage-header">
          <Link to='/'>
              <img className="searchPage-logo"
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="Google logo">
              </img>
          </Link>
          <h1>{term}</h1>
      </div>
      <div className="sarchPage-results">
      </div>
    </div>
  )
}

export default SearchPage;
