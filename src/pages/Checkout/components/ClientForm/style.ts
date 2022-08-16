import styled from 'styled-components'

export const ClientInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  & > svg {
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

  & > input {
    padding: 1.2rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid transparent;
    color: ${(props) => props.theme['base-text']};
    font-size: 1.4rem;
    line-height: 1.3;
  }

  & > input:focus {
    border-color: ${(props) => props.theme['yellow-600']};
  }

  #cep {
    grid-area: cep;
    width: 100%;
  }
  #rua {
    grid-area: rua;
    width: 100%;
  }
  #numero {
    grid-area: numero;
    width: 100%;
  }
  #complemento {
    grid-area: complemento;
    width: 100%;
  }
  #bairro {
    grid-area: bairro;
    width: 100%;
  }
  #cidade {
    grid-area: cidade;
    width: 100%;
  }
  #uf {
    grid-area: uf;
    width: 100%;
  }
`

export const PaymentBox = styled(ClientFormBox)``

export const PaymentHeader = styled(ClientFormBoxHeader)`
  & > svg {
    color: ${(props) => props.theme['purple-600']};
  }
`
export const PaymentContent = styled.div`
  margin-top: 4.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.2rem;

  & > button {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    padding: 1.6rem;
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    font-size: 1.2rem;
    line-height: 1.3;
    text-transform: uppercase;
    border-radius: 6px;
    transition: background-color 0.2s;
    text-align: left;
    cursor: pointer;
    svg {
      color: ${(props) => props.theme['purple-600']};
    }
  }

  & > button:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
