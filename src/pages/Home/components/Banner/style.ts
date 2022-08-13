import styled from 'styled-components'

export const BannerWrapper = styled.section`
  width: 100%;
  background-image: url(src/assets/banner_bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const BannerContainer = styled.div`
  width: min(100% - 32rem);
  margin-inline: auto;
  padding: 9.2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BannerInfo = styled.div`
  width: 100%;
  max-width: 70rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 4.8rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 1.6rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 2rem;
    line-height: 1.3;
  }
`

export const BannerImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 47rem;
    min-width: 37rem;
    width: 100%;
    height: auto;
  }
`

export const BannerItems = styled.div`
  margin-top: 6.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 4rem;
`

export const BannerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
  }

  :nth-child(1) div {
    background-color: ${(props) => props.theme['yellow-600']};
  }

  :nth-child(2) div {
    background-color: ${(props) => props.theme['base-text']};
  }

  :nth-child(3) div {
    background-color: ${(props) => props.theme['yellow-300']};
  }
  :nth-child(4) div {
    background-color: ${(props) => props.theme['purple-300']};
  }
`
