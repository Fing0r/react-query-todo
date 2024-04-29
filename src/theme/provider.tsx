import { ChakraProvider as BaseChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { theme } from './styles'

interface Props {
    children: ReactNode
}

const ChakraProvider = ({ children }: Props) => (
    <BaseChakraProvider theme={theme}>{children}</BaseChakraProvider>
)

export { ChakraProvider }
