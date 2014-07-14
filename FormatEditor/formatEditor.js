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
    children: [
        {
            scriptClass: "mstrmojo.Label",
            id: "customedLabel",
            text: 'Abc123',
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
                                            text: "Font:",
                                            cssText: "white-space: nowrap"
                                        },
                                        {
                                            scriptClass: "mstrmojo.List",
                                            width: "75px",
                                            id: "labelFont",
                                            items: [
                                                {did: 'Arial', n: 's'},
                                                {did: 'Tahoma', n: 'm'}
                                            ],
                                            itemField: "n"
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
                                            scriptClass: "mstrmojo.List",
                                            id: 'labelSize',
                                            width: "75px",
                                            items: [
                                                {key: '10px'},
                                                {key: '20px'}
                                            ],
                                            itemField: "key"
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
                                            scriptClass: "mstrmojo.List",
                                            id: 'labelColor',
                                            width: "75px",
                                            items: [
                                                {key: 'red'},
                                                {key: 'black'},
                                                {key: 'blue'},
                                                {key: 'yellow'}
                                            ],
                                            itemField: "key"
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
                                            value: 'abc',
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
            text: "Apply",
            onclick: function(evt) {

                labelFormatInfo.font.font = mstrmojo.all.labelFont.value;
                labelFormatInfo.font.size = mstrmojo.all.labelSize.value;
                labelFormatInfo.font.color = mstrmojo.all.labelColor.value;
                labelFormatInfo.font.bold = mstrmojo.all.labelBold.checked;
                labelFormatInfo.font.italic = mstrmojo.all.labelItalic.checked;
                labelFormatInfo.font.underline = mstrmojo.all.labelUnderline.checked;
                labelFormatInfo.border.style = mstrmojo.all.labelBorderStyle.value;
                labelFormatInfo.border.size = mstrmojo.all.labelBorderSize.value;
                labelFormatInfo.border.color = mstrmojo.all.labelBorderColor.value;

                mstrmojo.all.customedLabel.cssText = "color: " + labelFormatInfo.font.color
                    + "; font-size: " + labelFormatInfo.font.size
                    + "; font-family:" + labelFormatInfo.font.font
                    + "; bold: " + labelFormatInfo.font.bold
                    + "; italic: " + labelFormatInfo.font.italic
                    + "; underline: " + labelFormatInfo.font.underline
                    + "; border-style: " + labelFormatInfo.border.style
                    + "; border-width: " + labelFormatInfo.border.size
                    + "; border-color: " + labelFormatInfo.border.color;

                mstrmojo.all.customedLabel.render();
            }
        }
    ]
});

w.render();
