function toggleContent(sectionId) {
    var section = document.getElementById(sectionId);
    var content = section.querySelector('.subject-content');
    
    // Toggle the visibility of the content
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}
