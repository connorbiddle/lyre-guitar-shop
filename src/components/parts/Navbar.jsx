import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Logo, Icon, Loading } from "../presentational";
import { atSize } from "../../style/mixins";
import { fade } from "../../style/animations";

const Navbar = ({ categories }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => setExpanded(old => !old);

  const onSearchClick = () => alert("Search!");
  const onCartClick = () => alert("Cart!");

  return (
    <StyledNavbar>
      <div className="nav-top">
        <div className="nav-top-left">
          <Icon button icon="fas fa-search" onClick={onSearchClick} />
        </div>
        <div className="nav-top-middle">
          <Link to="/">
            <Logo light className="logo" />
          </Link>
        </div>
        <div className="nav-top-right">
          <Icon
            button
            icon="fas fa-shopping-cart"
            onClick={onCartClick}
            // badge={}
          />
        </div>
      </div>
      <div className="nav-bottom">
        {categories ? (
          <>
            <button className="categories-btn" onClick={toggleMenu}>
              Products{" "}
              <Icon icon={`fas fa-angle-${expanded ? "up" : "down"}`} />
            </button>
            <div
              className={expanded ? "category-menu expanded" : "category-menu"}
            >
              {categories.map(({ id, name, slug }) => (
                <Link key={id} to={`/category/${slug}`} onClick={toggleMenu}>
                  {name}
                </Link>
              ))}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  position: sticky;
  top: -5rem;
  z-index: 100;

  a {
    color: inherit;
    text-decoration: none;
  }

  .nav-top,
  .nav-bottom {
    padding: 0 2rem;
    display: flex;
    align-items: center;
  }

  .nav-top {
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.black};
    color: #fff;
    justify-content: space-between;

    .logo {
      height: 3.5rem;
      width: auto;
    }

    i {
      font-size: 1.5rem;
    }
  }

  .nav-bottom {
    justify-content: center;
    height: 2.5rem;
    background-color: #fff;
    color: #111;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

    .categories-btn {
      display: block;
      width: 100%;
      font-size: 1rem;
      font-weight: 500;
      background: none;
      border: none;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;

      ${atSize("lg", "display: none;")}
    }

    .category-menu {
      position: absolute;
      top: calc(100% + 1rem);
      padding: 1rem;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

      ${fade()};

      display: none;
      &.expanded {
        display: block;
      }

      a {
        display: block;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 0.75rem;
      }

      ${atSize(
        "lg",
        css`
          width: 100%;
          padding: 0;
          justify-content: center;
          position: static;
          top: unset;
          animation: none;

          display: flex !important;
          box-shadow: none;

          a {
            padding: 0.5rem 1.5rem;
          }
        `
      )}
    }
  }
`;

export default Navbar;
