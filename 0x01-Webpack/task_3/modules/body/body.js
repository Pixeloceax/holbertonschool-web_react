import $ from "jquery";
import _ from "lodash";
import "./body.css";

$("body").append(
  "<button>Click here to get started<span id='count'></span></button>"
);

function updateCounter() {
  let count = parseInt($("#count").text()) || 0;
  count++;
  $("#count").text(`${count}`);
}

$("button").on("click", _.debounce(updateCounter, 500));
