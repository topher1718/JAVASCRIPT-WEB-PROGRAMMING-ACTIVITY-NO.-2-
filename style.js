let records = [];

      function addRecord() {
        const fname = document.getElementById("fname").value;
        const mname = document.getElementById("mname").value;
        const lname = document.getElementById("lname").value;
        const age = document.getElementById("age").value;

        if (fname && lname && age) {
          const record = {
            fname: fname,
            mname: mname,
            lname: lname,
            age: age
          };
          records.push(record);
          displayRecords();
        } else {
          alert("Please enter values for First Name, Last Name, and Age.");
        }
      }

      function displayRecords() {
        const table = document.getElementById("recordTable");
        table.innerHTML = `
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        `;
        for (let i = 0; i < records.length; i++) {
          const record = records[i];
          const row = table.insertRow(-1);
          const fnameCell = row.insertCell(0);
          fnameCell.innerHTML = record.fname;
          const mnameCell = row.insertCell(1);
          mnameCell.innerHTML = record.mname;
          const lnameCell = row.insertCell(2);
          lnameCell.innerHTML = record.lname;
          const ageCell = row.insertCell(3);
          ageCell.innerHTML = record.age;
          const actionCell = row.insertCell(4);
          const editButton = document.createElement("button");
          editButton.innerHTML = "Edit";
          editButton.onclick = function() { editRecord(i); };
          const deleteButton = document.createElement("button");
          deleteButton.innerHTML = "Delete";
          deleteButton.onclick = function() { deleteRecord(i); };
          actionCell.appendChild(editButton);
          actionCell.appendChild(deleteButton);
        }
      }

      function editRecord(index) {
        const record = records[index]
      }