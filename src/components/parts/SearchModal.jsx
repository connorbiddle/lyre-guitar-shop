import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import slugify from "slugify";
import styled from "styled-components";
import { fade } from "../../style/animations";
import { Icon } from "../presentational";

const SearchModal = ({ stopSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [redirect, setRedirect] = useState(null);

  const onInputChange = e => setSearchTerm(e.target.value);

  const search = e => {
    e.preventDefault();
    const slug = slugify(searchTerm);
    setRedirect(`/search/${slug}`);
  };

  useEffect(() => {
    const handleEscapeKey = ({ keyCode }) => {
      if (keyCode === 27) stopSearch();
    };

    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  });

  if (redirect)
    return (
      <Redirect to={{ pathname: redirect, state: { term: searchTerm } }} />
    );

  return (
    <StyledSearchModal>
      <form className="search-field" onSubmit={search}>
        <input
          type="text"
          value={searchTerm}
          onChange={onInputChange}
          placeholder="Search..."
        />
        <button>
          <Icon icon="fas fa-search" />
        </button>
      </form>
      <button className="search-close" onClick={stopSearch}>
        <Icon icon={"fas fa-times"} />
      </button>
    </StyledSearchModal>
  );
};

const StyledSearchModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  ${fade()}

  button,
  input {
    background: none;
    border: none;
    color: inherit;
  }

  .search-field {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #fff;
    width: 100%;
    max-width: 500px;
    margin: 0 2rem;
    font-size: 1.35rem;

    input {
      flex: 1;
      padding: 0.75rem 0;
      margin-right: 1rem;
      font-size: 1em;
    }

    button {
      font-size: 1em;
    }
  }

  .search-close {
    position: absolute;
    padding: 0.5rem;
    top: 1.5rem;
    left: 1.5rem;
    color: #fff;
    font-size: 1.5rem;
  }
`;

export default SearchModal;
