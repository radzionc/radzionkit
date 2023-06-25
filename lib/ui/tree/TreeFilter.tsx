import { Fragment } from 'react'


import { TreeFilterNode } from './TreeFilterNode'
import { areEqual } from 'lib/shared/hooks/areEqual'
import { InputProps } from 'lib/shared/props'
import { TreeNode } from 'lib/shared/utils/tree'
import { ConditionalWrapper } from '../ConditionalWrapper'
import { SameWidthChildrenRow } from '../Layout/SameWidthChildrenRow'
import { NonEmptyOnly } from '../NonEmptyOnly'
import { VStack } from '../Stack'

interface TreeFilterProps<T> extends InputProps<number[]> {
  tree: TreeNode<T>
  renderName: (value: T) => string
}

export function TreeFilter<T>({
  tree,
  renderName,
  value,
  onChange,
}: TreeFilterProps<T>) {
  const recursiveRender = (node: TreeNode<T>, path: number[]) => {
    return (
      <TreeFilterNode
        onSelect={() => onChange(path)}
        name={renderName(node.value)}
        isSelected={areEqual(path, value)}
      >
        <NonEmptyOnly
          array={node.children}
          render={() => (
            <ConditionalWrapper
              content={node.children.map((child, index) => (
                <Fragment key={index}>
                  {recursiveRender(child, [...path, index])}
                </Fragment>
              ))}
              condition={path.length % 2 === 1}
              true={(content) => (
                <VStack fullWidth gap={8}>
                  {content}
                </VStack>
              )}
              false={(content) => (
                <SameWidthChildrenRow fullWidth gap={8}>
                  {content}
                </SameWidthChildrenRow>
              )}
            />
          )}
        />
      </TreeFilterNode>
    )
  }

  return recursiveRender(tree, [])
}
