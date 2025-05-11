import { Grid as MUIGrid, GridProps as MUIGridProps } from '@mui/material'

export type GridProps = MUIGridProps

const Grid: React.FC<GridProps> = ({ children, ...props }) => {
  return <MUIGrid {...props}>{children}</MUIGrid>
}

export default Grid
