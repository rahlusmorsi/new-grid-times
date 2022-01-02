import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <>
              {index !== 0 && <Hr />}
              <SecondaryStory key={story.id} {...story} />
            </>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <>
              {index !== 0 && <Hr />}
              <OpinionStory key={story.id} {...story} />
            </>
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }

  @media ${QUERIES.desktopAndUp} {
    --main-width: minmax(477px, 1fr);
    --secondary-width: minmax(386px, 1fr);
    --opinion-width: minmax(273px, 1fr);
    grid-template-columns: var(--main-width) var(--secondary-width) var(--opinion-width);
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    /* optical border */
    margin-right: 16px;
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.desktopAndUp} {
    /* optical border */
    margin-right: 16px;
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  ${OpinionSection} & {
    @media ${QUERIES.tabletOnly} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;

      & hr {
        display: none;
      }
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.desktopAndUp} {
    /* optical border */
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--color-gray-300);
  }
`;

const Hr = styled.hr`
  background: var(--color-gray-300);
  border-top: var(--color-gray-300);
  border-bottom: var(--color-gray-300);
  border-left: none;
  height: 1px;
  width: 100%;
  margin: 1rem 0;
`;

export default MainStoryGrid;
