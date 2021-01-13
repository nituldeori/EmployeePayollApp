const stringifyDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric'};
    const newDate = !date ? "undefined" : new Date(date).toLocaleDateString('en-GB', options);
    return newDate;
}

const update = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id);
    if(!empPayrollData) return;
    localStorage.setItem('editEmp', JSON.stringify(empPayrollData));
    window.location.replace("employeepayrollui.html");
}

const checkName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (!nameRegex.test(name)) throw "Name is incorrect!";
}

const checStartDate = (startDate) => {
    let now = new Date();
    if(startDate>now) throw "startDate is future Date!";
    var diff = Math.abs(now.getTime() - startDate.getTime());
    if(diff/(1000*60*60*24) > 30) throw "StartDate is beyond 30 days!";
}