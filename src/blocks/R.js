import * as Blockly from 'blockly';
import 'blockly/javascript';

// Define the string input block
Blockly.Blocks['string_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("text input")
        .appendField(new Blockly.FieldTextInput(""), "String");
    this.setOutput(true, "String");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Define the block to get the length of a string
Blockly.Blocks['string_length'] = {
  init: function() {
    this.appendValueInput("String")
        .setCheck("String")
        .appendField("length of");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setInputsInline(true);
  }
};



