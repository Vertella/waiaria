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

function openMenu() {
    const element = document.getElementById("menuContent");
    element.showModal();
    const firstFocusableElement = element.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusableElement) {
        firstFocusableElement.focus();
    }
}