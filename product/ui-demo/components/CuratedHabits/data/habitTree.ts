import { TreeNode } from '@lib/utils/tree'

import { HabitId } from './habits'

export interface HabitTreeNodeValue {
  id: string
  habits?: HabitId[]
  color?: number
}

export interface HabitTreeNode extends TreeNode<HabitTreeNodeValue> {}

export const habitTree: HabitTreeNode = {
  value: {
    id: 'happiness',
    color: 5,
  },
  children: [
    {
      value: {
        id: 'health',
        color: 4,
      },
      children: [
        {
          value: {
            id: 'sleep',
            habits: [
              'sunlight',
              'limitCoffee',
              'noAlcohol',
              'earlySleep',
              'noLateFood',
              'noWorkAfterDinner',
              'noElectronicsInBedroom',
            ],
          },
          children: [],
        },
        {
          value: {
            id: 'nutrition',
            habits: ['morningFast', 'noLateFood', 'supplements', 'content'],
          },
          children: [],
        },
        {
          value: {
            id: 'body',
            habits: ['outdoors', 'exercise', 'walk'],
          },
          children: [],
        },
        {
          value: {
            id: 'mind',
            habits: [
              'meditation',
              'learn',
              'max',
              'noWorkAfterDinner',
              'noElectronicsInBedroom',
            ],
          },
          children: [],
        },
      ],
    },
    {
      value: {
        id: 'relationships',
        color: 11,
      },
      children: [
        {
          value: {
            id: 'marriage',
            habits: [
              'compliment',
              'review',
              'help',
              'noWorkAfterDinner',
              'noElectronicsInBedroom',
            ],
          },
          children: [],
        },
      ],
    },
    {
      value: {
        id: 'work',
        color: 2,
      },
      children: [
        {
          value: {
            id: 'productivity',
            habits: [
              'noWorkAfterDinner',
              'sunlight',
              'limitCoffee',
              'noAlcohol',
              'earlySleep',
              'morningFast',
              'prepare',
              'noEarlyCoffee',
              'noLateFood',
              'outdoors',
              'exercise',
              'noElectronicsInBedroom',
            ],
          },
          children: [],
        },
      ],
    },
  ],
}
