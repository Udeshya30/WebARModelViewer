document.addEventListener('DOMContentLoaded', () => {
    const modelSelect = document.getElementById('model-select');
    const modelViewer = document.getElementById('model-viewer');
    const modelName = document.getElementById('model-name');
    const qrCodeImg = document.getElementById('qr-code');

    // Log when the page is loaded
    console.log('Page loaded and script executed.');

    modelSelect.addEventListener('change', (event) => {
        const selectedOption = event.target.selectedOptions[0];
        const modelUrl = selectedOption.value;
        const modelNameText = selectedOption.getAttribute('data-name');

        // Log the selected values
        console.log('Model URL:', modelUrl);
        console.log('Model Name:', modelNameText);

        // Update model viewer source and model name
        modelViewer.src = modelUrl;
        modelName.textContent = modelNameText;

        // The QR code image is static, so no need to update the source
        // qrCodeImg.src = `./assets/images/Profile.png`;
    });

    // Trigger change event on page load to set initial state
    modelSelect.dispatchEvent(new Event('change'));
});
