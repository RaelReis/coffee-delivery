import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  width: min(100% - 32rem);
  margin-inline: auto;
  margin-top: 3.2rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    line-height: 1.3;
    font-size: 3.2rem;
  }

  @media (max-width: 500px) {
    width: min(100% - 16rem);
  }
`

export const List = styled.ul`
  list-style: none;
  margin-top: 5.4rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 4rem 3.2rem;

  @media (max-width: 760px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 2rem 1.6rem;
  }
`
