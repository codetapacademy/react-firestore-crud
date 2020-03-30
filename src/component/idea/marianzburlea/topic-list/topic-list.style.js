import s from 'styled-components'

export const StyledTopicItem = s.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
`

export const StyledTopicEdit = s.button`
  grid-column: 2/3;
  grid-row: 1/3;
`

export const StyledTopicDelete = s.button`
  grid-column: 3/4;
  grid-row: 1/3;
`
