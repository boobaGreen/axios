/* console.log("ciao");
axios
  .get("https://reqres.in/api/users?page=2")
  .then((res) => {
    handleResult(res);
  })
  .catch((err) => console.log(err));

function handleResult(data) {
  console.log(data);
} */

/* axios
  .get("https://example-endpoint.com/api")
  .then((res) => console.log(res)) // Logs result object
  .catch((err) => console.log(err)); // Logs error */
/* Response 200 + l'oggetto con  
{
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },..........*/

/* axios
  .post("https://reqres.in/api/users", {
    name: "boobagreen",
    job: "Maroni Group",
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); */

// La risposta del server per esempio in caso di successo e' 201 e l'oggetto
/* {
  "name": "morpheus",
  "job": "leader",
  "id": "963",
  "createdAt": "2023-04-25T13:07:21.270Z"
} */

/* axios
  .put("https://reqres.in/api/users/3", {
    name: "Mark",
    job: "mammamia",
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
 */
// over writing PUT
// result 200 piu' oggetto in esempio:
/* {
  "name": "morpheus",
  "job": "zion resident",
  "updatedAt": "2023-04-25T13:15:21.589Z"
} */

// DELETE response 204

axios
  .delete("https://reqres.in/api/users/3")
  .then((res) => console.log(res)) // Logs result object
  .catch((err) => console.log(err)); // Logs error
