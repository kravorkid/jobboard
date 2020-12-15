import Router from '@koa/router'
import controllers from './JobControllers'

const jobs = new Router({ prefix: '/jobs' })

jobs.get('/', controllers.index)
jobs.get('/:id', controllers.id)

export default jobs
