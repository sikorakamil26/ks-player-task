import styled, { css } from 'styled-components';
import React from 'react';

const IconBtn = styled.button`
  min-width: 20px;
  height: 30px;
  margin: 0 auto;
  
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: transparent;
  border: none;
  outline: none;
  :active {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  }

  ${({ playingIcon }) =>
    playingIcon &&
    css`
      margin: -10px 0;
      min-width: 160px;
      height: 160px;
      background-size: 100%;
      background-color: transparent;
      background-position: left 6px center;
      :active {s
        transform: scale(1);
        -webkit-transform: scale(1);
      }
    `}
  ${({ notPlayingIcon }) =>
    notPlayingIcon &&
    css`
      margin: 0px 10px;
      min-width: 140px;
      height: 140px;
      background-size: 60%;
      background-color: transparent;
      :active {s
        transform: scale(1);
        -webkit-transform: scale(1);
      }
    `}
  ${({ playingIconTop }) =>
    playingIconTop &&
    css`
      min-width:90px;
      height: 90px;
      margin: 0 15px 0 auto;
      background-size: 100%;
      background-color: transparent;
      background-position: right 0px center;
      :active {s
        transform: scale(1);
        -webkit-transform: scale(1);
      }
    `}
  ${({ notPlayingIconTop }) =>
    notPlayingIconTop &&
    css`
      min-width: 60px;
      height: 60px;
      background-size: 100%;
      background-color: transparent;
      margin: 0 30px 0 auto;
      background-position: right 0px center;
      :active {
        transform: scale(1);
        -webkit-transform: scale(1);
      }
    `}

  ${({ moreIcon }) =>
    moreIcon &&
    css`
      margin: 0 15px;
      padding: 0px;
      background-size: 15%;
      background-color: transparent;
    `}
  ${({ backIcon }) =>
    backIcon &&
    css`
      min-width: 10px;
      height: 30px;
      margin: 0 15px;
    `} 
  ${({ playlist }) =>
    playlist &&
    css`
      width: 25px;
      margin: 0 40px;
    `}
  ${({ hideIcon }) =>
    hideIcon &&
    css`
      margin: 20px;
      background-color: transparent;
    `}
  ${({ active }) =>
    active &&
    css`
      filter: invert(100%) sepia(80%) saturate(800%) hue-rotate(205deg) brightness(100%)
        contrast(106%);
    `}
`;

const MoreWrapper = styled.div`
  display: flex;
  height: 30px;
  flex-direction: column;
  background-color: transparent;
  border: none;
  padding: 0 25px 0 0;
  :active {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }
`;

const ButtonIcon = ({ onClick, icon, ...rest }) => (
  <>
    {!rest.moreIcon && <IconBtn onClick={onClick} icon={icon} {...rest} />}
    {rest.moreIcon && (
      <MoreWrapper onClick={onClick}>
        <IconBtn icon={icon} {...rest} />
        <IconBtn icon={icon} {...rest} />
        <IconBtn icon={icon} {...rest} />
      </MoreWrapper>
    )}
  </>
);

export default ButtonIcon;
