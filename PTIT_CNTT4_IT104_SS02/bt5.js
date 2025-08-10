let phoneBook = {
    
}

function addContact(name, phone, address) {
    if (!name || !phone || !address) {
        console.log("Vui lòng nhập đầy đủ thông tin: tên, số điện thoại và địa chỉ.");
        return;
    }
    phoneBook[name] = { phone, address };
    console.log(`Đã thêm ${name} vào danh bạ.`);
}
function displayContacts(phoneBook) {
    if (Object.keys(phoneBook).length === 0) {
        console.log("Danh bạ hiện tại trống.");
        return;
    }
    console.log("Danh bạ hiện tại:");
    for (let name in phoneBook) {
        console.log(`Tên: ${name}, Số điện thoại: ${phoneBook[name].phone}, Địa chỉ: ${phoneBook[name].address}`);
    }
}
addContact("Hà", "0123456789", "Hà Nội");
addContact("Nam", "0987654321", "Hồ Chí Minh");
displayContacts(phoneBook);