import PropTypes from 'prop-types'

const { shape, string, number } = PropTypes

const cardDetailsType = shape({
  id: number,
  title: string,
  role: string,
  info: string,
  image: string,
  url: string,
  tech: string
})

export { cardDetailsType }
