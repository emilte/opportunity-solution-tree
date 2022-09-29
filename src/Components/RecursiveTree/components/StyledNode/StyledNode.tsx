import { Children } from '../../../../types';
import './StyledNode.css';

export type StyledNodeProps = {
  children: Children;
  style?: React.CSSProperties | undefined;
}

export function StyledNode({children, style}:StyledNodeProps) {
  return (
    <div className='tree-node' style={style}>
      {children}
    </div>
  );
}
