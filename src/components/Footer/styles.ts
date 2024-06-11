import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.gray};
  padding: 32px 0;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const LinkItem = styled.a`
  color: ${colors.lightGray};
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
