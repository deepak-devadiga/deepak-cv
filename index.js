function downloadPage() {
    const element = document.getElementById('cv-main'); // whole page
    const options = {
        margin: [10, 0, 10, 0],
        filename: 'deepak-kb_cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    const hidden = document.querySelectorAll('.no-pdf');

    hidden.forEach(el => el.style.display = 'none');

    html2pdf()
    .set(options)
        .from(document.body)
        .save()
        .then(() => {
            hidden.forEach(el => el.style.display = '');
        });
}