function formatDate() { 
    let time = new Date();
    let day = time.getDate();
    let month = time.getMonth() ; 
    let year = time.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + (month + 1);
    }
    console.log(`${day}/${month}/${year}`);
    
    
}

export { formatDate };