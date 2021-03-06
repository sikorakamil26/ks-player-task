import React from 'react';
import styled from 'styled-components';
import SongSlider from '../../molecules/SongSlider/SongSlider';
import Heading from '../../atoms/Heading/Heading';
import MediaControllBar from '../../molecules/MediaControllBar/MediaControllBar';
import ProgressSection from '../../molecules/ProgressSection/ProgressSection';

import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 60px;
  top: 120px;
  left: 0;
  right: 0;
  flex-direction: column;
  flex: 1;
`;
const InfoWrapper = styled.div`
  text-align: center;
`;
const Player = ({ song }) => (
  <StyledWrapper>
    <SongSlider />

    <InfoWrapper>
      <Heading bold fontSize="l">
        {song.name}
      </Heading>
      <Heading secondary fontSize="xs">
        {song.artist}
      </Heading>
    </InfoWrapper>
    <MediaControllBar />
    <ProgressSection />
  </StyledWrapper>
);

const mapStateToProps = (state) => ({
  song: state.songs.byId[state.songs.allIds[state.songs.activeSongIndex]],
});

export default connect(mapStateToProps)(Player);
