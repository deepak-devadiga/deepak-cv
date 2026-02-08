function downloadPage() {
    const element = document.getElementById('cv-main'); // whole page
    const options = {
        margin: 0.5,
        filename: 'deepak-kb_cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
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