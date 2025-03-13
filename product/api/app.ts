import { reportError } from '@lib/lambda/reportError'
import { attempt } from '@lib/utils/attempt'
import { getErrorMessage } from '@lib/utils/getErrorMessage'
import { pick } from '@lib/utils/record/pick'
import { ApiError } from '@product/api-interface/ApiError'
import { ApiMethodName } from '@product/api-interface/ApiInterface'
import cors from 'cors'
import express, { Router } from 'express'

import { implementation } from './resolvers'
import { ApiResolverParams } from './resolvers/ApiResolver'
import { getResolverContext } from './resolvers/utils/getResolverContext'

const router = Router()

router.use(express.json())

Object.entries(implementation).forEach(([endpoint, resolver]) => {
  router.post(`/${endpoint}`, async (req, res) => {
    const input = req.body
    const context = await getResolverContext(req)

    const resolverParams: ApiResolverParams<ApiMethodName> = {
      input,
      context,
    }

    const { error } = await attempt(async () => {
      const response = await resolver(resolverParams as never)
      res.json(response)
    })

    if (error) {
      const isApiError = error instanceof ApiError
      if (!isApiError) {
        reportError(error, { endpoint, input, context })
      }

      const response = pick(
        isApiError ? error : new ApiError('unknown', getErrorMessage(error)),
        ['id', 'message'],
      )

      res.status(400).json(response)
    }
  })
})

export const app = express()

app.use(cors())

app.use('/', router)
