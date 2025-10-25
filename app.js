document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchField = document.getElementById('searchField');
    const resultContent = document.getElementById('resultContent');
    
    // Load all superheroes on page load
    loadSuperheroes();
    
    // Search button click event
    searchBtn.addEventListener('click', function() {
        const query = searchField.value.trim();
        loadSuperheroes(query);
    });
    
    // Allow Enter key to trigger search
    searchField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = searchField.value.trim();
            loadSuperheroes(query);
        }
    });
    
    function loadSuperheroes(query = '') {
        const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : 'superheroes.php';
        
        fetch(url)
            .then(response => response.text())
            .then(data => {
                resultContent.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
                resultContent.innerHTML = '<p style="color: red;">An error occurred while fetching data.</p>';
            });
    }
});
