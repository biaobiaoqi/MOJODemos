/**
 * Created by syapeng on 7/10/2014.
 */
var mstrConfig = mstrApp = {};

var labelFormatInfo = mstrmojo.insert({
    scriptClass: "mstrmojo.Model",
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
            style: 'dotted',
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

    }
});

oriLabel.render();

var w = mstrmojo.insert({
    scriptClass: "mstrmojo.VBox",
    placeholder: "topdiv",
    cssClass: "formatEditorBox",
    id: "formatEditor",
    children: [
        {
            scriptClass: "mstrmojo.Label",
            id: "customedLabel",
            text: 'Abc123',
            bindings: {
                cssText: function() {
                    Alert("binding is fired!");

                    var styleText = "font-family" + ":" + labelFormatInfo.font.name + ";";
                    styleText += "font-size" + ":" + labelFormatInfo.font.size + ";";
                    styleText += "color" + ":" + labelFormatInfo.font.color + ";";
                    if (labelFormatInfo.font.bold === true) {
                        styleText += "font-weight: bold;";
                    }
                    if (labelFormatInfo.font.italic === true) {
                        styleText += "font-style: italic;";
                    }
                    if (labelFormatInfo.font.underline === true) {
                        styleText += "text-decoration: underline;";
                    }

                    styleText += "border-style: " + labelFormatInfo.border.style + ";";
                    styleText += "border-width: " + labelFormatInfo.border.size + ";";
                    styleText += "border-color: " + labelFormatInfo.border.color + ";";

                    return styleText;
                }
                //TODO can not binds to textBox.value
//                text: function() {
//                    alert("ok");
//                    return mstrmojo.all.labelColor.value
//                }
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
                                            cssClass: "lists, inputBox",
                                            value: labelFormatInfo.font.size,
                                            id: "labelSize",
                                            items: [
                                                {sid: "0", val: "8px"},
                                                {sid: "1", val: "10px"},
                                                {sid: "2", val: "16px"},
                                                {sid: "3", val: "28px"}
                                            ],
                                            itemMarkupFunction: function (item, index, widget) {
                                                var styles = "font-size:" + item.val, s;
                                                s = '<div style=' + styles;
                                                if (widget.selectedItem === item) {
                                                    s += 'class = "selected"';
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
                                            onkeyup: function() {
                                                labelFormatInfo.font.set("color", this.value);
                                            }
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
                                            //TODO can bind one value to another value
//                                            bindings: {
//                                                value: 'mstrmojo.all.labelColor.value'
//                                            }
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
                var styleCssText = "color: " + labelFormatInfo.font.color
                    + "; font-size: " + labelFormatInfo.font.size
                    + "; font-family:" + labelFormatInfo.font.name
                    + "; border-style: " + labelFormatInfo.border.style
                    + "; border-width: " + labelFormatInfo.border.size
                    + "; border-color: " + labelFormatInfo.border.color;
                if (labelFormatInfo.font.bold === true) {
                    styleCssText += "font-weight: bold;";
                }
                if (labelFormatInfo.font.italic === true) {
                    styleCssText += "font-style: italic;";
                }
                if (labelFormatInfo.font.underline === true) {
                    styleCssText += "text-decoration: underline;";
                }

                mstrmojo.all.oriLabel.cssText = styleCssText;
                mstrmojo.all.oriLabel.render();

                mstrmojo.all.customedLabel.cssText = styleCssText;
                mstrmojo.all.customedLabel.render();
            }
        }
    ]
});
w.render();
