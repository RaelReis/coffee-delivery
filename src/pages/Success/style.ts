import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: min(100% - 32rem);
  margin: 11rem 0;
  flex: 1;
  margin-inline: auto;

  header {
    margin-top: 8rem;

    h2 {
      font-family: 'Baloo 2', cursive;
      font-size: 3.2rem;
      font-weight: 800;
      line-height: 1.3;
      color: ${(props) => props.theme['yellow-600']};
    }
    span {
      font-size: 2rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  .success-banner {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    gap: 10rem;

    .order-info {
      flex: 1;
      padding: 4rem;
      background: linear-gradient(#fff, #fff) padding-box,
        linear-gradient(
            135deg,
            rgba(219, 172, 44, 1) 0%,
            rgba(128, 71, 248, 1) 100%
          )
          border-box;
      border-width: 2px;
      border-style: solid;
      border-color: transparent;
      border-top-left-radius: 0.6rem;
      border-top-right-radius: 3.6rem;
      border-bottom-left-radius: 3.6rem;
      border-bottom-right-radius: 0.6rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .order-item {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        svg {
          color: ${(props) => props.theme.white};
        }
      }
      .icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.6rem;
        height: 3.6rem;
        border-radius: 50%;
      }

      .local {
        > .icon-wrapper {
          background-color: ${(props) => props.theme['purple-300']};
        }
      }

      .time {
        > .icon-wrapper {
          background-color: ${(props) => props.theme['yellow-300']};
        }
      }

      .payment {
        > .icon-wrapper {
          background-color: ${(props) => props.theme['yellow-600']};
        }
      }

      .text-wrapper {
        display: flex;
        flex-direction: column;
        line-height: 1.3;
        color: ${(props) => props.theme['base-text']};

        .bold-text {
          font-weight: bold;
        }
      }
    }
    img {
      flex: 1;
    }
  }
`
