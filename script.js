    document.getElementById("translateBtn").addEventListener("click", translateText);

    function translateText() {
      var inputText = document.getElementById("inputText").value.toLowerCase(); // Convert input to lowercase for case-insensitive matching
      var translationDirection = document.getElementById("translationDirection").value;
      var translatedText;

      if (translationDirection === "en-to-koshi") {
        translatedText = generatePseudoTranslation(inputText);
      } else if (translationDirection === "koshi-to-en") {
        translatedText = reversePseudoTranslation(inputText);
      }

      document.getElementById("translationResult").textContent = "Translated Text: " + translatedText;
    }

    function generatePseudoTranslation(text) {
      var pseudoTranslation = "";
      for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        var translatedCharCode;
        if (charCode >= 97 && charCode <= 122) { // Check if character is lowercase letter
          translatedCharCode = charCode + 1;
          if (translatedCharCode > 122) {
            translatedCharCode = 97; // Wrap around if going beyond 'z'
          }
        } else {
          translatedCharCode = charCode; // Keep non-alphabetic characters unchanged
        }
        pseudoTranslation += String.fromCharCode(translatedCharCode);
      }
      // Add diacritics to the translation (example: ä, ö, å)
      pseudoTranslation = pseudoTranslation.replace(/a/g, 'ä').replace(/o/g, 'ö').replace(/e/g, 'å');
      return pseudoTranslation;
    }

    function reversePseudoTranslation(text) {
      var reversedTranslation = "";
      // Remove diacritics first
      text = text.replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/å/g, 'e');
      for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        var translatedCharCode;
        if (charCode >= 97 && charCode <= 122) { // Check if character is lowercase letter
          translatedCharCode = charCode - 1;
          if (translatedCharCode < 97) {
            translatedCharCode = 122; // Wrap around if going beyond 'a'
          }
        } else {
          translatedCharCode = charCode; // Keep non-alphabetic characters unchanged
        }
        reversedTranslation += String.fromCharCode(translatedCharCode);
      }
      return reversedTranslation;
    }
