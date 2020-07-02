import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Heading from '../../atoms/Heading/Heading';
//icons
import BackIcon from '../../../assets/icons/back_ico.svg';
import PlayActiveIcon from '../../../assets/icons/Play_active.png';
import PlayInactiveIcon from '../../../assets/icons/Play_inactive.png';
import MoreIcon from '../../../assets/icons/more_ico.svg';

const StyledWrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InnerLeftWrapper = styled.div`
  margin-right: auto;
`;
const InnerCenterWrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 15vw;

  h1 {
    margin: 5px 0;
  }
`;
const InnerCenterWrapperPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: -15vw;

  h1 {
    margin: 5px 0;
  }
`;

const InnerRightWrapper = styled.div`
  margin-left: auto;
`;

const TopNavbar = ({ isPlaying, navType }) => (
  <StyledWrapper>
    <InnerLeftWrapper>
      <ButtonIcon icon={BackIcon} backIcon />;
    </InnerLeftWrapper>
    <InnerCenterWrapperMain>
      {navType === 'main' && (
        <>
          <Heading secondary>Album</Heading>
          <Heading>Unreleased</Heading>
        </>
      )}
    </InnerCenterWrapperMain>
    <InnerCenterWrapperPlaylist>
      {navType === 'playlist' && (
        <>
          <Heading bold>Unreleased</Heading>
          <Heading secondary>Artist</Heading>
        </>
      )}
    </InnerCenterWrapperPlaylist>
    <InnerRightWrapper>
      {navType === 'playlist' && (
        <>
          {isPlaying === 'true' && <ButtonIcon icon={PlayActiveIcon} playingIcon />}
          {isPlaying === 'false' && <ButtonIcon icon={PlayInactiveIcon} notPlayingIcon />}
        </>
      )}
      {navType !== 'playlist' && <ButtonIcon icon={MoreIcon} moreIcon />}
    </InnerRightWrapper>
  </StyledWrapper>
);

TopNavbar.propTypes = {
  navType: PropTypes.oneOf(['main', 'playlist', 'viewMore']),
};

TopNavbar.defaultProps = {
  navType: 'main',
};

export default TopNavbar;