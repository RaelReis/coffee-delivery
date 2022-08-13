import {
  BannerWrapper,
  BannerContainer,
  BannerImageWrapper,
  BannerInfo,
  BannerItem,
  BannerItems,
} from './style'
import bannerImg from '../../../../assets/banner_img.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Banner() {
  return (
    <BannerWrapper>
      <BannerContainer>
        <BannerInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <BannerItems>
            <BannerItem>
              <div>
                <ShoppingCart weight="fill" size={20} />
              </div>
              <span>Compra simples e segura</span>
            </BannerItem>
            <BannerItem>
              <div>
                <Package weight="fill" size={20} />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </BannerItem>
            <BannerItem>
              <div>
                <Timer weight="fill" size={20} />
              </div>
              <span>Entrega rápida e rastreada</span>
            </BannerItem>
            <BannerItem>
              <div>
                <Coffee weight="fill" size={20} />
              </div>
              <span>O café chega fresquinho até você</span>
            </BannerItem>
          </BannerItems>
        </BannerInfo>
        <BannerImageWrapper>
          <img src={bannerImg} alt="" />
        </BannerImageWrapper>
      </BannerContainer>
    </BannerWrapper>
  )
}
