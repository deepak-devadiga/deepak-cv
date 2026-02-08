function downloadPage() {
    const element = document.body; // whole page
    const options = {
        margin: 0.5,
        filename: 'deepak-kb_cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    console.log('Downloading page as PDF...', options); \

    const hidden = document.querySelectorAll('.no-pdf');

    hidden.forEach(el => el.style.display = 'none');

    html2pdf()
        .from(document.body)
        .save()
        .then(() => {
            hidden.forEach(el => el.style.display = '');
        });

    html2pdf().set(options).from(element).save();
}