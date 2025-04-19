document.getElementById('form-examen').addEventListener('submit', function(e) {
    e.preventDefault();

    

    // Création d'un ID unique pour le propriétaire
    const proprietaireId = 'user_' + Math.random().toString(36).substr(2, 9);
    
    const examen = {
        id: Date.now().toString(),
        nom: document.getElementById('nom').value,
        duree: parseInt(document.getElementById('duree').value),
        description: document.getElementById('description').value,
        proprietaire: document.getElementById('proprietaire').value,
        proprietaireId: proprietaireId,
        questions: []
    };

    // Sauvegarde avec l'ID unique
    const examsKey = 'examens_' + proprietaireId;
    const exams = JSON.parse(localStorage.getItem(examsKey)) || [];
    exams.push(examen);
    localStorage.setItem(examsKey, JSON.stringify(exams));

    // Feedback amélioré

    window.alert('Examen ajouté avec succès !');
    this.reset();
});