import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.2rem;

  form {
    margin-top: 4rem;

    display: flex;
    align-items: flex-start;
    gap: 3.2rem;

    @media (max-width: 1332px) {
      flex-direction: column-reverse;
      gap: 1.6rem;
    }

    h2 {
      font-family: 'Baloo 2', cursive;
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 1.3;
    }

    .error-message {
      margin-top: 0.5rem;
      margin-left: 1rem;
      color: ${(props) => props.theme.danger};
      font-size: 1.2rem;
    }
  }
`
