import { useState } from 'react'

import Section from '../Section'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'

import * as S from './styles'

type Props = {
  defaultCover: string
  name: string
  itens: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, itens }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Itens>
          {itens.map((media: GalleryItem, index: number) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Itens>
      </Section>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt=""
              onClick={() =>
                setModal({
                  isVisible: false,
                  type: 'image',
                  url: ''
                })
              }
            />
          </header>
          {modal.type === 'video' ? (
            <iframe
              frameBorder={0}
              src={modal.url}
              title="YouTube video player"
            />
          ) : (
            <img src={modal.url} alt="" />
          )}
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => setModal({ ...modal, isVisible: false })}
        ></div>
      </S.Modal>
    </>
  )
}

export default Gallery
