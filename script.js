
function executar() {
    // Carrega o primeiro arquivo JSON e modifica seu conteúdo
    fetch('broken_database_1.json')
        .then(response => response.json()) // Analisa os dados JSON
        .then(parsedData => {
            // Modifica o conteúdo de cada objeto no array JSON
            parsedData.forEach(obj => {
                obj.nome = obj.nome.replace(/æ/g, 'a'); // æ -> a
                obj.nome = obj.nome.replace(/ø/g, 'o'); // ø -> o
                obj.vendas = parseInt(obj.vendas); // Converte o campo 'vendas' de string para inteiro
            });

            // Converte os dados modificados de volta para uma string JSON
            const newData = JSON.stringify(parsedData);

            // Cria um novo arquivo para os dados modificados
            const blob = new Blob([newData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'new_database_1.json'; // Define o nome do arquivo para os novos dados
            a.click(); // Inicia o download do novo arquivo
        })
        .catch(error => console.error(error)); //Captura e trata quaisquer erros que ocorram durante o processo, escrevendo uma mensagem de erro no console do navegador.

    // Carrega o segundo arquivo JSON e modifica seu conteúdo
    fetch('broken_database_2.json')
        .then(response => response.json()) // Analisa os dados JSON
        .then(parsedData => {
            // Modifica o conteúdo de cada objeto no array JSON
            parsedData.forEach(obj => {
                obj.marca = obj.marca.replace(/æ/g, 'a');
                obj.marca = obj.marca.replace(/ø/g, 'o');
            });

            // Converte os dados modificados de volta para uma string JSON
            const newData = JSON.stringify(parsedData);

            // Cria um novo arquivo para os dados modificados
            const blob = new Blob([newData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'new_database_2.json'; // Define o nome do arquivo para os novos dados
            a.click(); // Inicia o download do novo arquivo
        })
        .catch(error => console.error(error));
}
