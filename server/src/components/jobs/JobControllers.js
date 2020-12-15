import axios from 'axios'

const controllers = {}

controllers.index = async function (ctx, next) {
  const res = await axios.get('https://jobs.github.com/positions.json')
    .catch(e => { throw new Error(`Error during getting jobs: ${e}`) })
  ctx.body = res.data
}

controllers.id = async function (ctx, next) {
  const res = await axios.get(`https://jobs.github.com/positions/${ctx.params.id}.json`)
    .catch(e => { throw new Error(`Error during getting jobs: ${e}`) })
  ctx.body = res.data
}

export default controllers
