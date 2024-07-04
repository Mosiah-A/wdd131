document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date();
    var day = String(currentDate.getDate()).padStart(2, '0');
    var month = currentDate.toLocaleString('default', { month: 'short' });
    var year = currentDate.getFullYear();
    var formattedDate = `${day} ${month} ${year}`;
    var dateSpan = document.getElementById('date');
    dateSpan.textContent = formattedDate;
});

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.offering input[type="number"]');
    const totalSpan = document.querySelector('.total span');
    const clearButton = document.querySelector('.clear');
    
    // Função para calcular o total das doações
    function calcularTotal() {
        let total = 0;
        inputs.forEach(input => {
            total += parseFloat(input.value);
        });
        totalSpan.textContent = `$${total.toFixed(2)}`;
    }
    
    // Adiciona um listener para cada input para recalcular o total quando houver mudanças
    inputs.forEach(input => {
        input.addEventListener('input', calcularTotal);
    });
    
    // Função para limpar os campos
    clearButton.addEventListener('click', function() {
        inputs.forEach(input => {
            input.value = '0.00';
        });
        totalSpan.textContent = '$0.00';
    });
});
