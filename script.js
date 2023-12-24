// Control the Popup With JavaScript Code
// You will use JavaScript to open and close the modal window by showing or hiding it. Add event listeners to the button to trigger it to open and close when you click it.

// First select the relevant elements using the CSS classes that you defined in the HTML:

let modalContent = document.querySelector(".modal-content");
let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let blurBg = document.querySelector(".blur-bg");


// Add an event listener to the open-modal button so that it opens the window when you click it.

openModal.addEventListener("click", function () {
    modalContent.classList.remove("hidden-modal");
    blurBg.classList.remove("hidden-blur");
});


// Perform the opposite actions to handle closing the popup but, this time, wrap them in a named function. This will handle the behavior for multiple events that may cause the modal window to close:


let closeModalFunction = function () {
    modalContent.classList.add("hidden-modal")
    blurBg.classList.add("hidden-blur")
}

// Add event listeners to handle clicks on the background or close button, and the case where the user presses the Escape key.


blurBg.addEventListener("click", closeModalFunction);
closeModal.addEventListener("click", closeModalFunction);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape"
        && !modalContent.classList.contains("hidden")
    ) {
        closeModalFunction();
    }
});

// Now, when you click on the Hello! button, the modal appears. 
// You can close it by clicking the cancel button on the right of the window. See the code on codepen.io and interact with the modal:

