import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import { Routes, Route } from 'react-router-dom'

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<Routes>
						<Route path='/metricas' element={<ContentRowMovies />} />
					</Routes>

					<ContentRowCenter />
					<Routes>
						<Route path='/peliculas' element={<Chart />}/>
					</Routes>
					
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;