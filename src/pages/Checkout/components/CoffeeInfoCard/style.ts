import styled from 'styled-components'

export const CoffeeInfoCardContainer = styled.li`
  display: flex;

  padding: 0.8rem 0.4rem 3.2rem 0.4rem;
  border-bottom: 2px solid ${(props) => props.theme['base-button']};

  & + & {
    padding: 3.2rem 0.4rem;
  }

  img {
    max-width: 7rem;
    width: 100%;
    height: auto;
  }

  > span {
    margin-left: auto;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    font-weight: bold;
  }
`

export const CoffeeCardOptions = styled.div`
  margin-left: 2rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 1.3;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const QuantityBox = styled.div`
  padding: 0.8rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  span {
    text-align: center;
  }

  button {
    line-height: 0;
    background-color: transparent;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['purple-300']};
    transition: color 0.2s ease;
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme['purple-600']};
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  text-transform: uppercase;
  padding: 0.8rem;
  color: ${(props) => props.theme['base-text']};
  font-size: 1.2rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  transition: background-color 0.2s;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme['purple-300']};
  }
`

export const QuantityNumber = styled.span`
  width: 2rem;
  text-align: center;
`
