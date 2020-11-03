import React from 'react';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function SearchPage() {
  const [{ term='tes' }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage-header">
          <Link to='/'>
              <img className="searchPage-logo"
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt="Google logo">
              </img>
          </Link>
          <div className="searchPage-header-body">
              <Search hideButtons></Search>
              <div className="searchPage-options">
                <div className="searchPage-options-left">
                  <div className="searchPage-option">
                      <SearchIcon />
                      <Link to="/all">All</Link>
                  </div>
                  <div className="searchPage-option">
                      <DescriptionIcon />
                      <Link to="/news">News</Link>
                  </div>
                  <div className="searchPage-option">
                      <ImageIcon />
                      <Link to="/images">Images</Link>
                  </div>
                  <div className="searchPage-option">
                      <LocalOfferIcon />
                      <Link to="/shopping">Shopping</Link>
                  </div>
                  <div className="searchPage-option">
                      <RoomIcon />
                      <Link to="/maps">Maps</Link>
                  </div>
                  <div className="searchPage-option">
                      <MoreVertIcon />
                      <Link to="/more">More</Link>
                  </div>

                </div>

                <div className="searchPage-options-right">
                <div className="searchPage-option">
                      <Link to="/settings">Settings</Link>
                  </div>
                  <div className="searchPage-option">
                    <Link to="/tools">Tools</Link>
                  </div>
                </div>
              </div>
          </div>
      </div>
      {term && (
        <div className="searchPage-results">
          <p className="searchPage-result-count">About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}.
          </p>
          {data?.items.map(item => (
              <div className="searchPage-result">
                  <a className="searchPage-result-link"
                  href={item.link}>{item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                    <img className="searchPage-result-image" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt=""></img>
                  )}
                  {item.displayLink}</a>
                  <a className="searchPage-result-title" href={item.link}>
                      <h2>{item.title}</h2>
                  </a>
                  <p className="searchPage-result-snippet">{item.snippet}</p>
              </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage;
