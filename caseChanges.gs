/**
 * Dispatcher functions to provide case-specific
 * callback functions to generic _changeCase().
 */
function toUpperCase() {
  _changeCase(_toUpperCase);
}

function toLowerCase() {
  _changeCase(_toLowerCase);
}

function toSentenceCase() {
  _changeCase(_toSentenceCase);
}

function toTitleCase() {
  _changeCase(_toTitleCase);
}

function toCamelCase() {
  _changeCase(_toCamelCase);
}

/**
 * Generic function to implement case change function in Google Docs.
 * In case of error, alert window is opened in Google Docs UI with an
 * explanation for the user. Exceptions are not caught, but pass through
 * to Google Doc UI.
 *
 * Caveat: formatting is lost, due to operation of replaceText().
 *
 * @parameter {function}  newCase  Callback function, reflects an input
 *                                 string after case change.
 */
function _changeCase(newCase) {
  newCase = newCase || _toUpperCase;
  var doc = DocumentApp.getActiveDocument();
  var selection = doc.getSelection();
  var ui = DocumentApp.getUi();
  var report = "";  // Assume success

  if (!selection) {
    report = "Select text to be modified.";
  }
  else {
    var elements = selection.getSelectedElements();
    if (elements.length > 1) {
      report = "Select text in one paragraph only.";
    }
    else {
      var element = elements[0].getElement();
      //Logger.log( element.getType() );
      var startOffset = elements[0].getStartOffset();      // -1 if whole element
      var endOffset = elements[0].getEndOffsetInclusive(); // -1 if whole element
      var elementText = element.asText().getText();       // All text from element
      // Is only part of the element selected?
      if (elements[0].isPartial())
        var selectedText = elementText.substring(startOffset,endOffset+1);
      else
        selectedText = elementText;

      // Google Doc UI "word selection" (double click)
      // selects trailing spaces - trim them
      selectedText = selectedText.trim();
      //endOffset = startOffset + selectedText.length - 1; // Not necessary w/ replaceText

      // Convert case of selected text.
      var convertedText = newCase(selectedText);
      var regexEscaped = selectedText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // http://stackoverflow.com/a/3561711/1677912
      element.replaceText(regexEscaped, convertedText);
    }
  }
  if (report !== '') ui.alert( report );
}

/**
 * Case change callbacks for customization of generic _changeCase().
 * Source credits as noted.
 */

function _toUpperCase(str) {
  return str.toUpperCase();
}

function _toLowerCase(str) {
  return str.toLowerCase();
}

// http://stackoverflow.com/a/196991/1677912
function _toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// http://stackoverflow.com/a/19089667/1677912
function _toSentenceCase (str) {
  var rg = /(^\s*\w{1}|\.\s*\w{1})/gi;
  return str.toLowerCase().replace(rg, function(toReplace) {
    return toReplace.toUpperCase();
  });
}

// http://stackoverflow.com/a/2970667/1677912
function _toCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

/**
 * Scan Google doc, applying fountain syntax rules.
 * Caveat: this is a partial implementation.
 *
 * Supported:
 *  Character names ahead of speech.
 *
 * Not supported:
 *  Everything else. See http://fountain.io/syntax
 */
function fountainLite() {
  // Private helper function; find text length of paragraph
  function paragraphLen( par ) {
    return par.asText().getText().length;
  }

  var doc = DocumentApp.getActiveDocument();
  var paragraphs = doc.getBody().getParagraphs();
  var numParagraphs = paragraphs.length;

  // Scan document
  for (var i=0; i<numParagraphs; i++) {

    /*
    ** Character names are in UPPERCASE.
    ** Dialogue comes right after Character.
    */
    if (paragraphLen(paragraphs[i]) > 0) {
      // This paragraph has text. If the preceeding one was blank and the following
      // one has text, then this paragraph might be a character name.
      if ((i==0 || paragraphLen(paragraphs[i-1]) == 0) && (i < numParagraphs && paragraphLen(paragraphs[i+1]) > 0)) {
        var paragraphText = paragraphs[i].asText().getText();
        // If no power-user overrides, convert Character to UPPERCASE
        if (paragraphText.charAt(0) != '!' && paragraphText.charAt(0) != '@') {
          var convertedText = _toUpperCase(paragraphText);
          var regexEscaped = paragraphText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // http://stackoverflow.com/a/3561711/1677912
          paragraphs[i].replaceText(regexEscaped, convertedText);
        }
      }
    }
  }
}
