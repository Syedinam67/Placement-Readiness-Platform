import './index.css'

document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.closest('.btn-icon')) {
        const promptText = document.querySelector('.prompt-content').innerText;
        navigator.clipboard.writeText(promptText).then(() => {
            const originalText = e.target.closest('.btn-icon').innerHTML;
            e.target.closest('.btn-icon').innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            setTimeout(() => {
                e.target.closest('.btn-icon').innerHTML = originalText;
            }, 2000);
        });
    }
});

console.log('KodNest Premium Build System initialized.');
