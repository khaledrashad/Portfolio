import React from 'react';

const Projects = () => {
    return <>
        <div className="container text-white py-5">
            <h2 className="text-center py-3 h-1">My Projects</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="projectCard my-5">
                        <h3 className='text-info'>Ecommerce Website</h3>
                        <p>Fully functional website built using React and JavaScript with a functional cart to add,remove or update your product and payment getway to complete your order</p>
                        <a href="https://github.com/khaledrashad/routeE-commerce" className='btn btn-danger'>Go to Github repository</a>
                    </div>
                    <div className="projectCard my-5">
                        <h3 className='text-info'>Recipes Website</h3>
                        <p>Recipes showing website with all functionality for calling, showing and filtering data using jQuery</p>
                        <a href="https://github.com/khaledrashad/RouteJsExam" className='btn btn-danger'>Go to Github repository</a>
                    </div>
                    <div className="projectCard my-5">
                        <h3 className='text-info'>Games Website</h3>
                        <p>Games showing website showing all games in database and specific games releated to different genres with details specific to each game</p>
                        <a href="https://github.com/khaledrashad/RouteGameSite" className='btn btn-danger'>Go to Github repository</a>
                    </div>
                    <div className="projectCard my-5">
                        <h3 className='text-info'>Weather Website</h3>
                        <p>Weather showing website fetching the data through openWeatherApi to show current weather for specific location </p>
                        <a href="https://github.com/khaledrashad/routeWeatherApp" className='btn btn-danger'>Go to Github repository</a>
                    </div>
                </div>
                <div className="col-md-6">

                    <div className="projectCard my-5">
                        <h3 className='text-info'>CRUD System</h3>
                        <p>CRUD system which has a form of input these input can be added to a table in the system it also allow read, update and delete any data in the table</p>
                        <a href="https://github.com/khaledrashad/routeCRUD" className='btn btn-danger'>Go to Github repository</a>
                    </div>
                    <div className="projectCard my-5">
                        <h3 className='text-info'>Page Routing</h3>
                        <p>Few pages Created using NextJs and TypeScript to test NextJs internal routing</p>
                        <a href="https://github.com/khaledrashad/routeWeatherApp" className='btn btn-danger'>Go to Github repository</a>
                    </div>
                    <div className="projectCard my-5">
                        <h3 className='text-info'>Landing page</h3>
                        <p>My first ever created landing page using JavaScript for DOM manipulation</p>
                        <a href="https://github.com/khaledrashad/routeWeatherApp" className='btn btn-danger'>Go to Github repository</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Projects;
