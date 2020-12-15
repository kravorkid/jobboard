import Koa from 'koa'
import jobs from '@components/jobs/JobApi'
import cors from '@koa/cors'
import compression from 'koa-compress'
import helmet from 'koa-helmet'
import bodyparser from 'koa-bodyparser'
import morgan from 'koa-morgan'

const app = new Koa()

app
  .use(morgan('dev'))
  .use(cors({ origin: '*' }))
  .use(compression())
  .use(helmet())
  .use(bodyparser())
  .use(jobs.routes())
  .use(jobs.allowedMethods())

app.listen(process.env.PORT, () => console.log(`server listening to port: ${process.env.PORT}`))
