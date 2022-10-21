import React from 'react'
import ReactPaginate from 'react-paginate';
const PaginationCompo = () => {
    return (
        <>
     
          <ReactPaginate
            breakLabel="..."
            nextLabel="التالي >"
            // onPageChange="{}"
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={1}
            previousLabel="< السابق"
            renderOnZeroPageCount={null}
            containerClassName={"pagination py-5 mt-5  justify-content-center"}
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName="page-item mx-1"
            previousLinkClassName="page-link"
            nextClassName='page-item mx-1'
            nextLinkClassName='page-link'
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName='active text-light'
            activeLinkClassName='text-light'
          />
        </>
      )
}

export default PaginationCompo