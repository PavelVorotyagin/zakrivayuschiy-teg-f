const saveDialog = document.querySelector('#save');
const openSaveDialogButton = document.querySelector('#save-open-button');
const closeSaveDialogButton = document.querySelector('#save-close-button');

if (saveDialog && openSaveDialogButton && closeSaveDialogButton) {
  openSaveDialogButton.addEventListener('click', () => {
    saveDialog.showModal();
  });

  closeSaveDialogButton.addEventListener('click', () => {
    saveDialog.close();
  });
}
