import * as React from 'react'
import HomeBreadcrumbs from '../../components/BreadCrumbs/breadcrumbs'
import BasicTabs from '../../components/HomeTabs/HomeTabs'
import ResponsiveAppBar from '../../components/ResponsiveAppBar/ResponsiveAppBar'

export default function Home() {
    return (
        <>

        <ResponsiveAppBar loggedIn = {true}/>
        <div style={{'marginLeft':'100px'}}>
            <HomeBreadcrumbs/>
            <BasicTabs/>
        </div>
        </>
    )

}