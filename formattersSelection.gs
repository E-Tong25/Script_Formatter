function formatSceneHeading(){
  var selection = DocumentApp.getActiveDocument().getSelection();

  //If text is not selected, a default "Scene Header" example will be inserted to the position of the cursor.
  if (!selection) {
    sceneHeaderInsert();
    return;
  }
  //App>Doc>Body>Paragraph>Text
  //selection>rangeElements>RangeElement>Element>Text
  var selection= DocumentApp.getActiveDocument().getSelection();
  if (selection){

    //declare variables once before loop
    var elements = selection.getRangeElements();
    var rngElement;
    var element;
    var text;
    var startOffset;
    var endOffsetInclusive;
    var formattedText;

    //loop through selection
    for (var i=0; i < elements.length; i++){
      rngElement = elements[i];
      element = rngElement.getElement();
      if (element) {
        text = element.asText();
        if (text) {
          try{
            //if we are on a 'partial element' we need to only grab the selected part of the text
            if (rngElement.isPartial()) {
              startOffset = rngElement.getStartOffset();
              endOffsetInclusive = rngElement.getEndOffsetInclusive();

              formattedText = text.setFontFamily(startOffset, endOffsetInclusive, 'Courier').setBold(startOffset, endOffsetInclusive, true);
            }
            else {
              formattedText = text.setFontFamily('Courier').setBold(true);

              //ATTEMPTING TO MAKE ATTRIBUTE TO CENTER

              formattedText.setAttributes(sceneHeadingStyle)
            }
          }
          catch(e){
            DocumentApp.getUi().alert("There was a problem: " +e.message);
          }
        }
        //UpperCase selected text with set styling
        toUpperCase();
        //TODO: NEED TO ADD IN PARAGRAPH BREAK AFTER SELECTION AND CENTER IT
      }
    }
  }
}
function formatAction(){
  //App>Doc>Body>Paragraph>Text
  //selection>rangeElements>RangeElement>Element>Text
  var selection =DocumentApp.getActiveDocument().getSelection();
  //If text is not selected, a default "Action" example will be inserted to the position of the cursor.
  if (!selection){
    actionInsert();
    return;
  }
  if (selection){
    //declare variables once before loop
    var elements = selection.getRangeElements();
    var rngElement;
    var element;
    var text;
    var startOffset;
    var endOffsetInclusive;

    //loop through selection
    for (var i=0; i < elements.length; i++){
      rngElement = elements[i];
      element = rngElement.getElement();
      if (element) {
        text = element.asText();
        if (text) {
          //if we are on a 'partial element' we need to only grab the selected part of the text
          if (rngElement.isPartial()) {
            startOffset = rngElement.getStartOffset();
            endOffsetInclusive = rngElement.getEndOffsetInclusive();
            formattedText = text.setFontFamily(startOffset, endOffsetInclusive, 'Courier').setBold(startOffset, endOffsetInclusive, false);
          } else {
            formattedText = text.setFontFamily('Courier').setBold(false);
          }
        }
      }
      //TODO: NEED TO ADD IN PARAGRAPH BREAK AFTER SELECTION AND CENTER IT
    }
  }
}
function formatCharacter(){
  var selection = DocumentApp.getActiveDocument().getSelection();
  //If text is not selected, a default "Character" example will be inserted to the position of the cursor.
  if (!selection){
    characterInsert();
    return;
  }
  //App>Doc>Body>Paragraph>Text
  //selection>rangeElements>RangeElement>Element>Text
  var selection= DocumentApp.getActiveDocument().getSelection();
  if (selection){

    //declare variables once before loop
    var elements = selection.getRangeElements();
    var rngElement;
    var element;
    var text;
    var startOffset;
    var endOffsetInclusive;
    var formattedText;

    //loop through selection
    for (var i=0; i < elements.length; i++){
      rngElement = elements[i];
      element = rngElement.getElement();
      if (element) {
        text = element.asText();
        if (text) {
          try{
            //if we are on a 'partial element' we need to only grab the selected part of the text
            if (rngElement.isPartial()) {
              startOffset = rngElement.getStartOffset();
              endOffsetInclusive = rngElement.getEndOffsetInclusive();

              formattedText = text.setFontFamily(startOffset, endOffsetInclusive, 'Courier').setBold(startOffset, endOffsetInclusive, false)
            }
            else {
              formattedText = text.setFontFamily('Courier').setBold(false);
            }
          }
          catch(e){
            DocumentApp.getUi().alert("There was a problem: "+e.message);
          }
        }
        //UpperCase selected text with set styling
        toUpperCase();
        //TODO: NEED TO ADD IN PARAGRAPH BREAK AFTER SELECTION AND CENTER IT
      }
    }
  }
}
function formatDialogue(){
  //App>Doc>Body>Paragraph>Text
  //selection>rangeElements>RangeElement>Element>Text
  var selection =DocumentApp.getActiveDocument().getSelection();
  //If text is not selected, a default "Dialogue" example will be inserted to the position of the cursor.
  if (!selection){
    dialogueInsert();
    return;
  }
  if (selection){
    //declare variables once before loop
    var elements = selection.getRangeElements();
    var rngElement;
    var element;
    var text;
    var startOffset;
    var endOffsetInclusive;

    //loop through selection
    for (var i=0; i < elements.length; i++){
      rngElement = elements[i];
      element = rngElement.getElement();
      if (element) {
        text = element.asParagraph();
        if (text) {
          //if we are on a 'partial element' we need to only grab the selected part of the text
          if (rngElement.isPartial()) {
            startOffset = rngElement.getStartOffset();
            endOffsetInclusive = rngElement.getEndOffsetInclusive();

            formattedText = text.setFontFamily(startOffset, endOffsetInclusive, 'Courier').setBold(startOffset, endOffsetInclusive, true)

            //NEEDS ALIGNMENT TO THE CENTER
          } else {
            text.setFontFamily('Courier').setBold(false);
            //NEEDS ALIGNMENT TO THE CENTER
          }
        }
      }
    }
  }
}
