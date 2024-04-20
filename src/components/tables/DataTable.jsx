import React, { useState, useEffect } from 'react';

const DataTable = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const minPages = 1;

    const filteredData = data.filter(item =>
        item['Nation'].toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedData = sortBy
        ? [...filteredData].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a[sortBy] > b[sortBy] ? 1 : -1;
            } else {
                return a[sortBy] < b[sortBy] ? 1 : -1;
            }
        })
        : filteredData;

    const totalPages = Math.max(
        minPages,
        Math.ceil(filteredData.length / itemsPerPage)
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = sortedData.slice(startIndex, endIndex);

    const handleSort = column => {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [totalPages, currentPage]);

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        const totalPagesToShow = Math.min(totalPages, maxVisiblePages);

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
                for (let i = 1; i <= maxVisiblePages; i++) {
                    pageNumbers.push(i);
                }
            } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
                for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                const middlePageIndex = Math.ceil(maxVisiblePages / 2);
                for (let i = currentPage - middlePageIndex + 1; i <= currentPage + middlePageIndex - 1; i++) {
                    pageNumbers.push(i);
                }
            }
        }

        return pageNumbers.map(number => (
            <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`px-3 py-1 border rounded border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${currentPage === number ? 'bg-blue-500 text-white' : ''}`}
            >
                {number}
            </button>
        ));
    };


    return (
        <div className="container mx-auto mt-5">
            <h1 className='text-3xl md:text-5xl text-center pt-12 pb-12'>Table Data</h1>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 px-3 md:px-0">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="mb-2 md:mb-0 px-4 py-2 border rounded-md w-full md:w-auto"
                />
                <select
                    value={itemsPerPage}
                    onChange={e => setItemsPerPage(parseInt(e.target.value))}
                    className="px-4 py-2 border rounded-md w-full md:w-auto"
                >
                    <option value={5}>5 items per page</option>
                    <option value={10}>10 items per page</option>
                    <option value={15}>15 items per page</option>
                    <option value={20}>20 items per page</option>
                </select>
            </div>
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 border border-gray-200 text-left text-sm md:text-base"
                        >
                            ID Nation
                        </th>
                        <th
                            onClick={() => handleSort('name')}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 border border-gray-200 text-left text-sm md:text-base"
                        >
                            Nation
                        </th>
                        <th
                            onClick={() => handleSort('age')}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 border border-gray-200 text-left text-sm md:text-base"
                        >
                            Year
                        </th>
                        <th
                            onClick={() => handleSort('email')}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 border border-gray-200 text-left text-sm md:text-base"
                        >
                            Population
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((item, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border border-gray-200 text-sm md:text-base">{item['ID Nation']}</td>
                            <td className="px-4 py-2 border border-gray-200 text-sm md:text-base">{item['Nation']}</td>
                            <td className="px-4 py-2 border border-gray-200 text-sm md:text-base">{item['Year']}</td>
                            <td className="px-4 py-2 border border-gray-200 text-sm md:text-base">{item['Population']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
                <div></div>
                <div className="flex space-x-2">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="px-3 py-1 border rounded border-gray-200 hover:bg-gray-100"
                    >
                        Prev
                    </button>
                    {renderPageNumbers()}
                    <button
                        disabled={currentPage >= totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-3 py-1 border rounded border-gray-200 hover:bg-gray-100"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
