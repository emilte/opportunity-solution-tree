import { Tree, TreeNode } from 'react-organizational-chart';
import { StyledNode } from './components';

import './RecursiveTree.css';

export type TreeNode = {
  name: string;
  children: TreeNode[];
}

export type TreeRoot = {
  colors?: string[];
  lineHeight?: string;
  lineWidth?: string;
  lineColor?: string;
  nodePadding?: string;
  lineBorderRadius?: string;
  lineStyle?: string;
  tree: TreeNode;
}

type RecursiveTreeProps = {
  data: TreeRoot;
  className?: string;
}

export function RecursiveTree({data, className}: RecursiveTreeProps) {

  const level = 0;

  function getColor(level:number) {
    return data.colors ? data.colors[level % data.colors.length]: undefined;
  }

  function recursiveNodes(level: number, nodes: TreeNode[]) {
    const bg = getColor(level);
    return (
      nodes.map((child, i) => (
        <TreeNode 
          key={i} 
          label={<StyledNode style={{backgroundColor:bg}}>{child.name}</StyledNode>}
        >
          {child.children && recursiveNodes(level+1, child.children)}
        </TreeNode>
      ))
    );
  }

  return (
    <div className={className}>
      <Tree label={<StyledNode style={{backgroundColor:getColor(0)}}>{data.tree.name || 'Root'}</StyledNode>}
        lineWidth={data.lineWidth || '1.5px'}
        lineColor={data.lineColor || 'black'}
        lineHeight={data.lineHeight || '10vh'}
        nodePadding={data.nodePadding || '10px'}
        lineBorderRadius={data.lineBorderRadius || '20px'}
        lineStyle={data.lineStyle || 'solid'}
      >
        {recursiveNodes(level+1, data.tree.children)}
      </Tree>
    </div>
  );
}
