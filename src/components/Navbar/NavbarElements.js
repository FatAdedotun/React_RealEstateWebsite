import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    font-size: 1.3rem;
`;

export const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

export const Logo = styled(Link)`
    ${ NavLink}
    font-style: italic;
    font-weight: 700;
    text-transform: uppercase;
`;

export const MenuBars = styled(FaBars)`
    display: none;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%,25%);

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavMenuLinks = styled(Link)`
    ${ NavLink}
`;

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;