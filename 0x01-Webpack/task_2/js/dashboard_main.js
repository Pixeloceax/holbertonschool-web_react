import $ from "jquery";
import _ from "lodash";
import "../css/main.css";

let count = 0;

$("body").prepend("<div id='logo'></div>");
$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append(
  "<button>Click here to get started<span id='count'></span></button>"
);

function updateCounter() {
  let counter = parseInt($("#count").text()) || 0;
  counter++;
  $("#count").text(`${counter}`);
}

$("button").on("click", _.debounce(updateCounter, 500));
