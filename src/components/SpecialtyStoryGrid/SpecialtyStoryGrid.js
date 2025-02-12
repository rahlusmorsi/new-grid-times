import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsScroller>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
        </SportsScroller>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  --card-size: minmax(120px, 1fr);

  @media ${QUERIES.tabletAndUp} {
    --card-size: minmax(180px, 1fr);
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns:
    repeat(auto-fill, var(--card-size));
  gap: 1rem;
`;

const SportsSection = styled.section`
  overflow: auto;
`;

const SportsScroller = styled.div`
  overflow: auto;
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns:
    repeat(auto-fill, var(--card-size));
  gap: 1rem;

  @media ${QUERIES.tabletAndUp} {
    display: flex;

    & article {
      min-width: 180px;
    }
  }
`;

export default SpecialtyStoryGrid;
