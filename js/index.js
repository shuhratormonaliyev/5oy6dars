document.getElementById('account').addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const email = document.getElementById('email').value;
    
    
    const table = document.getElementById('dataTable').querySelector('tbody');
    const newRow = table.insertRow();
    
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    
    cell1.textContent = firstName;
    cell2.textContent = lastName;
    cell3.textContent = mobileNumber;
    cell4.textContent = email;
    
    document.getElementById('account').reset();
});
