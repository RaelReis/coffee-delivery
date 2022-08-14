import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin: 11rem 0;

  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;

  form {
    margin-top: 4rem;
    width: calc(100% - 32rem);
    margin-inline: auto;

    display: flex;
    align-items: flex-start;
    gap: 3.2rem;

    h2 {
      font-family: 'Baloo 2', cursive;
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 1.3;
    }
  }
`
