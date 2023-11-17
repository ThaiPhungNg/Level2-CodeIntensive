


let dataArr = {
    "anna": "234509050",
    "Cris": "(864)-309-4841",
    "Bob": "(572)-566-2397",
    "Alice": "(816)-043-5456",
    "bo": "032459-932",
    "Daniel": "(816)-043-5456"
};



function renderPhoneBook(data) {
    let phoneBookBody = document.getElementById("phone-book-body");

    phoneBookBody.innerHTML = "";

    //  tạo các ô danh bạ
    for (let name in data) {
        //  div để chứa thông tin danh bạ
        let contactDiv = document.createElement("div");
        contactDiv.className = "phone-book-item";
        contactDiv.style = "margin-top: 30px";
        //  span để hiển thị tên và số điện thoại
        let nameSpan = document.createElement("span");
        nameSpan.textContent = name;

        let phoneNumberSpan = document.createElement("span");
        phoneNumberSpan.textContent = data[name];

        contactDiv.appendChild(nameSpan);
        contactDiv.appendChild(phoneNumberSpan);

        phoneBookBody.appendChild(contactDiv);
    }
}


function sortPhoneBook(data) {
    // Tạo một mảng chứa tên (keys) sort with sensitive case
    let namesArray = Object.keys(data).sort((a, b) => a.localeCompare(b)); ;

    let sortedData = {};
    for (let name of namesArray) {
        sortedData[name] = data[name];
    }

    return sortedData;
}



function addContact(name, phoneNumber) {
    dataArr[name] = phoneNumber;
    let sortedData = sortPhoneBook(dataArr);
    renderPhoneBook(sortedData);

}

// Hàm xử lý sự kiện submit của form
function handleSubmit(event) {
    event.preventDefault();

    let nameInput = document.getElementById("userName");
    let phoneNumberInput = document.getElementById("phoneNumber");

    let newName = nameInput.value.trim();
    let newPhoneNumber = phoneNumberInput.value.trim();

    if (newName !== "" && newPhoneNumber !== "") {
    
        addContact(newName, newPhoneNumber);
        console.log(dataArr);

        nameInput.value = "";
        phoneNumberInput.value = "";
    }
}

// tìm kiếm danh bạ theo tên hoặc số điện thoại
function searchPhoneBook(keyword) {
    let lowerKeyword = keyword.toLowerCase(); 
    let filteredData = {};
  
    for (let name in dataArr) {
      let lowerName = name.toLowerCase(); 
      let phoneNumber = dataArr[name].toLowerCase(); 
    
      if (lowerName.includes(lowerKeyword) || phoneNumber.includes(lowerKeyword)) {
        filteredData[name] = dataArr[name];
      }
    }
  
    return filteredData;
  }
  
  // xử lý sự kiện click TÌM
  function handleSearch(event) {
    event.preventDefault();
  
    let keywordInput = document.getElementById("keyword");
    let keyword = keywordInput.value.trim();
  
    let searchResult = searchPhoneBook(keyword);
    renderPhoneBook(searchResult);
  }

  
  //  xóa các danh bạ trùng số điện thoại
function deleteDuplicates() {
    let seenNumbers = {}; // số điện thoại đã xuất hiện
    let newDataArr = {}; 
  
    for (let name in dataArr) {
      let phoneNumber = dataArr[name];
  
      // chưa xuất hiện thêm vào list mới
      if (!seenNumbers[phoneNumber]) {
        seenNumbers[phoneNumber] = true;
        newDataArr[name] = phoneNumber;
      }

    }
    console.log(newDataArr);
    dataArr = newDataArr; 
  }
  
  //  xử lý sự kiện click XÓA TRÙNG
  function handleDeleteDuplicates(event) {
    event.preventDefault();
    console.log("Nút XÓA TRÙNG đã được nhấn.");

    deleteDuplicates();
    console.log(dataArr);
    let sortedData = sortPhoneBook(dataArr);
    
    renderPhoneBook(sortedData);
    
  }

let sortedData = sortPhoneBook(dataArr);
renderPhoneBook(sortedData);
document.getElementById("phone-book-form").addEventListener("submit", handleSubmit);
document.getElementById("btnSearch").addEventListener("click", handleSearch);
document.getElementById("btnDeleteReplace").addEventListener("click", handleDeleteDuplicates);
