import React from 'react'
import { Link } from 'react-router-dom'

function Content({history}) {
    return (
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center m-t-lg">
                        <h1>
                            INSPINIA Static Seed Project for BS4
                        </h1>
                        <small>
                            It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects and dev environment for these projects.
                        </small>
                    </div>
                    <button className="btn btn-primary" onClick={()=> history.push('/add')}>Adding</button>
                </div>
            </div>
        </div>
    )
}

export default Content;
