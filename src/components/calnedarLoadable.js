import React from "react"
import Loadable from 'react-loadable';


const LoadableCallendar=Loadable({
    loader:()=>import('./calendar'),
    loading() {
        return <div>Loading...</div>
      }
})

export default () => <div><LoadableCallendar/></div>