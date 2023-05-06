function countWords() {
    var text = document.getElementById('textInput').value;
    var words = text.trim().split(/\s+/);
    var wordCount = words.length;
    document.getElementById('wordCount').textContent = 'Word count: ' + wordCount;
  }
  