const isMobile = window.matchMedia("(max-width: 768px)").matches;

window.onload = () => {
    document.getElementById('download-btn').style.display = 'block';
};

function downloadPage() {
    if (isMobile) {
        downloadFile('assets/doc/deepak-kb_cv.pdf');
    } else {
        const element = document.getElementById('cv-main'); // whole page
        const options = {
            margin: [10, 0, 10, 0],
            filename: 'deepak-kb_cv.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
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
}

function downloadFile(url, filename = 'deepak-kb_cv.pdf') {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}