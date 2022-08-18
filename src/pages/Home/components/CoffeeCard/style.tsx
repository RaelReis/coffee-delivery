import styled from 'styled-components'

export const ConfeeCardContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};

  padding: 2.4rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 8px;

  img {
    max-width: 12rem;
    margin-top: -4.4rem;
  }
`

export const CoffeInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.2rem;

  h3 {
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    line-height: 1.3;
    margin-top: 1.6rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-top: 0.8rem;
    font-size: 1.4rem;
    line-height: 1.4;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
  }
`

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;

  & > span {
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-600']};
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.4rem 0.8rem;
    border-radius: 100px;
  }
`

export const CoffeBuyBox = styled.div`
  margin-top: 3.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 1.4rem;

    span {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 2.4rem;
    }
  }

  > div {
    padding: 0.8rem;
    margin-left: 2.3rem;
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    button {
      line-height: 0;
      background-color: transparent;
      padding: 0.5rem;
      color: ${(props) => props.theme['purple-300']};
      transition: color 0.2s ease;
      cursor: pointer;
    }

    button:hover {
      color: ${(props) => props.theme['purple-600']};
    }
  }

  > button {
    color: ${(props) => props.theme['base-card']};
    line-height: 0;
    margin-left: 1.6rem;
    padding: 0.8rem;
    background-color: ${(props) => props.theme['purple-600']};
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  > button:hover {
    background-color: ${(props) => props.theme['purple-300']};
  }
`

export const QuantityNumber = styled.span`
  width: 2rem;
  text-align: center;
`
