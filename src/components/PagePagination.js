import React from 'react';
import { Pagination } from 'react-bootstrap';

const PagePagination = ({currentPage, setCurrentPage}) => {
   return (  
      <Pagination size="lg">
         <Pagination.Prev />
         <Pagination.Item>{currentPage}</Pagination.Item>
         <Pagination.Item>{currentPage + 1}</Pagination.Item>
         <Pagination.Next />
      </Pagination>

   );
}
 
export default PagePagination;