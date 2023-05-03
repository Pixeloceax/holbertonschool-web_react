import $ from "jquery";
import _ from "lodash";
import "./body.css";

$("body").append(
  "<button>Click here to get started<span id='count'></span></button>"
);

function updateCounter() {
  let counter = parseInt($("#count").text()) || 0;
  counter++;
  $("#count").text(`${counter}`);
}

$("button").on("click", _.debounce(updateCounter, 500));
