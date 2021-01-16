import React,{Component} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function(ComposedComponent) {
    class Content extends Component {
        render() {
            //if(localStorage.getItem('isAuth')==='true'){
                return (
                    <div id="wrapper">
                        <Sidebar />
                        <div id="page-wrapper" class="gray-bg">
                            <Navbar />
                            <ComposedComponent {...this.props} />
                            <Footer />
                        </div>
                    </div>
                )
            /*}
            else{
                this.props.history.push('/login')
                return(
                    <>
        
                    </>
                )
            }*/
        }
    }

    return Content
}
