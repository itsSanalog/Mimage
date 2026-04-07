export class UiStateController {
  constructor(app) {
    this.app = app;
  }

  hideIntroButtons() {
    return;
  }

  applyImageLoadedUiState() {
    const refs = this.app.canvasArea.refs;

    refs.dropOverlay.classList.add('hidden');
    refs.actionBar.classList.remove('hidden');
    this.hideIntroButtons();
    refs.uploadButton.classList.remove('hidden');
    refs.copyImageButton.classList.remove('hidden');
    refs.downloadButton.classList.remove('hidden');
    refs.exportPresetSelect.classList.remove('hidden');
    refs.exportSizeSelect.classList.remove('hidden');
    refs.exportFormatSelect.classList.remove('hidden');
    this.app.updateExportQualityUi();
    refs.zoomOutButton.classList.remove('hidden');
    refs.zoomLabel.classList.remove('hidden');
    refs.zoomInButton.classList.remove('hidden');
    refs.fitViewButton.classList.remove('hidden');
    refs.actualSizeButton.classList.remove('hidden');
  }

  applyRestoredSessionUiState() {
    const refs = this.app.canvasArea.refs;
    const hasUploadedUrl = Boolean(refs.uploadedUrl.value.trim());

    refs.uploadButton.textContent = hasUploadedUrl ? 'Reupload' : 'Upload to Imgur';
    refs.actionBar.classList.remove('hidden');
    refs.uploadedUrl.classList.toggle('hidden', !hasUploadedUrl);
    refs.copyUrlButton.classList.toggle('hidden', !hasUploadedUrl);
    refs.checkRisButton.classList.toggle('hidden', !hasUploadedUrl);
    refs.roundTitle.classList.toggle('hidden', !hasUploadedUrl);
    refs.roundAnswer.classList.toggle('hidden', !hasUploadedUrl);
    refs.exportButton.classList.toggle('hidden', !hasUploadedUrl);
  }

  updateWorkflowStatus() {
    // No-op: workflow status text has been removed from the UI.
  }
}
