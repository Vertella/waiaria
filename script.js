function openModal(dialogId, button) {
    var dialog = document.getElementById(dialogId);
    dialog.classList.remove('hidden');
}

function closeModal(button) {
    var dialog = button.closest('div');
    dialog.classList.add('hidden');
}

function openDialog() {
    const element = document.getElementById("accessibleDialog");
    element.showModal();
    const firstFocusableElement = element.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusableElement) {
        firstFocusableElement.focus();
    }
}

function closeDialog() {
    const element = document.getElementById("accessibleDialog");
    element.close();
    const firstFocusableElement = element.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusableElement) {
        firstFocusableElement.focus();
    }
}

function toggleMenu() {
    var menuContent = document.getElementById("menuContent");
    var menuButton = document.getElementById("menuButton");
    
    if (menuContent.style.display === "block") {
        menuContent.style.display = "none";
        menuButton.setAttribute("aria-expanded", "false");
    } else {
        menuContent.style.display = "block";
        menuButton.setAttribute("aria-expanded", "true");
    }

    const firstFocusableElement = element.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusableElement) {
        firstFocusableElement.focus();
    }
}