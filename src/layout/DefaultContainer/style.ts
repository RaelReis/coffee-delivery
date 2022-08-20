import styled from 'styled-components'

export const DefaultContainerContainer = styled.div`
  flex: 1;
  width: calc(100% - 32rem);
  margin: 11rem 0;
  margin-inline: auto;

  @media (max-width: 600px) {
    width: calc(100% - 8rem);
  }
`
