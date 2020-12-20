document.getElementById("submit_button").onclick = function () {
  let textarea = document.getElementById("input_message")
  let input = textarea.value
  textarea.value = input
};