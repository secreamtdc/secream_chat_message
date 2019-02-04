import React from 'react'

export default (props) => {
  const { persons2 } = props
  
  return (
    <div>
      <style jsx>{`
            td,  th {
            border: 1px solid #ddd;
            padding: 8px;
            }

            tr:nth-child(even){background-color: #f2f2f2;}

            tr:hover {background-color: #ddd;}

            th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #4CAF50;
            color: white;
            }

        `}
      </style>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {persons2.map(person =>
          <tr>
            <td>{person.name}</td>
            <td>{person.age}</td>
          </tr>
        )}
      </table></div>
  )
}