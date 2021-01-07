const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Narayan Mahadevan',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '5000000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Hayato Dangal',
            _gender: 'female',
            _department: [
                'Sales'
            ],
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime()+1,
            _profilePic: '../assets/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label>${dept}</div>`
    }
    return deptHtml;
}