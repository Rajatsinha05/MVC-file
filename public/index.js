document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let studentdata = {
    name: document.getElementById("name").value,
    course: document.getElementById("course").value,
    number: document.getElementById("number").value,
    city: document.getElementById("city").value,
    grid: document.getElementById("grid").value,
  };
  console.log(studentdata);

  fetch("http://localhost:8090/student/add", {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(studentdata)

  });
});
