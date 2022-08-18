import styled from 'styled-components'

export const ClientInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  .error-message {
    margin-top: 0.5rem;
    margin-left: 1rem;
    color: ${(props) => props.theme.danger};
    font-size: 1.2rem;
  }
`

const ClientFormBoxHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 1.4rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
const ClientFormBox = styled.div`
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 4rem;
  border-radius: 6px;
`

export const AdressBox = styled(ClientFormBox)``

export const AddressHeader = styled(ClientFormBoxHeader)`
  > svg {
    color: ${(props) => props.theme['yellow-600']};
  }
`
export const InputsWrapper = styled.div`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: 3fr 4fr 1fr;
  grid-template-areas:
    'cep . .'
    'rua rua rua '
    'numero complemento complemento'
    'bairro cidade uf';
  gap: 1.6rem 1.2rem;

  #cep {
    grid-area: cep;
  }
  #rua {
    grid-area: rua;
  }
  #numero {
    grid-area: numero;
  }
  #complemento {
    grid-area: complemento;
  }
  #bairro {
    grid-area: bairro;
  }
  #cidade {
    grid-area: cidade;
  }
  #uf {
    grid-area: uf;
  }
`

export const PaymentBox = styled(ClientFormBox)``

export const PaymentHeader = styled(ClientFormBoxHeader)`
  > svg {
    color: ${(props) => props.theme['purple-600']};
  }
`
export const PaymentContent = styled.div`
  margin-top: 4.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.2rem;

  > input {
    display: none;
  }

  > label {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    padding: 1.6rem;
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    font-size: 1.2rem;
    line-height: 1.3;
    text-transform: uppercase;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: all 0.2s;
    text-align: left;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme['base-hover']};
    }

    svg {
      color: ${(props) => props.theme['purple-600']};
    }
  }

  > input:checked + label {
    background-color: ${(props) => props.theme['purple-100']};
    border-color: ${(props) => props.theme['purple-300']};
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > input {
    width: 100%;
    padding: 1.2rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid transparent;
    color: ${(props) => props.theme['base-text']};
    font-size: 1.4rem;
    line-height: 1.3;

    :focus {
      border-color: ${(props) => props.theme['yellow-600']};
    }
  }
`
