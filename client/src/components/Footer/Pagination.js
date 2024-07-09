import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, gotoPrevious, gotoNext }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(0, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <a key={i} href="#" onClick={(e) => {
                    e.preventDefault();
                    onPageChange(i);
                }} className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === i ? 'bg-indigo-600 text-white' : ''}`}>
                    {i + 1}
                </a>
            );
        }
        
        if (startPage > 1) {
            // Add start ellipsis
            pageNumbers.unshift(
                <span key="startEllipsis" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    ...
                </span>
            );

            // Add first page
            pageNumbers.unshift(
                <a key={1} href="#" onClick={(e) => {
                    e.preventDefault();
                    onPageChange(0);
                }} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    1
                </a>
            );
        }

        
        if (endPage < totalPages) {
            // Add end ellipsis
            pageNumbers.push(
                <span key="endEllipsis" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    ...
                </span>
            )

            // Add last page
            pageNumbers.push(
                <a key={totalPages} href="#" onClick={(e) => {
                    e.preventDefault();
                    onPageChange(totalPages);
                }} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    {totalPages}
                </a>
            );
        }
        
        return pageNumbers;
    };

    return (
        <div>
            {/* Tailwind Styled */}
            {/* Main Pagination */}
            <div>   
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    {/* Left Arrow Button */}
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 0) gotoPrevious();
                    }} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"> 
                        <span className="sr-only">Previous</span>  
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                        </svg>
                    </a>
                    
                    {renderPageNumbers()}

                    {/* Right Arrow Button */}
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) gotoNext();
                    }} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;