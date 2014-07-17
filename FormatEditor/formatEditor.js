/**
 * Created by syapeng on 7/10/2014.
 */
var mstrConfig = mstrApp = {};

var labelFormatInfo = mstrmojo.insert({
    scriptClass: "mstrmojo.Model",
    id: 'format',   //If you want bindings, id can not be ignored!
    children: [
        {
            scriptClass: 'mstrmojo.Obj',
            alias: 'font',
            name: 'Arial',
            size: "10px",
            color: 'black',
            bold: false,
            italic: false,
            underline: false
        },
        {
            scriptClass: 'mstrmojo.Obj',
            alias: 'border',
            style: 'none',
            size: '0px',
            color: 'black'
        }
    ]
});

var oriLabel = mstrmojo.insert({
    scriptClass: 'mstrmojo.Label',
    placeholder: 'labeldiv',
    id: 'oriLabel',
    text: 'click to change format',
    cssClass: 'mainText',
    onclick: function(evt) {
        mstrmojo.all.formatEditor.domNode.style.display="table";
    }
});

oriLabel.render();

var w = mstrmojo.insert({
    scriptClass: "mstrmojo.VBox",
    placeholder: "topdiv",
    cssClass: "formatEditorBox",
    id: "formatEditor",
    alias: "formatEditor",
    children: [
        {
            scriptClass: "mstrmojo.Label",
            id: "customedLabel",
            text: 'Abc123',
            bindings: {
                cssText: function() {
                    var styleText = "font-family" + ":" + mstrmojo.all.format.font.name + ";";
                    styleText += "font-size" + ":" + mstrmojo.all.format.font.size + ";";
                    styleText += "color" + ":" + mstrmojo.all.format.font.color + ";";
                    if (mstrmojo.all.format.font.bold === true) {
                        styleText += "font-weight: bold;";
                    }
                    if (mstrmojo.all.format.font.italic === true) {
                        styleText += "font-style: italic;";
                    }
                    if (mstrmojo.all.format.font.underline === true) {
                        styleText += "text-decoration: underline;";
                    }
                    styleText += "border-style: " + mstrmojo.all.format.border.style + ";";
                    styleText += "border-width: " + mstrmojo.all.format.border.size + ";";
                    styleText += "border-color: " + mstrmojo.all.format.border.color + ";";

                    return styleText;
                }
            }
        },
        {
            scriptClass: "mstrmojo.FieldSet",
            legend: "Font",
            children:
                [
                    {
                        scriptClass: "mstrmojo.HBox",
                        children:
                            [
                                {
                                    scriptClass: "mstrmojo.VBox",
                                    cssClass: "cell",
                                    children: [
                                        {
                                            scriptClass: "mstrmojo.Label",
                                            text: "Name:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.TextBox",
                                            id: "labelName",
                                            cssClass: "inputBox",
                                            value: labelFormatInfo.font.name,
                                            onkeyup: function() {
                                                labelFormatInfo.font.set("name", this.value);
                                            }
                                        }
                                    ]
                                },
                                {
                                    scriptClass: "mstrmojo.VBox",
                                    cssClass: "cell",
                                    children: [
                                        {
                                            scriptClass: "mstrmojo.Label",
                                            text: "Size:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.List",
                                            cssClass: "lists",
                                            value: labelFormatInfo.font.size,
                                            id: "labelSize",
                                            items: [
                                                {sid: "0", val: "10px"},
                                                {sid: "1", val: "12px"},
                                                {sid: "2", val: "15px"},
                                                {sid: "3", val: "19px"}
                                            ],
//                                        <div style="font-size:12px" class="selected">12px</div>
//                                        <div style="font-size:15pxclass" =="" "selected"="">15px</div>
                                            itemMarkupFunction: function (item, index, widget) {
                                                var styles = "font-size:" + item.val, s;
                                                s = '<div style=' + styles;
                                                if (widget.selectedItem === item) {
                                                    s += ' class="selected"';
                                                }
                                                s += ">" + item.val + '</div>';
                                                return s;
                                            },
                                            onchange: function(evt) {
                                                labelFormatInfo.font.set("size", this.selectedItem.val);
                                            }
                                        }
                                    ]
                                },
                                {
                                    scriptClass: "mstrmojo.VBox",
                                    cssClass: "cell",
                                    children: [
                                        {
                                            scriptClass: "mstrmojo.Label",
                                            text: "Color:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.TextBox",
                                            id: "labelColor",
                                            value: labelFormatInfo.font.color,
                                            cssClass: "inputBox",
                                            onblur: function() {
                                                labelFormatInfo.font.set("color", this.value);
                                            }
                                            /*onkeyup: function() {
                                                labelFormatInfo.font.set("color", this.value);
                                            }*/
                                        }
                                    ]
                                }
                            ]
                    },
                    {
                        scriptClass: "mstrmojo.VBox",
                        cssClass: "cell",
                        children:
                            [
                                {
                                    scriptClass: "mstrmojo.CheckBox",
                                    id: "labelBold",
                                    label: "Bold",
                                    checked: labelFormatInfo.font.bold,
                                    oncheckedChange: function() {
                                        labelFormatInfo.font.set("bold", this.checked);
                                    }
                                },
                                {
                                    scriptClass: "mstrmojo.CheckBox",
                                    id: "labelItalic",
                                    label: "Italic",
                                    checked: labelFormatInfo.font.italic,
                                    oncheckedChange: function() {
                                        labelFormatInfo.font.set("italic", this.checked);
                                    }
                                },
                                {
                                    scriptClass: "mstrmojo.CheckBox",
                                    id: "labelUnderline",
                                    label: "Underline",
                                    checked: labelFormatInfo.font.underline,
                                    oncheckedChange: function() {
                                        labelFormatInfo.font.set("underline", this.checked);
                                    }
                                }
                            ]
                    }
                ]
        },
        {
            scriptClass: "mstrmojo.FieldSet",
            legend: "Border",
            children:
                [
                    {
                        scriptClass: "mstrmojo.HBox",
                        children:
                            [
                                {
                                    scriptClass: "mstrmojo.VBox",
                                    cssClass: "cell",
                                    children: [
                                        {
                                            scriptClass: "mstrmojo.Label",
                                            text: "Style:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.TextBox",
                                            cssClass: "inputBox",
                                            id: "labelBorderStyle",
                                            value: labelFormatInfo.border.style,
                                            onkeyup: function() {
                                                labelFormatInfo.border.set("style", this.value);
                                            }
                                        }
                                    ]
                                },
                                {
                                    scriptClass: "mstrmojo.VBox",
                                    cssClass: "cell",
                                    children: [
                                        {
                                            scriptClass: "mstrmojo.Label",
                                            text: "Size:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.TextBox",
                                            id: 'labelBorderSize',
                                            cssClass: "inputBox",
                                            value: labelFormatInfo.border.size,
                                            onkeyup: function() {
                                                labelFormatInfo.border.set("size", this.value);
                                            }
                                        }
                                    ]
                                },
                                {
                                    scriptClass: "mstrmojo.VBox",
                                    cssClass: "cell",
                                    children: [
                                        {
                                            scriptClass: "mstrmojo.Label",
                                            text: "Color:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.TextBox",
                                            id: 'labelBorderColor',
                                            cssClass: "inputBox",
                                            value: labelFormatInfo.border.color,
                                            onkeyup: function() {
                                                labelFormatInfo.border.set("color", this.value);
                                            }
                                        }
                                    ]
                                }
                            ]
                    }
                ]
        },
        {
            scriptClass: "mstrmojo.Button",
            cssClass: "applyButton",
            text: "Apply",
            onclick: function(evt) {
                mstrmojo.all.oriLabel.cssText = mstrmojo.all.customedLabel.cssText;
                mstrmojo.all.oriLabel.render();

                //There is some bugs with VBox and its  table implementation.
                //Using display tag in style of dom node to hide the widget.
                mstrmojo.all.formatEditor.domNode.style.display="none";
            }
        }
    ]
});

w.render();
mstrmojo.all.formatEditor.domNode.style.display="none";
/*
* Questions Left:
* 3. How to make an item selected in mstrmojo.List at initial state. Also how to make checkbox checked through code.
* */
