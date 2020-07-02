import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SongSlider from '../../molecules/SongSlider/SongSlider';
import Heading from '../../atoms/Heading/Heading';
import MediaControllBar from '../../molecules/MediaControllBar/MediaControllBar';
import ProgressSection from '../../molecules/ProgressSection/ProgressSection';

import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
`;
const InfoWrapper = styled.div`
  text-align: center;
`;
const Player = ({ song }) => (
  <StyledWrapper>
    <SongSlider />
    <InfoWrapper>
      <Heading bold>{song.name}</Heading>
      <Heading secondary>{song.artist}</Heading>
    </InfoWrapper>
    <MediaControllBar />
    <ProgressSection />
  </StyledWrapper>
);

const mapStateToProps = (state) => ({
  song: state.songs.byId[state.songs.allIds[state.songs.activeSongIndex]],
});

export default connect(mapStateToProps)(Player);
