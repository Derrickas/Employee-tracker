import React from 'react'


function Table(props) {
    function compare(a, b) {
        if (a.name.toLowerCase() > b.name.toLowerCase() ) {
          return -1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
        // a must be equal to b
        return 0;
      }
    const sort = () => {
        props.employees.sort(compare)
    }


    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" onClick={sort}>Name</th>
                    <th scope="col">Occupation</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => (
                 <tr>
                    <th scope="row">{employee.id}</th>
                <td>{employee.name}</td>
                    <td>{employee.occupation}</td>
                </tr>
                ))
                };
            </tbody>
        </table>
    )
}

export default Table;