import styled from 'styled-components'

export const CardInfoContainer = styled.div`
  width: 100%;

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

  button {
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

  button:hover {
    background-color: ${(props) => props.theme['yellow-600']};
  }
`

export const CartList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  max-height: 38.5rem;
  overflow: auto;
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

  span + span {
    font-size: 1.6rem;
    line-height: 1.3;
  }
`

export const TotalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.3;
  }
`
export const EmptyCart = styled.span`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
`