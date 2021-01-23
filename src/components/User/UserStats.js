import React from 'react'
import Head from '../Helpers/Head'
import useFetch from '../../Hooks/useFetch'
import { STATS_GET } from '../../api'
import Loading from '../Helpers/Loading'
import Error from '../Helpers//Error'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const {data, error, loading, request} = useFetch()

  React.useEffect(() => {
    const token = window.localStorage.getItem('token')
    async function getData() {
      const {url, options} = STATS_GET(token)
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data)
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatísticas" />
      <UserStatsGraphs data={data} />
    </React.Suspense>
  )
  else return null
}

export default UserStats
