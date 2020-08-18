import * as Survey from "survey-react";
import $ from 'jquery';
window["$"] = window["jQuery"] = $;

$ = $ || window.$;
if (!$.fn.bootstrapDP && !!$.fn.datepicker && !!$.fn.datepicker.noConflict) {
  $.fn.bootstrapDP = $.fn.datepicker.noConflict();
  if (!$.fn.datepicker) {
    $.fn.datepicker = $.fn.bootstrapDP;
  }
}

var widget = {
    name: "bootstrapdatepicker",
    title: "Date picker",
    iconName: "icon-datepicker",
    widgetIsLoaded: function () {
        return !!$.fn.bootstrapDP;
    },
    isFit: function (question) {
        return question.getType() === "bootstrapdatepicker";
    },
    htmlTemplate: "<input class='form-control widget-datepicker sv-text' type='text'>",
    activatedByChanged: function (activatedBy) {
        Survey.JsonObject.metaData.addClass(
            "bootstrapdatepicker",
            [
                { name: "inputType", visible: false },
                { name: "inputFormat", visible: false },
                { name: "inputMask", visible: false }
            ],
            null,
            "text"
        );
        Survey.JsonObject.metaData.addProperty("bootstrapdatepicker", {
            name: "dateFormat"
        });
        Survey.JsonObject.metaData.addProperty("bootstrapdatepicker", {
            name: "startDate"
        });
        Survey.JsonObject.metaData.addProperty("bootstrapdatepicker", {
            name: "endDate"
        });
    },
    afterRender: function (question, el) {
        var $el = $(el).is(".widget-datepicker")
            ? $(el)
            : $(el).find(".widget-datepicker");

        var dateFormat = !!question.dateFormat ? question.dateFormat : "dd/mm/yyyy";
        console.log("bootstrapDP WIDGET -> Question options ", question.dateFormat, question.startDate, question.endDate);
        $el.attr('placeholder', dateFormat);
        $el.attr('onkeydown', 'return false');
        // Question title style same as text question
        $el.parents().eq(2).addClass('sv-row__question--small');

        // todayHighlight - boolean.
        var pickerWidget = $el.bootstrapDP({
            enableOnReadonly: false,
            format: dateFormat,
            autoclose: true,
            startDate: question.startDate,
            endDate: question.endDate,
        })
        // .on("changeDate", function (e) {
        //     question.value = moment(e.date).format("DD/MM/YYYY");
        //     // `e` here contains the extra attributes
        // })
        .on("change", function (e) {
            var newValue = pickerWidget.val();
            if(question.value != newValue) {
                question.value = newValue;
            }
        });

        question.valueChangedCallback = function () {
            pickerWidget.val(question.value);
            // $el.bootstrapDP('update', moment(question.value, "DD/MM/YYYY").toDate());
        }
        question.valueChangedCallback();
        question.readOnlyChangedCallback = function () {
            if (question.isReadOnly) {
                $el.prop('readonly', true);
            }
            else {
                $el.removeAttr('readonly');
            }
        }
        question.readOnlyChangedCallback();

    },
    willUnmount: function (question, el) {
        var $el = $(el).is(".widget-datepicker")
            ? $(el)
            : $(el).find(".widget-datepicker");
        $el.bootstrapDP("destroy");
        question.readOnlyChangedCallback = undefined;
        question.valueChangedCallback = undefined;
    },
    pdfQuestionType: "text"
};

Survey.CustomWidgetCollection.Instance.addCustomWidget(widget, "customtype");
