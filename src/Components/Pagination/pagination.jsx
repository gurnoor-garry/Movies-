import React, { Component } from 'react';
import "./pagination.css"
class Pagination extends React.Component {
    render() { 
        return <nav> 
        <ul class="pagination justify-content-center" >
          {this.props.currPage == 1? <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>: <li class="page-item">
            <a class="page-link active" onClick={this.props.previousPage} href="#" tabindex="-1">Previous</a>
          </li>}
          
        
         {this.props.page.map((pageNumber)=>{
          return this.props.currPage == pageNumber ? <li class="page-item active sr-only" ><a class="page-link"  href="#">{pageNumber}</a></li>:
           <li class="page-item" ><a class="page-link" href="#" onClick={()=>{this.props.setPage(pageNumber)}}>{pageNumber}</a></li>
         })}
          {this.props.currPage == this.props.page.length? <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Next</a>
          </li>: <li class="page-item">
            <a class="page-link active" onClick={this.props.nextPage} href="#" tabindex="-1">Next</a>
          </li>}
         </ul>
        </nav>
      ;
    }
}
 
export default Pagination;