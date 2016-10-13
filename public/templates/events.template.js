(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['events'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!-- event -->\n<section class=\"section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp\">      \n  <header class=\"section__play-btn mdl-cell mdl-cell--4-col-desktop mdl-cell--3-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white\">\n    <!--<img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\">-->\n  </header>\n\n  <div class=\"mdl-card mdl-cell mdl-cell--8-col-desktop mdl-cell--5-col-tablet mdl-cell--4-col-phone\">\n    <div class=\"mdl-card__supporting-text\">\n      <h4>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n      <small class=\"md-card__supporting-text-subtitle\">\n        "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.shortDate || (depth0 != null ? depth0.shortDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shortDate","hash":{},"data":data}) : helper)))
    + "\n      </small>\n      "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + " \n    </div>\n    <div class=\"mdl-card__actions\">\n      <a href=\"#\" class=\"mdl-button\">Learn more</a>\n    </div>\n  </div>\n</section>";
},"useData":true});
})();