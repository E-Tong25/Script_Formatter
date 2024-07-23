function sceneHeaderInsert() {
  var headerText = 'EXT. OVER THE RAINBOW — MORNING';
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var cursor = doc.getCursor().getElement();
  var cursorParent = cursor.getParent().getChildIndex(cursor);
  var headerStyle = {};

  // Attempt to insert text at the cursor position. If the insertion returns null, the cursor's
  // containing element doesn't allow insertions, so show the user an error message.
  if(cursor){
    headerStyle[DocumentApp.Attribute.BOLD] = true;
    headerStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Courier';
    headerStyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;

    try {
      var text = body.insertParagraph(cursorParent, headerText);
      text.setAttributes(headerStyle);
      //DocumentApp.getUi().alert(headerText +  ' has been inserted.');
    }
    catch (e) {
      DocumentApp.getUi().alert("There was a problem: " + e.message);
    }
  }
  else {
    DocumentApp.getUi().alert('Cannot find a cursor.');
  }
}
function actionInsert(){
  var actionText = 'WE PAN to Lila sitting on a floating bench, overlooking the world from high above the clouds and chimney  tops. We see birds fly past, and there is a peaceful silence in the air. Lila smiles and takes a deep breath.';
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var cursor = doc.getCursor().getElement();
  var cursorParent = cursor.getParent().getChildIndex(cursor);
  var actionStyle = {};

  // Attempt to insert text at the cursor position. If the insertion returns null, the cursor's
  // containing element doesn't allow insertions, so show the user an error message.
  if(cursor){
    actionStyle[DocumentApp.Attribute.BOLD] = false;
    actionStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Courier';
    actionStyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.LEFT;

    try {
      var text = body.insertParagraph(cursorParent, actionText);
      text.setAttributes(actionStyle);
    }
    catch (e) {
      DocumentApp.getUi().alert("There was a problem: " + e.message);
    }
  }
  else {
    DocumentApp.getUi().alert('Cannot find a cursor.');
  }
}
function characterInsert(){
  var characterText = 'LILA';
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var cursor = doc.getCursor().getElement();
  var cursorParent = cursor.getParent().getChildIndex(cursor);
  var characterStyle = {};

    // Attempt to insert text at the cursor position. If the insertion returns null, the cursor's
    // containing element doesn't allow insertions, so show the user an error message.
    if(cursor){
      characterStyle[DocumentApp.Attribute.BOLD] = false;
      characterStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Courier';
      // Dialogue block starts 2.5 inches from the left side of the page (240 px)
      //NOT WORKING PROPERLY=> dialogueStyle[DocumentApp.Attribute.INDENT_START] = 240.0;
      characterStyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;

      try {
        var text = body.insertParagraph(cursorParent, characterText);
        text.setAttributes(characterStyle);
      }
      catch (e) {
        DocumentApp.getUi().alert("There was a problem: " + e.message);
      }
    }
    else {
      DocumentApp.getUi().alert('Cannot find a cursor.');
    }
}
function dialogueInsert(){
  var dialogueText = 'What a beautiful day.';
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var cursor = doc.getCursor().getElement();
  var cursorParent = cursor.getParent().getChildIndex(cursor);
  var dialogueStyle = {};

  // Attempt to insert text at the cursor position. If the insertion returns null, the cursor's
  // containing element doesn't allow insertions, so show the user an error message.
  if(cursor){
    dialogueStyle[DocumentApp.Attribute.BOLD] = false;
    dialogueStyle[DocumentApp.Attribute.FONT_FAMILY] = 'Courier';
    //Dialogue block starts 2.5 inches from the left side of the page (240 px)
    //NOT WORKING PROPERLY=> dialogueStyle[DocumentApp.Attribute.INDENT_START] = 240.0;
    dialogueStyle[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;

    try {
      var text = body.insertParagraph(cursorParent, dialogueText);
      text.setAttributes(dialogueStyle);
    }
    catch (e) {
      DocumentApp.getUi().alert("There was a problem: " + e.message);
    }
  }
  else {
    DocumentApp.getUi().alert('Cannot find a cursor.');
  }
}
