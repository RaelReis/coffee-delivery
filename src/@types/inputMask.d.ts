import 'react-input-mask'

interface PropsWithMaskChar {
  maskChar: string | null
}

declare module 'react-input-mask' {
  export interface Props extends PropsWithMaskChar {}
}
