import $ from "jquery";
import _ from "lodash";

$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<button>Click here to get started</button>");
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");

function updateCounter() {
  let count = parseInt($("#count").text()) || 0;
  count++;
  $("#count").html(`${count} clicks on the button`);
}

$("button").on("click", _.debounce(updateCounter, 500));
