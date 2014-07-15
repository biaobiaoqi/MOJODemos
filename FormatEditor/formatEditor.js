/**
 * Created by syapeng on 7/10/2014.
 */
var mstrConfig = mstrApp = {};
mstrmojo.requiresCls("mstrmojo.List");

var labelFormatInfo = mstrmojo.insert({
    scriptClass: "mstrmojo.Model",
    children: [
        {
            scriptClass: 'mstrmojo.Obj',
            alias: 'font',
            font: '',
            size: "10pt",
            color: 'red',
            bold: false,
            italic: false,
            underline: false
        },
        {
            scriptClass: 'mstrmojo.Obj',
            alias: 'border',
            style: 'dotted',
            size: '1pt',
            color: 'green'
        }
    ]
});

var w = mstrmojo.insert({
    scriptClass: "mstrmojo.VBox",
    placeholder: "topdiv",
    cssClass: "formatEditorBox",
    children: [
        {
            scriptClass: "mstrmojo.Label",
            id: "customedLabel",
            text: 'Abc123',
            bindings: { //It can not be fired when values changed.
                cssText: function() {
                    Alert("???");
                    var styleText = "font-family" + ":" + mstrmojo.all.labelName.value + ";";
                    styleText += "font-size" + ":" + mstrmojo.all.labelSize.value + ";";
                    styleText += "color" + ":" + mstrmojo.all.labelColor.value + ";";
                    if (mstrmojo.all.labelBold.checked === true) {
                        styleText += "font-weight" + ":" + "bold" + ";";
                    } else {
                        styleText += "font-weight" + ":" + "normal" + ";";
                    }

                    if (mstrmojo.all.labelItalic.checked === true) {
                        styleText += "font-style" + ":" + "italic" + ";";
                    } else {
                        styleText += "font-style" + ":" + "normal" + ";";
                    }

                    styleText += "border" + ":" + mstrmojo.all.labelBorderStyle.value + " " + mstrmojo.all.labelBorderSize.value + " " + mstrmojo.all.labelBorderColor.value;

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
                                    children: [
                                        {
                                            scriptClass: "mstrmojo.Label",
                                            text: "Name:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.TextBox",
                                            id: "labelName",
                                            width: "75px"
                                        }
                                    ]
                                },
                                {
                                    scriptClass: "mstrmojo.VBox",
                                    children: [
                                        {
                                            scriptClass: "mstrmojo.Label",
                                            text: "Size:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.TextBox",
                                            id: "labelSize",
                                            width: "75px"
                                        }
                                    ]
                                },
                                {
                                    scriptClass: "mstrmojo.VBox",
                                    children: [
                                        {
                                            scriptClass: "mstrmojo.Label",
                                            text: "Color:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.TextBox",
                                            id: "labelColor",
                                            width: "75px"
                                        }
                                    ]
                                }
                            ]
                    },
                    {
                        scriptClass: "mstrmojo.VBox",
                        children:
                            [
                                {
                                    scriptClass: "mstrmojo.CheckBox",
                                    id: "labelBold",
                                    label: "Bold"
                                },
                                {
                                    scriptClass: "mstrmojo.CheckBox",
                                    id: "labelItalic",
                                    label: "Italic"
                                },
                                {
                                    scriptClass: "mstrmojo.CheckBox",
                                    id: "labelUnderline",
                                    label: "Underline"
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
                                    children: [
                                        {
                                            scriptClass: "mstrmojo.Label",
                                            text: "Style:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.TextBox",
                                            width: "75px",
                                            id: "labelBorderStyle"
                                        }
                                    ]
                                },
                                {
                                    scriptClass: "mstrmojo.VBox",
                                    children: [
                                        {
                                            scriptClass: "mstrmojo.Label",
                                            text: "Size:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.TextBox",
                                            id: 'labelBorderSize',
                                            width: "75px"
                                        }
                                    ]
                                },
                                {
                                    scriptClass: "mstrmojo.VBox",
                                    children: [
                                        {
                                            scriptClass: "mstrmojo.Label",
                                            text: "Color:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.TextBox",
                                            id: 'labelBorderColor',
                                            width: "75px",
                                            onvalueChange: function(evt) {
                                                this.set('value', this.value);
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
                labelFormatInfo.font.name = mstrmojo.all.labelName.value;
                labelFormatInfo.font.size = mstrmojo.all.labelSize.value;
                labelFormatInfo.font.color = mstrmojo.all.labelColor.value;
                labelFormatInfo.font.bold = mstrmojo.all.labelBold.checked;
                labelFormatInfo.font.italic = mstrmojo.all.labelItalic.checked;
                labelFormatInfo.font.underline = mstrmojo.all.labelUnderline.checked;
                labelFormatInfo.border.style = mstrmojo.all.labelBorderStyle.value;
                labelFormatInfo.border.size = mstrmojo.all.labelBorderSize.value;
                labelFormatInfo.border.color = mstrmojo.all.labelBorderColor.value;

                var styleCssText = "color: " + labelFormatInfo.font.color
                    + "; font-size: " + labelFormatInfo.font.size
                    + "; font-family:" + labelFormatInfo.font.name
                    + "; bold: " + labelFormatInfo.font.bold
                    + "; italic: " + labelFormatInfo.font.italic
                    + "; underline: " + labelFormatInfo.font.underline
                    + "; border-style: " + labelFormatInfo.border.style
                    + "; border-width: " + labelFormatInfo.border.size
                    + "; border-color: " + labelFormatInfo.border.color;
                mstrmojo.all.customedLabel.cssText = styleCssText;
                mstrmojo.all.oriLabel.cssText = styleCssText;
                mstrmojo.all.customedLabel.render();

                w.visible = false;
                w.render();
                oriLabel.visible = true;
                oriLabel.render();
            }
        }
    ]
});

var oriLabel = mstrmojo.insert({
    scriptClass: 'mstrmojo.Label',
    placeholder: 'labeldiv',
    id: 'oriLabel',
    text: 'click to change format',
    onclick: function(evt) {
        oriLabel.visible = false;
        w.visible = true;
        w.render();
        oriLabel.render();
    }
});

w.visible = false;
oriLabel.render();
