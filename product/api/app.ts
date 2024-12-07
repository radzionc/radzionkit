import express, { Router } from 'express'
import cors from 'cors'
import { implementation } from './resolvers'
import { getErrorMessage } from '@lib/utils/getErrorMessage'
import { ApiResolverParams } from './resolvers/ApiResolver'
import { getResolverContext } from './resolvers/utils/getResolverContext'
import { ApiError } from '@product/api-interface/ApiError'
import { pick } from '@lib/utils/record/pick'
import { ApiMethodName } from '@product/api-interface/ApiInterface'
import { reportError } from '@lib/lambda/reportError'

const router = Router()

router.use(express.json())

Object.entries(implementation).forEach(([endpoint, resolver]) => {
  router.post(`/${endpoint}`, async (req, res) => {
    const input = req.body
    const context = await getResolverContext(req)

    try {
      const resolverParams: ApiResolverParams<ApiMethodName> = {
        input,
        context,
      }

      const response = await resolver(resolverParams as never)
      res.json(response)
    } catch (err) {
      const isApiError = err instanceof ApiError
      if (!isApiError) {
        reportError(err, { endpoint, input, context })
      }

      const response = pick(
        isApiError ? err : new ApiError('unknown', getErrorMessage(err)),
        ['id', 'message'],
      )

      res.status(400).json(response)
    }
  })
})

export const app = express()

app.use(cors())

app.use('/', router)
