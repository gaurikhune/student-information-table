import React, { useState } from 'react';
import './App.css';

import MaterialTable from 'material-table'

import AddIcon from '@material-ui/icons/Add';

function App() {
  const [tableData, setTableData] = useState([
    {"Roll No":1, "student name": "Gauri", mathmatics: 80, science:55, english:40, hindi:50, marathi:45,total:300/500,percentage:56.9,grade:"sixth class" },
    {"Roll No":2, "student name": "Mansi", mathmatics: 90 , science:60, english:35, hindi:66, marathi:78,total:425/500,percentage:58.4,grade:"fifth class" },
    {"Roll No":3,  "student name": "Rani", mathmatics: 70, science:70, english:30, hindi:88, marathi:95,total:389/500,percentage:67.5,grade:"forth class" },
    {"Roll No":4, "student name": "Rupali", mathmatics: 60 , science:80, english:40, hindi:45, marathi:78,total:300/500,percentage:34.8,grade:"third class" },
    {"Roll No":5, "student name" : "Aniket", mathmatics: 98, science:88, english:30, hindi:88, marathi:45,total:450/500,percentage:55.9,grade:"eight class" },
    {"Roll No":6, "student name": "Prem", mathmatics: 99 , science:90, english:40, hindi:89, marathi:99,total:464/500,percentage:85.9,grade:"second class" },
    {"Roll No":7, "student name": "Sagar", mathmatics: 85 , science:95, english:50, hindi:66, marathi:78,total:312/500,percentage:67.8,grade:"third class" },
    {"Roll No":8, "student name": "Shreyash", mathmatics: 100, science:99, english:70, hindi:50, marathi:49,total:412/500,percentage:88.3,grade:"first class" },
   
  ])
  const columns = [
    { title:"Roll No",field:"Roll No",sorting:false,grouping:false,},
    { title: " student Name", field: "student name", sorting: false, filtering: false, },
    { title: "mathmatics", field: "mathmatics", filterPlaceholder: "filter" },
    { title: "science", field: "science", align: "center", grouping: false },
    { title: "english", field: "science", align: "center", grouping: false },
    { title: "hindi", field: "science", align: "center", grouping: false },
    { title: "marathi", field: "science", align: "center", grouping: false },
    { title: "total", field: "science", align: "center", grouping: false },
    { title: "percentage", field: "science", align: "center", grouping: false },
    { title: "grade", field: "grade", align: "center", grouping: false },
    
   
  ]
  return (
    <div className="App">
      <h1 align="center">STUDENT INFORMATION</h1>


      <MaterialTable columns={columns} data={tableData}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setTableData([...tableData, newRow])

            setTimeout(() => resolve(), 500)
          }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => resolve(), 500)
            
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => resolve(), 1000)

          })
        }}
      
        title="Student Information"
        icons={{ Add: () => <AddIcon /> }} />
      <update/>
    </div>
  );
}

export default App;
