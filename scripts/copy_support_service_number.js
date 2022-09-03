function copy_support_service_number_on_click(evt = event) {
    evt.stopPropagation();
    let support_number = document.querySelector("#main_support_number").textContent;

    try {
      return navigator.clipboard.writeText(support_number);
    }

    catch {
      return alert("Sorry, this function actually doesn`t work 😔")
    }
  }

  let service_number_span = document.querySelector("#main_support_number");
  service_number_span.addEventListener("click", copy_support_service_number_on_click, false);