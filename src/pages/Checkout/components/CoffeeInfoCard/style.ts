import styled from 'styled-components'

export const CoffeeInfoCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
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

  span {
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
`
