import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, WEIGHTS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <MenuButtonGroup />
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopOnly>
          <MenuButtonGroup />
        </DesktopOnly>
        <Logo />
        <DesktopOnly>
          <SubscribeButtonGroup />
        </DesktopOnly>
      </MainHeader>
    </header>
  );
};

const MenuButtonGroup = () => {
  return (
    <ActionGroup>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </ActionGroup>
  );
};

const SubscribeButtonGroup = () => {
  return (
    <SubscribeDiv>
      <Button>Subscribe</Button>
      <SubscribeLink href="#no-where">Already a subscriber?</SubscribeLink>
    </SubscribeDiv>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
  }
`;

const DesktopOnly = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
  }
`;

const SubscribeDiv = styled.div`
  text-align: center;
`;

const SubscribeLink = styled.a`
  font-weight: ${WEIGHTS.normal};
  font-style: italic;
  font-size: calc(1rem * 14 / 16);
  text-decoration: underline;
`;

export default Header;
