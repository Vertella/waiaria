function openDialog(dialogId, button) {
    var dialog = document.getElementById(dialogId);
    dialog.classList.remove('hidden');
    // Additional logic for focus management, etc.
}

function closeDialog(button) {
    var dialog = button.closest('.dialog');
    dialog.classList.add('hidden');
    // Additional logic for focus management, etc.
}