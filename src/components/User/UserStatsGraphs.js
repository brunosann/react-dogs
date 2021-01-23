import React from 'react'
import styles from "./UserStatsGraphs.module.css";
import {VictoryPie, VictoryChart, VictoryBar} from 'victory'

const UserStatsGraphs = ({data}) => {
  const [graph, setGraph] = React.useState([])
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    console.log(data.length);
    const graphData = data.map(item => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })
    setGraph(graphData)
    setTotal(data.reduce((acc, acesso) => {
      return Number(acc) + Number(acesso.acessos)
    }, 0));
  }, [data])

  return (
    <section className={`animeLeft ${styles.graph}`}>
      {data.length <= 0 ? 
        (
          <div className={`${styles.total} ${styles.graphItem}`}>
            <p>Você ainda não postou uma foto</p>
          </div>
        ) 
          : 
        (
          <React.Fragment>
            {total <= 0 ?
              <div className={`${styles.total} ${styles.graphItem}`}>
                <p>Suas fotos ainda não tem acessos, quando aumentar os acessos podera conferir as estatísticas.</p>
              </div>
            :
            <React.Fragment>
              <div className={`${styles.total} ${styles.graphItem}`}>
                <p>Acessos: {total}</p>
              </div>
              <div className={styles.graphItem}>
                <VictoryPie 
                  data={graph} 
                  innerRadius={50} 
                  padding={{top: 20, bottom: 20, left: 80, right: 80}}
                  style={{
                    data: {
                      fillOpacity: .9,
                      stroke: '#fff',
                      strokeWidth: 2,
                    },
                    labels: {
                      fontSize: 10,
                      fill: "#333",
                    }
                  }}
                />
              </div>
              <div className={styles.graphItem}>
                <VictoryChart>
                  <VictoryBar alignment="start" data={graph}></VictoryBar>
                </VictoryChart>
              </div>
            </React.Fragment>
            }
          </React.Fragment>
        )
      }
      
    </section>
  )
}

export default UserStatsGraphs
