document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');
    
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        
        const xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resultDiv.innerHTML = xhr.responseText;
            }
        };
        
        let url = 'superheroes.php';
        if (query !== '') {
            url += '?query=' + encodeURIComponent(query);
        }
        
        xhr.open('GET', url, true);
        xhr.send();
    });
});
