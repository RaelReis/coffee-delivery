import styled, { keyframes } from 'styled-components'

const gorwingCircle = keyframes`
  0% {
    transform: scale(.5)
  }
  50% {
    transform: scale(1.2)
  }
  100% {
    transform: scale(1)
  }
`

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.background};

  z-index: 99;
`

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: calc(100% - 32rem);
  margin-inline: auto;
  padding: 3.2rem 0;

  img {
    width: 8rem;
  }

  @media (max-width: 600px) {
    width: calc(100% - 8rem);
  }
`

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  > span {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.8rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['purple-100']};
    color: ${(props) => props.theme['purple-600']};
  }

  a {
    color: ${(props) => props.theme['yellow-600']};
    line-height: 0;
    padding: 0.8rem;
    background-color: ${(props) => props.theme['yellow-100']};
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s;

    :hover {
      background-color: ${(props) => props.theme['yellow-300']};
    }
  }
`

export const CartNumber = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme['yellow-600']};
  border-radius: 50%;

  position: absolute;
  top: -10px;
  right: -10px;

  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${gorwingCircle} 0.4s ease;
`
