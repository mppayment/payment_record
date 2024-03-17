function saveAttendance() {
    const className = document.getElementById('className').value;
    const date = document.getElementById('date').value;
    const attendanceTable = document.getElementById('attendanceTable');
    const rows = attendanceTable.getElementsByTagName('tr');
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Class Name,Date,Student Name,Present\n";
    
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const studentName = cells[0].innerText;
        const present = cells[1].querySelector('input[type="checkbox"]').checked ? "Yes" : "No";
        csvContent += `${className},${date},${studentName},${present}\n`;
    }
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance.csv");
    document.body.appendChild(link);
    link.click();
}
