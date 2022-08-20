import styled from 'styled-components'

export const CardInfoContainer = styled.div`
  width: 100%;
  min-width: 45rem;

  display: flex;
  flex-direction: column;
`

export const CartInfoBox = styled.div`
  margin-top: 1.5rem;

  background-color: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;

  padding: 4rem;

  display: flex;
  flex-direction: column;

  & > button {
    margin-top: 2.4rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    line-height: 1.3;
    font-weight: bold;
    font-size: 1.4rem;
    padding: 12px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  & > button:hover {
    background-color: ${(props) => props.theme['yellow-600']};
  }
`

export const CartList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  max-height: 38.5rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 1rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['yellow-300']};
    border-radius: 10px;
  }
`

export const PriceInfoBox = styled.div`
  margin-top: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    font-size: 1.4rem;
    line-height: 1.3;
  }

  & > span + span {
    font-size: 1.6rem;
    line-height: 1.3;
  }
`

export const TotalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.3;
  }
`
export const EmptyCart = styled.span`
  > span {
    display: block;
    font-family: 'Baloo 2', cursive;
    text-align: center;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-300']};
  }
  span + span {
    margin-top: 1rem;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
