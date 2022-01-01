import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  --avatar-dimension: 48px;
  color: var(--color-gray-900);
`;

const Avatar = styled.img`
  display: block;
  float: right;
  width: var(--avatar-dimension);
  height: var(--avatar-dimension);
  border-radius: 50%;
  object-fit: cover;
  --margin: calc(var(--avatar-dimension) * 0.25);
  margin-left: var(--margin);
  margin-top: var(--margin);

  @media ${QUERIES.tabletOnly} {
    float: revert;
    margin: revert;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
